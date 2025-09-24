import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailjsService } from '../../../services/emailjs.service';
import { ControlEmailData } from '../../../config/emailjs.config';

@Component({
  selector: 'app-control-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      nomSalarie: ['', [Validators.required]],
      prenomSalarie: ['', [Validators.required]],
      posteSalarie: [''],
      typeArret: ['maladie'],
      dateDebutArret: ['', [Validators.required]],
      dateFinArret: [''],
      medecinPrescripteur: [''],
      restrictionsSorties: ['non-precise'],
      adresseSalarie: ['', [Validators.required]],
      villeSalarie: ['', [Validators.required]],
      codePostalSalarie: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      suspicions: [''],
      urgence: ['normale'],
      creneauPrefere: ['matin'],
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
      nomSalarie: '',
      prenomSalarie: '',
      posteSalarie: '',
      typeArret: 'maladie',
      dateDebutArret: '',
      dateFinArret: '',
      medecinPrescripteur: '',
      restrictionsSorties: 'non-precise',
      adresseSalarie: '',
      villeSalarie: '',
      codePostalSalarie: '',
      suspicions: '',
      urgence: 'normale',
      creneauPrefere: 'matin',
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
      if (field.errors['required']) {
        const labels: { [key: string]: string } = {
          nom: 'Le nom',
          prenom: 'Le prénom',
          telephone: 'Le téléphone',
          email: 'L\'email',
          entreprise: 'L\'entreprise',
          nomSalarie: 'Le nom du salarié',
          prenomSalarie: 'Le prénom du salarié',
          dateDebutArret: 'La date de début d\'arrêt',
          adresseSalarie: 'L\'adresse du salarié',
          villeSalarie: 'La ville',
          codePostalSalarie: 'Le code postal'
        };
        return `${labels[fieldName] || 'Ce champ'} est requis`;
      }
      if (field.errors['email']) return 'Format d\'email invalide';
      if (field.errors['minlength']) return 'Le numéro doit contenir au moins 10 chiffres';
      if (field.errors['pattern']) return 'Le code postal doit contenir 5 chiffres';
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
      
      const controlData: ControlEmailData = {
        nom: formData.nom,
        prenom: formData.prenom,
        telephone: formData.telephone,
        email: formData.email,
        entreprise: formData.entreprise,
        posteEntreprise: formData.posteEntreprise,
        nomSalarie: formData.nomSalarie,
        prenomSalarie: formData.prenomSalarie,
        posteSalarie: formData.posteSalarie,
        typeArret: formData.typeArret,
        dateDebutArret: formData.dateDebutArret,
        dateFinArret: formData.dateFinArret,
        medecinPrescripteur: formData.medecinPrescripteur,
        restrictionsSorties: formData.restrictionsSorties,
        adresseSalarie: formData.adresseSalarie,
        villeSalarie: formData.villeSalarie,
        codePostalSalarie: formData.codePostalSalarie,
        suspicions: formData.suspicions,
        urgence: formData.urgence,
        creneauPrefere: formData.creneauPrefere,
        message: formData.message
      };

      await this.emailjsService.sendControlRequest(controlData);
      
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