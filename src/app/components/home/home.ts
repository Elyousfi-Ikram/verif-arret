import { Component, EventEmitter, Output, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

// Constantes pour éviter la re-création
const SECTION_CONFIG = {
  hero: {
    backgroundImage: '/assets/home/header-home.webp',
    alt: 'Enquêteur privé agréé CNAPS - VERIF-ARRÊT'
  },
  detective: {
    image: '/assets/home/img-home.webp',
    alt: 'Enquêteur privé en action - Vérification arrêt maladie'
  },
  absenteeism: {
    image: '/assets/home/arret-travail.webp',
    alt: 'Contrôle arrêt de travail par enquêteur privé'
  }
};

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

  // Configuration des sections
  sectionConfig = SECTION_CONFIG;

  // Images avec optimisation SEO
  imgHeader = '/assets/home/header-home.webp';
  imgHome = '/assets/home/img-home.webp';
  imgArret = '/assets/home/arret-travail.webp';
  arretMaladie = '/assets/home/arret-maladie.webp';

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setSEOMetadata();
    this.preloadCriticalImages();
  }

  private setSEOMetadata(): void {
    // Titre optimisé pour le SEO
    this.title.setTitle('Enquêteur Privé Agréé | Vérification Arrêt Maladie & Accident Travail | VERIF-ARRÊT');
    
    // Meta descriptions et tags SEO
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Enquêteur privé agréé CNAPS spécialisé dans la vérification légale d\'arrêts maladie et accidents du travail. Investigation discrète et confidentielle partout en France.' 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'enquêteur privé, arrêt maladie, accident travail, investigation, CNAPS, contrôle arrêt, fraude arrêt maladie, détective privé, surveillance employé' 
    });
    
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'VERIF-ARRÊT' });
    
    // Open Graph pour les réseaux sociaux
    this.meta.updateTag({ property: 'og:title', content: 'VERIF-ARRÊT - Enquêteur Privé Agréé pour Vérification d\'Arrêts' });
    this.meta.updateTag({ property: 'og:description', content: 'Service professionnel de vérification d\'arrêts maladie et accidents du travail par enquêteur privé agréé CNAPS.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verifarret.com' });
    this.meta.updateTag({ property: 'og:image', content: 'https://verifarret.com/assets/home/og-image.webp' });
    
    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'VERIF-ARRÊT - Enquêteur Privé Agréé' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Vérification professionnelle d\'arrêts maladie et accidents du travail.' });
    
    // Géolocalisation
    this.meta.updateTag({ name: 'geo.region', content: 'FR' });
    this.meta.updateTag({ name: 'geo.placename', content: 'France' });
  }

  private preloadCriticalImages(): void {
    if (isPlatformBrowser(this.platformId)) {
      const criticalImages = [
        '/assets/home/header-home.webp',
        '/assets/home/arret-travail.webp'
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

  // Tracking pour analytics
  trackUserInteraction(category: string, action: string): void {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: 'home_page',
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
          label: 'home_page'
        });
      }
    }
  }

  // Méthodes pour gérer l'affichage des articles
  toggleArticle9(): void {
    this.showArticle9 = !this.showArticle9;
    this.trackUserInteraction('content', 'article9_toggle');
  }

  toggleArticle368(): void {
    this.showArticle368 = !this.showArticle368;
    this.trackUserInteraction('content', 'article368_toggle');
  }

  toggleCodeTravailArticles(): void {
    this.showCodeTravailArticles = !this.showCodeTravailArticles;
    this.trackUserInteraction('content', 'code_travail_toggle');
  }
}

// Déclarations globales pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}