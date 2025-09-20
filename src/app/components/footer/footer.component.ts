import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // Signaux pour la gestion d'état
  isContentVisible = signal(true);
  selectedCard = signal<number | null>(null);
  selectedLocation = signal<AddressItem | null>(null);

  // Adresses organisées par région
  locations: AddressItem[] = [
    {
      id: 1,
      city: "Siège Social - Niort",
      address: "4 boulevard Louis Tardy, 79000 Niort",
      phone: "+33645820697",
      displayPhone: "06 45 82 06 97",
      isHeadquarters: true,
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 2,
      city: "Aix-en-Provence",
      address: "67 Cours Mirabeau, 13100 Aix-en-Provence",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 16,
      city: "Ajaccio",
      address: "Route Sanguinaires, 20000 Ajaccio",
      phone: "06 45 82 06 97",
      displayPhone: "06 45 82 06 97",
      mapPosition: { x: 0, y: 0 }
    },

    {
      id: 17,
      city: "Bastia",
      address: "12 Quai des Martyrs de la Libération, 20200 Bastia",
      phone: "06 45 82 06 97",
      displayPhone: "06 45 82 06 97",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 10,
      city: "Biarritz",
      address: "Rue du Régina, 64200 Biarritz",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 15,
      city: "Bordeaux",
      address: "Rue François de Sourdis, 33000 Bordeaux",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 5,
      city: "Cannes",
      address: "29 Avenue des Hespérides, 06400 Cannes",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 12,
      city: "Le Havre",
      address: "333 Rue Félix Faure, 76620 Le Havre",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 14,
      city: "Le Vésinet",
      address: "Rue Pierre Curie, 78110 Le Vésinet",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 3,
      city: "Marseille",
      address: "8 Boulevard des Frères Godchot, 13005 Marseille",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 11,
      city: "Nantes",
      address: "5 Rue Le Nôtre, 44000 Nantes",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 4,
      city: "Nice",
      address: "ABC Sud Intelligence, 6 av Henri Barbusse, 06200 Nice",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 7,
      city: "Pierrevert",
      address: "L'Orée du Golf, 04860 Pierrevert",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 9,
      city: "Rennes",
      address: "63 Rue de Robien, 35000 Rennes",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 13,
      city: "Roquebrune-Cap-Martin",
      address: "Avenue Bellevue, 06190 Roquebrune-Cap-Martin",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 6,
      city: "Saint-Tropez",
      address: "Boulevard Louis Blanc, 83990 Saint-Tropez",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    },
    {
      id: 8,
      city: "Tours",
      address: "6 Rue Victor Laloux, 37000 Tours",
      phone: "06 07 25 74 27",
      displayPhone: "06 07 25 74 27",
      mapPosition: { x: 0, y: 0 }
    }
  ];

  // Méthodes utilisées
  toggleFooterContent(): void {
    this.isContentVisible.update(value => !value);
    this.selectedCard.set(null);
  }

  selectCard(index: number): void {
    this.selectedCard.set(this.selectedCard() === index ? null : index);
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

  trackByLocationId(index: number, location: AddressItem): number {
    return location.id;
  }

  getPhoneHref(phone: string): string {
    return 'tel:+33' + phone.replace(/\s/g, '');
  }
}