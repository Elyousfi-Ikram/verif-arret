export const SEO_KEYWORDS = {
  primary: [
    'contrôle arrêt maladie',
    'vérification arrêt travail', 
    'fraude arrêt maladie',
    'enquêteur privé CNAPS',
    'détective privé agréé',
    'investigation arrêt travail',
    'surveillance arrêt maladie'
  ],
  
  secondary: [
    'surveillance arrêt maladie',
    'détection fraude absentéisme',
    'investigation arrêt travail',
    'contrôle médical employeur',
    'vérification activité salarié',
    'enquête arrêt longue durée',
    'détective spécialisé santé',
    'contrôle arrêt psychiatrique',
    'vérification arrêt accident travail'
  ],
  
  longTail: [
    'comment contrôler un arrêt maladie frauduleux',
    'vérifier arrêt travail suspect employé',
    'enquêteur privé spécialisé arrêt maladie',
    'détective agréé CNAPS fraude absentéisme',
    'que faire en cas d arrêt maladie suspect',
    'comment détecter une fraude à l arrêt maladie',
    'surveillance discrète arrêt maladie employé',
    'contrôle légal arrêt travail par employeur',
    'enquêteur privé pour vérifier arrêt maladie',
    'investigation professionnelle arrêt travail suspect'
  ],
  
  geographic: [
    'contrôle arrêt maladie Paris',
    'enquêteur privé Lyon arrêt travail',
    'vérification fraude Marseille',
    'détective privé Toulouse arrêt maladie',
    'investigation arrêt travail Nice',
    'contrôle arrêt maladie Nantes',
    'enquêteur privé Strasbourg fraude',
    'vérification arrêt Montpellier',
    'détective Bordeaux arrêt travail',
    'investigation Lille arrêt maladie',
    'contrôle fraude Rennes',
    'enquêteur privé Reims arrêt',
    'vérification Le Havre arrêt travail',
    'détective Saint-Étienne fraude',
    'investigation Toulon arrêt maladie'
  ],
  
  professional: [
    'enquêteur privé agréé CNAPS',
    'détective professionnel certifié',
    'investigation légale arrêt maladie',
    'surveillance autorisée employé',
    'contrôle conforme RGPD',
    'enquête respectueuse vie privée',
    'investigation discrète professionnelle',
    'détective expérimenté arrêt travail',
    'enquêteur spécialisé fraude sociale',
    'investigation confidentielle arrêt',
    'contrôle éthique arrêt maladie',
    'surveillance légale salarié absent'
  ],
  
  services: [
    'rapport détaillé arrêt maladie',
    'preuve fraude arrêt travail',
    'filature discrète employé',
    'surveillance 24h arrêt maladie',
    'investigation express arrêt',
    'contrôle urgent arrêt travail',
    'enquête rapide fraude absentéisme',
    'vérification immédiate arrêt',
    'surveillance weekend arrêt maladie',
    'investigation nocturne arrêt travail',
    'contrôle vacances arrêt maladie',
    'enquête activité parallèle arrêt'
  ],
  
  legal: [
    'droit contrôle arrêt maladie',
    'légalité surveillance employé',
    'code travail arrêt maladie',
    'jurisprudence fraude arrêt',
    'procédure légale contrôle arrêt',
    'respect vie privée investigation',
    'cadre légal surveillance salarié',
    'droits employeur arrêt maladie',
    'obligations salarié arrêt travail',
    'preuve légale fraude arrêt',
    'recours juridique arrêt frauduleux',
    'sanctions fraude arrêt maladie'
  ],
  
  industry: [
    'fraude arrêt maladie entreprise',
    'absentéisme répété salarié',
    'coût fraude arrêt travail',
    'impact économique arrêt frauduleux',
    'prévention fraude absentéisme',
    'gestion arrêt maladie suspect',
    'politique entreprise arrêt travail',
    'contrôle interne arrêt maladie',
    'audit arrêt travail entreprise',
    'formation RH fraude arrêt',
    'sensibilisation fraude absentéisme',
    'statistiques fraude arrêt maladie'
  ],
  
  symptoms: [
    'arrêt maladie dépression suspect',
    'contrôle arrêt stress travail',
    'vérification arrêt burn out',
    'investigation arrêt mal de dos',
    'surveillance arrêt anxiété',
    'contrôle arrêt fatigue chronique',
    'enquête arrêt troubles musculaires',
    'vérification arrêt migraine',
    'investigation arrêt troubles digestifs',
    'contrôle arrêt insomnie'
  ],
  
  competitors: [
    'meilleur enquêteur privé arrêt',
    'détective privé pas cher arrêt',
    'enquêteur privé rapide arrêt',
    'investigation arrêt tarif',
    'prix contrôle arrêt maladie',
    'devis enquêteur privé arrêt',
    'comparatif détective privé',
    'enquêteur privé recommandé',
    'avis enquêteur privé arrêt',
    'témoignage investigation arrêt'
  ],
  
  urgency: [
    'enquêteur privé urgence arrêt',
    'investigation immédiate arrêt',
    'contrôle express arrêt maladie',
    'surveillance rapide employé',
    'enquête urgente fraude arrêt',
    'détective disponible maintenant',
    'investigation 24h arrêt travail',
    'contrôle weekend arrêt maladie',
    'enquêteur privé jour férié',
    'surveillance nuit arrêt travail'
  ]
};

// Fonction utilitaire pour obtenir tous les mots-clés
export function getAllKeywords(): string[] {
  return [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    ...SEO_KEYWORDS.longTail,
    ...SEO_KEYWORDS.geographic,
    ...SEO_KEYWORDS.professional,
    ...SEO_KEYWORDS.services,
    ...SEO_KEYWORDS.legal,
    ...SEO_KEYWORDS.industry,
    ...SEO_KEYWORDS.symptoms,
    ...SEO_KEYWORDS.competitors,
    ...SEO_KEYWORDS.urgency
  ];
}

// Fonction pour obtenir des mots-clés par catégorie
export function getKeywordsByCategory(category: keyof typeof SEO_KEYWORDS): string[] {
  return SEO_KEYWORDS[category] || [];
}

// Fonction pour recherche de mots-clés
export function searchKeywords(query: string): string[] {
  const allKeywords = getAllKeywords();
  return allKeywords.filter(keyword => 
    keyword.toLowerCase().includes(query.toLowerCase())
  );
}