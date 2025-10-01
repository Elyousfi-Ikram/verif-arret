import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // Configuration des images pour éviter les avertissements NG0913
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, // Temporaire pour le développement
        disableImageLazyLoadWarning: true // Évite les avertissements pour les images LCP
      }
    },
    // Désactiver le prérendu temporairement
    { provide: 'PRERENDER', useValue: false }
  ]
};
