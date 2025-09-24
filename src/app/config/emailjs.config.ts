export interface CallbackEmailData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise: string;
  message?: string;
  creneauPrefere: string;
}

export interface ControlEmailData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise: string;
  posteEntreprise?: string;
  nomSalarie: string;
  prenomSalarie: string;
  posteSalarie?: string;
  typeArret: string;
  dateDebutArret: string;
  dateFinArret?: string;
  medecinPrescripteur?: string;
  restrictionsSorties: string;
  adresseSalarie: string;
  villeSalarie: string;
  codePostalSalarie: string;
  suspicions?: string;
  urgence: string;
  creneauPrefere: string;
  message?: string;
}

export const EmailJSConfig = {
  serviceId: 'service_edv70mk',
  publicKey: '_2Vv-V-TWVqz-O-Lf',
  templates: {
    callback: 'template_k6eflye',
    control: 'template_b3992o8'
  }
} as const;