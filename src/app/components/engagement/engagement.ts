import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SEO_KEYWORDS, getKeywordsByCategory } from '../../config/seo-keywords.config';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './engagement.html',
  styleUrls: ['./engagement.scss']
})
export class EngagementComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.setSEOMetadata();
    this.addReviewSchema();
  }

  private setSEOMetadata(): void {
    // Utilisation des mots-clés légaux et professionnels
    const legalKeywords = getKeywordsByCategory('legal');
    const professionalKeywords = getKeywordsByCategory('professional');
    
    // Titre avec aspects légaux
    this.title.setTitle(`Nos Engagements Déontologiques | ${professionalKeywords[0]} | VERIF-ARRÊT`);
    
    // Meta description avec légalité
    this.meta.updateTag({
      name: 'description',
      content: `Découvrez nos engagements déontologiques : ${legalKeywords[5]}, ${legalKeywords[0]}, professionnalisme. ${professionalKeywords[0]} respectant l'éthique et la vie privée.`
    });

    // SUPPRESSION des meta keywords
    
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ rel: 'canonical', href: 'https://verifarret.com/engagements' });
    
    // Open Graph spécifique aux engagements
    this.meta.updateTag({ property: 'og:title', content: 'Nos Engagements Déontologiques | VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:description', content: 'Confidentialité, légalité, professionnalisme : nos engagements d\'enquêteur privé agréé.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verifarret.com/engagements' });
  }

  private addReviewSchema(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Schema Review pour les témoignages clients
      const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "VERIF-ARRÊT Investigation"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Client Anonyme"
        },
        "reviewBody": "Service professionnel et discret. Rapport détaillé et utilisable juridiquement."
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(reviewSchema);
      document.head.appendChild(script);
    }
  }

  trackEngagementInteraction(engagement: string): void {
    if (isPlatformBrowser(this.platformId) && typeof gtag !== 'undefined') {
      gtag('event', 'engagement_view', {
        event_category: 'content',
        event_label: engagement
      });
    }
  }
}

declare let gtag: Function;