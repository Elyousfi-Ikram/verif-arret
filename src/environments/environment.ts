export const environment = {
  production: false,
  staging: false,
  apiUrl: 'http://localhost:3000/api',
  
  // Configuration de sécurité
  enableHttps: true,
  strictSSL: false, // Pour le développement local avec certificats auto-signés
  
  // Services externes
  emailjs: {
    serviceId: 'service_8fegsgj',
    templates: {
      callback: 'template_k6eflye',
      control: 'template_oq1s7vi'
    },
    publicKey: '_2Vv-V-TWVqz-O-Lf'
  },
  
  // Configuration de cache
  cacheTimeout: 300000, // 5 minutes
  enableServiceWorker: false,
  
  // Logging et debug
  enableLogging: true,
  enableDebugMode: true,
  
  // Analytics et monitoring
  enableAnalytics: false,
  googleAnalyticsId: '',
  
  // Fonctionnalités
  enableOfflineMode: false,
  maxRetryAttempts: 3
};