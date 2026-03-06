export interface AppData {
  id: string;
  name: string;
  category: 'player' | 'smarttv' | 'satellite' | 'server';
  icon: string;
  description: {
    en: string;
    ar: string;
    fr: string;
    es: string;
  };
  features: {
    en: string[];
    ar: string[];
    fr: string[];
    es: string[];
  };
  installation: {
    en: string[];
    ar: string[];
    fr: string[];
    es: string[];
  };
  devices: {
    en: string[];
    ar: string[];
    fr: string[];
    es: string[];
  };
}

export const appsData: AppData[] = [
  // Category A - IPTV Players
  {
    id: 'mega-tv',
    name: 'Mega TV',
    category: 'player',
    icon: '📺',
    description: {
      en: 'Advanced IPTV player with 4K support and anti-freeze technology for smooth streaming',
      ar: 'مشغل IPTV متقدم مع دعم 4K وتقنية منع التجميد للبث السلس',
      fr: 'Lecteur IPTV avancé avec support 4K et technologie anti-gel pour une diffusion fluide',
      es: 'Reproductor IPTV avanzado con soporte 4K y tecnología anti-congelación para transmisión fluida'
    },
    features: {
      en: ['4K/HD/SD Quality', 'EPG TV Guide', 'VOD Library', 'Multi-Screen Support', 'Parental Controls', 'Catch-up TV'],
      ar: ['جودة 4K/HD/SD', 'دليل EPG التلفزيوني', 'مكتبة VOD', 'دعم متعدد الشاشات', 'الرقابة الأبوية', 'التلفزيون التفاعلي'],
      fr: ['Qualité 4K/HD/SD', 'Guide TV EPG', 'Bibliothèque VOD', 'Support multi-écrans', 'Contrôle parental', 'TV de rattrapage'],
      es: ['Calidad 4K/HD/SD', 'Guía TV EPG', 'Biblioteca VOD', 'Soporte multi-pantalla', 'Control parental', 'TV a la carta']
    },
    installation: {
      en: [
        'Download Mega TV app from your device app store',
        'Open the app and select "Add Playlist"',
        'Choose Xtream Codes API login method',
        'Enter server URL, username, and password (provided after subscription)',
        'Click "Connect" and wait for channels to load',
        'Enjoy streaming!'
      ],
      ar: [
        'قم بتنزيل تطبيق Mega TV من متجر التطبيقات',
        'افتح التطبيق واختر "إضافة قائمة تشغيل"',
        'اختر طريقة تسجيل الدخول Xtream Codes API',
        'أدخل رابط الخادم واسم المستخدم وكلمة المرور (يتم توفيرها بعد الاشتراك)',
        'انقر على "اتصال" وانتظر تحميل القنوات',
        'استمتع بالمشاهدة!'
      ],
      fr: [
        'Téléchargez l\'application Mega TV depuis votre magasin d\'applications',
        'Ouvrez l\'application et sélectionnez "Ajouter une playlist"',
        'Choisissez la méthode de connexion Xtream Codes API',
        'Entrez l\'URL du serveur, le nom d\'utilisateur et le mot de passe (fournis après l\'abonnement)',
        'Cliquez sur "Connecter" et attendez le chargement des chaînes',
        'Profitez du streaming!'
      ],
      es: [
        'Descarga la aplicación Mega TV desde tu tienda de aplicaciones',
        'Abre la aplicación y selecciona "Agregar lista de reproducción"',
        'Elige el método de inicio de sesión Xtream Codes API',
        'Ingresa la URL del servidor, nombre de usuario y contraseña (proporcionados después de la suscripción)',
        'Haz clic en "Conectar" y espera a que se carguen los canales',
        '¡Disfruta del streaming!'
      ]
    },
    devices: {
      en: ['Android Phones & Tablets', 'Android TV & Box', 'Amazon Fire TV', 'Windows PC', 'Mac'],
      ar: ['هواتف وأجهزة أندرويد اللوحية', 'أندرويد TV وBox', 'أمازون فاير TV', 'ويندوز PC', 'ماك'],
      fr: ['Téléphones et tablettes Android', 'Android TV et Box', 'Amazon Fire TV', 'Windows PC', 'Mac'],
      es: ['Teléfonos y tabletas Android', 'Android TV y Box', 'Amazon Fire TV', 'Windows PC', 'Mac']
    }
  },
  {
    id: 'ipfox-player',
    name: 'Ipfox Player',
    category: 'player',
    icon: '🦊',
    description: {
      en: 'Fast and reliable IPTV player with modern interface and powerful features',
      ar: 'مشغل IPTV سريع وموثوق بواجهة حديثة ومميزات قوية',
      fr: 'Lecteur IPTV rapide et fiable avec interface moderne et fonctionnalités puissantes',
      es: 'Reproductor IPTV rápido y confiable con interfaz moderna y características poderosas'
    },
    features: {
      en: ['M3U & Xtream Support', 'Multiple Playlists', 'Favorites Management', 'Search Function', 'Picture-in-Picture', 'Automatic Updates'],
      ar: ['دعم M3U و Xtream', 'قوائم تشغيل متعددة', 'إدارة المفضلة', 'وظيفة البحث', 'صورة داخل صورة', 'تحديثات تلقائية'],
      fr: ['Support M3U et Xtream', 'Listes de lecture multiples', 'Gestion des favoris', 'Fonction de recherche', 'Image dans l\'image', 'Mises à jour automatiques'],
      es: ['Soporte M3U y Xtream', 'Listas de reproducción múltiples', 'Gestión de favoritos', 'Función de búsqueda', 'Picture-in-Picture', 'Actualizaciones automáticas']
    },
    installation: {
      en: [
        'Install Ipfox Player from Google Play or App Store',
        'Launch the app and tap on "Add Server"',
        'Select connection type (M3U URL or Xtream)',
        'Enter your subscription credentials',
        'Save and load the channel list',
        'Start watching your favorite channels'
      ],
      ar: [
        'قم بتثبيت Ipfox Player من Google Play أو App Store',
        'افتح التطبيق واضغط على "إضافة خادم"',
        'اختر نوع الاتصال (M3U URL أو Xtream)',
        'أدخل بيانات الاشتراك الخاصة بك',
        'احفظ وحمّل قائمة القنوات',
        'ابدأ مشاهدة قنواتك المفضلة'
      ],
      fr: [
        'Installez Ipfox Player depuis Google Play ou App Store',
        'Lancez l\'application et appuyez sur "Ajouter un serveur"',
        'Sélectionnez le type de connexion (URL M3U ou Xtream)',
        'Entrez vos identifiants d\'abonnement',
        'Enregistrez et chargez la liste des chaînes',
        'Commencez à regarder vos chaînes préférées'
      ],
      es: [
        'Instala Ipfox Player desde Google Play o App Store',
        'Inicia la aplicación y toca "Agregar servidor"',
        'Selecciona el tipo de conexión (URL M3U o Xtream)',
        'Ingresa tus credenciales de suscripción',
        'Guarda y carga la lista de canales',
        'Comienza a ver tus canales favoritos'
      ]
    },
    devices: {
      en: ['Android Devices', 'iOS (iPhone/iPad)', 'Android TV', 'Smart TV', 'Tablets'],
      ar: ['أجهزة أندرويد', 'iOS (آيفون/آيباد)', 'أندرويد TV', 'التلفزيون الذكي', 'الأجهزة اللوحية'],
      fr: ['Appareils Android', 'iOS (iPhone/iPad)', 'Android TV', 'Smart TV', 'Tablettes'],
      es: ['Dispositivos Android', 'iOS (iPhone/iPad)', 'Android TV', 'Smart TV', 'Tabletas']
    }
  },
  {
    id: 'nova-iptv',
    name: 'Nova IPTV',
    category: 'player',
    icon: '⭐',
    description: {
      en: 'Premium IPTV player with advanced features and beautiful user interface',
      ar: 'مشغل IPTV متميز مع ميزات متقدمة وواجهة مستخدم جميلة',
      fr: 'Lecteur IPTV premium avec fonctionnalités avancées et belle interface utilisateur',
      es: 'Reproductor IPTV premium con características avanzadas y hermosa interfaz de usuario'
    },
    features: {
      en: ['Smart Buffering', 'Recording Capability', 'Time Shift', 'Subtitle Support', 'Custom Themes', 'Cloud Sync'],
      ar: ['التخزين المؤقت الذكي', 'إمكانية التسجيل', 'نقل الوقت', 'دعم الترجمة', 'سمات مخصصة', 'المزامنة السحابية'],
      fr: ['Mise en mémoire tampon intelligente', 'Capacité d\'enregistrement', 'Décalage temporel', 'Support des sous-titres', 'Thèmes personnalisés', 'Synchronisation cloud'],
      es: ['Almacenamiento inteligente', 'Capacidad de grabación', 'Cambio de tiempo', 'Soporte de subtítulos', 'Temas personalizados', 'Sincronización en la nube']
    },
    installation: {
      en: [
        'Download Nova IPTV from your app store',
        'Open the app and tap "Settings"',
        'Select "Add New Connection"',
        'Enter Xtream login details or M3U URL',
        'Configure EPG source (optional)',
        'Save and enjoy unlimited streaming'
      ],
      ar: [
        'قم بتنزيل Nova IPTV من متجر التطبيقات',
        'افتح التطبيق واضغط على "الإعدادات"',
        'اختر "إضافة اتصال جديد"',
        'أدخل تفاصيل تسجيل الدخول Xtream أو رابط M3U',
        'قم بتكوين مصدر EPG (اختياري)',
        'احفظ واستمتع بالبث غير المحدود'
      ],
      fr: [
        'Téléchargez Nova IPTV depuis votre magasin d\'applications',
        'Ouvrez l\'application et appuyez sur "Paramètres"',
        'Sélectionnez "Ajouter une nouvelle connexion"',
        'Entrez les détails de connexion Xtream ou l\'URL M3U',
        'Configurez la source EPG (optionnel)',
        'Enregistrez et profitez du streaming illimité'
      ],
      es: [
        'Descarga Nova IPTV desde tu tienda de aplicaciones',
        'Abre la aplicación y toca "Configuración"',
        'Selecciona "Agregar nueva conexión"',
        'Ingresa los detalles de inicio de sesión Xtream o URL M3U',
        'Configura la fuente EPG (opcional)',
        'Guarda y disfruta del streaming ilimitado'
      ]
    },
    devices: {
      en: ['Android', 'iOS', 'Android TV', 'Fire TV', 'Windows'],
      ar: ['أندرويد', 'iOS', 'أندرويد TV', 'فاير TV', 'ويندوز'],
      fr: ['Android', 'iOS', 'Android TV', 'Fire TV', 'Windows'],
      es: ['Android', 'iOS', 'Android TV', 'Fire TV', 'Windows']
    }
  },
  {
    id: 'aroma-iptv',
    name: 'Aroma IPTV',
    category: 'player',
    icon: '🌸',
    description: {
      en: 'Elegant IPTV solution with focus on user experience and performance',
      ar: 'حل IPTV أنيق مع التركيز على تجربة المستخدم والأداء',
      fr: 'Solution IPTV élégante axée sur l\'expérience utilisateur et la performance',
      es: 'Solución IPTV elegante enfocada en la experiencia del usuario y el rendimiento'
    },
    features: {
      en: ['Adaptive Streaming', 'Fast Channel Switching', 'Electronic Program Guide', 'Chromecast Support', 'DLNA Streaming', 'Playlist Editor'],
      ar: ['البث التكيفي', 'تبديل سريع للقنوات', 'دليل البرامج الإلكتروني', 'دعم Chromecast', 'بث DLNA', 'محرر قوائم التشغيل'],
      fr: ['Streaming adaptatif', 'Changement de chaîne rapide', 'Guide de programmes électronique', 'Support Chromecast', 'Streaming DLNA', 'Éditeur de playlist'],
      es: ['Transmisión adaptativa', 'Cambio rápido de canales', 'Guía de programas electrónica', 'Soporte Chromecast', 'Transmisión DLNA', 'Editor de listas de reproducción']
    },
    installation: {
      en: [
        'Download and install Aroma IPTV',
        'Launch the app and navigate to "Connections"',
        'Tap "Add New" and select your connection type',
        'Input your server credentials',
        'Enable EPG and configure preferences',
        'Start streaming'
      ],
      ar: [
        'قم بتنزيل وتثبيت Aroma IPTV',
        'افتح التطبيق وانتقل إلى "الاتصالات"',
        'اضغط على "إضافة جديد" واختر نوع الاتصال',
        'أدخل بيانات الخادم الخاصة بك',
        'فعّل EPG وقم بتكوين التفضيلات',
        'ابدأ البث'
      ],
      fr: [
        'Téléchargez et installez Aroma IPTV',
        'Lancez l\'application et accédez à "Connexions"',
        'Appuyez sur "Ajouter nouveau" et sélectionnez votre type de connexion',
        'Saisissez vos identifiants de serveur',
        'Activez EPG et configurez les préférences',
        'Commencez le streaming'
      ],
      es: [
        'Descarga e instala Aroma IPTV',
        'Inicia la aplicación y navega a "Conexiones"',
        'Toca "Agregar nuevo" y selecciona tu tipo de conexión',
        'Ingresa tus credenciales de servidor',
        'Habilita EPG y configura las preferencias',
        'Comienza a transmitir'
      ]
    },
    devices: {
      en: ['Android', 'Smart TV', 'Android Box', 'Fire Stick'],
      ar: ['أندرويد', 'التلفزيون الذكي', 'أندرويد بوكس', 'فاير ستيك'],
      fr: ['Android', 'Smart TV', 'Android Box', 'Fire Stick'],
      es: ['Android', 'Smart TV', 'Android Box', 'Fire Stick']
    }
  },
  {
    id: 'maven-iptv',
    name: 'Maven IPTV',
    category: 'player',
    icon: '🎬',
    description: {
      en: 'Professional IPTV player with industry-leading features and reliability',
      ar: 'مشغل IPTV احترافي بميزات رائدة في الصناعة وموثوقية عالية',
      fr: 'Lecteur IPTV professionnel avec des fonctionnalités de pointe et une fiabilité',
      es: 'Reproductor IPTV profesional con características líderes en la industria y confiabilidad'
    },
    features: {
      en: ['Multi-Language Interface', 'External Player Support', 'Advanced Filters', 'Automatic Channel Updates', 'Favorites Sync', 'Low Latency Mode'],
      ar: ['واجهة متعددة اللغات', 'دعم المشغل الخارجي', 'فلاتر متقدمة', 'تحديثات تلقائية للقنوات', 'مزامنة المفضلة', 'وضع الكمون المنخفض'],
      fr: ['Interface multilingue', 'Support de lecteur externe', 'Filtres avancés', 'Mises à jour automatiques des chaînes', 'Synchronisation des favoris', 'Mode faible latence'],
      es: ['Interfaz multilingüe', 'Soporte de reproductor externo', 'Filtros avanzados', 'Actualizaciones automáticas de canales', 'Sincronización de favoritos', 'Modo de baja latencia']
    },
    installation: {
      en: [
        'Get Maven IPTV from your device store',
        'Open app and go to "Setup"',
        'Select "Add Provider"',
        'Choose M3U or Xtream connection',
        'Enter your subscription details',
        'Enjoy seamless streaming'
      ],
      ar: [
        'احصل على Maven IPTV من متجر جهازك',
        'افتح التطبيق وانتقل إلى "الإعداد"',
        'اختر "إضافة مزود"',
        'اختر اتصال M3U أو Xtream',
        'أدخل تفاصيل اشتراكك',
        'استمتع بالبث السلس'
      ],
      fr: [
        'Obtenez Maven IPTV depuis votre magasin d\'appareils',
        'Ouvrez l\'application et allez dans "Configuration"',
        'Sélectionnez "Ajouter un fournisseur"',
        'Choisissez la connexion M3U ou Xtream',
        'Entrez vos détails d\'abonnement',
        'Profitez d\'un streaming fluide'
      ],
      es: [
        'Obtén Maven IPTV desde tu tienda de dispositivos',
        'Abre la aplicación y ve a "Configuración"',
        'Selecciona "Agregar proveedor"',
        'Elige conexión M3U o Xtream',
        'Ingresa tus detalles de suscripción',
        'Disfruta de transmisión sin interrupciones'
      ]
    },
    devices: {
      en: ['Android', 'iOS', 'Android TV', 'Apple TV', 'Smart TV'],
      ar: ['أندرويد', 'iOS', 'أندرويد TV', 'أبل TV', 'التلفزيون الذكي'],
      fr: ['Android', 'iOS', 'Android TV', 'Apple TV', 'Smart TV'],
      es: ['Android', 'iOS', 'Android TV', 'Apple TV', 'Smart TV']
    }
  },
  {
    id: 'ceme-iptv',
    name: 'Ceme IPTV',
    category: 'player',
    icon: '💎',
    description: {
      en: 'Premium IPTV player with exceptional quality and advanced streaming capabilities',
      ar: 'مشغل IPTV متميز بجودة استثنائية وقدرات بث متقدمة',
      fr: 'Lecteur IPTV premium avec une qualité exceptionnelle et des capacités de streaming avancées',
      es: 'Reproductor IPTV premium con calidad excepcional y capacidades de transmisión avanzadas'
    },
    features: {
      en: ['Hardware Acceleration', 'VOD Streaming', 'Live Sports Mode', 'Multi-Audio Support', 'Secure Connection', 'Regular Updates'],
      ar: ['تسريع الأجهزة', 'بث VOD', 'وضع الرياضة المباشرة', 'دعم صوت متعدد', 'اتصال آمن', 'تحديثات منتظمة'],
      fr: ['Accélération matérielle', 'Streaming VOD', 'Mode sports en direct', 'Support multi-audio', 'Connexion sécurisée', 'Mises à jour régulières'],
      es: ['Aceleración de hardware', 'Transmisión VOD', 'Modo deportes en vivo', 'Soporte multi-audio', 'Conexión segura', 'Actualizaciones regulares']
    },
    installation: {
      en: [
        'Install Ceme IPTV application',
        'Open and select "Configuration"',
        'Add your IPTV provider details',
        'Test connection and load channels',
        'Customize interface settings',
        'Begin watching'
      ],
      ar: [
        'قم بتثبيت تطبيق Ceme IPTV',
        'افتح واختر "التكوين"',
        'أضف تفاصيل مزود IPTV الخاص بك',
        'اختبر الاتصال وحمّل القنوات',
        'خصص إعدادات الواجهة',
        'ابدأ المشاهدة'
      ],
      fr: [
        'Installez l\'application Ceme IPTV',
        'Ouvrez et sélectionnez "Configuration"',
        'Ajoutez les détails de votre fournisseur IPTV',
        'Testez la connexion et chargez les chaînes',
        'Personnalisez les paramètres de l\'interface',
        'Commencez à regarder'
      ],
      es: [
        'Instala la aplicación Ceme IPTV',
        'Abre y selecciona "Configuración"',
        'Agrega los detalles de tu proveedor IPTV',
        'Prueba la conexión y carga los canales',
        'Personaliza la configuración de la interfaz',
        'Comienza a ver'
      ]
    },
    devices: {
      en: ['Android', 'Smart TV', 'Set-Top Box', 'Tablet'],
      ar: ['أندرويد', 'التلفزيون الذكي', 'رسيفر', 'التابلت'],
      fr: ['Android', 'Smart TV', 'Décodeur', 'Tablette'],
      es: ['Android', 'Smart TV', 'Decodificador', 'Tableta']
    }
  },
  {
    id: 'client-portal',
    name: 'Client Portal',
    category: 'player',
    icon: '🔐',
    description: {
      en: 'Secure client portal for managing your IPTV subscription and accessing services',
      ar: 'بوابة عميل آمنة لإدارة اشتراك IPTV الخاص بك والوصول إلى الخدمات',
      fr: 'Portail client sécurisé pour gérer votre abonnement IPTV et accéder aux services',
      es: 'Portal de cliente seguro para administrar su suscripción IPTV y acceder a servicios'
    },
    features: {
      en: ['Subscription Management', 'Account Dashboard', 'Device Management', 'Payment History', 'Support Tickets', 'Channel Listings'],
      ar: ['إدارة الاشتراك', 'لوحة معلومات الحساب', 'إدارة الأجهزة', 'سجل الدفع', 'تذاكر الدعم', 'قوائم القنوات'],
      fr: ['Gestion d\'abonnement', 'Tableau de bord du compte', 'Gestion des appareils', 'Historique des paiements', 'Tickets de support', 'Listes de chaînes'],
      es: ['Gestión de suscripción', 'Panel de cuenta', 'Gestión de dispositivos', 'Historial de pagos', 'Tickets de soporte', 'Listados de canales']
    },
    installation: {
      en: [
        'Access Client Portal via web browser',
        'Enter your login credentials',
        'View your subscription details',
        'Download connection files (M3U/Xtream)',
        'Configure your preferred IPTV player',
        'Access full service features'
      ],
      ar: [
        'قم بالدخول إلى بوابة العميل عبر المتصفح',
        'أدخل بيانات تسجيل الدخول الخاصة بك',
        'عرض تفاصيل اشتراكك',
        'تحميل ملفات الاتصال (M3U/Xtream)',
        'قم بتكوين مشغل IPTV المفضل لديك',
        'الوصول إلى جميع ميزات الخدمة'
      ],
      fr: [
        'Accédez au portail client via un navigateur web',
        'Entrez vos identifiants de connexion',
        'Consultez les détails de votre abonnement',
        'Téléchargez les fichiers de connexion (M3U/Xtream)',
        'Configurez votre lecteur IPTV préféré',
        'Accédez à toutes les fonctionnalités du service'
      ],
      es: [
        'Accede al Portal de Cliente mediante navegador web',
        'Ingresa tus credenciales de inicio de sesión',
        'Ve los detalles de tu suscripción',
        'Descarga archivos de conexión (M3U/Xtream)',
        'Configura tu reproductor IPTV preferido',
        'Accede a todas las características del servicio'
      ]
    },
    devices: {
      en: ['Web Browser', 'Any Device with Internet'],
      ar: ['متصفح الويب', 'أي جهاز متصل بالإنترنت'],
      fr: ['Navigateur web', 'Tout appareil avec Internet'],
      es: ['Navegador web', 'Cualquier dispositivo con Internet']
    }
  },
  {
    id: 'cobra-iptv',
    name: 'Cobra IPTV',
    category: 'player',
    icon: '🐍',
    description: {
      en: 'Powerful IPTV player with advanced features for the best streaming experience',
      ar: 'مشغل IPTV قوي بميزات متقدمة لأفضل تجربة بث',
      fr: 'Lecteur IPTV puissant avec des fonctionnalités avancées pour la meilleure expérience de streaming',
      es: 'Reproductor IPTV potente con características avanzadas para la mejor experiencia de streaming'
    },
    features: {
      en: ['Fast Loading', 'Multi-Format Support', 'EPG Integration', 'VOD & Series', 'Parental Lock', 'Remote Control'],
      ar: ['تحميل سريع', 'دعم صيغ متعددة', 'تكامل EPG', 'VOD والمسلسلات', 'قفل الأطفال', 'التحكم عن بعد'],
      fr: ['Chargement rapide', 'Support multi-format', 'Intégration EPG', 'VOD et séries', 'Verrouillage parental', 'Contrôle à distance'],
      es: ['Carga rápida', 'Soporte multi-formato', 'Integración EPG', 'VOD y series', 'Bloqueo parental', 'Control remoto']
    },
    installation: {
      en: [
        'Download Cobra IPTV from app store',
        'Install and launch the application',
        'Go to "Settings" > "Add Server"',
        'Enter Xtream API credentials',
        'Load channel list and EPG data',
        'Enjoy your favorite content'
      ],
      ar: [
        'قم بتنزيل Cobra IPTV من متجر التطبيقات',
        'قم بالتثبيت وتشغيل التطبيق',
        'انتقل إلى "الإعدادات" > "إضافة خادم"',
        'أدخل بيانات Xtream API',
        'حمّل قائمة القنوات وبيانات EPG',
        'استمتع بمحتواك المفضل'
      ],
      fr: [
        'Téléchargez Cobra IPTV depuis le magasin d\'applications',
        'Installez et lancez l\'application',
        'Allez dans "Paramètres" > "Ajouter un serveur"',
        'Entrez les identifiants API Xtream',
        'Chargez la liste des chaînes et les données EPG',
        'Profitez de votre contenu préféré'
      ],
      es: [
        'Descarga Cobra IPTV desde la tienda de aplicaciones',
        'Instala e inicia la aplicación',
        'Ve a "Configuración" > "Agregar servidor"',
        'Ingresa las credenciales API Xtream',
        'Carga la lista de canales y datos EPG',
        'Disfruta de tu contenido favorito'
      ]
    },
    devices: {
      en: ['Android', 'Android TV', 'Fire TV', 'Smart TV'],
      ar: ['أندرويد', 'أندرويد TV', 'فاير TV', 'التلفزيون الذكي'],
      fr: ['Android', 'Android TV', 'Fire TV', 'Smart TV'],
      es: ['Android', 'Android TV', 'Fire TV', 'Smart TV']
    }
  },
  {
    id: 'dlta-iptv',
    name: 'Dlta IPTV',
    category: 'player',
    icon: '🚀',
    description: {
      en: 'Next-generation IPTV player with cutting-edge technology and sleek design',
      ar: 'مشغل IPTV من الجيل التالي بتقنية متطورة وتصميم أنيق',
      fr: 'Lecteur IPTV de nouvelle génération avec technologie de pointe et design élégant',
      es: 'Reproductor IPTV de próxima generación con tecnología de vanguardia y diseño elegante'
    },
    features: {
      en: ['AI-Powered Recommendations', 'Quick Zap Mode', 'Cloud Recording', 'Cross-Device Sync', 'Advanced Search', 'Custom Categories'],
      ar: ['توصيات مدعومة بالذكاء الاصطناعي', 'وضع التبديل السريع', 'التسجيل السحابي', 'المزامنة عبر الأجهزة', 'بحث متقدم', 'فئات مخصصة'],
      fr: ['Recommandations IA', 'Mode zapping rapide', 'Enregistrement cloud', 'Synchronisation multi-appareils', 'Recherche avancée', 'Catégories personnalisées'],
      es: ['Recomendaciones con IA', 'Modo Zap rápido', 'Grabación en la nube', 'Sincronización entre dispositivos', 'Búsqueda avanzada', 'Categorías personalizadas']
    },
    installation: {
      en: [
        'Install Dlta IPTV on your device',
        'Create or login to your account',
        'Add IPTV service via Settings',
        'Input server URL and credentials',
        'Synchronize your preferences',
        'Start streaming instantly'
      ],
      ar: [
        'قم بتثبيت Dlta IPTV على جهازك',
        'أنشئ حسابًا أو سجّل الدخول',
        'أضف خدمة IPTV عبر الإعدادات',
        'أدخل رابط الخادم وبيانات الاعتماد',
        'زامن تفضيلاتك',
        'ابدأ البث على الفور'
      ],
      fr: [
        'Installez Dlta IPTV sur votre appareil',
        'Créez ou connectez-vous à votre compte',
        'Ajoutez le service IPTV via les paramètres',
        'Saisissez l\'URL du serveur et les identifiants',
        'Synchronisez vos préférences',
        'Commencez à diffuser instantanément'
      ],
      es: [
        'Instala Dlta IPTV en tu dispositivo',
        'Crea o inicia sesión en tu cuenta',
        'Agrega servicio IPTV mediante Configuración',
        'Ingresa URL del servidor y credenciales',
        'Sincroniza tus preferencias',
        'Comienza a transmitir instantáneamente'
      ]
    },
    devices: {
      en: ['Android', 'iOS', 'Smart TV', 'PC/Mac', 'Streaming Devices'],
      ar: ['أندرويد', 'iOS', 'التلفزيون الذكي', 'PC/ماك', 'أجهزة البث'],
      fr: ['Android', 'iOS', 'Smart TV', 'PC/Mac', 'Appareils de streaming'],
      es: ['Android', 'iOS', 'Smart TV', 'PC/Mac', 'Dispositivos de streaming']
    }
  },
  {
    id: 'duplex-play',
    name: 'Duplex Play',
    category: 'player',
    icon: '▶️',
    description: {
      en: 'Dual-mode IPTV player supporting both live TV and on-demand content seamlessly',
      ar: 'مشغل IPTV ثنائي الوضع يدعم التلفزيون المباشر والمحتوى عند الطلب بسلاسة',
      fr: 'Lecteur IPTV double mode prenant en charge la TV en direct et le contenu à la demande',
      es: 'Reproductor IPTV de modo dual que admite TV en vivo y contenido bajo demanda sin problemas'
    },
    features: {
      en: ['Dual Streaming Mode', 'Picture Quality Control', 'EPG Timeline', 'Series Manager', 'Watchlist', 'Continue Watching'],
      ar: ['وضع البث المزدوج', 'التحكم في جودة الصورة', 'جدول EPG الزمني', 'مدير المسلسلات', 'قائمة المشاهدة', 'متابعة المشاهدة'],
      fr: ['Mode de streaming double', 'Contrôle de qualité d\'image', 'Timeline EPG', 'Gestionnaire de séries', 'Liste de lecture', 'Continuer à regarder'],
      es: ['Modo de transmisión dual', 'Control de calidad de imagen', 'Línea de tiempo EPG', 'Administrador de series', 'Lista de reproducción', 'Continuar viendo']
    },
    installation: {
      en: [
        'Download Duplex Play app',
        'Launch and select "First Setup"',
        'Choose your input method (M3U/Xtream)',
        'Enter subscription credentials',
        'Configure playback preferences',
        'Start dual-mode streaming'
      ],
      ar: [
        'قم بتنزيل تطبيق Duplex Play',
        'افتح واختر "الإعداد الأول"',
        'اختر طريقة الإدخال (M3U/Xtream)',
        'أدخل بيانات الاشتراك',
        'قم بتكوين تفضيلات التشغيل',
        'ابدأ البث ثنائي الوضع'
      ],
      fr: [
        'Téléchargez l\'application Duplex Play',
        'Lancez et sélectionnez "Première configuration"',
        'Choisissez votre méthode d\'entrée (M3U/Xtream)',
        'Entrez les identifiants d\'abonnement',
        'Configurez les préférences de lecture',
        'Commencez le streaming en double mode'
      ],
      es: [
        'Descarga la aplicación Duplex Play',
        'Inicia y selecciona "Primera configuración"',
        'Elige tu método de entrada (M3U/Xtream)',
        'Ingresa credenciales de suscripción',
        'Configura preferencias de reproducción',
        'Comienza transmisión en modo dual'
      ]
    },
    devices: {
      en: ['Android', 'Android TV', 'Amazon Fire TV', 'Smart TV'],
      ar: ['أندرويد', 'أندرويد TV', 'أمازون فاير TV', 'التلفزيون الذكي'],
      fr: ['Android', 'Android TV', 'Amazon Fire TV', 'Smart TV'],
      es: ['Android', 'Android TV', 'Amazon Fire TV', 'Smart TV']
    }
  },
  
  // Category B - Smart TV Apps
  {
    id: 'ibo-player',
    name: 'IBO Player IPTV',
    category: 'smarttv',
    icon: '📱',
    description: {
      en: 'Professional IPTV player designed specifically for Smart TVs with activation system',
      ar: 'مشغل IPTV احترافي مصمم خصيصًا للتلفزيونات الذكية مع نظام تفعيل',
      fr: 'Lecteur IPTV professionnel conçu spécifiquement pour les Smart TV avec système d\'activation',
      es: 'Reproductor IPTV profesional diseñado específicamente para Smart TVs con sistema de activación'
    },
    features: {
      en: ['Smart TV Optimized', 'Activation Code System', 'Remote Control Friendly', 'EPG Display', 'Favorites & Groups', 'Automatic Updates'],
      ar: ['محسّن للتلفزيون الذكي', 'نظام رمز التفعيل', 'متوافق مع الريموت', 'عرض EPG', 'المفضلة والمجموعات', 'تحديثات تلقائية'],
      fr: ['Optimisé pour Smart TV', 'Système de code d\'activation', 'Compatible télécommande', 'Affichage EPG', 'Favoris et groupes', 'Mises à jour automatiques'],
      es: ['Optimizado para Smart TV', 'Sistema de código de activación', 'Compatible con control remoto', 'Pantalla EPG', 'Favoritos y grupos', 'Actualizaciones automáticas']
    },
    installation: {
      en: [
        'Find IBO Player in your Smart TV app store',
        'Install and open the application',
        'Note the activation code shown on screen',
        'Visit activation website from mobile/PC',
        'Enter activation code and subscription details',
        'Return to TV and enjoy streaming'
      ],
      ar: [
        'ابحث عن IBO Player في متجر تطبيقات التلفزيون الذكي',
        'قم بالتثبيت وافتح التطبيق',
        'لاحظ رمز التفعيل المعروض على الشاشة',
        'قم بزيارة موقع التفعيل من الموبايل/الكمبيوتر',
        'أدخل رمز التفعيل وتفاصيل الاشتراك',
        'ارجع إلى التلفزيون واستمتع بالبث'
      ],
      fr: [
        'Trouvez IBO Player dans le magasin d\'applications de votre Smart TV',
        'Installez et ouvrez l\'application',
        'Notez le code d\'activation affiché à l\'écran',
        'Visitez le site d\'activation depuis mobile/PC',
        'Entrez le code d\'activation et les détails de l\'abonnement',
        'Retournez à la TV et profitez du streaming'
      ],
      es: [
        'Encuentra IBO Player en la tienda de aplicaciones de tu Smart TV',
        'Instala y abre la aplicación',
        'Anota el código de activación mostrado en pantalla',
        'Visita el sitio web de activación desde móvil/PC',
        'Ingresa el código de activación y detalles de suscripción',
        'Regresa a la TV y disfruta del streaming'
      ]
    },
    devices: {
      en: ['Samsung Smart TV (Tizen)', 'LG Smart TV (WebOS)', 'Android TV', 'Fire TV'],
      ar: ['سامسونج سمارت TV (Tizen)', 'LG سمارت TV (WebOS)', 'أندرويد TV', 'فاير TV'],
      fr: ['Samsung Smart TV (Tizen)', 'LG Smart TV (WebOS)', 'Android TV', 'Fire TV'],
      es: ['Samsung Smart TV (Tizen)', 'LG Smart TV (WebOS)', 'Android TV', 'Fire TV']
    }
  },
  {
    id: 'flix-iptv-app',
    name: 'Flix IPTV App',
    category: 'smarttv',
    icon: '🎯',
    description: {
      en: 'Official Flix IPTV application with premium features and exclusive content access',
      ar: 'تطبيق Flix IPTV الرسمي مع ميزات متميزة والوصول الحصري للمحتوى',
      fr: 'Application officielle Flix IPTV avec fonctionnalités premium et accès exclusif au contenu',
      es: 'Aplicación oficial Flix IPTV con características premium y acceso exclusivo a contenido'
    },
    features: {
      en: ['Premium Interface', 'One-Click Activation', 'All Channels Included', 'VOD & Live TV', '4K Streaming', 'Priority Support'],
      ar: ['واجهة متميزة', 'تفعيل بنقرة واحدة', 'جميع القنوات مشمولة', 'VOD والتلفزيون المباشر', 'بث 4K', 'دعم ذو أولوية'],
      fr: ['Interface premium', 'Activation en un clic', 'Toutes les chaînes incluses', 'VOD et TV en direct', 'Streaming 4K', 'Support prioritaire'],
      es: ['Interfaz premium', 'Activación con un clic', 'Todos los canales incluidos', 'VOD y TV en vivo', 'Transmisión 4K', 'Soporte prioritario']
    },
    installation: {
      en: [
        'Download Flix IPTV from your Smart TV store',
        'Open app and tap "Activate"',
        'Your device MAC address will be displayed',
        'Contact support to link your subscription',
        'Restart the app after activation',
        'Browse and watch unlimited content'
      ],
      ar: [
        'قم بتنزيل Flix IPTV من متجر التلفزيون الذكي',
        'افتح التطبيق واضغط على "تفعيل"',
        'سيتم عرض عنوان MAC الخاص بجهازك',
        'اتصل بالدعم لربط اشتراكك',
        'أعد تشغيل التطبيق بعد التفعيل',
        'تصفح وشاهد محتوى غير محدود'
      ],
      fr: [
        'Téléchargez Flix IPTV depuis le magasin de votre Smart TV',
        'Ouvrez l\'application et appuyez sur "Activer"',
        'L\'adresse MAC de votre appareil sera affichée',
        'Contactez le support pour lier votre abonnement',
        'Redémarrez l\'application après l\'activation',
        'Parcourez et regardez du contenu illimité'
      ],
      es: [
        'Descarga Flix IPTV desde la tienda de tu Smart TV',
        'Abre la aplicación y toca "Activar"',
        'Se mostrará la dirección MAC de tu dispositivo',
        'Contacta al soporte para vincular tu suscripción',
        'Reinicia la aplicación después de la activación',
        'Navega y mira contenido ilimitado'
      ]
    },
    devices: {
      en: ['Samsung Tizen', 'LG WebOS', 'Android TV', 'Apple TV', 'Fire TV'],
      ar: ['سامسونج Tizen', 'LG WebOS', 'أندرويد TV', 'أبل TV', 'فاير TV'],
      fr: ['Samsung Tizen', 'LG WebOS', 'Android TV', 'Apple TV', 'Fire TV'],
      es: ['Samsung Tizen', 'LG WebOS', 'Android TV', 'Apple TV', 'Fire TV']
    }
  },
  {
    id: 'elk-player',
    name: 'ELK Player',
    category: 'smarttv',
    icon: '🦌',
    description: {
      en: 'Lightweight and fast IPTV player optimized for all Smart TV platforms',
      ar: 'مشغل IPTV خفيف وسريع محسّن لجميع منصات التلفزيون الذكي',
      fr: 'Lecteur IPTV léger et rapide optimisé pour toutes les plateformes Smart TV',
      es: 'Reproductor IPTV ligero y rápido optimizado para todas las plataformas Smart TV'
    },
    features: {
      en: ['Fast Channel Switching', 'Low Memory Usage', 'EPG Support', 'M3U Import', 'Simple Interface', 'Multi-Language'],
      ar: ['تبديل سريع للقنوات', 'استخدام منخفض للذاكرة', 'دعم EPG', 'استيراد M3U', 'واجهة بسيطة', 'متعدد اللغات'],
      fr: ['Changement rapide de chaîne', 'Faible utilisation de mémoire', 'Support EPG', 'Import M3U', 'Interface simple', 'Multilingue'],
      es: ['Cambio rápido de canales', 'Bajo uso de memoria', 'Soporte EPG', 'Importación M3U', 'Interfaz simple', 'Multi-idioma']
    },
    installation: {
      en: [
        'Search for ELK Player in your TV store',
        'Install the application',
        'Open and go to "Playlist Settings"',
        'Add M3U playlist URL',
        'Or use Xtream Codes login',
        'Load channels and start watching'
      ],
      ar: [
        'ابحث عن ELK Player في متجر التلفزيون',
        'قم بتثبيت التطبيق',
        'افتح وانتقل إلى "إعدادات قائمة التشغيل"',
        'أضف رابط قائمة التشغيل M3U',
        'أو استخدم تسجيل الدخول Xtream Codes',
        'حمّل القنوات وابدأ المشاهدة'
      ],
      fr: [
        'Recherchez ELK Player dans votre magasin TV',
        'Installez l\'application',
        'Ouvrez et allez dans "Paramètres de playlist"',
        'Ajoutez l\'URL de la playlist M3U',
        'Ou utilisez la connexion Xtream Codes',
        'Chargez les chaînes et commencez à regarder'
      ],
      es: [
        'Busca ELK Player en tu tienda de TV',
        'Instala la aplicación',
        'Abre y ve a "Configuración de lista de reproducción"',
        'Agrega URL de lista de reproducción M3U',
        'O usa inicio de sesión Xtream Codes',
        'Carga canales y comienza a ver'
      ]
    },
    devices: {
      en: ['Samsung TV', 'LG TV', 'Android TV', 'Tizen OS', 'WebOS'],
      ar: ['سامسونج TV', 'LG TV', 'أندرويد TV', 'Tizen OS', 'WebOS'],
      fr: ['Samsung TV', 'LG TV', 'Android TV', 'Tizen OS', 'WebOS'],
      es: ['Samsung TV', 'LG TV', 'Android TV', 'Tizen OS', 'WebOS']
    }
  },
  {
    id: 'flixapp',
    name: 'FlixApp',
    category: 'smarttv',
    icon: '🎪',
    description: {
      en: 'All-in-one entertainment app for Smart TVs with IPTV and VOD integration',
      ar: 'تطبيق ترفيهي شامل للتلفزيونات الذكية مع تكامل IPTV و VOD',
      fr: 'Application de divertissement tout-en-un pour Smart TV avec intégration IPTV et VOD',
      es: 'Aplicación de entretenimiento todo en uno para Smart TVs con integración IPTV y VOD'
    },
    features: {
      en: ['Unified Interface', 'Content Discovery', 'Personalized Recommendations', 'Multi-Profile Support', 'Offline Downloads', 'Streaming Quality Selector'],
      ar: ['واجهة موحدة', 'اكتشاف المحتوى', 'توصيات مخصصة', 'دعم ملفات متعددة', 'التنزيلات دون اتصال', 'محدد جودة البث'],
      fr: ['Interface unifiée', 'Découverte de contenu', 'Recommandations personnalisées', 'Support multi-profils', 'Téléchargements hors ligne', 'Sélecteur de qualité de streaming'],
      es: ['Interfaz unificada', 'Descubrimiento de contenido', 'Recomendaciones personalizadas', 'Soporte multi-perfil', 'Descargas sin conexión', 'Selector de calidad de transmisión']
    },
    installation: {
      en: [
        'Install FlixApp from your Smart TV store',
        'Create your account or login',
        'Navigate to "Settings" > "IPTV Setup"',
        'Add your subscription credentials',
        'Configure viewing preferences',
        'Explore and watch content'
      ],
      ar: [
        'قم بتثبيت FlixApp من متجر التلفزيون الذكي',
        'أنشئ حسابك أو سجّل الدخول',
        'انتقل إلى "الإعدادات" > "إعداد IPTV"',
        'أضف بيانات اشتراكك',
        'قم بتكوين تفضيلات المشاهدة',
        'استكشف وشاهد المحتوى'
      ],
      fr: [
        'Installez FlixApp depuis le magasin de votre Smart TV',
        'Créez votre compte ou connectez-vous',
        'Accédez à "Paramètres" > "Configuration IPTV"',
        'Ajoutez vos identifiants d\'abonnement',
        'Configurez les préférences de visionnage',
        'Explorez et regardez du contenu'
      ],
      es: [
        'Instala FlixApp desde la tienda de tu Smart TV',
        'Crea tu cuenta o inicia sesión',
        'Navega a "Configuración" > "Configuración IPTV"',
        'Agrega tus credenciales de suscripción',
        'Configura preferencias de visualización',
        'Explora y mira contenido'
      ]
    },
    devices: {
      en: ['Samsung Smart TV', 'LG Smart TV', 'Android TV', 'Sony Bravia'],
      ar: ['سامسونج سمارت TV', 'LG سمارت TV', 'أندرويد TV', 'سوني برافيا'],
      fr: ['Samsung Smart TV', 'LG Smart TV', 'Android TV', 'Sony Bravia'],
      es: ['Samsung Smart TV', 'LG Smart TV', 'Android TV', 'Sony Bravia']
    }
  },
  {
    id: 'nanomid',
    name: 'Nanomid',
    category: 'smarttv',
    icon: '🔷',
    description: {
      en: 'Compact IPTV player for Smart TVs with focus on simplicity and performance',
      ar: 'مشغل IPTV مدمج للتلفزيونات الذكية مع التركيز على البساطة والأداء',
      fr: 'Lecteur IPTV compact pour Smart TV axé sur la simplicité et la performance',
      es: 'Reproductor IPTV compacto para Smart TVs enfocado en simplicidad y rendimiento'
    },
    features: {
      en: ['Minimal Design', 'Quick Access', 'Channel Categories', 'Recent Channels', 'EPG Grid', 'Fast Zapping'],
      ar: ['تصميم بسيط', 'وصول سريع', 'فئات القنوات', 'القنوات الأخيرة', 'شبكة EPG', 'تبديل سريع'],
      fr: ['Design minimaliste', 'Accès rapide', 'Catégories de chaînes', 'Chaînes récentes', 'Grille EPG', 'Zapping rapide'],
      es: ['Diseño minimalista', 'Acceso rápido', 'Categorías de canales', 'Canales recientes', 'Cuadrícula EPG', 'Zapping rápido']
    },
    installation: {
      en: [
        'Download Nanomid from Smart TV store',
        'Launch the app',
        'Enter activation code (if required)',
        'Add M3U or Xtream server details',
        'Load channel database',
        'Enjoy minimal, fast streaming'
      ],
      ar: [
        'قم بتنزيل Nanomid من متجر التلفزيون الذكي',
        'افتح التطبيق',
        'أدخل رمز التفعيل (إذا لزم الأمر)',
        'أضف تفاصيل خادم M3U أو Xtream',
        'حمّل قاعدة بيانات القنوات',
        'استمتع ببث بسيط وسريع'
      ],
      fr: [
        'Téléchargez Nanomid depuis le magasin Smart TV',
        'Lancez l\'application',
        'Entrez le code d\'activation (si nécessaire)',
        'Ajoutez les détails du serveur M3U ou Xtream',
        'Chargez la base de données des chaînes',
        'Profitez d\'un streaming minimal et rapide'
      ],
      es: [
        'Descarga Nanomid desde la tienda Smart TV',
        'Inicia la aplicación',
        'Ingresa código de activación (si es necesario)',
        'Agrega detalles del servidor M3U o Xtream',
        'Carga base de datos de canales',
        'Disfruta de transmisión mínima y rápida'
      ]
    },
    devices: {
      en: ['Smart TV', 'Android TV', 'Tizen', 'WebOS'],
      ar: ['التلفزيون الذكي', 'أندرويد TV', 'Tizen', 'WebOS'],
      fr: ['Smart TV', 'Android TV', 'Tizen', 'WebOS'],
      es: ['Smart TV', 'Android TV', 'Tizen', 'WebOS']
    }
  },
  {
    id: 'net-box',
    name: 'Net Box',
    category: 'smarttv',
    icon: '📦',
    description: {
      en: 'Universal IPTV box solution supporting multiple protocols and formats',
      ar: 'حل صندوق IPTV عالمي يدعم بروتوكولات وصيغ متعددة',
      fr: 'Solution de box IPTV universelle prenant en charge plusieurs protocoles et formats',
      es: 'Solución de caja IPTV universal que admite múltiples protocolos y formatos'
    },
    features: {
      en: ['Multiple Protocol Support', 'HLS & RTMP Streaming', 'Advanced Buffering', 'Channel Recording', 'Timeshift Function', 'Customizable UI'],
      ar: ['دعم بروتوكولات متعددة', 'بث HLS و RTMP', 'تخزين مؤقت متقدم', 'تسجيل القنوات', 'وظيفة نقل الوقت', 'واجهة قابلة للتخصيص'],
      fr: ['Support de protocoles multiples', 'Streaming HLS et RTMP', 'Mise en mémoire tampon avancée', 'Enregistrement de chaînes', 'Fonction Timeshift', 'Interface personnalisable'],
      es: ['Soporte de múltiples protocolos', 'Transmisión HLS y RTMP', 'Almacenamiento avanzado', 'Grabación de canales', 'Función Timeshift', 'IU personalizable']
    },
    installation: {
      en: [
        'Install Net Box from device store',
        'Open and access "Configuration"',
        'Select "Add Service"',
        'Choose connection method',
        'Enter server information',
        'Test and start streaming'
      ],
      ar: [
        'قم بتثبيت Net Box من متجر الأجهزة',
        'افتح وادخل إلى "التكوين"',
        'اختر "إضافة خدمة"',
        'اختر طريقة الاتصال',
        'أدخل معلومات الخادم',
        'اختبر وابدأ البث'
      ],
      fr: [
        'Installez Net Box depuis le magasin d\'appareils',
        'Ouvrez et accédez à "Configuration"',
        'Sélectionnez "Ajouter un service"',
        'Choisissez la méthode de connexion',
        'Entrez les informations du serveur',
        'Testez et commencez le streaming'
      ],
      es: [
        'Instala Net Box desde la tienda de dispositivos',
        'Abre y accede a "Configuración"',
        'Selecciona "Agregar servicio"',
        'Elige método de conexión',
        'Ingresa información del servidor',
        'Prueba y comienza a transmitir'
      ]
    },
    devices: {
      en: ['Smart TV', 'Android Box', 'Set-Top Box', 'Media Players'],
      ar: ['التلفزيون الذكي', 'أندرويد بوكس', 'رسيفر', 'مشغلات الوسائط'],
      fr: ['Smart TV', 'Android Box', 'Décodeur', 'Lecteurs multimédias'],
      es: ['Smart TV', 'Android Box', 'Decodificador', 'Reproductores multimedia']
    }
  },
  {
    id: 'net-iptv',
    name: 'Net IPTV',
    category: 'smarttv',
    icon: '🌐',
    description: {
      en: 'Network-based IPTV player with cloud synchronization across all devices',
      ar: 'مشغل IPTV قائم على الشبكة مع مزامنة سحابية عبر جميع الأجهزة',
      fr: 'Lecteur IPTV basé sur le réseau avec synchronisation cloud sur tous les appareils',
      es: 'Reproductor IPTV basado en red con sincronización en la nube en todos los dispositivos'
    },
    features: {
      en: ['Cloud Playlist', 'Cross-Device Sync', 'Web Management', 'Remote Control App', 'Auto-Update', 'Backup & Restore'],
      ar: ['قائمة تشغيل سحابية', 'مزامنة عبر الأجهزة', 'الإدارة عبر الويب', 'تطبيق التحكم عن بعد', 'تحديث تلقائي', 'النسخ الاحتياطي والاستعادة'],
      fr: ['Playlist cloud', 'Synchronisation multi-appareils', 'Gestion web', 'Application de contrôle à distance', 'Mise à jour automatique', 'Sauvegarde et restauration'],
      es: ['Lista de reproducción en la nube', 'Sincronización entre dispositivos', 'Gestión web', 'App de control remoto', 'Actualización automática', 'Copia de seguridad y restauración']
    },
    installation: {
      en: [
        'Install Net IPTV from your TV app store',
        'Visit activation website on mobile/PC',
        'Register your device using code',
        'Upload M3U playlist to cloud',
        'Return to TV and refresh',
        'Start watching synchronized content'
      ],
      ar: [
        'قم بتثبيت Net IPTV من متجر تطبيقات التلفزيون',
        'قم بزيارة موقع التفعيل على الموبايل/الكمبيوتر',
        'سجّل جهازك باستخدام الرمز',
        'ارفع قائمة التشغيل M3U إلى السحابة',
        'ارجع إلى التلفزيون وحدّث',
        'ابدأ مشاهدة المحتوى المتزامن'
      ],
      fr: [
        'Installez Net IPTV depuis le magasin d\'applications de votre TV',
        'Visitez le site d\'activation sur mobile/PC',
        'Enregistrez votre appareil en utilisant le code',
        'Téléchargez la playlist M3U dans le cloud',
        'Retournez à la TV et actualisez',
        'Commencez à regarder du contenu synchronisé'
      ],
      es: [
        'Instala Net IPTV desde la tienda de aplicaciones de tu TV',
        'Visita el sitio web de activación en móvil/PC',
        'Registra tu dispositivo usando el código',
        'Sube lista de reproducción M3U a la nube',
        'Regresa a la TV y actualiza',
        'Comienza a ver contenido sincronizado'
      ]
    },
    devices: {
      en: ['Samsung Smart TV', 'LG Smart TV', 'Philips TV', 'Sony TV', 'Panasonic TV'],
      ar: ['سامسونج سمارت TV', 'LG سمارت TV', 'فيليبس TV', 'سوني TV', 'باناسونيك TV'],
      fr: ['Samsung Smart TV', 'LG Smart TV', 'Philips TV', 'Sony TV', 'Panasonic TV'],
      es: ['Samsung Smart TV', 'LG Smart TV', 'Philips TV', 'Sony TV', 'Panasonic TV']
    }
  },
  {
    id: 'purple-smart-iptv',
    name: 'Purple Smart IPTV',
    category: 'smarttv',
    icon: '💜',
    description: {
      en: 'Smart IPTV application with premium features and exceptional streaming quality',
      ar: 'تطبيق IPTV ذكي بميزات متميزة وجودة بث استثنائية',
      fr: 'Application IPTV intelligente avec fonctionnalités premium et qualité de streaming exceptionnelle',
      es: 'Aplicación IPTV inteligente con características premium y calidad de streaming excepcional'
    },
    features: {
      en: ['Premium Streaming', 'Smart EPG', 'VOD Collections', 'Multi-Language Audio', 'Subtitle Sync', 'Watch History'],
      ar: ['بث متميز', 'EPG ذكي', 'مجموعات VOD', 'صوت متعدد اللغات', 'مزامنة الترجمة', 'سجل المشاهدة'],
      fr: ['Streaming premium', 'EPG intelligent', 'Collections VOD', 'Audio multilingue', 'Synchronisation des sous-titres', 'Historique de visionnage'],
      es: ['Transmisión premium', 'EPG inteligente', 'Colecciones VOD', 'Audio multilingüe', 'Sincronización de subtítulos', 'Historial de visualización']
    },
    installation: {
      en: [
        'Find Purple Smart IPTV in your TV store',
        'Install and open the app',
        'Select "Initial Setup"',
        'Add Xtream or M3U playlist',
        'Configure EPG source',
        'Start streaming premium content'
      ],
      ar: [
        'ابحث عن Purple Smart IPTV في متجر التلفزيون',
        'قم بالتثبيت وافتح التطبيق',
        'اختر "الإعداد الأولي"',
        'أضف قائمة تشغيل Xtream أو M3U',
        'قم بتكوين مصدر EPG',
        'ابدأ بث المحتوى المميز'
      ],
      fr: [
        'Trouvez Purple Smart IPTV dans votre magasin TV',
        'Installez et ouvrez l\'application',
        'Sélectionnez "Configuration initiale"',
        'Ajoutez une playlist Xtream ou M3U',
        'Configurez la source EPG',
        'Commencez à diffuser du contenu premium'
      ],
      es: [
        'Encuentra Purple Smart IPTV en tu tienda de TV',
        'Instala y abre la aplicación',
        'Selecciona "Configuración inicial"',
        'Agrega lista de reproducción Xtream o M3U',
        'Configura fuente EPG',
        'Comienza a transmitir contenido premium'
      ]
    },
    devices: {
      en: ['Samsung TV', 'LG TV', 'Hisense TV', 'TCL TV', 'Zeasn TV'],
      ar: ['سامسونج TV', 'LG TV', 'هايسنس TV', 'TCL TV', 'Zeasn TV'],
      fr: ['Samsung TV', 'LG TV', 'Hisense TV', 'TCL TV', 'Zeasn TV'],
      es: ['Samsung TV', 'LG TV', 'Hisense TV', 'TCL TV', 'Zeasn TV']
    }
  },
  {
    id: 'amazon-fire-tv',
    name: 'Amazon Fire TV IPTV',
    category: 'smarttv',
    icon: '🔥',
    description: {
      en: 'Optimized IPTV solution for Amazon Fire TV and Fire Stick devices',
      ar: 'حل IPTV محسّن لأجهزة Amazon Fire TV و Fire Stick',
      fr: 'Solution IPTV optimisée pour les appareils Amazon Fire TV et Fire Stick',
      es: 'Solución IPTV optimizada para dispositivos Amazon Fire TV y Fire Stick'
    },
    features: {
      en: ['Fire TV Optimized', 'Alexa Voice Control', 'Remote Friendly', '4K HDR Support', 'Quick Launch', 'Low Resource Usage'],
      ar: ['محسّن لـ Fire TV', 'التحكم الصوتي Alexa', 'متوافق مع الريموت', 'دعم 4K HDR', 'إطلاق سريع', 'استخدام منخفض للموارد'],
      fr: ['Optimisé pour Fire TV', 'Contrôle vocal Alexa', 'Compatible télécommande', 'Support 4K HDR', 'Lancement rapide', 'Utilisation faible des ressources'],
      es: ['Optimizado para Fire TV', 'Control de voz Alexa', 'Compatible con control remoto', 'Soporte 4K HDR', 'Inicio rápido', 'Bajo uso de recursos']
    },
    installation: {
      en: [
        'Open Amazon App Store on Fire TV',
        'Search for IPTV player app',
        'Download and install',
        'Launch app using remote or Alexa',
        'Add your IPTV subscription',
        'Use voice control for easy navigation'
      ],
      ar: [
        'افتح متجر أمازون على Fire TV',
        'ابحث عن تطبيق مشغل IPTV',
        'قم بالتنزيل والتثبيت',
        'افتح التطبيق باستخدام الريموت أو Alexa',
        'أضف اشتراك IPTV الخاص بك',
        'استخدم التحكم الصوتي للتنقل السهل'
      ],
      fr: [
        'Ouvrez l\'Amazon App Store sur Fire TV',
        'Recherchez l\'application de lecteur IPTV',
        'Téléchargez et installez',
        'Lancez l\'application avec la télécommande ou Alexa',
        'Ajoutez votre abonnement IPTV',
        'Utilisez le contrôle vocal pour une navigation facile'
      ],
      es: [
        'Abre Amazon App Store en Fire TV',
        'Busca la aplicación de reproductor IPTV',
        'Descarga e instala',
        'Inicia la app usando el control remoto o Alexa',
        'Agrega tu suscripción IPTV',
        'Usa control de voz para navegación fácil'
      ]
    },
    devices: {
      en: ['Fire TV Stick', 'Fire TV Cube', 'Fire TV Edition TVs'],
      ar: ['فاير TV ستيك', 'فاير TV كيوب', 'أجهزة تلفزيون Fire TV Edition'],
      fr: ['Fire TV Stick', 'Fire TV Cube', 'TV Fire TV Edition'],
      es: ['Fire TV Stick', 'Fire TV Cube', 'TVs Fire TV Edition']
    }
  },
  {
    id: 'quzutv',
    name: 'QuzuTV',
    category: 'smarttv',
    icon: '🎮',
    description: {
      en: 'Modern IPTV player with gaming-inspired interface and powerful features',
      ar: 'مشغل IPTV حديث بواجهة مستوحاة من الألعاب وميزات قوية',
      fr: 'Lecteur IPTV moderne avec interface inspirée des jeux et fonctionnalités puissantes',
      es: 'Reproductor IPTV moderno con interfaz inspirada en juegos y características poderosas'
    },
    features: {
      en: ['Gaming UI Design', 'Controller Support', 'Fast Navigation', 'Live & VOD Modes', 'Achievement System', 'Social Features'],
      ar: ['تصميم واجهة ألعاب', 'دعم وحدة التحكم', 'تنقل سريع', 'أوضاع مباشرة و VOD', 'نظام الإنجازات', 'ميزات اجتماعية'],
      fr: ['Design d\'interface de jeu', 'Support de manette', 'Navigation rapide', 'Modes direct et VOD', 'Système de succès', 'Fonctionnalités sociales'],
      es: ['Diseño de interfaz de juegos', 'Soporte de controlador', 'Navegación rápida', 'Modos en vivo y VOD', 'Sistema de logros', 'Funciones sociales']
    },
    installation: {
      en: [
        'Download QuzuTV from Smart TV store',
        'Install and create account',
        'Link your IPTV subscription',
        'Configure controller preferences',
        'Customize your interface theme',
        'Start your streaming adventure'
      ],
      ar: [
        'قم بتنزيل QuzuTV من متجر التلفزيون الذكي',
        'قم بالتثبيت وإنشاء حساب',
        'اربط اشتراك IPTV الخاص بك',
        'قم بتكوين تفضيلات وحدة التحكم',
        'خصص سمة الواجهة الخاصة بك',
        'ابدأ مغامرة البث الخاصة بك'
      ],
      fr: [
        'Téléchargez QuzuTV depuis le magasin Smart TV',
        'Installez et créez un compte',
        'Liez votre abonnement IPTV',
        'Configurez les préférences de manette',
        'Personnalisez le thème de votre interface',
        'Commencez votre aventure de streaming'
      ],
      es: [
        'Descarga QuzuTV desde la tienda Smart TV',
        'Instala y crea una cuenta',
        'Vincula tu suscripción IPTV',
        'Configura preferencias de controlador',
        'Personaliza el tema de tu interfaz',
        'Comienza tu aventura de streaming'
      ]
    },
    devices: {
      en: ['Android TV', 'Smart TV', 'Game Consoles', 'Streaming Boxes'],
      ar: ['أندرويد TV', 'التلفزيون الذكي', 'أجهزة الألعاب', 'أجهزة البث'],
      fr: ['Android TV', 'Smart TV', 'Consoles de jeux', 'Boîtiers de streaming'],
      es: ['Android TV', 'Smart TV', 'Consolas de juegos', 'Cajas de streaming']
    }
  },
  
  // Category C - Satellite Receiver
  {
    id: 'satellite-receiver',
    name: 'Satellite Receiver IPTV',
    category: 'satellite',
    icon: '🛰️',
    description: {
      en: 'Professional IPTV setup for satellite receivers with CCcam and N-share support',
      ar: 'إعداد IPTV احترافي لأجهزة الاستقبال الفضائية مع دعم CCcam و N-share',
      fr: 'Configuration IPTV professionnelle pour récepteurs satellites avec support CCcam et N-share',
      es: 'Configuración IPTV profesional para receptores satelitales con soporte CCcam y N-share'
    },
    features: {
      en: ['CCcam Line Support', 'N-Share Protocol', 'Encrypted Channels', 'HD Satellite', 'Fast Zapping', 'Auto Channel Scan'],
      ar: ['دعم خط CCcam', 'بروتوكول N-Share', 'القنوات المشفرة', 'قمر صناعي HD', 'تبديل سريع', 'فحص تلقائي للقنوات'],
      fr: ['Support ligne CCcam', 'Protocole N-Share', 'Chaînes cryptées', 'Satellite HD', 'Zapping rapide', 'Scan automatique des chaînes'],
      es: ['Soporte de línea CCcam', 'Protocolo N-Share', 'Canales encriptados', 'Satélite HD', 'Zapping rápido', 'Escaneo automático de canales']
    },
    installation: {
      en: [
        'Access your receiver menu (usually Menu button)',
        'Navigate to "Network Settings" or "Internet Settings"',
        'Configure IP address, Gateway, DNS (DHCP or Manual)',
        'Go to "CCcam/IPTV Configuration"',
        'Enter server details (Host, Port, Username, Password)',
        'Save configuration and reboot receiver',
        'Scan channels and enjoy encrypted channels'
      ],
      ar: [
        'ادخل إلى قائمة الرسيفر (عادة زر Menu)',
        'انتقل إلى "إعدادات الشبكة" أو "إعدادات الإنترنت"',
        'قم بتكوين عنوان IP والبوابة و DNS (DHCP أو يدوي)',
        'انتقل إلى "إعدادات CCcam/IPTV"',
        'أدخل تفاصيل الخادم (المضيف، المنفذ، اسم المستخدم، كلمة المرور)',
        'احفظ التكوين وأعد تشغيل الرسيفر',
        'ابحث عن القنوات واستمتع بالقنوات المشفرة'
      ],
      fr: [
        'Accédez au menu de votre récepteur (généralement bouton Menu)',
        'Naviguez vers "Paramètres réseau" ou "Paramètres Internet"',
        'Configurez l\'adresse IP, passerelle, DNS (DHCP ou manuel)',
        'Allez dans "Configuration CCcam/IPTV"',
        'Entrez les détails du serveur (Hôte, Port, Utilisateur, Mot de passe)',
        'Enregistrez la configuration et redémarrez le récepteur',
        'Scannez les chaînes et profitez des chaînes cryptées'
      ],
      es: [
        'Accede al menú de tu receptor (generalmente botón Menu)',
        'Navega a "Configuración de red" o "Configuración de Internet"',
        'Configura dirección IP, Gateway, DNS (DHCP o Manual)',
        'Ve a "Configuración CCcam/IPTV"',
        'Ingresa detalles del servidor (Host, Puerto, Usuario, Contraseña)',
        'Guarda configuración y reinicia el receptor',
        'Escanea canales y disfruta de canales encriptados'
      ]
    },
    devices: {
      en: ['HD Satellite Receivers', 'Enigma2 Receivers', 'Linux Receivers', '4K Receivers'],
      ar: ['أجهزة استقبال فضائية HD', 'أجهزة Enigma2', 'أجهزة لينكس', 'أجهزة 4K'],
      fr: ['Récepteurs satellites HD', 'Récepteurs Enigma2', 'Récepteurs Linux', 'Récepteurs 4K'],
      es: ['Receptores satelitales HD', 'Receptores Enigma2', 'Receptores Linux', 'Receptores 4K']
    }
  },
  
  // Category D - Servers
  {
    id: 'cccam-server',
    name: 'CCcam Server',
    category: 'server',
    icon: '🖥️',
    description: {
      en: 'Premium CCcam server lines for satellite receiver card sharing with 99.9% uptime',
      ar: 'خطوط خادم CCcam متميزة لمشاركة بطاقات أجهزة الاستقبال الفضائية مع 99.9٪ وقت تشغيل',
      fr: 'Lignes de serveur CCcam premium pour le partage de cartes de récepteur satellite avec 99.9% de disponibilité',
      es: 'Líneas de servidor CCcam premium para compartir tarjetas de receptor satelital con 99.9% de tiempo de actividad'
    },
    features: {
      en: ['99.9% Server Uptime', 'Fast ECM Time (<0.5s)', 'All Satellites Coverage', 'HD & SD Channels', 'No Freezing', 'Instant Activation'],
      ar: ['99.9٪ وقت تشغيل الخادم', 'وقت ECM سريع (<0.5 ثانية)', 'تغطية جميع الأقمار الصناعية', 'قنوات HD و SD', 'بدون تجميد', 'تفعيل فوري'],
      fr: ['99.9% de disponibilité serveur', 'Temps ECM rapide (<0.5s)', 'Couverture tous satellites', 'Chaînes HD et SD', 'Sans gel', 'Activation instantanée'],
      es: ['99.9% tiempo de actividad del servidor', 'Tiempo ECM rápido (<0.5s)', 'Cobertura de todos los satélites', 'Canales HD y SD', 'Sin congelamiento', 'Activación instantánea']
    },
    installation: {
      en: [
        'After subscription, you will receive:',
        'Server Host: example.server.com',
        'Port: 12000',
        'Username: your_username',
        'Password: your_password',
        'Enter these details in your receiver CCcam settings',
        'Save and reboot receiver',
        'Encrypted channels will open automatically'
      ],
      ar: [
        'بعد الاشتراك، ستتلقى:',
        'مضيف الخادم: example.server.com',
        'المنفذ: 12000',
        'اسم المستخدم: your_username',
        'كلمة المرور: your_password',
        'أدخل هذه التفاصيل في إعدادات CCcam الخاصة بالرسيفر',
        'احفظ وأعد تشغيل الرسيفر',
        'سيتم فتح القنوات المشفرة تلقائيًا'
      ],
      fr: [
        'Après l\'abonnement, vous recevrez:',
        'Hôte du serveur: example.server.com',
        'Port: 12000',
        'Nom d\'utilisateur: your_username',
        'Mot de passe: your_password',
        'Entrez ces détails dans les paramètres CCcam de votre récepteur',
        'Enregistrez et redémarrez le récepteur',
        'Les chaînes cryptées s\'ouvriront automatiquement'
      ],
      es: [
        'Después de la suscripción, recibirás:',
        'Host del servidor: example.server.com',
        'Puerto: 12000',
        'Nombre de usuario: your_username',
        'Contraseña: your_password',
        'Ingresa estos detalles en la configuración CCcam de tu receptor',
        'Guarda y reinicia el receptor',
        'Los canales encriptados se abrirán automáticamente'
      ]
    },
    devices: {
      en: ['All Satellite Receivers', 'Enigma2 Boxes', 'HD Receivers', 'Linux Receivers'],
      ar: ['جميع أجهزة الاستقبال الفضائية', 'أجهزة Enigma2', 'أجهزة HD', 'أجهزة لينكس'],
      fr: ['Tous récepteurs satellites', 'Boîtiers Enigma2', 'Récepteurs HD', 'Récepteurs Linux'],
      es: ['Todos los receptores satelitales', 'Cajas Enigma2', 'Receptores HD', 'Receptores Linux']
    }
  },
  {
    id: 'n-share',
    name: 'N-Share',
    category: 'server',
    icon: '🔗',
    description: {
      en: 'Advanced card sharing server with N-Share protocol for satellite receivers',
      ar: 'خادم مشاركة البطاقات المتقدم مع بروتوكول N-Share لأجهزة الاستقبال الفضائية',
      fr: 'Serveur de partage de cartes avancé avec protocole N-Share pour récepteurs satellites',
      es: 'Servidor avanzado de compartición de tarjetas con protocolo N-Share para receptores satelitales'
    },
    features: {
      en: ['N-Share Protocol', 'High Stability', 'Multi-Card Support', 'Low ECM Time', 'Worldwide Satellites', 'Reliable Connection'],
      ar: ['بروتوكول N-Share', 'استقرار عالي', 'دعم بطاقات متعددة', 'وقت ECM منخفض', 'أقمار صناعية عالمية', 'اتصال موثوق'],
      fr: ['Protocole N-Share', 'Haute stabilité', 'Support multi-cartes', 'Temps ECM faible', 'Satellites mondiaux', 'Connexion fiable'],
      es: ['Protocolo N-Share', 'Alta estabilidad', 'Soporte multi-tarjeta', 'Tiempo ECM bajo', 'Satélites mundiales', 'Conexión confiable']
    },
    installation: {
      en: [
        'Receive N-Share server credentials after subscription',
        'Access receiver network configuration',
        'Add N-Share server details',
        'Configure port and connection settings',
        'Test connection and save',
        'Restart and enjoy encrypted channels'
      ],
      ar: [
        'استلم بيانات خادم N-Share بعد الاشتراك',
        'ادخل إلى تكوين شبكة الرسيفر',
        'أضف تفاصيل خادم N-Share',
        'قم بتكوين المنفذ وإعدادات الاتصال',
        'اختبر الاتصال واحفظ',
        'أعد التشغيل واستمتع بالقنوات المشفرة'
      ],
      fr: [
        'Recevez les identifiants du serveur N-Share après l\'abonnement',
        'Accédez à la configuration réseau du récepteur',
        'Ajoutez les détails du serveur N-Share',
        'Configurez le port et les paramètres de connexion',
        'Testez la connexion et enregistrez',
        'Redémarrez et profitez des chaînes cryptées'
      ],
      es: [
        'Recibe credenciales del servidor N-Share después de la suscripción',
        'Accede a la configuración de red del receptor',
        'Agrega detalles del servidor N-Share',
        'Configura puerto y ajustes de conexión',
        'Prueba conexión y guarda',
        'Reinicia y disfruta de canales encriptados'
      ]
    },
    devices: {
      en: ['Satellite Receivers', 'Linux Boxes', 'Enigma2 Devices'],
      ar: ['أجهزة الاستقبال الفضائية', 'أجهزة لينكس', 'أجهزة Enigma2'],
      fr: ['Récepteurs satellites', 'Boîtiers Linux', 'Appareils Enigma2'],
      es: ['Receptores satelitales', 'Cajas Linux', 'Dispositivos Enigma2']
    }
  },
  {
    id: 'reseller-panel',
    name: 'IPTV Reseller Panel',
    category: 'server',
    icon: '👔',
    description: {
      en: 'Complete reseller management system to start your own IPTV business',
      ar: 'نظام إدارة موزع كامل لبدء عملك الخاص في IPTV',
      fr: 'Système de gestion de revendeur complet pour démarrer votre propre entreprise IPTV',
      es: 'Sistema completo de gestión de revendedor para iniciar tu propio negocio IPTV'
    },
    features: {
      en: ['Create Sub-Accounts', 'Credit Management', 'Expiry Control', 'Custom Branding', 'Statistics Dashboard', 'API Access'],
      ar: ['إنشاء حسابات فرعية', 'إدارة الرصيد', 'التحكم في الانتهاء', 'علامة تجارية مخصصة', 'لوحة الإحصائيات', 'الوصول إلى API'],
      fr: ['Créer des sous-comptes', 'Gestion des crédits', 'Contrôle d\'expiration', 'Marque personnalisée', 'Tableau de bord statistiques', 'Accès API'],
      es: ['Crear sub-cuentas', 'Gestión de créditos', 'Control de vencimiento', 'Marca personalizada', 'Panel de estadísticas', 'Acceso API']
    },
    installation: {
      en: [
        'Access reseller panel URL (provided after subscription)',
        'Login with your reseller credentials',
        'Explore dashboard and features',
        'Create first sub-account for testing',
        'Configure pricing and packages',
        'Share login details with your customers',
        'Manage all subscriptions from web panel'
      ],
      ar: [
        'ادخل إلى رابط لوحة الموزع (يتم توفيره بعد الاشتراك)',
        'سجّل الدخول ببيانات الموزع الخاصة بك',
        'استكشف لوحة المعلومات والميزات',
        'أنشئ أول حساب فرعي للاختبار',
        'قم بتكوين الأسعار والباقات',
        'شارك تفاصيل تسجيل الدخول مع عملائك',
        'أدر جميع الاشتراكات من لوحة الويب'
      ],
      fr: [
        'Accédez à l\'URL du panel revendeur (fournie après l\'abonnement)',
        'Connectez-vous avec vos identifiants revendeur',
        'Explorez le tableau de bord et les fonctionnalités',
        'Créez le premier sous-compte pour les tests',
        'Configurez les tarifs et les forfaits',
        'Partagez les détails de connexion avec vos clients',
        'Gérez tous les abonnements depuis le panel web'
      ],
      es: [
        'Accede a la URL del panel de revendedor (proporcionada después de la suscripción)',
        'Inicia sesión con tus credenciales de revendedor',
        'Explora el panel y las características',
        'Crea primera sub-cuenta para pruebas',
        'Configura precios y paquetes',
        'Comparte detalles de inicio de sesión con tus clientes',
        'Administra todas las suscripciones desde el panel web'
      ]
    },
    devices: {
      en: ['Web Browser', 'PC', 'Mac', 'Tablet', 'Mobile'],
      ar: ['متصفح الويب', 'PC', 'ماك', 'التابلت', 'الموبايل'],
      fr: ['Navigateur web', 'PC', 'Mac', 'Tablette', 'Mobile'],
      es: ['Navegador web', 'PC', 'Mac', 'Tableta', 'Móvil']
    }
  }
];
