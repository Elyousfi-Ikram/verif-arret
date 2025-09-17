import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // État du menu mobile
  protected readonly isMobileMenuOpen = signal(false);

  // Gestionnaire pour le menu hamburger
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  // Gestionnaires pour les boutons d'action
  onCallbackClick(): void {
    // Logique à implémenter
  }

  onControlClick(): void {
    // Logique à implémenter
  }
}