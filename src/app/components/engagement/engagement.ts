import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [],
  templateUrl: './engagement.html',
  styleUrls: ['./engagement.scss']
})
export class EngagementComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
    this.addStructuredData();
    if (isPlatformBrowser(this.platformId)) {
      this.preloadCriticalImages();
      this.trackPageView();
    }
  }

  private setMetaTags(): void {
    // Titre optimisé
    this.title.setTitle('Nos Engagements - VERIF-ARRÊT | Enquêtes Légales sur Arrêts de Travail');
    
    // Meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Découvrez les engagements de VERIF-ARRÊT : enquêtes légales sur arrêts de travail, investigations professionnelles agréées CNAPS, confidentialité garantie et respect de la déontologie.'
    });
    
    // Mots-clés
    this.meta.updateTag({
      name: 'keywords',
      content: 'enquête arrêt travail, investigation professionnelle, agrément CNAPS, détective privé, absentéisme, fraude arrêt maladie, surveillance légale, rapport enquête'
    });
    
    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Nos Engagements - VERIF-ARRÊT | Enquêtes Légales sur Arrêts de Travail' });
    this.meta.updateTag({ property: 'og:description', content: 'Enquêtes légales sur arrêts de travail avec agrément CNAPS. Confidentialité, professionnalisme et respect de la déontologie garantis.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verifarret.com/engagement' });
    this.meta.updateTag({ property: 'og:image', content: 'https://verifarret.com/assets/engagements/hero-bg.jpeg' });
    this.meta.updateTag({ property: 'og:image:alt', content: 'Engagements VERIF-ARRÊT - Enquêtes professionnelles' });
    
    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Nos Engagements - VERIF-ARRÊT' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Enquêtes légales sur arrêts de travail avec agrément CNAPS' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://verifarret.com/assets/engagements/hero-bg.jpeg' });
    
    // Balises techniques
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'VERIF-ARRÊT' });
    this.meta.updateTag({ 'http-equiv': 'Content-Language', content: 'fr-FR' });
    this.meta.updateTag({ name: 'geo.region', content: 'FR' });
    this.meta.updateTag({ name: 'geo.placename', content: 'France' });
  }

  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "VERIF-ARRÊT",
        "description": "Service d'enquêtes légales sur les arrêts de travail avec agrément CNAPS",
        "url": "https://verifarret.com/engagement",
        "serviceType": "Investigation privée",
        "areaServed": {
          "@type": "Country",
          "name": "France"
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Agrément CNAPS",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Conseil National des Activités Privées de Sécurité"
          }
        },
        "offers": [
          {
            "@type": "Service",
            "name": "Enquête sur arrêt de travail",
            "description": "Investigation légale pour lutter contre l'absentéisme abusif"
          },
          {
            "@type": "Service",
            "name": "Surveillance professionnelle",
            "description": "Surveillance déontologique avec respect de la vie privée"
          },
          {
            "@type": "Service",
            "name": "Rapport d'enquête",
            "description": "Rapport détaillé utilisable en justice"
          }
        ],
        "mainEntity": {
          "@type": "ItemList",
          "name": "Nos Engagements",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Thing",
                "name": "Solutions contre la malveillance",
                "description": "Apporter des solutions dans la lutte contre toutes les formes de malveillances"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Thing",
                "name": "Tarification juste",
                "description": "Calculer les honoraires au juste prix en fonction des moyens engagés"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Thing",
                "name": "Contrat de mandat",
                "description": "Établir un contrat de mandat avant chaque début d'enquête"
              }
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
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/assets/engagements/hero-bg.jpeg';
    document.head.appendChild(link);
  }

  private trackPageView(): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Nos Engagements',
        page_location: window.location.href
      });
    }
  }

  trackEngagementInteraction(engagementType: string): void {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('event', 'engagement_interaction', {
          event_category: 'Engagement',
          event_label: engagementType,
          value: 1
        });
      }
      
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'engagement_view',
          engagement_type: engagementType,
          page_section: 'engagements'
        });
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