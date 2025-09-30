import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decouvrir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decouvrir.html',
  styleUrls: ['./decouvrir.scss']
})
export class DecouvrirComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setSEOMetadata();
    this.preloadCriticalImages();
    this.addStructuredData();
  }

  private setSEOMetadata(): void {
    // Titre optimisé pour le SEO
    this.title.setTitle('À Propos | Olivier Lagarde - Enquêteur Privé Agréé CNAPS | 30 ans d\'expérience | VERIF-ARRÊT');
    
    // Meta descriptions et tags SEO enrichis
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Découvrez Olivier Lagarde, enquêteur privé agréé CNAPS avec 30 ans d\'expérience. Ancien des Forces Spéciales, fondateur de VERIF-ARRÊT, spécialisé en vérification d\'arrêts maladie, surveillance médicale et investigation privée en France.' 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'Olivier Lagarde, enquêteur privé, CNAPS, Forces Spéciales, investigation privée, VERIF-ARRÊT, 30 ans expérience, arrêt maladie, détective privé, agence investigation France, surveillance médicale, contrôle fraude sociale, filature discrète, expertise judiciaire, vérification arrêt travail, enquête administrative, surveillance discrète, investigation médicale, contrôle absentéisme, fraude assurance maladie, expertise contre-enquête, filature professionnelle, recherche preuves, constat huissier, témoignage surveillance, investigation employeur, contrôle médical, vérification incapacité, enquête fraude sociale, surveillance arrêt maladie, investigation CPAM, contrôle sécurité sociale, expertise médicale contradictoire, filature médicale, surveillance domicile, investigation activité professionnelle, contrôle congé maladie, vérification invalidité, enquête accident travail, surveillance longue maladie, investigation burn-out, contrôle dépression, vérification pathologie, enquête rechute médicale, surveillance rééducation, investigation thérapie, contrôle soins médicaux, vérification hospitalisation, enquête consultation médicale, surveillance kinésithérapie, investigation psychologue, contrôle psychiatre, vérification spécialiste, enquête radiologie, surveillance IRM scanner, investigation laboratoire analyse, contrôle ordonnance médicale, vérification prescription, enquête pharmacie, surveillance traitement médical, investigation chirurgie, contrôle opération, vérification convalescence, enquête rétablissement, surveillance guérison, investigation rechute, contrôle aggravation, vérification consolidation, enquête séquelle, surveillance handicap, investigation inaptitude, contrôle reclassement professionnel, vérification reprise travail, enquête temps partiel thérapeutique, surveillance mi-temps médical, investigation aménagement poste, contrôle médecine travail, vérification aptitude professionnelle, enquête risque professionnel, surveillance maladie professionnelle, investigation accident service, contrôle responsabilité employeur, vérification faute inexcusable, enquête préjudice moral, surveillance dommages intérêts, investigation indemnisation, contrôle pension invalidité, vérification rente accident, enquête capital décès, surveillance ayant droit, investigation succession, contrôle testament, vérification héritage' 
    });
    
    // Mots-clés géographiques
    this.meta.updateTag({ 
      name: 'geo-keywords', 
      content: 'Marseille, Nice, Cannes, Aix-en-Provence, Monaco, Ajaccio, Bastia, Nantes, Rennes, Tours, Le Havre, Biarritz, Reims, Manosque, Saint-Tropez, Provence-Alpes-Côte d\'Azur, Corse, Bretagne, Normandie' 
    });
    
    // Mots-clés médicaux spécialisés
    this.meta.updateTag({ 
      name: 'medical-keywords', 
      content: 'arrêt maladie, accident travail, surveillance médicale, contrôle pathologie, investigation médicale, fraude sociale, expertise médicale, surveillance thérapeutique, contrôle invalidité, vérification incapacité' 
    });
    
    // Mots-clés d'investigation
    this.meta.updateTag({ 
      name: 'investigation-keywords', 
      content: 'filature discrète, surveillance, enquête privée, preuve légale, investigation judiciaire, contre-enquête, expertise judiciaire, recherche de preuves, investigation financière, enquête prud\'homale' 
    });
    
    // Mots-clés professionnels
    this.meta.updateTag({ 
      name: 'professional-keywords', 
      content: 'enquêteur agréé, detective professionnel, agent recherche privé, investigation légale, déontologie enquêteur, confidentialité investigation, expertise surveillance, formation CNAPS' 
    });
    
    // Mots-clés de services
    this.meta.updateTag({ 
      name: 'service-keywords', 
      content: 'vérification arrêt travail, contrôle fraude assurance, surveillance discrète, filature médicale, investigation entreprise, enquête particulier, recherche personne, localisation débiteur' 
    });
    
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Olivier Lagarde - VERIF-ARRÊT' });
    this.meta.updateTag({ name: 'language', content: 'fr' });
    this.meta.updateTag({ name: 'revisit-after', content: '7 days' });
    
    // Canonical URL
    this.meta.updateTag({ rel: 'canonical', href: 'https://verif-arret.fr/decouvrir' });
    
    // Open Graph pour les réseaux sociaux
    this.meta.updateTag({ property: 'og:title', content: 'Olivier Lagarde - Enquêteur Privé Agréé CNAPS | VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:description', content: 'Découvrez le parcours d\'Olivier Lagarde, enquêteur privé avec 30 ans d\'expérience, ancien des Forces Spéciales, fondateur de VERIF-ARRÊT. Spécialiste en vérification d\'arrêts maladie et investigation privée.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verif-arret.fr/decouvrir' });
    this.meta.updateTag({ property: 'og:image', content: 'https://verif-arret.fr/assets/decouvrir/agent-decouvrir.jpeg' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:site_name', content: 'VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:locale', content: 'fr_FR' });
    
    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Olivier Lagarde - Enquêteur Privé Agréé CNAPS' });
    this.meta.updateTag({ name: 'twitter:description', content: '30 ans d\'expérience en investigation privée. Ancien des Forces Spéciales. Spécialiste vérification arrêts maladie.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://verif-arret.fr/assets/decouvrir/agent-decouvrir.jpeg' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@VerifArret' });
    
    // Géolocalisation
    this.meta.updateTag({ name: 'geo.region', content: 'FR' });
    this.meta.updateTag({ name: 'geo.placename', content: 'France' });
    this.meta.updateTag({ name: 'geo.position', content: '43.2965;5.3698' }); // Marseille
    this.meta.updateTag({ name: 'ICBM', content: '43.2965, 5.3698' });
    
    // Meta tags pour l'accessibilité et la performance
    this.meta.updateTag({ name: 'theme-color', content: '#e74c3c' });
    this.meta.updateTag({ name: 'msapplication-TileColor', content: '#e74c3c' });
    this.meta.updateTag({ name: 'apple-mobile-web-app-capable', content: 'yes' });
    this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' });
  }

  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "À propos d'Olivier Lagarde - Enquêteur Privé CNAPS",
        "description": "Découvrez le parcours et l'expertise d'Olivier Lagarde, enquêteur privé agréé CNAPS avec 30 ans d'expérience en investigation privée et vérification d'arrêts maladie.",
        "url": "https://verif-arret.fr/decouvrir",
        "mainEntity": {
          "@type": "Person",
          "name": "Olivier Lagarde",
          "jobTitle": "Enquêteur Privé Agréé CNAPS",
          "description": "Expert en investigation privée avec 30 ans d'expérience, spécialisé en vérification d'arrêts maladie et surveillance médicale",
          "worksFor": {
            "@type": "Organization",
            "name": "VERIF-ARRÊT",
            "description": "Société d'investigation spécialisée en vérification d'arrêts maladie",
            "areaServed": "France",
            "serviceType": ["Investigation privée", "Vérification arrêt maladie", "Surveillance médicale", "Contrôle fraude sociale"],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Service client",
              "areaServed": "FR",
              "availableLanguage": "French"
            }
          },
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "École Normill Paris",
              "description": "Diplôme d'enquêteur de Droit Privé - 1989"
            },
            {
              "@type": "Organization",
              "name": "Forces Spéciales Marine Nationale",
              "description": "Formation militaire d'élite - FUMACO Lorient - Commando de Penfentenyo"
            }
          ],
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "Agrément CNAPS",
            "description": "Autorisation d'exercer en tant qu'enquêteur privé",
            "credentialCategory": "Professional License"
          },
          "knowsAbout": ["Investigation privée", "Vérification arrêt maladie", "Surveillance médicale", "Filature discrète", "Enquête judiciaire", "Contrôle fraude sociale"]
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://verif-arret.fr"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Découvrir",
              "item": "https://verif-arret.fr/decouvrir"
            }
          ]
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  private preloadCriticalImages(): void {
    if (isPlatformBrowser(this.platformId)) {
      const criticalImages = [
        '/assets/decouvrir/header-decouvrir.jpeg',
        '/assets/decouvrir/agent-decouvrir.jpeg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }

  // Tracking pour analytics
  trackUserInteraction(category: string, action: string, label?: string): void {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label || 'decouvrir_page',
          page_title: document.title,
          page_location: window.location.href
        });
      }
      
      // Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'user_interaction',
          category: category,
          action: action,
          label: label || 'decouvrir_page'
        });
      }
    }
  }

  // Méthode pour naviguer vers la page de contact
  navigateToContact(): void {
    this.trackUserInteraction('navigation', 'contact_click', 'from_decouvrir');
    this.router.navigate(['/contact']);
  }

  // Méthode pour naviguer vers les services
  navigateToServices(): void {
    this.trackUserInteraction('navigation', 'services_click', 'from_decouvrir');
    this.router.navigate(['/services']);
  }

  // Gestion du scroll pour les animations - CORRECTION de l'erreur TS2554
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.decouvrir-hero') as HTMLElement;
      
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    }
  }
}

// Déclarations globales pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
