import { Component, OnInit, Inject, PLATFORM_ID, DOCUMENT } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SEO_KEYWORDS, getKeywordsByCategory } from '../../config/seo-keywords.config';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslatePipe], // Ajouter TranslatePipe
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  showCodeTravailArticles = false;
  showArticle9 = false;
  showArticle368 = false;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    public translationService: TranslationService // Ajouter le service
  ) {}

  ngOnInit(): void {
    this.setSEOMetadata();
    this.addStructuredData();
    this.preloadCriticalResources();
    
    // Ajout de balises Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'VERIF-ARRÊT - Détectives privés spécialistes arrêts maladie' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Contrôle professionnel d\'arrêts maladie et accidents de travail par des enquêteurs agréés. Service confidentiel pour employeurs.' });
  }

  private setSEOMetadata(): void {
    // Utilisation des mots-clés configurés
    const primaryKeywords = getKeywordsByCategory('primary');
    const geoKeywords = getKeywordsByCategory('geographic');
    
    // Titre optimisé avec mots-clés principaux
    this.title.setTitle(`${primaryKeywords[0]} | ${primaryKeywords[3]} | VERIF-ARRÊT`);
    
    // Meta description avec rotation des mots-clés
    const keywordString = primaryKeywords.slice(0, 3).join(', ');
    this.meta.updateTag({
      name: 'description',
      content: `${keywordString}. Enquêteur privé agréé CNAPS spécialisé dans la vérification d'arrêts maladie. Surveillance légale, rapports détaillés, intervention 24h/7j partout en France. Devis gratuit.`
    });

    // SUPPRESSION TOTALE des meta keywords
    // Les meta keywords sont obsolètes depuis 2009 et peuvent pénaliser le référencement
    
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-snippet:-1' });
    this.meta.updateTag({ rel: 'canonical', href: 'https://verifarret.com' });
    
    // Open Graph optimisé
    this.meta.updateTag({ property: 'og:title', content: 'Enquêteur Privé Arrêt Maladie | VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:description', content: 'Vérification légale d\'arrêts maladie par enquêteur agréé CNAPS. Service professionnel partout en France.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verifarret.com' });
  }

  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) {
      // LocalBusiness Schema pour SEO local
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "VERIF-ARRÊT",
        "description": "Enquêteur privé agréé spécialisé vérification arrêts maladie",
        "url": "https://verifarret.com",
        "telephone": "+33645820697",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "37 Rue Saint Symphorien",
          "addressLocality": "Niort",
          "postalCode": "79000",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 46.3236,
          "longitude": -0.4594
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "€€",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        }
      };

      this.insertStructuredData(localBusinessSchema);
    }
  }

  private insertStructuredData(data: any): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  private preloadCriticalResources(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Préchargement conditionnel de l'image hero uniquement sur la page d'accueil
      const heroImageLink = this.document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.href = '/assets/home/header-home.webp';
      heroImageLink.as = 'image';
      heroImageLink.setAttribute('fetchpriority', 'high');
      this.document.head.appendChild(heroImageLink);

      // Préchargement des autres images critiques pour améliorer LCP
      const criticalImages = [
        '/assets/home/arret-travail.webp'
      ];

      criticalImages.forEach(src => {
        const link = this.document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        this.document.head.appendChild(link);
      });
    }
  }

  toggleCodeTravailArticles(): void {
    this.showCodeTravailArticles = !this.showCodeTravailArticles;
  }

  toggleArticle9(): void {
    this.showArticle9 = !this.showArticle9;
  }

  toggleArticle368(): void {
    this.showArticle368 = !this.showArticle368;
  }

  onNavigateToServices(): void {
    this.router.navigate(['/prestations']);
  }

  trackUserInteraction(action: string, label: string): void {
    if (isPlatformBrowser(this.platformId) && typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: 'engagement',
        event_label: label
      });
    }
  }
}

declare let gtag: Function;
