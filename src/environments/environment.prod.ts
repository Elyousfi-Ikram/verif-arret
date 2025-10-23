export const environment = {
  production: true,
  staging: false,
  apiUrl: 'https://verifarret.up.railway.app/api',
  
  // Configuration de sécurité
  enableHttps: true,
  strictSSL: true,
  
  // Services externes
  emailjs: {
    serviceId: 'service_8fegsgj', // À remplacer par les vraies clés de production
    templates: {
      callback: 'template_k6eflye',
      control: 'template_oq1s7vi'
    },
    publicKey: '_2Vv-V-TWVqz-O-Lf'
  },
  
  // Configuration de cache
  cacheTimeout: 3600000, // 1 heure
  enableServiceWorker: true,
  
  // Logging et debug
  enableLogging: false,
  enableDebugMode: false,
  
  // Analytics et monitoring
  enableAnalytics: true,
  googleAnalyticsId: 'GA_TRACKING_ID', // À remplacer par votre ID Google Analytics
  
  // Fonctionnalités
  enableOfflineMode: true,
  maxRetryAttempts: 5
};