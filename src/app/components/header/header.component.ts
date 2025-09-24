import { Component, signal } from '@angular/core';
import { CallbackModalService } from '../../services/callback-modal.service';
import { ControlModalService } from '../../services/control-modal.service';

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

  constructor(
    private callbackModalService: CallbackModalService,
    private controlModalService: ControlModalService
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
}