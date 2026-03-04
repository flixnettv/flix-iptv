export type Language = 'ar' | 'en' | 'fr' | 'es';

export interface Translation {
  // Navigation
  nav_home: string;
  nav_apps: string;
  nav_pricing: string;
  nav_contact: string;
  subscribe_now: string;
  
  // Hero Section
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_trust_channels: string;
  hero_trust_quality: string;
  hero_trust_uptime: string;
  
  // Features
  features_title: string;
  feature_channels: string;
  feature_channels_desc: string;
  feature_vod: string;
  feature_vod_desc: string;
  feature_worldwide: string;
  feature_worldwide_desc: string;
  feature_devices: string;
  feature_devices_desc: string;
  feature_antifreeze: string;
  feature_antifreeze_desc: string;
  feature_support: string;
  feature_support_desc: string;
  
  // Devices
  devices_title: string;
  devices_subtitle: string;
  
  // Pricing
  pricing_title: string;
  pricing_plan_name: string;
  pricing_per_year: string;
  pricing_includes_title: string;
  pricing_feature_activation: string;
  pricing_feature_channels: string;
  pricing_feature_support: string;
  pricing_feature_devices: string;
  pricing_feature_quality: string;
  pricing_feature_epg: string;
  pricing_feature_vod: string;
  
  // Form
  form_title: string;
  form_name: string;
  form_phone: string;
  form_country: string;
  form_app: string;
  form_message: string;
  form_submit: string;
  form_placeholder_name: string;
  form_placeholder_phone: string;
  form_placeholder_message: string;
  
  // Apps
  apps_title: string;
  apps_filter_all: string;
  apps_filter_players: string;
  apps_filter_smarttv: string;
  apps_filter_satellite: string;
  apps_filter_servers: string;
  app_installation: string;
  app_features: string;
  app_devices: string;
  app_related: string;
  
  // Testimonials
  testimonials_title: string;
  
  // FAQ
  faq_title: string;
  
  // Footer
  footer_about: string;
  footer_quick_links: string;
  footer_contact: string;
  footer_follow: string;
  footer_rights: string;
  
  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_info_title: string;
  contact_form_title: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    nav_home: 'Home',
    nav_apps: 'Apps',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    subscribe_now: 'Subscribe Now',
    
    hero_title: 'Stream Everything. Everywhere. Anytime.',
    hero_subtitle: 'Watch the latest movies, TV shows and live sports with top quality',
    hero_cta: 'Subscribe Now',
    hero_trust_channels: '10,000+ Channels',
    hero_trust_quality: '4K Ultra HD',
    hero_trust_uptime: '99.9% Uptime',
    
    features_title: 'Why Choose Flix IPTV?',
    feature_channels: '+10,000 Live Channels',
    feature_channels_desc: 'Access thousands of live TV channels from around the world in HD and 4K quality',
    feature_vod: 'Huge VOD Library',
    feature_vod_desc: 'Watch the latest movies and TV series on demand, updated daily',
    feature_worldwide: 'All Countries & Languages',
    feature_worldwide_desc: 'Channels and content from all countries in multiple languages',
    feature_devices: 'All Devices Supported',
    feature_devices_desc: 'Watch on Smart TV, mobile, tablet, PC, and streaming devices',
    feature_antifreeze: 'Anti-Freeze Technology',
    feature_antifreeze_desc: 'Smooth streaming with advanced buffering and adaptive quality',
    feature_support: '24/7 Technical Support',
    feature_support_desc: 'Our team is always ready to help you via WhatsApp and Telegram',
    
    devices_title: 'Supported Devices',
    devices_subtitle: 'Watch on any device, anywhere',
    
    pricing_title: 'Simple Pricing',
    pricing_plan_name: 'Annual Plan',
    pricing_per_year: 'per year',
    pricing_includes_title: 'Includes:',
    pricing_feature_activation: 'App Activation',
    pricing_feature_channels: 'Full Channel List',
    pricing_feature_support: '24/7 Support',
    pricing_feature_devices: 'All Devices',
    pricing_feature_quality: '4K/HD/SD Streams',
    pricing_feature_epg: 'EPG Guide',
    pricing_feature_vod: 'VOD Access',
    
    form_title: 'Subscribe to Flix IPTV',
    form_name: 'Full Name',
    form_phone: 'Phone Number',
    form_country: 'Country',
    form_app: 'Select App/Service (Optional)',
    form_message: 'Message',
    form_submit: 'Confirm & Subscribe',
    form_placeholder_name: 'Enter your full name',
    form_placeholder_phone: 'Enter your phone number',
    form_placeholder_message: 'I want to subscribe to Flix IPTV',
    
