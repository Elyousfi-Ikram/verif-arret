import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class SeoAnalyticsService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Suivi des Core Web Vitals
  trackCoreWebVitals(): void {
    if (isPlatformBrowser(this.platformId)) {
      // LCP (Largest Contentful Paint)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(entry.startTime),
            non_interaction: true
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // Cast vers PerformanceEventTiming pour accéder à processingStart
          const eventEntry = entry as PerformanceEventTiming;
          if (eventEntry.processingStart) {
            gtag('event', 'FID', {
              event_category: 'Web Vitals',
              value: Math.round(eventEntry.processingStart - eventEntry.startTime),
              non_interaction: true
            });
          }
        }
      }).observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // Cast vers PerformanceEntry avec propriétés CLS
          const layoutEntry = entry as any;
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value;
          }
        }
        gtag('event', 'CLS', {
          event_category: 'Web Vitals',
          value: Math.round(clsValue * 1000),
          non_interaction: true
        });
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Suivi des interactions SEO
  trackSEOEvent(action: string, page: string): void {
    if (isPlatformBrowser(this.platformId) && typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: 'SEO',
        event_label: page,
        non_interaction: false
      });
    }
  }

  // Suivi des recherches locales
  trackLocalSearch(city: string): void {
    if (isPlatformBrowser(this.platformId) && typeof gtag !== 'undefined') {
      gtag('event', 'local_search', {
        event_category: 'SEO Local',
        event_label: city,
        custom_parameters: {
          search_type: 'geographic'
        }
      });
    }
  }
}