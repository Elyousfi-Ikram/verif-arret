import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MenuConfig {
  title: string;
  navigable: boolean;
}

export interface NavigationItem {
  key: string;
  config: MenuConfig;
}

export type PageType = 'home' | 'prestations' | 'engagements' | 'decouvrir';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() currentPage: PageType = 'home';
  @Output() navigate = new EventEmitter<PageType>();

  // États des modales
  protected readonly isCallbackModalOpen = signal(false);
  protected readonly isControlModalOpen = signal(false);
  
  // État du menu mobile
  protected readonly isMobileMenuOpen = signal(false);

  // Configuration du menu
  protected readonly MENU_CONFIG: Record<string, MenuConfig> = Object.freeze({
    savoir: {
      title: 'DÉCOUVREZ-NOUS',
      navigable: true
    },
    prestations: {
      title: 'NOS SERVICES',
      navigable: true
    },
    verifarret: {
      title: 'NOS ENGAGEMENTS',
      navigable: true
    }
  });

  protected readonly NAVIGATION_ITEMS: NavigationItem[] = [
    { key: 'savoir', config: this.MENU_CONFIG['savoir'] },
    { key: 'prestations', config: this.MENU_CONFIG['prestations'] },
    { key: 'verifarret', config: this.MENU_CONFIG['verifarret'] }
  ];

  // Gestionnaires d'événements pour la navigation
  onNavClick(page: string, event?: Event): void {
    event?.preventDefault();
    
    const pageMapping: Record<string, PageType> = {
      'savoir': 'decouvrir',
      'prestations': 'prestations',
      'verifarret': 'engagements',
      'home': 'home'
    };
    
    const targetPage = pageMapping[page] || page as PageType;
    this.navigate.emit(targetPage);
    
    // Fermer le menu mobile après navigation
    this.closeMobileMenu();
  }

  onLogoClick(event: Event): void {
    event.preventDefault();
    this.onNavClick('home', event);
  }

  // Gestionnaires pour les modales
  onCallbackClick(): void {
    this.isCallbackModalOpen.set(true);
  }

  onCloseCallbackModal(): void {
    this.isCallbackModalOpen.set(false);
  }

  onControlClick(): void {
    this.isControlModalOpen.set(true);
  }

  onCloseControlModal(): void {
    this.isControlModalOpen.set(false);
  }

  // Gestionnaire pour le menu hamburger
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  // Gestionnaires pour la navigation au clavier
  onLogoKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onLogoClick(event);
    }
  }

  onNavKeyDown(event: KeyboardEvent, menuKey: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onNavClick(menuKey, event);
    }
  }

  // Méthodes utilitaires
  isNavItemActive(menuKey: string): boolean {
    const pageMapping: Record<string, PageType> = {
      'savoir': 'decouvrir',
      'prestations': 'prestations',
      'verifarret': 'engagements'
    };
    
    const mappedPage = pageMapping[menuKey];
    return this.currentPage === mappedPage;
  }

  getNavLinkClasses(menuKey: string, config: MenuConfig): string {
    const classes = ['nav-link'];
    if (this.isNavItemActive(menuKey)) classes.push('active');
    if (!config.navigable) classes.push('disabled');
    return classes.join(' ');
  }

  trackByKey(index: number, item: NavigationItem): string {
    return item.key;
  }
}