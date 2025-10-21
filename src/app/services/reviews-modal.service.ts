import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.config';

export interface Review {
  _id?: string;
  name: string;
  rating: number;
  comment: string;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewsModalService {
  private readonly url: string = `${apiUrl}/reviews`;

  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();
  private reviewsSubject = new BehaviorSubject<Review[]>([]);
  public reviews$ = this.reviewsSubject.asObservable();

  constructor(private http: HttpClient) {
    // Charger les avis dès l'initialisation du service
    this.getReviews();
  }

  getReviews() {
    this.http.get<Review[]>(this.url).subscribe({
      next: (reviews) => {
        this.reviewsSubject.next(reviews);
      },
      error: (error) => {
        console.error('Erreur lors de la synchronisation avec l\'API:', error);
      }
    });
  }

  openModal(): void {
    this.isOpenSubject.next(true);
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
  }

  addReview(reviewData: Omit<Review, '_id'>) {
    this.http.post<Review>(this.url, reviewData).subscribe({
      next: () => {
        console.log('Avis sauvegardé avec succès dans la base de données');
        // Rafraîchir la liste des avis
        this.getReviews();
      },
      error: (error) => {
        console.error('Erreur lors de la sauvegarde de l\'avis:', error);
      }
    });
  }
}