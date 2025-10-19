import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalModalService } from '../../../services/legal-modal.service';
import { TranslationService } from '../../../services/translation.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-legal-modal',
  standalone: true,
  imports: [CommonModule, TranslatePipe],

  templateUrl: './legal-modal.component.html'
})
export class LegalModalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private legalModalService: LegalModalService, private translationService: TranslationService) {}


  onClose() {
    this.legalModalService.closeModal();
    this.closeModal.emit();
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}