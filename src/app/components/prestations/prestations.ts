import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { SEO_KEYWORDS, getKeywordsByCategory } from '../../config/seo-keywords.config';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [TranslatePipe],

  templateUrl: './prestations.html',
  styleUrls: ['./prestations.scss']
})
export class PrestationsComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translationService: TranslationService
  ) { }

  ngOnInit(): void {
    this.setSEOMetadata();
    this.addLocalSEOData();
  }

  private setSEOMetadata(): void {
    // Utilisation des mots-clés services et professionnels
    const serviceKeywords = getKeywordsByCategory('services');
    const professionalKeywords = getKeywordsByCategory('professional');
    const geoKeywords = getKeywordsByCategory('geographic');

    // Titre avec mots-clés services
    this.title.setTitle(`${serviceKeywords[0]} | ${professionalKeywords[0]} | VERIF-ARRÊT`);

    // Meta description avec services
    this.meta.updateTag({
      name: 'description',
      content: `${serviceKeywords.slice(0, 3).join(', ')}. Enquêteurs privés agréés CNAPS, surveillance discrète, rapports détaillés. Intervention 24h/7j partout en France.`
    });

    // SUPPRESSION des meta keywords (obsolètes)

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ rel: 'canonical', href: 'https://verifarret.com/prestations' });

    // Open Graph spécifique aux services
    this.meta.updateTag({ property: 'og:title', content: 'Services Investigation Arrêt Travail | VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:description', content: 'Enquêteurs privés agréés pour vérification d\'arrêts maladie. Service professionnel partout en France.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verifarret.com/prestations' });
  }

  private addLocalSEOData(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Service Schema pour chaque région
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Vérification Arrêt Maladie",
        "description": "Service professionnel de vérification d'arrêts maladie par enquêteur privé agréé",
        "provider": {
          "@type": "Organization",
          "name": "VERIF-ARRÊT",
          "url": "https://verifarret.com"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Marseille",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Bouches-du-Rhône"
            }
          },
          {
            "@type": "City",
            "name": "Nice",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Alpes-Maritimes"
            }
          },
          {
            "@type": "City",
            "name": "Lyon",
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Rhône"
            }
          }
        ],
        "offers": {
          "@type": "Offer",
          "description": "Devis gratuit pour investigation arrêt maladie",
          "priceRange": "€€"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(serviceSchema);
      document.head.appendChild(script);
    }
  }
}