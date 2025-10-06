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
    this.setSEOMetadata();
    this.addReviewSchema();
  }

  private setSEOMetadata(): void {
    // Titre unique focalisé sur les engagements
    this.title.setTitle('Nos Engagements Déontologiques | Enquêteur Privé Agréé | VERIF-ARRÊT');

    // Meta description unique sur la déontologie
    this.meta.updateTag({
      name: 'description',
      content: 'Découvrez nos engagements déontologiques : confidentialité, légalité, professionnalisme. Enquêteur privé agréé CNAPS respectant l\'éthique et la vie privée.'
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