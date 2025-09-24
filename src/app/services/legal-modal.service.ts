import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LegalContent {
  title: string;
  section: string;
}

@Injectable({
  providedIn: 'root'
})
export class LegalModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();

  openModal(): void {
    console.log('LegalModalService.openModal() appelé');
    console.log('État avant:', this.isOpenSubject.value);
    this.isOpenSubject.next(true);
    console.log('État après:', this.isOpenSubject.value);
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
  }

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }

  // Méthode de compatibilité
  openMentionsLegales(): void {
    this.openModal();
  }
}