import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesModalService } from '../../../services/cookies-modal.service';
import { TranslationService } from '../../../services/translation.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-cookies-modal',
  standalone: true,
  imports: [CommonModule, TranslatePipe],

  templateUrl: './cookies-modal.component.html'
})
export class CookiesModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private cookiesModalService: CookiesModalService,
    private translationService: TranslationService
  ) {}

  onClose() {
    this.cookiesModalService.closeModal();
    this.closeModal.emit();
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}