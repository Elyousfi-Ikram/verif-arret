import { Component, signal } from '@angular/core';
import { CallbackModalService } from '../../services/callback-modal.service';
import { ControlModalService } from '../../services/control-modal.service';
import { TranslationService, Language } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // État du menu mobile
  protected readonly isMobileMenuOpen = signal(false);
  
  constructor(
    private callbackModalService: CallbackModalService,
    private controlModalService: ControlModalService,
    public translationService: TranslationService
  ) {}

  // Gestionnaire pour le menu hamburger
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  // Gestionnaires pour les boutons d'action
  onCallbackClick(): void {
    this.callbackModalService.openModal();
  }

  onControlClick(): void {
    this.controlModalService.openModal();
  }
  
  // Gestionnaire pour le changement de langue
  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
  
  getCurrentLanguage(): Language {
    return this.translationService.getCurrentLanguage();
  }
}