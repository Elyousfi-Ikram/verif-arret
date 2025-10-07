import { Component, signal, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ModalComponent } from '../modal/modal';
import { ReviewsModalService } from '../../services/reviews-modal.service';
import { Subscription } from 'rxjs';
import { LegalModalService } from '../../services/legal-modal.service';
import { PolicyModalService } from '../../services/policy-modal.service';
import { CookiesModalService } from '../../services/cookies-modal.service';

// Déclaration TypeScript pour gtag
declare let gtag: Function;

export interface AddressItem {
  id: number;
  city: string;
  address: string;
  phone: string;
  displayPhone: string;
  isHeadquarters?: boolean;
  mapPosition: { x: number; y: number };
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  averageRating = 0;

  private reviewsSubscription!: Subscription;

  // Signaux pour la gestion d'état
  isContentVisible = signal(true);
  selectedCard = signal<number | null>(null);
  selectedLocation = signal<AddressItem | null>(null);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private reviewsModalService: ReviewsModalService,
    private legalModalService: LegalModalService,
    private policyModalService: PolicyModalService,
    private cookiesModalService: CookiesModalService
  ) { }

  ngOnInit() {
    this.reviewsSubscription = this.reviewsModalService.reviews$.subscribe(() => {
      this.averageRating = this.reviewsModalService.getAverageRating();
    });
  }

  ngOnDestroy() {
    if (this.reviewsSubscription) {
      this.reviewsSubscription.unsubscribe();
    }
  }

  // Adresses organisées par région
  locations: AddressItem[] = [
    {
      id: 1,
      city: "Siège Social - Niort",
      address: "37 Rue Saint Symphorien, 79000 Niort",
      phone: "+33645820697",
      displayPhone: "06 45 82 06 97",
      isHeadquarters: true,
      mapPosition: { x: 36, y: 46 }
    },
    {
      id: 2,
      city: "Aix-en-Provence",
      address: "37 Rue Saint Symphorien, 79000 Niort",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 73.55, y: 72.55 }
    },
    {
      id: 16,
      city: "Ajaccio",
      address: "Route Sanguinaires, 20000 Ajaccio",
      phone: "06 45 82 06 97",
      displayPhone: "06 45 82 06 97",
      mapPosition: { x: 89.4, y: 85.2 }
    },
    {
      id: 17,
      city: "Bastia",
      address: "12 Quai des Martyrs de la Libération, 20200 Bastia",
      phone: "06 45 82 06 97",
      displayPhone: "06 45 82 06 97",
      mapPosition: { x: 93.5, y: 77.95 }
    },
    {
      id: 10,
      city: "Biarritz",
      address: "Rue du Régina, 64200 Biarritz",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 27.45, y: 72 }
    },
    {
      id: 15,
      city: "Bordeaux",
      address: "Rue François de Sourdis, 33000 Bordeaux",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 33, y: 61 }
    },
    {
      id: 5,
      city: "Cannes",
      address: "29 Avenue des Hespérides, 06400 Cannes",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 81.4, y: 72.7 }
    },
    {
      id: 12,
      city: "Le Havre",
      address: "333 Rue Félix Faure, 76620 Le Havre",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 39, y: 19.6 }
    },
    {
      id: 14,
      city: "Le Vésinet",
      address: "Rue Pierre Curie, 78110 Le Vésinet",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 50.85, y: 24.95 }
    },
    {
      id: 3,
      city: "Marseille",
      address: "8 Boulevard des Frères Godchot, 13005 Marseille",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 72, y: 75.15 }
    },
    {
      id: 11,
      city: "Nantes",
      address: "5 Rue Le Nôtre, 44000 Nantes",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 29.05, y: 39.7 }
    },
    {
      id: 4,
      city: "Nice",
      address: "ABC Sud Intelligence, 6 av Henri Barbusse, 06200 Nice",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 83.4, y: 70.7 }
    },
    {
      id: 7,
      city: "Pierrevert",
      address: "L'Orée du Golf, 04860 Pierrevert",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 76, y: 70 }
    },
    {
      id: 18,
      city: "Reims",
      address: "32 Boulevard de la Paix, 51100 Reims",
      phone: "+33607257427",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 62.45, y: 21.55 }
    },
    {
      id: 9,
      city: "Rennes",
      address: "63 Rue de Robien, 35000 Rennes",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 27, y: 30.9 }
    },
    {
      id: 13,
      city: "Roquebrune-Cap-Martin",
      address: "Avenue Bellevue, 06190 Roquebrune-Cap-Martin",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 85, y: 69 }
    },
    {
      id: 6,
      city: "Saint-Tropez",
      address: "Boulevard Louis Blanc, 83990 Saint-Tropez",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 79, y: 74.5 }
    },
    {
      id: 8,
      city: "Tours",
      address: "6 Rue Victor Laloux, 37000 Tours",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 43.4, y: 36.9 }
    }
  ];

  // Méthodes de navigation et interaction
  toggleFooterContent(): void {
    this.isContentVisible.update(value => !value);
    this.selectedCard.set(null);
  }

  selectCard(index: number): void {
    this.selectedCard.set(this.selectedCard() === index ? null : index);
  }

  private trackEvent(action: string, category: string, label: string): void {
    if (isPlatformBrowser(this.platformId) && typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  }

  handlePointClick(location: AddressItem): void {
    this.selectedLocation.set(location);
    const locationIndex = this.locations.findIndex(loc => loc.id === location.id);
    if (locationIndex !== -1) {
      this.selectedCard.set(locationIndex);
    }

    const locationCard = document.getElementById(`location-${location.id}`);
    if (locationCard) {
      locationCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Méthodes utilitaires
  trackByLocationId(index: number, location: AddressItem): number {
    return location.id;
  }

  getPhoneHref(phone: string): string {
    return 'tel:+33' + phone.replace(/\s/g, '');
  }

  // Méthodes pour les avis
  openReviewsModal(): void {
    this.reviewsModalService.openModal();
    this.trackEvent('reviews_modal', 'engagement', 'footer_reviews_click');
  }

  getFormattedRating(): string {
    return this.averageRating.toFixed(2);
  }

  getStarStyle(starIndex: number, rating: number): any {
    const fillPercentage = this.getStarFillPercentage(starIndex, rating);
    const primaryColor = '#fff';
    const lightColor = 'rgba(255, 255, 255, 0.25)';

    if (fillPercentage === 100) {
      return { 'color': primaryColor, 'font-weight': 'bold' };
    } else if (fillPercentage === 0) {
      return { 'color': lightColor, 'opacity': '0.6' };
    } else {
      return {
        'background': `linear-gradient(90deg, ${primaryColor} ${fillPercentage}%, ${lightColor} ${fillPercentage}%)`,
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      };
    }
  }

  getStarFillPercentage(starIndex: number, rating: number): number {
    const starPosition = starIndex + 1;
    if (rating >= starPosition) return 100;
    if (rating <= starPosition - 1) return 0;
    return Math.round((rating - (starPosition - 1)) * 100);
  }

  onLegalClick(section: string): void {
    switch (section) {
      case 'mentions':
        this.legalModalService.openModal();
        break;
      case 'confidentialite':
        this.policyModalService.openModal();
        break;
      case 'cookies':
        this.cookiesModalService.openModal();
        break;
      default:
        console.warn('Section non reconnue:', section);
    }
  }
}