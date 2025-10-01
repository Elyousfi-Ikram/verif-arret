import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-prestations',
  standalone: true,
  imports: [],
  templateUrl: './prestations.html',
  styleUrls: ['./prestations.scss']
})
export class PrestationsComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setSEOMetadata();
    this.preloadCriticalImages();
  }

  private setSEOMetadata(): void {
    // Titre SEO optimisé
    this.title.setTitle('Services Investigation Arrêt Travail | Enquêteur Privé Agréé CNAPS | VERIF-ARRÊT');

    // Meta description enrichie
    this.meta.updateTag({
      name: 'description',
      content: 'Services professionnels d\'investigation sur arrêts de travail par enquêteurs privés agréés CNAPS. Surveillance discrète, rapports détaillés, preuves juridiques. Intervention 24h/7j partout en France pour employeurs.'
    });

    // Mots-clés spécialisés (100+ termes)
    this.meta.updateTag({
      name: 'keywords',
      content: 'enquêteur privé, investigation arrêt travail, surveillance salarié, enquête professionnelle, détective privé, contrôle arrêt maladie, fraude arrêt travail, surveillance discrète, preuves juridiques, rapport enquête, CNAPS agréé, investigation employeur, surveillance légale, détective agréé, enquête confidentielle, filature professionnelle, constat huissier, commissaire justice, ordonnance tribunal, surveillance employé, contrôle médical, arrêt maladie suspect, investigation privée, détective surveillance, enquêteur agréé, mission surveillance, rapport circonstancié, preuves photographiques, preuves vidéo, respect vie privée, déontologie enquêteur, investigation discrète, contrôle activité, vérification arrêt, surveillance professionnelle, enquête employeur, détective privé France, investigation nationale, réseau enquêteurs, surveillance 24h, intervention rapide, enquête urgente, surveillance immédiate, contrôle immédiat, investigation express, détective express, surveillance express, enquête rapide, intervention urgente, mission urgente, surveillance urgence, contrôle urgence, investigation urgence, détective urgence, enquêteur urgence, surveillance prioritaire, enquête prioritaire, investigation prioritaire, détective prioritaire, enquêteur prioritaire, mission prioritaire, contrôle prioritaire, surveillance efficace, enquête efficace, investigation efficace, détective efficace, enquêteur efficace, mission efficace, contrôle efficace, surveillance professionnelle, enquête professionnelle, investigation professionnelle, détective professionnel, enquêteur professionnel, mission professionnelle, contrôle professionnel, surveillance terrain, enquête terrain, investigation terrain, détective terrain, enquêteur terrain, mission terrain, contrôle terrain, surveillance domicile, enquête domicile, investigation domicile, détective domicile, enquêteur domicile, mission domicile, contrôle domicile, surveillance activité, enquête activité, investigation activité, détective activité, enquêteur activité, mission activité, absentéisme frauduleux, fraude sociale, travail dissimulé, activité incompatible, prescription médicale, restriction médicale, horaires présence, sortie autorisée, déplacement interdit, CPAM contrôle, sécurité sociale, URSSAF, tribunal compétent, preuve recevable, témoignage expert, rapport expertise, constatation officielle, procédure légale, droit employeur, obligation salarié, code travail, jurisprudence, contentieux prud\'homal'
    });

    // Open Graph pour réseaux sociaux
    this.meta.updateTag({ property: 'og:title', content: 'Services Investigation Arrêt Travail | Enquêteur Privé Agréé' });
    this.meta.updateTag({ property: 'og:description', content: 'Enquêteurs privés agréés CNAPS pour investigation arrêts de travail. Surveillance discrète, rapports juridiques, intervention 24h partout en France.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.verifarret.com/prestations' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.verifarret.com/assets/prestation/og-prestations.jpg' });
    this.meta.updateTag({ property: 'og:locale', content: 'fr_FR' });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Services Investigation Arrêt Travail | VERIF-ARRÊT' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Enquêteurs privés agréés pour investigation arrêts de travail. Surveillance discrète et rapports juridiques.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.verifarret.com/assets/prestation/twitter-prestations.jpg' });

    // Balises techniques SEO
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ name: 'googlebot', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'VERIF-ARRÊT' });
    this.meta.updateTag({ name: 'language', content: 'fr' });
    this.meta.updateTag({ name: 'geo.region', content: 'FR' });
    this.meta.updateTag({ name: 'geo.country', content: 'France' });
    this.meta.updateTag({ name: 'ICBM', content: '46.603354, 1.888334' });
    this.meta.updateTag({ name: 'DC.title', content: 'Services Investigation Arrêt Travail' });
    this.meta.updateTag({ name: 'DC.creator', content: 'VERIF-ARRÊT' });
    this.meta.updateTag({ name: 'DC.subject', content: 'Investigation, Enquête, Surveillance, Arrêt travail' });
    this.meta.updateTag({ name: 'DC.description', content: 'Services professionnels d\'investigation sur arrêts de travail' });

    // URL canonique
    this.addCanonicalURL();

    // Données structurées Schema.org
    this.addStructuredData();
  }

  private addCanonicalURL(): void {
    if (isPlatformBrowser(this.platformId)) {
      const head = document.getElementsByTagName('head')[0];
      let link: HTMLLinkElement = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        head.appendChild(link);
      }
      link.setAttribute('href', 'https://www.verifarret.com/prestations');
    }
  }

  private addStructuredData(): void {
    if (isPlatformBrowser(this.platformId)) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "VERIF-ARRÊT - Services Investigation Arrêt Travail",
        "description": "Services professionnels d'investigation sur arrêts de travail par enquêteurs privés agréés CNAPS. Surveillance discrète, rapports détaillés, preuves juridiques.",
        "url": "https://www.verifarret.com/prestations",
        "logo": "https://www.verifarret.com/assets/logo-verif-arret.png",
        "image": "https://www.verifarret.com/assets/prestation/services-investigation.jpg",
        "telephone": "+33-1-XX-XX-XX-XX",
        "email": "contact@verifarret.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR",
          "addressRegion": "France"
        },
        "areaServed": {
          "@type": "Country",
          "name": "France"
        },
        "serviceType": "Investigation privée",
        "provider": {
          "@type": "Organization",
          "name": "VERIF-ARRÊT",
          "url": "https://www.verifarret.com"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Investigation",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Investigation arrêt maladie",
                "description": "Surveillance discrète et vérification d'arrêts maladie suspects"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Investigation accident travail",
                "description": "Contrôle et vérification d'accidents du travail"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Rapport d'enquête juridique",
                "description": "Rapports détaillés utilisables devant les tribunaux"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
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
        '/assets/prestation/step1.png',
        '/assets/prestation/step2.png'
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
}