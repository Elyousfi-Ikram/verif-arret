import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Constantes pour éviter la re-création
const SECTION_CONFIG = {
  hero: {
    backgroundImage: '/assets/home/header-home.webp',
    alt: 'Header background'
  },
  detective: {
    image: '/assets/home/img-home.webp',
    alt: 'Enquêteur privé en action'
  },
  absenteeism: {
    image: '/assets/home/arret-travail.webp',
    alt: 'Arrêt de travail'
  }
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  @Output() navigateToServices = new EventEmitter<void>();
  @Output() controlClick = new EventEmitter<void>();
  @Output() callbackClick = new EventEmitter<void>();

  // États pour les articles cliquables
  showArticle9 = false;
  showArticle368 = false;
  showCodeTravailArticles = false;

  // Configuration des sections
  sectionConfig = SECTION_CONFIG;

  // Images
  imgHeader = '/assets/home/header-home.webp';
  imgHome = '/assets/home/img-home.webp';
  imgArret = '/assets/home/arret-travail.webp';
  arretMaladie = '/assets/home/arret-maladie.webp';

  constructor(private router: Router) {}

  // Méthodes de navigation
  onNavigateToServices(): void {
    try {
      // Navigation vers le composant decouvrir
      this.router.navigate(['/decouvrir']);
    } catch (error) {
      console.error('Erreur lors de la navigation:', error);
    }
  }

  onControlClick(): void {
    try {
      this.controlClick.emit();
    } catch (error) {
      console.error('Erreur lors du contrôle:', error);
    }
  }

  onCallbackClick(): void {
    try {
      this.callbackClick.emit();
    } catch (error) {
      console.error('Erreur lors du contact:', error);
    }
  }

  // Méthodes pour gérer l'affichage des articles
  toggleArticle9(): void {
    this.showArticle9 = !this.showArticle9;
  }

  toggleArticle368(): void {
    this.showArticle368 = !this.showArticle368;
  }

  toggleCodeTravailArticles(): void {
    this.showCodeTravailArticles = !this.showCodeTravailArticles;
  }
}