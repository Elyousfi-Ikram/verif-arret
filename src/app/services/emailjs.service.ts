import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EmailJSConfig, CallbackEmailData } from '../config/emailjs.config';

// Interface simplifiée pour les données de contrôle réellement utilisées
interface SimpleControlData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise: string;
  posteEntreprise?: string;
  posteSalarie?: string;
  typeArret: string;
  dateDebutArret: string;
  dateFinArret?: string;
  restrictionsSorties: string;
  villeSalarie: string;
  codePostalSalarie: string;
  suspicions?: string;
  message?: string;
}

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
        // Variables optimisées pour le template
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
   * Envoie une demande de contrôle (version optimisée)
   */
  async sendControlRequest(data: SimpleControlData): Promise<void> {
    try {
      const templateParams = {
        demandeur_nom: data.nom || '',
        demandeur_prenom: data.prenom || '',
        demandeur_email: data.email || '',
        demandeur_telephone: data.telephone || '',
        entreprise: data.entreprise || '',
        poste_entreprise: data.posteEntreprise || '',
        salarie_poste: data.posteSalarie || '',
        salarie_ville: data.villeSalarie || '',
        salarie_code_postal: data.codePostalSalarie || '',
        type_arret: data.typeArret || '',
        date_debut: data.dateDebutArret || '',
        date_fin: data.dateFinArret || 'Non précisée',
        restrictions: data.restrictionsSorties || '',
        suspicions: data.suspicions || 'Aucune suspicion particulière',
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