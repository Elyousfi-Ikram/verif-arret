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
  }

  private setSEOMetadata(): void {
    // Titre optimisé pour le SEO
    this.title.setTitle('À Propos | Olivier Lagarde - Enquêteur Privé Agréé CNAPS | 30 ans d\'expérience | VERIF-ARRÊT');
    
    // Meta descriptions et tags SEO
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Découvrez Olivier Lagarde, enquêteur privé agréé CNAPS avec 30 ans d\'expérience. Ancien des Forces Spéciales, fondateur de VERIF-ARRÊT, spécialiste en vérification d\'arrêts maladie et investigation privée en France.' 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'Olivier Lagarde, enquêteur privé, CNAPS, Forces Spéciales, investigation privée, VERIF-ARRÊT, 30 ans expérience, arrêt maladie, détective privé, agence investigation France' 
    });
    
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Olivier Lagarde - VERIF-ARRÊT' });
    
    // Canonical URL
    this.meta.updateTag({ name: 'canonical', content: 'https://verif-arret.fr/decouvrir' });
    
    // Open Graph pour les réseaux sociaux
    this.meta.updateTag({ property: 'og:title', content: 'Olivier Lagarde - Enquêteur Privé Agréé CNAPS | VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:description', content: 'Découvrez le parcours d\'Olivier Lagarde, enquêteur privé avec 30 ans d\'expérience, ancien des Forces Spéciales, fondateur de VERIF-ARRÊT.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verif-arret.fr/decouvrir' });
    this.meta.updateTag({ property: 'og:image', content: 'https://verif-arret.fr/assets/decouvrir/og-image-decouvrir.webp' });
    
    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Olivier Lagarde - Enquêteur Privé Agréé CNAPS' });
    this.meta.updateTag({ name: 'twitter:description', content: '30 ans d\'expérience en investigation privée. Ancien des Forces Spéciales.' });
    
    // Géolocalisation
    this.meta.updateTag({ name: 'geo.region', content: 'FR' });
    this.meta.updateTag({ name: 'geo.placename', content: 'France' });
    
    // Données supplémentaires pour le SEO local
    this.meta.updateTag({ name: 'geo.position', content: '43.2965;5.3698' }); // Marseille
    this.meta.updateTag({ name: 'ICBM', content: '43.2965, 5.3698' });
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
}

// Déclarations globales pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}