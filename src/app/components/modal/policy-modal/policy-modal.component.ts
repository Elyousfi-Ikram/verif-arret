import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyModalService } from '../../../services/policy-modal.service';
import { TranslationService } from '../../../services/translation.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-policy-modal',
  standalone: true,
  imports: [CommonModule, TranslatePipe],

  templateUrl: './policy-modal.component.html'
  // styleUrls supprimé - les styles sont maintenant dans modal.component.scss
})
export class PolicyModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private policyModalService: PolicyModalService, private translationService: TranslationService) { }


  onClose() {
    this.policyModalService.closeModal();
    this.closeModal.emit();
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}