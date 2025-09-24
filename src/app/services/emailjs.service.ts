import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EmailJSConfig, CallbackEmailData, ControlEmailData } from '../config/emailjs.config';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  constructor() {
    emailjs.init(EmailJSConfig.publicKey);
  }

  /**
   * Gestion centralisée des erreurs EmailJS
   */
  private handleEmailError(error: any): never {
    console.error('Erreur EmailJS détaillée:', error);
    
    if (error.status === 412) {
      throw new Error('❌ Erreur d\'authentification Gmail.\n🔧 Solution: Reconfigurez le service EmailJS avec tous les scopes.');
    }
    
    if (error.text?.includes('insufficient authentication scopes')) {
      throw new Error('❌ Permissions Gmail insuffisantes.\n🔧 Solution: Reconnectez le service dans EmailJS.');
    }
    
    if (error.status === 400) {
      throw new Error('❌ Données invalides.\n🔧 Solution: Vérifiez les paramètres du template.');
    }
    
    throw new Error('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
  }

  async sendCallbackRequest(data: CallbackEmailData): Promise<void> {
    try {
      const templateParams = {
        demandeur_nom: data.nom || '',
        demandeur_prenom: data.prenom || '',
        demandeur_email: data.email || '',
        demandeur_telephone: data.telephone || '',
        entreprise: data.entreprise || '',
        creneau_prefere: data.creneauPrefere || '',
        message: data.message || 'Aucun message spécifique',
        date_demande: new Date().toLocaleDateString('fr-FR'),
        // Ajout des variables manquantes pour le template
        from_email: data.email,
        phone: data.telephone
      };

      console.log('Envoi demande de rappel avec les paramètres:', templateParams);
      
      const result = await emailjs.send(
        EmailJSConfig.serviceId,
        EmailJSConfig.templates.callback,
        templateParams
      );

      console.log('Demande de rappel envoyée avec succès:', result.text);
    } catch (error) {
      this.handleEmailError(error);
    }
  }

  /**
   * Envoie une demande de contrôle
   */
  async sendControlRequest(data: ControlEmailData): Promise<void> {
    try {
      const templateParams = {
        demandeur_nom: data.nom || '',
        demandeur_prenom: data.prenom || '',
        demandeur_email: data.email || '',
        demandeur_telephone: data.telephone || '',
        entreprise: data.entreprise || '',
        poste_entreprise: data.posteEntreprise || '',
        salarie_nom: data.nomSalarie || '',
        salarie_prenom: data.prenomSalarie || '',
        salarie_poste: data.posteSalarie || '',
        salarie_adresse: data.adresseSalarie || '',
        salarie_ville: data.villeSalarie || '',
        salarie_code_postal: data.codePostalSalarie || '',
        type_arret: data.typeArret || '',
        date_debut: data.dateDebutArret || '',
        date_fin: data.dateFinArret || 'Non précisée',
        medecin: data.medecinPrescripteur || 'Non précisé',
        restrictions: data.restrictionsSorties || '',
        suspicions: data.suspicions || 'Aucune suspicion particulière',
        urgence: data.urgence || '',
        creneau: data.creneauPrefere || '',
        message: data.message || 'Aucun message complémentaire',
        date_demande: new Date().toLocaleDateString('fr-FR')
      };

      console.log('Envoi demande de contrôle avec les paramètres:', templateParams);
      
      const result = await emailjs.send(
        EmailJSConfig.serviceId,
        EmailJSConfig.templates.control,
        templateParams
      );

      console.log('Email envoyé avec succès:', result.text);
    } catch (error) {
      this.handleEmailError(error);
    }
  }
}