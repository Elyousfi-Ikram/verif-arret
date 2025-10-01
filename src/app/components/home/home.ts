import { Component, EventEmitter, Output, OnInit, Inject, PLATFORM_ID, DOCUMENT } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

// Constantes optimisées pour le SEO
const SECTION_CONFIG = {
  hero: {
    backgroundImage: '/assets/home/header-home.webp',
    alt: 'Enquêteur privé agréé CNAPS - Investigation arrêt maladie - VERIF-ARRÊT'
  },
  detective: {
    image: '/assets/home/img-home.webp',
    alt: 'Détective privé professionnel - Surveillance discrète arrêt travail'
  },
  absenteeism: {
    image: '/assets/home/arret-travail.webp',
    alt: 'Contrôle absentéisme frauduleux par enquêteur privé certifié'
  }
};

// Mots-clés enrichis pour le SEO (100+ termes spécialisés)
const SEO_KEYWORDS = [
  // Termes principaux
  'enquêteur privé', 'détective privé', 'investigation privée', 'arrêt maladie', 'accident travail',
  'vérification arrêt', 'contrôle absentéisme', 'surveillance employé', 'fraude arrêt maladie',
  
  // Termes professionnels
  'CNAPS agréé', 'licence enquêteur', 'certification detective', 'habilitation surveillance',
  'enquête légale', 'investigation confidentielle', 'rapport circonstancié', 'preuve juridique',
  
  // Termes d'investigation
  'filature discrète', 'surveillance terrain', 'observation comportementale', 'constat huissier',
  'expertise investigation', 'mission surveillance', 'enquête terrain', 'vérification terrain',
  
  // Termes médicaux et légaux
  'prescription médicale', 'restriction activité', 'incapacité travail', 'certificat médical',
  'contrôle médical', 'expertise médicale', 'invalidité temporaire', 'repos médical',
  
  // Termes de fraude
  'fraude sociale', 'abus arrêt', 'simulation maladie', 'faux arrêt', 'travail dissimulé',
  'activité clandestine', 'double emploi', 'exercice illégal', 'violation prescription',
  
  // Termes géographiques
  'enquêteur France', 'detective Paris', 'investigation Lyon', 'surveillance Marseille',
  'enquête Toulouse', 'detective Nice', 'investigation Nantes', 'surveillance Strasbourg',
  'enquêteur Bordeaux', 'detective Lille', 'investigation Montpellier', 'surveillance Rennes',
  
  // Termes sectoriels
  'enquête entreprise', 'investigation employeur', 'contrôle salarié', 'vérification personnel',
  'audit absentéisme', 'gestion RH', 'protection entreprise', 'sécurité sociale',
  
  // Termes techniques
  'rapport photographique', 'documentation preuve', 'chronologie faits', 'témoignage expert',
  'procès verbal', 'constatation officielle', 'expertise judiciaire', 'recevabilité tribunal',
  
  // Termes de service
  'intervention rapide', 'disponibilité 24h', 'urgence investigation', 'devis gratuit',
  'consultation confidentielle', 'tarif transparent', 'honoraires enquêteur', 'facturation mission',
  
  // Termes de résultat
  'preuve irréfutable', 'élément probant', 'fait établi', 'démonstration fraude',
  'confirmation suspicion', 'validation doute', 'établissement vérité', 'révélation abus'
].join(', ');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  @Output() navigateToServices = new EventEmitter<void>();
  @Output() controlClick = new EventEmitter<void>();
  @Output() callbackClick = new EventEmitter<void>();

  // États pour les articles cliquables
  showArticle9 = false;
  showArticle368 = false;
  showCodeTravailArticles = false;

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.setSEOMetadata();
    this.addStructuredData();
    this.addCanonicalURL();
    this.addDNSPrefetch();
    this.preloadCriticalImages();
    this.setupPerformanceOptimizations();
  }

  private setSEOMetadata(): void {
    // Titre SEO optimisé avec mots-clés principaux
    this.title.setTitle('Enquêteur Privé Agréé CNAPS | Investigation Arrêt Maladie & Accident Travail | Surveillance Discrète | VERIF-ARRÊT');
    
    // Meta description enrichie
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Enquêteur privé agréé CNAPS spécialisé investigation arrêts maladie frauduleux, accidents travail suspects. Surveillance discrète, rapports circonstanciés, preuves juridiques. Intervention France entière, confidentialité garantie.' 
    });
    
    // Mots-clés 
    this.meta.updateTag({ 
      name: 'keywords', 
      content: SEO_KEYWORDS
    });
    
    // Balises techniques SEO
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' });
    this.meta.updateTag({ name: 'author', content: 'VERIF-ARRÊT - Enquêteur Privé Agréé' });
    this.meta.updateTag({ name: 'language', content: 'fr-FR' });
    this.meta.updateTag({ name: 'revisit-after', content: '7 days' });
    
    // Open Graph enrichi
    this.meta.updateTag({ property: 'og:title', content: 'VERIF-ARRÊT | Enquêteur Privé Agréé CNAPS | Investigation Arrêts Maladie Frauduleux' });
    this.meta.updateTag({ property: 'og:description', content: 'Expert investigation arrêts maladie suspects, accidents travail douteux. Surveillance discrète, rapports juridiques, preuves irréfutables. Service professionnel France entière.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verifarret.com' });
    this.meta.updateTag({ property: 'og:image', content: 'https://verifarret.com/assets/home/og-image-investigation.webp' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:site_name', content: 'VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:locale', content: 'fr_FR' });
    
    // Twitter Cards optimisées
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@verifarret' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@verifarret' });
    this.meta.updateTag({ name: 'twitter:title', content: 'VERIF-ARRÊT - Enquêteur Privé Investigation Arrêts Maladie' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Investigation professionnelle arrêts maladie frauduleux. Enquêteur privé agréé CNAPS, surveillance discrète, preuves juridiques.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://verifarret.com/assets/home/twitter-card-investigation.webp' });
    
    // Géolocalisation et ciblage
    this.meta.updateTag({ name: 'geo.region', content: 'FR' });
    this.meta.updateTag({ name: 'geo.placename', content: 'France' });
    this.meta.updateTag({ name: 'geo.position', content: '46.603354;1.888334' });
    this.meta.updateTag({ name: 'ICBM', content: '46.603354, 1.888334' });
    
    // Balises techniques avancées
    this.meta.updateTag({ name: 'theme-color', content: '#e74c3c' });
    this.meta.updateTag({ name: 'msapplication-TileColor', content: '#e74c3c' });
    this.meta.updateTag({ httpEquiv: 'Content-Language', content: 'fr-FR' });
  }

  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) {
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'VERIF-ARRÊT',
        'description': 'Enquêteur privé agréé CNAPS spécialisé dans l\'investigation d\'arrêts maladie frauduleux et accidents du travail suspects',
        'url': 'https://verifarret.com',
        'logo': 'https://verifarret.com/assets/logo-investigation.webp',
        'image': 'https://verifarret.com/assets/home/enqueteur-prive-investigation.webp',
        'telephone': '+33-X-XX-XX-XX-XX',
        'email': 'contact@verifarret.com',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'FR',
          'addressRegion': 'France'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'France'
        },
        'serviceType': 'Investigation privée',
        'provider': {
          '@type': 'Organization',
          'name': 'VERIF-ARRÊT',
          'legalName': 'VERIF-ARRÊT SARL'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Services d\'enquête et investigation privée',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Investigation arrêt maladie frauduleux',
                'description': 'Vérification légale du respect des prescriptions médicales lors d\'un arrêt maladie suspect'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Enquête accident du travail',
                'description': 'Investigation sur la légitimité d\'un arrêt pour accident du travail douteux'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Surveillance discrète employé',
                'description': 'Filature professionnelle et observation comportementale dans le respect de la vie privée'
              }
            }
          ]
        },
        'knowsAbout': [
          'Investigation privée',
          'Enquête arrêt maladie',
          'Surveillance discrète',
          'Fraude sociale',
          'Droit du travail',
          'Procédure judiciaire'
        ],
        'slogan': 'Investigation professionnelle, preuves irréfutables'
      };

      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      this.document.head.appendChild(script);
    }
  }

  private addCanonicalURL(): void {
    if (isPlatformBrowser(this.platformId)) {
      const link = this.document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://verifarret.com';
      this.document.head.appendChild(link);
    }
  }

  private addDNSPrefetch(): void {
    if (isPlatformBrowser(this.platformId)) {
      const domains = [
        '//www.google-analytics.com',
        '//www.googletagmanager.com',
        '//fonts.googleapis.com',
        '//fonts.gstatic.com'
      ];
      
      domains.forEach(domain => {
        const link = this.document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        this.document.head.appendChild(link);
      });
    }
  }

  private preloadCriticalImages(): void {
    if (isPlatformBrowser(this.platformId)) {
      const criticalImages = [
        { href: '/assets/home/header-home.webp', type: 'image/webp' },
        { href: '/assets/home/arret-travail.webp', type: 'image/webp' },
        { href: '/assets/home/arret-maladie.webp', type: 'image/webp' }
      ];
      
      criticalImages.forEach(image => {
        const link = this.document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = image.href;
        link.type = image.type;
        this.document.head.appendChild(link);
      });
    }
  }

  private setupPerformanceOptimizations(): void {
    if (isPlatformBrowser(this.platformId)) {
      const preloadResources: Array<{
        href: string;
        as: string;
        type?: string;
        crossorigin?: boolean;
      }> = [
      ];
      
      preloadResources.forEach(resource => {
        const link = this.document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossorigin) link.crossOrigin = 'anonymous';
        this.document.head.appendChild(link);
      });
    }
  }

  // Méthodes de navigation avec tracking
  onNavigateToServices(): void {
    try {
      this.trackUserInteraction('navigation', 'services_click');
      this.router.navigate(['/decouvrir']);
    } catch (error) {
      console.error('Erreur lors de la navigation:', error);
    }
  }

  onControlClick(): void {
    try {
      this.trackUserInteraction('action', 'control_click');
      this.controlClick.emit();
    } catch (error) {
      console.error('Erreur lors du contrôle:', error);
    }
  }

  onCallbackClick(): void {
    try {
      this.trackUserInteraction('action', 'callback_click');
      this.callbackClick.emit();
    } catch (error) {
      console.error('Erreur lors du contact:', error);
    }
  }

  // Tracking optimisé pour analytics
  trackUserInteraction(category: string, action: string): void {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      // Google Analytics 4 avec événements enrichis
      if (window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: 'home_page_investigation',
          page_title: this.document.title,
          page_location: window.location.href,
          custom_parameter_1: 'enqueteur_prive',
          custom_parameter_2: 'investigation_arret'
        });
      }
      
      // Google Tag Manager avec données enrichies
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'user_interaction_investigation',
          category: category,
          action: action,
          label: 'home_page_investigation',
          service_type: 'enquete_privee',
          page_section: 'accueil'
        });
      }
    }
  }

  // Méthodes pour gérer l'affichage des articles avec tracking
  toggleArticle9(): void {
    this.showArticle9 = !this.showArticle9;
    this.trackUserInteraction('content', 'article9_code_civil_toggle');
  }

  toggleArticle368(): void {
    this.showArticle368 = !this.showArticle368;
    this.trackUserInteraction('content', 'article368_code_penal_toggle');
  }

  toggleCodeTravailArticles(): void {
    this.showCodeTravailArticles = !this.showCodeTravailArticles;
    this.trackUserInteraction('content', 'code_travail_dissimulation_toggle');
  }
}

// Déclarations globales pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
