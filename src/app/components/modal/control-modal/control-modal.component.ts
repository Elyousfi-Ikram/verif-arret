import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailjsService } from '../../../services/emailjs.service';
import { TranslationService } from '../../../services/translation.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

// Interface simplifiée pour correspondre aux champs utilisés
interface SimpleControlData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise: string;
  posteEntreprise?: string;
  posteSalarie?: string;
  typeArret: string;
  dateDebutArret: string;
  dateFinArret?: string;
  restrictionsSorties: string;
  villeSalarie: string;
  codePostalSalarie: string;
  suspicions?: string;
  message?: string;
}

@Component({
  selector: 'app-control-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],

  templateUrl: './control-modal.component.html',
  styleUrls: ['../modal.scss']
})
export class ControlModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  controlForm!: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  submitError = '';

  private keydownListener?: (e: KeyboardEvent) => void;

  constructor(
    private fb: FormBuilder,
    private emailjsService: EmailjsService,
    private TranslationService: TranslationService,
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

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
        this.resetForm();
      } else {
        document.body.style.overflow = 'unset';
        this.resetForm();
      }
    }
  }

  private setupKeyboardListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.keydownListener = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && this.isOpen) {
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

  private initForm() {
    this.controlForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      entreprise: ['', [Validators.required]],
      posteEntreprise: [''],
      posteSalarie: [''],
      typeArret: ['maladie'],
      dateDebutArret: ['', [Validators.required]],
      dateFinArret: [''],
      restrictionsSorties: ['non-precise'],
      villeSalarie: ['', [Validators.required]],
      codePostalSalarie: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      suspicions: [''],
      message: ['']
    });
  }

  private resetForm() {
    this.controlForm.reset({
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      entreprise: '',
      posteEntreprise: '',
      posteSalarie: '',
      typeArret: 'maladie',
      dateDebutArret: '',
      dateFinArret: '',
      restrictionsSorties: 'non-precise',
      villeSalarie: '',
      codePostalSalarie: '',
      suspicions: '',
      message: ''
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
    this.controlForm.patchValue({ telephone: formatted });
  }

  formatCodePostal(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const numbers = value.replace(/\D/g, '').slice(0, 5);
    this.controlForm.patchValue({ codePostalSalarie: numbers });
  }

  getFieldError(fieldName: string): string {
      const field = this.controlForm.get(fieldName);
      if (field?.errors && field.touched) {
          // Erreur "required" pour les champs du formulaire de contrôle
          if (field.errors['required']) {
              const fieldsWithRequired = [
                  'nom',
                  'prenom',
                  'telephone',
                  'email',
                  'entreprise',
                  'dateDebutArret',
                  'villeSalarie',
                  'codePostalSalarie'
              ];
              if (fieldsWithRequired.includes(fieldName)) {
                  return `control.errors.${fieldName}.required`;
              }
              return '';
          }
  
          // Format d'email invalide
          if (field.errors['email']) {
              return 'control.errors.email.format';
          }
  
          // Longueur minimale du téléphone (10 chiffres)
          if (field.errors['minlength'] && fieldName === 'telephone') {
              return 'control.errors.telephone.minlength';
          }
  
          // Code postal: 5 chiffres
          if (field.errors['pattern'] && fieldName === 'codePostalSalarie') {
              return 'control.errors.codePostalSalarie.pattern';
          }
      }
      return '';
  }

  hasFieldError(fieldName: string): boolean {
    const field = this.controlForm.get(fieldName);
    return !!(field?.errors && field.touched);
  }

  get isFormValid(): boolean {
    return this.controlForm.valid;
  }

  async onSubmit() {
    if (this.controlForm.invalid) {
      this.controlForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    try {
      const formData = this.controlForm.value;

      // Utilisation de l'interface simplifiée
      const controlData: SimpleControlData = {
        nom: formData.nom,
        prenom: formData.prenom,
        telephone: formData.telephone,
        email: formData.email,
        entreprise: formData.entreprise,
        posteEntreprise: formData.posteEntreprise,
        posteSalarie: formData.posteSalarie,
        typeArret: formData.typeArret,
        dateDebutArret: formData.dateDebutArret,
        dateFinArret: formData.dateFinArret,
        restrictionsSorties: formData.restrictionsSorties,
        villeSalarie: formData.villeSalarie,
        codePostalSalarie: formData.codePostalSalarie,
        suspicions: formData.suspicions,
        message: formData.message
      };

      // Vous devrez adapter le service pour accepter SimpleControlData
      // ou créer une méthode de mapping vers ControlEmailData
      await this.emailjsService.sendControlRequest(controlData as any);

      this.isSubmitted = true;

      setTimeout(() => {
        this.onClose();
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      this.submitError = 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.';
    } finally {
      this.isSubmitting = false;
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