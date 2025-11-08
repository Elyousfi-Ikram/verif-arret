import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewsModalService, Review } from '../../../services/reviews-modal.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getActionCache } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'app-reviews-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews-modal.component.html',
  styleUrls: ['../modal.scss']
})
export class ReviewsModalComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  reviews$!: Observable<Review[]>;
  averageRating$!: Observable<number>;
  showAddReviewForm = false;

  newReview = {
    name: '',
    rating: 0, // Changez la valeur par défaut à 0 pour qu'aucune étoile ne soit sélectionnée au départ
    comment: ''
  };

  constructor(private reviewsModalService: ReviewsModalService) {
  }

  ngOnInit() {
    this.getReviewsAndRating();
    console.log('reviews$', this.reviews$);
  }

  getReviewsAndRating() {
    this.reviews$ = this.reviewsModalService.reviews$;
    this.averageRating$ = this.reviews$.pipe(
      map((reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, r) => sum + r.rating, 0);
        let averageRating = Math.round((total / reviews.length) * 100) / 100;
        this.getStarFillPercentage(0, averageRating);
        return averageRating;
      })
    );
  }

  onClose() {
    this.isOpen = false;
    this.reviewsModalService.closeModal();
    this.closeModal.emit();
    this.showAddReviewForm = false;
    this.resetForm();
  }

  onOverlayClick(event: Event) {
    event.stopPropagation();
    this.onClose();
  }

  getStarStyle(starIndex: number, rating: number): any {
    const fillPercentage = this.getStarFillPercentage(starIndex, rating);
    const primaryColor = '#fff';
    const lightColor = 'rgba(5, 16, 57, 0.25)';

    if (fillPercentage === 100) {
      return { 'color': primaryColor, 'font-weight': 'bold' };
    } else if (fillPercentage === 0) {
      return { 'color': lightColor, 'opacity': '0.6' };
    } else {
      return {
        'background': `linear-gradient(90deg, ${primaryColor} ${fillPercentage}%, ${lightColor} ${fillPercentage}%)`,
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      };
    }
  }

  getStarFillPercentage(starIndex: number, rating: number): number {
    const starPosition = starIndex + 1;
    if (rating >= starPosition) return 100;
    if (rating <= starPosition - 1) return 0;
    return Math.round((rating - (starPosition - 1)) * 100);
  }

  onAddReview() {
    this.showAddReviewForm = true;
  }

  onBackToReviews() {
    this.showAddReviewForm = false;
    this.resetForm();
  }

  onSubmitReview() {
    if (this.isFormValid()) {
      this.reviewsModalService.addReview({
        name: this.newReview.name,
        rating: this.newReview.rating,
        comment: this.newReview.comment
      });

      this.getReviewsAndRating();
      this.resetForm();
      this.showAddReviewForm = false;
    }
  }

  setRating(rating: number) {
    this.newReview.rating = rating;
  }

  private resetForm() {
    this.newReview = { name: '', rating: 0, comment: '' }; // Rating à 0 par défaut
  }

  private isFormValid(): boolean {
    return this.newReview.name.trim() !== '' &&
      this.newReview.rating !== 0 &&
      this.newReview.comment.trim() !== '';
  }
}