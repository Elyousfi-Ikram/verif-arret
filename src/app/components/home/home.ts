import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  // États pour les articles cliquables
  showArticle9 = false;
  showArticle368 = false;
  showCodeTravailArticles = false;

  constructor(private router: Router) { }

  // Méthodes de navigation
  onNavigateToServices(): void {
    try {
      this.router.navigate(['/decouvrir']);
    } catch (error) {
      console.error('Erreur lors de la navigation:', error);
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