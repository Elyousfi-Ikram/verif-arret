export interface CallbackEmailData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise: string;
  message?: string;
  creneauPrefere: string;
}

// Interface optimisée - suppression des champs inutilisés
export interface ControlEmailData {
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

export const EmailJSConfig = {
  serviceId: 'service_8fegsgj',
  publicKey: '_2Vv-V-TWVqz-O-Lf',
  templates: {
    callback: 'template_k6eflye',
    control: 'template_oq1s7vi'
  }
} as const;