    apps_title: 'All Apps & Services',
    apps_filter_all: 'All',
    apps_filter_players: 'IPTV Players',
    apps_filter_smarttv: 'Smart TV',
    apps_filter_satellite: 'Satellite',
    apps_filter_servers: 'Servers',
    app_installation: 'Installation Guide',
    app_features: 'Features',
    app_devices: 'Supported Devices',
    app_related: 'Related Apps',
    
    testimonials_title: 'What Our Customers Say',
    
    faq_title: 'Frequently Asked Questions',
    
    footer_about: 'About Flix IPTV',
    footer_quick_links: 'Quick Links',
    footer_contact: 'Contact Us',
    footer_follow: 'Follow Us',
    footer_rights: 'All rights reserved.',
    
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch with our team',
    contact_info_title: 'Contact Information',
    contact_form_title: 'Send us a message'
  },
  
  ar: {
    nav_home: 'الرئيسية',
    nav_apps: 'التطبيقات',
    nav_pricing: 'الأسعار',
    nav_contact: 'اتصل بنا',
    subscribe_now: 'اشترك الآن',
    
    hero_title: 'شاهد كل شيء. في كل مكان. في أي وقت.',
    hero_subtitle: 'شاهد أحدث الأفلام والبرامج والرياضات الحية بجودة عالية',
    hero_cta: 'اشترك الآن',
    hero_trust_channels: '+10,000 قناة',
    hero_trust_quality: '4K جودة فائقة',
    hero_trust_uptime: '99.9% وقت تشغيل',
    
    features_title: 'لماذا تختار Flix IPTV؟',
    feature_channels: '+10,000 قناة مباشرة',
    feature_channels_desc: 'الوصول إلى آلاف القنوات التلفزيونية المباشرة من جميع أنحاء العالم بجودة HD و 4K',
    feature_vod: 'مكتبة VOD ضخمة',
    feature_vod_desc: 'شاهد أحدث الأفلام والمسلسلات عند الطلب، يتم التحديث يوميًا',
    feature_worldwide: 'جميع الدول واللغات',
    feature_worldwide_desc: 'قنوات ومحتوى من جميع الدول بلغات متعددة',
    feature_devices: 'جميع الأجهزة مدعومة',
    feature_devices_desc: 'شاهد على التلفزيون الذكي والموبايل والتابلت والكمبيوتر وأجهزة البث',
    feature_antifreeze: 'تقنية منع التجميد',
    feature_antifreeze_desc: 'بث سلس مع تخزين مؤقت متقدم وجودة قابلة للتكيف',
    feature_support: 'دعم فني 24/7',
    feature_support_desc: 'فريقنا جاهز دائمًا لمساعدتك عبر الواتساب والتيليجرام',
    
    devices_title: 'الأجهزة المدعومة',
    devices_subtitle: 'شاهد على أي جهاز، في أي مكان',
    
    pricing_title: 'أسعار بسيطة',
    pricing_plan_name: 'باقة سنوية',
    pricing_per_year: 'في السنة',
    pricing_includes_title: 'يشمل:',
    pricing_feature_activation: 'تفعيل التطبيق',
    pricing_feature_channels: 'قائمة القنوات الكاملة',
    pricing_feature_support: 'دعم 24/7',
    pricing_feature_devices: 'جميع الأجهزة',
    pricing_feature_quality: 'بث 4K/HD/SD',
    pricing_feature_epg: 'دليل EPG',
    pricing_feature_vod: 'الوصول إلى VOD',
    
    form_title: 'الاشتراك في Flix IPTV',
    form_name: 'الاسم الكامل',
    form_phone: 'رقم الهاتف',
    form_country: 'الدولة',
    form_app: 'اختر التطبيق/الخدمة (اختياري)',
    form_message: 'رسالة',
    form_submit: 'تأكيد الاشتراك',
    form_placeholder_name: 'أدخل اسمك الكامل',
    form_placeholder_phone: 'أدخل رقم هاتفك',
    form_placeholder_message: 'أريد الاشتراك في Flix IPTV',
    
    apps_title: 'جميع التطبيقات والخدمات',
    apps_filter_all: 'الكل',
    apps_filter_players: 'مشغلات IPTV',
    apps_filter_smarttv: 'التلفزيون الذكي',
    apps_filter_satellite: 'الستلايت',
    apps_filter_servers: 'الخوادم',
    app_installation: 'دليل التثبيت',
    app_features: 'الميزات',
    app_devices: 'الأجهزة المدعومة',
    app_related: 'تطبيقات ذات صلة',
    
    testimonials_title: 'ماذا يقول عملاؤنا',
    
    faq_title: 'الأسئلة الشائعة',
    
    footer_about: 'حول Flix IPTV',
    footer_quick_links: 'روابط سريعة',
    footer_contact: 'اتصل بنا',
    footer_follow: 'تابعنا',
    footer_rights: 'جميع الحقوق محفوظة.',
    
    contact_title: 'اتصل بنا',
    contact_subtitle: 'تواصل مع فريقنا',
    contact_info_title: 'معلومات الاتصال',
    contact_form_title: 'أرسل لنا رسالة'
  },
  
  fr: {
    nav_home: 'Accueil',
    nav_apps: 'Applications',
    nav_pricing: 'Tarifs',
    nav_contact: 'Contact',
    subscribe_now: "S'abonner maintenant",
    
    hero_title: 'Regardez tout. Partout. À tout moment.',
    hero_subtitle: 'Regardez les derniers films, séries TV et sports en direct en haute qualité',
    hero_cta: "S'abonner maintenant",
    hero_trust_channels: '+10,000 Chaînes',
    hero_trust_quality: '4K Ultra HD',
    hero_trust_uptime: '99.9% Disponibilité',
    
    features_title: 'Pourquoi choisir Flix IPTV?',
    feature_channels: '+10,000 Chaînes en direct',
    feature_channels_desc: "Accédez à des milliers de chaînes TV du monde entier en qualité HD et 4K",
    feature_vod: 'Bibliothèque VOD énorme',
    feature_vod_desc: 'Regardez les derniers films et séries à la demande, mis à jour quotidiennement',
    feature_worldwide: 'Tous pays et langues',
    feature_worldwide_desc: 'Chaînes et contenus de tous les pays en plusieurs langues',
    feature_devices: 'Tous appareils supportés',
    feature_devices_desc: 'Regardez sur Smart TV, mobile, tablette, PC et appareils de streaming',
    feature_antifreeze: 'Technologie Anti-Gel',
    feature_antifreeze_desc: 'Diffusion fluide avec mise en mémoire tampon avancée et qualité adaptative',
    feature_support: 'Support technique 24/7',
    feature_support_desc: 'Notre équipe est toujours prête à vous aider via WhatsApp et Telegram',
    
    devices_title: 'Appareils supportés',
    devices_subtitle: 'Regardez sur n\'importe quel appareil, n\'importe où',
    
    pricing_title: 'Tarification simple',
    pricing_plan_name: 'Plan annuel',
    pricing_per_year: 'par an',
    pricing_includes_title: 'Comprend:',
    pricing_feature_activation: 'Activation de l\'application',
    pricing_feature_channels: 'Liste complète des chaînes',
    pricing_feature_support: 'Support 24/7',
    pricing_feature_devices: 'Tous les appareils',
    pricing_feature_quality: 'Flux 4K/HD/SD',
    pricing_feature_epg: 'Guide EPG',
    pricing_feature_vod: 'Accès VOD',
    
    form_title: "S'abonner à Flix IPTV",
    form_name: 'Nom complet',
    form_phone: 'Numéro de téléphone',
    form_country: 'Pays',
    form_app: 'Sélectionner l\'application (Optionnel)',
    form_message: 'Message',
    form_submit: 'Confirmer et s\'abonner',
    form_placeholder_name: 'Entrez votre nom complet',
    form_placeholder_phone: 'Entrez votre numéro de téléphone',
    form_placeholder_message: 'Je veux m\'abonner à Flix IPTV',
    
    apps_title: 'Toutes les applications et services',
    apps_filter_all: 'Tous',
    apps_filter_players: 'Lecteurs IPTV',
    apps_filter_smarttv: 'Smart TV',
    apps_filter_satellite: 'Satellite',
    apps_filter_servers: 'Serveurs',
    app_installation: 'Guide d\'installation',
    app_features: 'Fonctionnalités',
    app_devices: 'Appareils supportés',
    app_related: 'Applications connexes',
    
    testimonials_title: 'Ce que disent nos clients',
    
    faq_title: 'Questions fréquemment posées',
    
    footer_about: 'À propos de Flix IPTV',
    footer_quick_links: 'Liens rapides',
    footer_contact: 'Contactez-nous',
    footer_follow: 'Suivez-nous',
    footer_rights: 'Tous droits réservés.',
    
    contact_title: 'Contactez-nous',
    contact_subtitle: 'Contactez notre équipe',
    contact_info_title: 'Informations de contact',
    contact_form_title: 'Envoyez-nous un message'
  },
  
  es: {
    nav_home: 'Inicio',
    nav_apps: 'Aplicaciones',
    nav_pricing: 'Precios',
    nav_contact: 'Contacto',
    subscribe_now: 'Suscríbete ahora',
    
    hero_title: 'Transmite todo. En todas partes. En cualquier momento.',
    hero_subtitle: 'Mira las últimas películas, series de TV y deportes en vivo con la mejor calidad',
    hero_cta: 'Suscríbete ahora',
    hero_trust_channels: '+10,000 Canales',
    hero_trust_quality: '4K Ultra HD',
    hero_trust_uptime: '99.9% Disponibilidad',
    
    features_title: '¿Por qué elegir Flix IPTV?',
    feature_channels: '+10,000 Canales en vivo',
    feature_channels_desc: 'Accede a miles de canales de TV de todo el mundo en calidad HD y 4K',
    feature_vod: 'Biblioteca VOD enorme',
    feature_vod_desc: 'Mira las últimas películas y series bajo demanda, actualizadas diariamente',
    feature_worldwide: 'Todos los países e idiomas',
    feature_worldwide_desc: 'Canales y contenido de todos los países en múltiples idiomas',
    feature_devices: 'Todos los dispositivos compatibles',
    feature_devices_desc: 'Mira en Smart TV, móvil, tablet, PC y dispositivos de transmisión',
    feature_antifreeze: 'Tecnología Anti-Congelación',
    feature_antifreeze_desc: 'Transmisión fluida con almacenamiento en búfer avanzado y calidad adaptativa',
    feature_support: 'Soporte técnico 24/7',
    feature_support_desc: 'Nuestro equipo siempre está listo para ayudarte por WhatsApp y Telegram',
    
    devices_title: 'Dispositivos compatibles',
    devices_subtitle: 'Mira en cualquier dispositivo, en cualquier lugar',
    
    pricing_title: 'Precios simples',
    pricing_plan_name: 'Plan anual',
    pricing_per_year: 'por año',
    pricing_includes_title: 'Incluye:',
    pricing_feature_activation: 'Activación de la aplicación',
    pricing_feature_channels: 'Lista completa de canales',
    pricing_feature_support: 'Soporte 24/7',
    pricing_feature_devices: 'Todos los dispositivos',
    pricing_feature_quality: 'Transmisiones 4K/HD/SD',
    pricing_feature_epg: 'Guía EPG',
    pricing_feature_vod: 'Acceso VOD',
    
    form_title: 'Suscríbete a Flix IPTV',
    form_name: 'Nombre completo',
    form_phone: 'Número de teléfono',
    form_country: 'País',
    form_app: 'Seleccionar aplicación/servicio (Opcional)',
    form_message: 'Mensaje',
    form_submit: 'Confirmar y suscribirse',
    form_placeholder_name: 'Ingresa tu nombre completo',
    form_placeholder_phone: 'Ingresa tu número de teléfono',
    form_placeholder_message: 'Quiero suscribirme a Flix IPTV',
    
    apps_title: 'Todas las aplicaciones y servicios',
    apps_filter_all: 'Todos',
    apps_filter_players: 'Reproductores IPTV',
    apps_filter_smarttv: 'Smart TV',
    apps_filter_satellite: 'Satélite',
    apps_filter_servers: 'Servidores',
    app_installation: 'Guía de instalación',
    app_features: 'Características',
    app_devices: 'Dispositivos compatibles',
    app_related: 'Aplicaciones relacionadas',
    
    testimonials_title: 'Lo que dicen nuestros clientes',
    
    faq_title: 'Preguntas frecuentes',
    
    footer_about: 'Acerca de Flix IPTV',
    footer_quick_links: 'Enlaces rápidos',
    footer_contact: 'Contáctenos',
    footer_follow: 'Síguenos',
    footer_rights: 'Todos los derechos reservados.',
    
    contact_title: 'Contáctenos',
    contact_subtitle: 'Ponte en contacto con nuestro equipo',
    contact_info_title: 'Información de contacto',
    contact_form_title: 'Envíanos un mensaje'
  }
};

export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('ar')) return 'ar';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('es')) return 'es';
  
  return 'en';
}
