import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEO_KEYWORDS, getKeywordsByCategory, getAllKeywords } from '../config/seo-keywords.config';

@Injectable({
  providedIn: 'root'
})
export class DynamicSeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  // Rotation automatique des mots-clés
  setRotatingKeywords(page: string): void {
    const allKeywords = getAllKeywords();
    const randomKeywords = this.getRandomKeywords(allKeywords, 3);
    
    this.updatePageSEO(page, randomKeywords);
  }

  // Mots-clés par géolocalisation
  setGeoTargetedSEO(city: string): void {
    const geoKeywords = getKeywordsByCategory('geographic');
    const cityKeywords = geoKeywords.filter(keyword => 
      keyword.toLowerCase().includes(city.toLowerCase())
    );
    
    if (cityKeywords.length > 0) {
      this.title.setTitle(`${cityKeywords[0]} | VERIF-ARRÊT`);
    }
  }

  private getRandomKeywords(keywords: string[], count: number): string[] {
    const shuffled = keywords.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  private updatePageSEO(page: string, keywords: string[]): void {
    const keywordString = keywords.join(', ');
    this.meta.updateTag({
      name: 'description',
      content: `${keywordString}. Service professionnel VERIF-ARRÊT.`
    });
  }
}