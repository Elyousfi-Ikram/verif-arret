import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailjsService } from '../../../services/emailjs.service';
import { CallbackEmailData } from '../../../config/emailjs.config';

interface FormData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise: string;
  message: string;
  creneauPrefere: string;
}

@Component({
  selector: 'app-callback-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './callback-modal.component.html',
  styleUrls: ['../modal.scss']
})
export class CallbackModalComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  callbackForm!: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  submitError = '';

  creneauOptions = [
    { value: 'matin', label: 'Matin (9h-12h)' },
    { value: 'apres-midi', label: 'Après-midi (14h-17h)' },
    { value: 'soir', label: 'Fin de journée (17h-19h)' },
    { value: 'indifferent', label: 'Indifférent' }
  ];

  private keydownListener?: (event: KeyboardEvent) => void;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private emailjsService: EmailjsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.setupKeyboardListener();
  }

  ngOnDestroy() {
    this.removeKeyboardListener();
    document.body.style.overflow = 'unset';
  }

  private initForm() {
    this.callbackForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      telephone: ['', [Validators.required, this.phoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      entreprise: ['', [Validators.required, Validators.minLength(2)]],
      message: [''],
      creneauPrefere: ['matin', Validators.required]
    });
  }

  private phoneValidator(control: AbstractControl): {[key: string]: any} | null {
    if (!control.value) return null;
    
    const phoneNumbers = control.value.replace(/\s/g, '');
    if (phoneNumbers.length < 10 || !/^[0-9]{10}$/.test(phoneNumbers)) {
      return { 'invalidPhone': true };
    }
    return null;
  }

  private setupKeyboardListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.keydownListener = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.isOpen) {
          this.onClose();
        }
      };
      document.addEventListener('keydown', this.keydownListener);
    }
  }

  private removeKeyboardListener() {
    if (isPlatformBrowser(this.platformId) && this.keydownListener) {
      document.removeEventListener('keydown', this.keydownListener);
    }
  }

  onModalStateChange() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      this.resetForm();
    }
  }

  private resetForm() {
    this.callbackForm.reset({
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      entreprise: '',
      message: '',
      creneauPrefere: 'matin'
    });
    this.isSubmitted = false;
    this.submitError = '';
  }

  formatPhoneNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const numbers = value.replace(/\D/g, '');
    const limitedNumbers = numbers.slice(0, 10);
    const formatted = limitedNumbers.replace(/(\d{2})(?=\d)/g, '$1 ');
    
    this.callbackForm.patchValue({ telephone: formatted });
  }

  get isFormValid(): boolean {
    return this.callbackForm.valid;
  }

  getFieldError(fieldName: string): string {
    const field = this.callbackForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `Le ${fieldName} est requis`;
      if (field.errors['email']) return 'Format d\'email invalide';
      if (field.errors['invalidPhone']) return 'Le numéro doit contenir 10 chiffres';
      if (field.errors['minlength']) return `${fieldName} trop court`;
    }
    return '';
  }

  async onSubmit() {
    if (!this.callbackForm.valid) {
      this.callbackForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    try {
      const formValue = this.callbackForm.value;
      const callbackData: CallbackEmailData = {
        nom: formValue.nom,
        prenom: formValue.prenom,
        telephone: formValue.telephone,
        email: formValue.email,
        entreprise: formValue.entreprise,
        message: formValue.message,
        creneauPrefere: formValue.creneauPrefere
      };

      await this.emailjsService.sendCallbackRequest(callbackData);
      
      this.isSubmitted = true;
      
      setTimeout(() => {
        this.onClose();
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la demande de rappel:', error);
      this.submitError = 'Erreur lors de l\'envoi de la demande. Veuillez réessayer.';
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }

  onClose() {
    this.close.emit();
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}