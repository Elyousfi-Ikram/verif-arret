import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CallbackModalComponent } from '../modal/callback-modal/callback-modal.component';
import { SEO_KEYWORDS, getKeywordsByCategory } from '../../config/seo-keywords.config';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-decouvrir',
  standalone: true,
  imports: [CommonModule, CallbackModalComponent, TranslatePipe],
  templateUrl: './decouvrir.html',
  styleUrls: ['./decouvrir.scss']
})
export class DecouvrirComponent implements OnInit {
  isCallbackModalOpen = false;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.setSEOMetadata();
    this.addPersonSchema();
  }

  // Méthodes de navigation
  navigateToContact(): void {
    this.isCallbackModalOpen = true;
  }

  navigateToServices(): void {
    this.router.navigate(['/prestations']);
  }

  onCallbackModalClose(): void {
    this.isCallbackModalOpen = false;
  }

  private setSEOMetadata(): void {
    // Utilisation des mots-clés professionnels
    const professionalKeywords = getKeywordsByCategory('professional');
    const primaryKeywords = getKeywordsByCategory('primary');
    
    // Titre optimisé pour Olivier Lagarde avec mots-clés
    this.title.setTitle(`Olivier Lagarde | ${professionalKeywords[0]} | 30 ans d'expérience | VERIF-ARRÊT`);
    
    // Meta description avec mots-clés professionnels
    this.meta.updateTag({ 
      name: 'description', 
      content: `Découvrez Olivier Lagarde, ${professionalKeywords[0]} avec 30 ans d'expérience. Ancien des Forces Spéciales, fondateur de VERIF-ARRÊT, expert en ${primaryKeywords[2]}.` 
    });
    
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ rel: 'canonical', href: 'https://verifarret.com/decouvrir' });
    
    // Open Graph pour Olivier Lagarde
    this.meta.updateTag({ property: 'og:title', content: 'Olivier Lagarde - Enquêteur Privé Agréé CNAPS | VERIF-ARRÊT' });
    this.meta.updateTag({ property: 'og:description', content: 'Découvrez le parcours d\'Olivier Lagarde, enquêteur privé avec 30 ans d\'expérience, expert en investigation.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://verifarret.com/decouvrir' });
  }

  private addPersonSchema(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Person Schema pour Olivier Lagarde
      const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Olivier Lagarde",
        "jobTitle": "Enquêteur Privé Agréé CNAPS",
        "description": "Enquêteur privé avec 30 ans d'expérience, ancien des Forces Spéciales, fondateur de VERIF-ARRÊT",
        "url": "https://verifarret.com/decouvrir",
        "worksFor": {
          "@type": "Organization",
          "name": "VERIF-ARRÊT",
          "url": "https://verifarret.com"
        },
        "alumniOf": [
          "Forces Spéciales Marine Nationale",
          "École Normill Paris"
        ],
        "hasCredential": "Agrément CNAPS",
        "knowsAbout": [
          "Investigation privée",
          "Vérification arrêt maladie",
          "Surveillance discrète",
          "Enquête légale"
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(personSchema);
      document.head.appendChild(script);
    }
  }
}
