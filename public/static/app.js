// Global State
let currentLang = 'en';
let translations = {};
let appsData = [];
let geoData = null;

// Initialize app
async function init() {
    try {
        // Detect language
        currentLang = detectLanguage();
        
        // Fetch translations
        const transResponse = await axios.get(`/api/translations/${currentLang}`);
        translations = transResponse.data;
        
        // Fetch apps data
        const appsResponse = await axios.get('/api/apps');
        appsData = appsResponse.data;
        
        // Fetch geolocation
        try {
            const geoResponse = await axios.get('/api/geolocation');
            geoData = geoResponse.data;
        } catch (e) {
            console.log('Geolocation not available');
        }
        
        // Set document direction
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', currentLang);
        
        // Render page
        renderNavigation();
        renderPage();
        renderFloatingContact();
        renderFooter();
        
        // Initialize scroll animations
        initScrollAnimations();
        
    } catch (error) {
        console.error('Init error:', error);
        document.getElementById('app').innerHTML = '<div class="text-center py-20">Error loading page</div>';
    }
}

// Detect language from browser
function detectLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) return savedLang;
    
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('es')) return 'es';
    return 'en';
}

// Change language
function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    window.location.reload();
}

// Render Navigation
function renderNavigation() {
    const nav = document.getElementById('main-nav');
    const isRTL = currentLang === 'ar';
    
    nav.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="/" class="flex items-center gap-2 text-2xl font-orbitron font-bold gradient-text">
                    <i class="fas fa-play-circle"></i>
                    <span>Flix IPTV</span>
                </a>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-8">
                    <a href="/" class="nav-link ${document.body.dataset.page === 'home' ? 'active' : ''}">${translations.nav_home}</a>
                    <a href="/apps" class="nav-link ${document.body.dataset.page === 'apps' ? 'active' : ''}">${translations.nav_apps}</a>
                    <a href="#pricing" class="nav-link">${translations.nav_pricing}</a>
                    <a href="/contact" class="nav-link ${document.body.dataset.page === 'contact' ? 'active' : ''}">${translations.nav_contact}</a>
                </div>
                
                <!-- CTA & Language -->
                <div class="hidden md:flex items-center gap-4">
                    <!-- Language Switcher -->
                    <div class="lang-switcher">
                        <button onclick="changeLanguage('en')" class="lang-button ${currentLang === 'en' ? 'active' : ''}">EN</button>
                        <button onclick="changeLanguage('ar')" class="lang-button ${currentLang === 'ar' ? 'active' : ''}">AR</button>
                        <button onclick="changeLanguage('fr')" class="lang-button ${currentLang === 'fr' ? 'active' : ''}">FR</button>
                        <button onclick="changeLanguage('es')" class="lang-button ${currentLang === 'es' ? 'active' : ''}">ES</button>
                    </div>
                    
                    <button onclick="openSubscriptionModal()" class="neon-button text-sm py-2 px-4">
                        ${translations.subscribe_now}
                    </button>
                </div>
                
                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="md:hidden text-2xl">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    `;
    
    // Mobile Menu
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="flex justify-between items-center mb-8">
            <span class="text-xl font-orbitron font-bold gradient-text">Menu</span>
            <button onclick="toggleMobileMenu()" class="text-2xl">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="flex flex-col gap-4">
            <a href="/" class="text-lg py-3 border-b border-white/10">${translations.nav_home}</a>
            <a href="/apps" class="text-lg py-3 border-b border-white/10">${translations.nav_apps}</a>
            <a href="#pricing" class="text-lg py-3 border-b border-white/10">${translations.nav_pricing}</a>
            <a href="/contact" class="text-lg py-3 border-b border-white/10">${translations.nav_contact}</a>
            
            <div class="pt-4">
                <p class="text-sm text-gray-muted mb-3">🌐 ${currentLang === 'ar' ? 'اللغة' : currentLang === 'fr' ? 'Langue' : currentLang === 'es' ? 'Idioma' : 'Language'}</p>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="changeLanguage('en')" class="lang-button ${currentLang === 'en' ? 'active' : ''}">English</button>
                    <button onclick="changeLanguage('ar')" class="lang-button ${currentLang === 'ar' ? 'active' : ''}">العربية</button>
                    <button onclick="changeLanguage('fr')" class="lang-button ${currentLang === 'fr' ? 'active' : ''}">Français</button>
                    <button onclick="changeLanguage('es')" class="lang-button ${currentLang === 'es' ? 'active' : ''}">Español</button>
                </div>
            </div>
            
            <button onclick="openSubscriptionModal(); toggleMobileMenu();" class="neon-button w-full mt-4">
                ${translations.subscribe_now}
            </button>
        </div>
    `;
    document.body.appendChild(mobileMenu);
    
    const overlay = document.createElement('div');
    overlay.id = 'mobile-overlay';
    overlay.className = 'mobile-overlay';
    overlay.onclick = toggleMobileMenu;
    document.body.appendChild(overlay);
}

// Toggle mobile menu
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Render page based on route
function renderPage() {
    const page = document.body.dataset.page;
    const app = document.getElementById('app');
    
    switch(page) {
        case 'home':
            renderHomePage();
            break;
        case 'apps':
            if (window.location.pathname === '/apps') {
                renderAppsPage();
            } else {
                renderAppDetailPage();
            }
            break;
        case 'app':
            renderAppDetailPage();
            break;
        case 'contact':
            renderContactPage();
            break;
        default:
            renderHomePage();
    }
}

// Render Homepage
function renderHomePage() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 px-4 overflow-hidden">
            <div class="container mx-auto max-w-6xl text-center relative z-10">
                <h1 class="text-5xl md:text-7xl font-orbitron font-black mb-6 glow-text fade-in">
                    ${translations.hero_title}
                </h1>
                <p class="text-xl md:text-2xl text-gray-muted mb-8 fade-in" style="animation-delay: 0.2s">
                    ${translations.hero_subtitle}
                </p>
                
                <!-- Trust Badges -->
                <div class="flex flex-wrap justify-center gap-4 mb-10 fade-in" style="animation-delay: 0.4s">
                    <span class="trust-badge">
                        <i class="fas fa-satellite-dish text-electric-blue"></i>
                        ${translations.hero_trust_channels}
                    </span>
                    <span class="trust-badge">
                        <i class="fas fa-tv text-vivid-orange"></i>
                        ${translations.hero_trust_quality}
                    </span>
                    <span class="trust-badge">
                        <i class="fas fa-check-circle text-green-400"></i>
                        ${translations.hero_trust_uptime}
                    </span>
                </div>
                
                <button onclick="scrollToPricing()" class="neon-button fade-in" style="animation-delay: 0.6s">
                    ${translations.hero_cta}
                </button>
                
                <!-- Hero Image -->
                <div class="mt-16 relative tv-glow fade-in" style="animation-delay: 0.8s">
                    <div class="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl mx-auto max-w-4xl">
                        <div class="aspect-video bg-gradient-to-br from-purple-deep to-electric-blue flex items-center justify-center">
                            <i class="fas fa-play-circle text-white text-8xl opacity-50"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Features Section -->
        <section id="features" class="py-20 px-4">
            <div class="container mx-auto max-w-6xl">
                <h2 class="section-title gradient-text mb-16">
                    ${translations.features_title}
                </h2>
                
                <div class="feature-grid">
                    ${renderFeatureCard('📺', translations.feature_channels, translations.feature_channels_desc)}
                    ${renderFeatureCard('🎬', translations.feature_vod, translations.feature_vod_desc)}
                    ${renderFeatureCard('🌍', translations.feature_worldwide, translations.feature_worldwide_desc)}
                    ${renderFeatureCard('📱', translations.feature_devices, translations.feature_devices_desc)}
                    ${renderFeatureCard('⚡', translations.feature_antifreeze, translations.feature_antifreeze_desc)}
                    ${renderFeatureCard('🛡️', translations.feature_support, translations.feature_support_desc)}
                </div>
            </div>
        </section>
        
        <!-- Devices Section -->
        <section id="devices" class="py-20 px-4 bg-white/[0.02]">
            <div class="container mx-auto max-w-6xl">
                <h2 class="section-title gradient-text mb-4">
                    ${translations.devices_title}
                </h2>
                <p class="text-center text-xl text-gray-muted mb-16">
                    ${translations.devices_subtitle}
                </p>
                
                <div class="device-grid">
                    ${renderDeviceCard('📱', 'Android')}
                    ${renderDeviceCard('🍎', 'iOS')}
                    ${renderDeviceCard('📺', 'Samsung TV')}
                    ${renderDeviceCard('📺', 'LG TV')}
                    ${renderDeviceCard('🔥', 'Fire TV')}
                    ${renderDeviceCard('📺', 'Android TV')}
                    ${renderDeviceCard('🍎', 'Apple TV')}
                    ${renderDeviceCard('💻', 'Windows')}
                    ${renderDeviceCard('🖥️', 'Mac')}
                    ${renderDeviceCard('🛰️', currentLang === 'ar' ? 'رسيفر' : 'Receiver')}
                    ${renderDeviceCard('📦', 'Android Box')}
                    ${renderDeviceCard('🌐', 'Web Browser')}
                </div>
            </div>
        </section>
        
        <!-- Pricing Section -->
        <section id="pricing" class="py-20 px-4">
            <div class="container mx-auto max-w-6xl">
                <h2 class="section-title gradient-text mb-16">
                    ${translations.pricing_title}
                </h2>
                
                <div class="max-w-md mx-auto">
                    <div class="pricing-card glass-card text-center">
                        <div class="relative z-10">
                            <h3 class="text-2xl font-bold mb-4">${translations.pricing_plan_name}</h3>
                            <div class="price-tag mb-2">$70</div>
                            <p class="text-gray-muted mb-8">/ ${translations.pricing_per_year}</p>
                            
                            <div class="text-left mb-8">
                                <p class="font-bold mb-4 text-lg">${translations.pricing_includes_title}</p>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3">
                                        <i class="fas fa-check-circle check-icon"></i>
                                        <span>${translations.pricing_feature_activation}</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <i class="fas fa-check-circle check-icon"></i>
                                        <span>${translations.pricing_feature_channels}</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <i class="fas fa-check-circle check-icon"></i>
                                        <span>${translations.pricing_feature_support}</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <i class="fas fa-check-circle check-icon"></i>
                                        <span>${translations.pricing_feature_devices}</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <i class="fas fa-check-circle check-icon"></i>
                                        <span>${translations.pricing_feature_quality}</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <i class="fas fa-check-circle check-icon"></i>
                                        <span>${translations.pricing_feature_epg}</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <i class="fas fa-check-circle check-icon"></i>
                                        <span>${translations.pricing_feature_vod}</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <button onclick="openSubscriptionModal()" class="neon-button w-full">
                                ${translations.subscribe_now}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Testimonials Section -->
        <section id="testimonials" class="py-20 px-4 bg-white/[0.02]">
            <div class="container mx-auto max-w-6xl">
                <h2 class="section-title gradient-text mb-16">
                    ${translations.testimonials_title}
                </h2>
                
                <div class="grid md:grid-cols-3 gap-6">
                    ${renderTestimonials()}
                </div>
            </div>
        </section>
        
        <!-- FAQ Section -->
        <section id="faq" class="py-20 px-4">
            <div class="container mx-auto max-w-4xl">
                <h2 class="section-title gradient-text mb-16">
                    ${translations.faq_title}
                </h2>
                
                <div class="space-y-4">
                    ${renderFAQs()}
                </div>
            </div>
        </section>
    `;
}

// Render Feature Card
function renderFeatureCard(icon, title, description) {
    return `
        <div class="glass-card hover-lift fade-in">
            <div class="feature-icon mx-auto mb-4">
                ${icon}
            </div>
            <h3 class="text-xl font-bold mb-3 text-center">${title}</h3>
            <p class="text-gray-muted text-center">${description}</p>
        </div>
    `;
}

// Render Device Card
function renderDeviceCard(icon, name) {
    return `
        <div class="device-card hover-lift">
            <div class="text-5xl mb-3">${icon}</div>
            <p class="font-semibold">${name}</p>
        </div>
    `;
}

// Render Testimonials
function renderTestimonials() {
    const testimonials = [
        { name: 'Ahmed M.', country: '🇸🇦', text: currentLang === 'ar' ? 'خدمة ممتازة وجودة عالية جداً' : 'Excellent service and very high quality', rating: 5 },
        { name: 'John D.', country: '🇺🇸', text: currentLang === 'ar' ? 'أفضل خدمة IPTV استخدمتها' : 'Best IPTV service I have used', rating: 5 },
        { name: 'Mohammed K.', country: '🇦🇪', text: currentLang === 'ar' ? 'دعم فني رائع وسريع' : 'Amazing and fast technical support', rating: 5 },
        { name: 'Sarah L.', country: '🇫🇷', text: currentLang === 'fr' ? 'Service parfait, je recommande' : 'Perfect service, I recommend', rating: 5 },
        { name: 'Carlos R.', country: '🇪🇸', text: currentLang === 'es' ? 'Excelente calidad y precio' : 'Excellent quality and price', rating: 5 },
        { name: 'Ali B.', country: '🇪🇬', text: currentLang === 'ar' ? 'تشغيل سلس بدون تقطيع' : 'Smooth playback without freezing', rating: 5 }
    ];
    
    return testimonials.map(t => `
        <div class="testimonial-card fade-in">
            <div class="flex items-center gap-4 mb-4">
                <div class="testimonial-avatar">
                    ${t.name.charAt(0)}
                </div>
                <div>
                    <p class="font-bold">${t.name}</p>
                    <p class="text-sm text-gray-muted">${t.country}</p>
                </div>
            </div>
            <div class="stars mb-3">
                ${'★'.repeat(t.rating)}
            </div>
            <p class="text-gray-muted">${t.text}</p>
        </div>
    `).join('');
}

// Render FAQs
function renderFAQs() {
    const faqs = [
        {
            q: { en: 'What is IPTV?', ar: 'ما هو IPTV؟', fr: 'Qu\'est-ce que l\'IPTV?', es: '¿Qué es IPTV?' },
            a: { en: 'IPTV (Internet Protocol Television) allows you to watch TV channels and content via internet connection instead of traditional cable or satellite.', ar: 'IPTV (التلفزيون عبر بروتوكول الإنترنت) يتيح لك مشاهدة القنوات التلفزيونية والمحتوى عبر اتصال الإنترنت بدلاً من الكابل أو القمر الصناعي التقليدي.', fr: 'IPTV (Internet Protocol Television) vous permet de regarder des chaînes TV et du contenu via une connexion Internet au lieu du câble ou satellite traditionnel.', es: 'IPTV (Televisión por Protocolo de Internet) te permite ver canales de TV y contenido a través de conexión a internet en lugar de cable o satélite tradicional.' }
        },
        {
            q: { en: 'How do I activate my subscription?', ar: 'كيف أقوم بتفعيل اشتراكي؟', fr: 'Comment activer mon abonnement?', es: '¿Cómo activo mi suscripción?' },
            a: { en: 'After payment, you will receive your activation code and login details via WhatsApp. Simply enter them in your chosen app.', ar: 'بعد الدفع، ستتلقى رمز التفعيل وبيانات تسجيل الدخول عبر الواتساب. ما عليك سوى إدخالها في التطبيق الذي اخترته.', fr: 'Après le paiement, vous recevrez votre code d\'activation et vos identifiants via WhatsApp. Entrez-les simplement dans votre application choisie.', es: 'Después del pago, recibirás tu código de activación y detalles de inicio de sesión por WhatsApp. Simplemente ingrésalos en tu aplicación elegida.' }
        },
        {
            q: { en: 'What devices are supported?', ar: 'ما هي الأجهزة المدعومة؟', fr: 'Quels appareils sont supportés?', es: '¿Qué dispositivos son compatibles?' },
            a: { en: 'All devices! Smart TVs (Samsung, LG, Sony), Android/iOS phones, tablets, Fire TV, Apple TV, Android Box, PC, Mac, and satellite receivers.', ar: 'جميع الأجهزة! التلفزيونات الذكية (سامسونج، LG، سوني)، هواتف أندرويد/iOS، تابلت، فاير TV، أبل TV، أندرويد بوكس، PC، ماك، وأجهزة الاستقبال الفضائية.', fr: 'Tous les appareils! Smart TV (Samsung, LG, Sony), téléphones Android/iOS, tablettes, Fire TV, Apple TV, Android Box, PC, Mac, et récepteurs satellites.', es: '¡Todos los dispositivos! Smart TVs (Samsung, LG, Sony), teléfonos Android/iOS, tabletas, Fire TV, Apple TV, Android Box, PC, Mac, y receptores satelitales.' }
        },
        {
            q: { en: 'Is there a free trial?', ar: 'هل يوجد تجربة مجانية؟', fr: 'Y a-t-il un essai gratuit?', es: '¿Hay una prueba gratuita?' },
            a: { en: 'Please contact us via WhatsApp to discuss trial options and special offers.', ar: 'يرجى الاتصال بنا عبر الواتساب لمناقشة خيارات التجربة والعروض الخاصة.', fr: 'Veuillez nous contacter via WhatsApp pour discuter des options d\'essai et des offres spéciales.', es: 'Por favor contáctenos por WhatsApp para discutir opciones de prueba y ofertas especiales.' }
        },
        {
            q: { en: 'How many devices can I use?', ar: 'كم عدد الأجهزة التي يمكنني استخدامها؟', fr: 'Combien d\'appareils puis-je utiliser?', es: '¿Cuántos dispositivos puedo usar?' },
            a: { en: 'Your subscription includes multiple device connections. Contact support for specific details about concurrent streams.', ar: 'يتضمن اشتراكك اتصالات أجهزة متعددة. اتصل بالدعم للحصول على تفاصيل محددة حول البث المتزامن.', fr: 'Votre abonnement inclut plusieurs connexions d\'appareils. Contactez le support pour des détails spécifiques sur les flux simultanés.', es: 'Tu suscripción incluye múltiples conexiones de dispositivos. Contacta al soporte para detalles específicos sobre transmisiones concurrentes.' }
        },
        {
            q: { en: 'What payment methods do you accept?', ar: 'ما هي طرق الدفع المقبولة؟', fr: 'Quels modes de paiement acceptez-vous?', es: '¿Qué métodos de pago aceptan?' },
            a: { en: 'We accept various payment methods. After contacting us via WhatsApp, our team will provide you with available payment options.', ar: 'نقبل طرق دفع متنوعة. بعد التواصل معنا عبر الواتساب، سيوفر فريقنا خيارات الدفع المتاحة.', fr: 'Nous acceptons divers modes de paiement. Après nous avoir contactés via WhatsApp, notre équipe vous fournira les options de paiement disponibles.', es: 'Aceptamos varios métodos de pago. Después de contactarnos por WhatsApp, nuestro equipo te proporcionará las opciones de pago disponibles.' }
        },
        {
            q: { en: 'Is technical support available?', ar: 'هل الدعم الفني متاح؟', fr: 'Le support technique est-il disponible?', es: '¿Está disponible el soporte técnico?' },
            a: { en: 'Yes! We offer 24/7 technical support via WhatsApp, Telegram, and Facebook Messenger. Our team responds quickly to help you.', ar: 'نعم! نقدم دعمًا فنيًا على مدار الساعة عبر الواتساب والتيليجرام و Facebook Messenger. يستجيب فريقنا بسرعة لمساعدتك.', fr: 'Oui! Nous offrons un support technique 24/7 via WhatsApp, Telegram et Facebook Messenger. Notre équipe répond rapidement pour vous aider.', es: '¡Sí! Ofrecemos soporte técnico 24/7 por WhatsApp, Telegram y Facebook Messenger. Nuestro equipo responde rápidamente para ayudarte.' }
        },
        {
            q: { en: 'Can I cancel anytime?', ar: 'هل يمكنني الإلغاء في أي وقت؟', fr: 'Puis-je annuler à tout moment?', es: '¿Puedo cancelar en cualquier momento?' },
            a: { en: 'Subscription terms are discussed at the time of purchase. Contact our support team for more information about your subscription.', ar: 'يتم مناقشة شروط الاشتراك وقت الشراء. اتصل بفريق الدعم للحصول على مزيد من المعلومات حول اشتراكك.', fr: 'Les conditions d\'abonnement sont discutées au moment de l\'achat. Contactez notre équipe de support pour plus d\'informations sur votre abonnement.', es: 'Los términos de suscripción se discuten al momento de la compra. Contacta a nuestro equipo de soporte para más información sobre tu suscripción.' }
        }
    ];
    
    return faqs.map((faq, index) => `
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.q[currentLang]}</span>
                <i class="fas fa-chevron-down faq-icon" id="faq-icon-${index}"></i>
            </div>
            <div class="faq-answer" id="faq-answer-${index}">
                <p class="text-gray-muted">${faq.a[currentLang]}</p>
            </div>
        </div>
    `).join('');
}

// Toggle FAQ
window.toggleFAQ = function(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    answer.classList.toggle('active');
    icon.classList.toggle('rotate');
}

// Scroll to pricing
window.scrollToPricing = function() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Render Apps Page
function renderAppsPage() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <section class="pt-32 pb-20 px-4">
            <div class="container mx-auto max-w-6xl">
                <h1 class="section-title gradient-text mb-8">
                    ${translations.apps_title}
                </h1>
                
                <!-- Category Filters -->
                <div class="flex flex-wrap justify-center gap-3 mb-12">
                    <button onclick="filterApps('all')" class="filter-button active" id="filter-all">
                        ${translations.apps_filter_all}
                    </button>
                    <button onclick="filterApps('player')" class="filter-button" id="filter-player">
                        ${translations.apps_filter_players}
                    </button>
                    <button onclick="filterApps('smarttv')" class="filter-button" id="filter-smarttv">
                        ${translations.apps_filter_smarttv}
                    </button>
                    <button onclick="filterApps('satellite')" class="filter-button" id="filter-satellite">
                        ${translations.apps_filter_satellite}
                    </button>
                    <button onclick="filterApps('server')" class="filter-button" id="filter-server">
                        ${translations.apps_filter_servers}
                    </button>
                </div>
                
                <!-- Apps Grid -->
                <div class="app-grid" id="apps-grid">
                    ${renderAppsGrid('all')}
                </div>
            </div>
        </section>
    `;
}

// Render Apps Grid
function renderAppsGrid(category) {
    const filteredApps = category === 'all' ? appsData : appsData.filter(a => a.category === category);
    
    return filteredApps.map(app => `
        <a href="/apps/${app.id}" class="glass-card hover-lift block">
            <div class="text-center mb-4">
                <span class="app-icon">${app.icon}</span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-center">${app.name}</h3>
            <p class="text-gray-muted text-center mb-4">${app.description[currentLang]}</p>
            <div class="text-center">
                <span class="category-badge">
                    ${getCategoryName(app.category)}
                </span>
            </div>
        </a>
    `).join('');
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        player: { en: 'IPTV Player', ar: 'مشغل IPTV', fr: 'Lecteur IPTV', es: 'Reproductor IPTV' },
        smarttv: { en: 'Smart TV', ar: 'تلفزيون ذكي', fr: 'Smart TV', es: 'Smart TV' },
        satellite: { en: 'Satellite', ar: 'ستلايت', fr: 'Satellite', es: 'Satélite' },
        server: { en: 'Server', ar: 'خادم', fr: 'Serveur', es: 'Servidor' }
    };
    return names[category][currentLang];
}

// Filter Apps
window.filterApps = function(category) {
    // Update button states
    document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${category}`).classList.add('active');
    
    // Update grid
    document.getElementById('apps-grid').innerHTML = renderAppsGrid(category);
    
    // Re-init animations
    initScrollAnimations();
}

// Render App Detail Page
function renderAppDetailPage() {
    const appId = window.location.pathname.split('/').pop();
    const appInfo = appsData.find(a => a.id === appId);
    
    if (!appInfo) {
        window.location.href = '/apps';
        return;
    }
    
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <section class="pt-32 pb-20 px-4">
            <div class="container mx-auto max-w-4xl">
                <!-- App Header -->
                <div class="text-center mb-12 fade-in">
                    <span class="app-icon">${appInfo.icon}</span>
                    <h1 class="text-4xl md:text-5xl font-orbitron font-black mt-4 mb-4 gradient-text">
                        ${appInfo.name}
                    </h1>
                    <p class="text-xl text-gray-muted mb-6">
                        ${appInfo.description[currentLang]}
                    </p>
                    <span class="category-badge">${getCategoryName(appInfo.category)}</span>
                </div>
                
                <!-- Features -->
                <div class="glass-card mb-8 fade-in">
                    <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                        <i class="fas fa-star text-electric-blue"></i>
                        ${translations.app_features}
                    </h2>
                    <ul class="grid md:grid-cols-2 gap-4">
                        ${appInfo.features[currentLang].map(f => `
                            <li class="flex items-center gap-3">
                                <i class="fas fa-check-circle check-icon"></i>
                                <span>${f}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <!-- Installation Guide -->
                <div class="glass-card mb-8 fade-in">
                    <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                        <i class="fas fa-download text-electric-blue"></i>
                        ${translations.app_installation}
                    </h2>
                    <div class="space-y-4">
                        ${appInfo.installation[currentLang].map((step, idx) => `
                            <div class="installation-step" data-step="${idx + 1}">
                                <p class="text-gray-muted">${step}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Supported Devices -->
                <div class="glass-card mb-8 fade-in">
                    <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                        <i class="fas fa-mobile-alt text-electric-blue"></i>
                        ${translations.app_devices}
                    </h2>
                    <div class="flex flex-wrap gap-3">
                        ${appInfo.devices[currentLang].map(d => `
                            <span class="trust-badge">${d}</span>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Pricing CTA -->
                <div class="pricing-card glass-card text-center fade-in">
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold mb-4">${translations.pricing_plan_name}</h3>
                        <div class="price-tag mb-2">$70</div>
                        <p class="text-gray-muted mb-6">/ ${translations.pricing_per_year}</p>
                        <p class="text-gray-muted mb-8">
                            ${currentLang === 'ar' ? 'يشمل: التطبيق + القنوات + الدعم' : currentLang === 'fr' ? 'Comprend: App + Chaînes + Support' : currentLang === 'es' ? 'Incluye: App + Canales + Soporte' : 'Includes: App + Channels + Support'}
                        </p>
                        <button onclick="openSubscriptionModal('${appInfo.name}')" class="neon-button w-full">
                            ${translations.subscribe_now}
                        </button>
                    </div>
                </div>
                
                <!-- Related Apps -->
                <div class="mt-16">
                    <h2 class="text-2xl font-bold mb-8 text-center">
                        ${translations.app_related}
                    </h2>
                    <div class="grid md:grid-cols-3 gap-6">
                        ${renderRelatedApps(appInfo.id, appInfo.category)}
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Render Related Apps
function renderRelatedApps(currentId, category) {
    const related = appsData
        .filter(a => a.category === category && a.id !== currentId)
        .slice(0, 3);
    
    return related.map(app => `
        <a href="/apps/${app.id}" class="glass-card hover-lift block text-center">
            <span class="app-icon text-5xl">${app.icon}</span>
            <h3 class="text-lg font-bold mt-4">${app.name}</h3>
        </a>
    `).join('');
}

// Render Contact Page
function renderContactPage() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <section class="pt-32 pb-20 px-4">
            <div class="container mx-auto max-w-4xl">
                <h1 class="section-title gradient-text mb-4">
                    ${translations.contact_title}
                </h1>
                <p class="text-center text-xl text-gray-muted mb-16">
                    ${translations.contact_subtitle}
                </p>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Contact Info -->
                    <div class="glass-card">
                        <h2 class="text-2xl font-bold mb-6">${translations.contact_info_title}</h2>
                        
                        <div class="space-y-4">
                            <a href="https://wa.link/9r70xe" target="_blank" class="flex items-center gap-4 p-4 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all">
                                <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                    <i class="fab fa-whatsapp text-2xl text-white"></i>
                                </div>
                                <div>
                                    <p class="font-bold">WhatsApp</p>
                                    <p class="text-sm text-gray-muted">${currentLang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'}</p>
                                </div>
                            </a>
                            
                            <a href="https://m.me/Hany.Yousseff" target="_blank" class="flex items-center gap-4 p-4 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all">
                                <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                    <i class="fab fa-facebook-messenger text-2xl text-white"></i>
                                </div>
                                <div>
                                    <p class="font-bold">Messenger</p>
                                    <p class="text-sm text-gray-muted">${currentLang === 'ar' ? 'راسلنا على ماسنجر' : 'Message us on Messenger'}</p>
                                </div>
                            </a>
                            
                            <a href="https://t.me/FLlXX" target="_blank" class="flex items-center gap-4 p-4 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-all">
                                <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                    <i class="fab fa-telegram text-2xl text-white"></i>
                                </div>
                                <div>
                                    <p class="font-bold">Telegram</p>
                                    <p class="text-sm text-gray-muted">${currentLang === 'ar' ? 'تواصل عبر تيليجرام' : 'Contact via Telegram'}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Contact Form -->
                    <div class="glass-card">
                        <h2 class="text-2xl font-bold mb-6">${translations.contact_form_title}</h2>
                        ${renderSubscriptionForm()}
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Render Subscription Form
function renderSubscriptionForm(appName = '') {
    const countryCode = geoData?.country_calling_code || '+1';
    const countryName = geoData?.country_name || 'United States';
    const countryFlag = getCountryFlag(geoData?.country_code || 'US');
    
    return `
        <form onsubmit="handleSubscription(event, '${appName}')" class="space-y-4" id="subscription-form">
            <div>
                <label class="block mb-2 font-semibold">${translations.form_name} *</label>
                <input type="text" name="name" required class="form-input" placeholder="${translations.form_placeholder_name}">
            </div>
            
            <div>
                <label class="block mb-2 font-semibold">${translations.form_phone} *</label>
                <div class="phone-input-container">
                    <div class="phone-prefix">
                        <span class="country-flag">${countryFlag}</span>
                        <span id="dial-code">${countryCode}</span>
                    </div>
                    <input type="tel" name="phone" required class="form-input" placeholder="${translations.form_placeholder_phone}">
                </div>
            </div>
            
            <div>
                <label class="block mb-2 font-semibold">${translations.form_country} *</label>
                <input type="text" name="country" value="${countryName}" required class="form-input">
            </div>
            
            ${appName ? `<input type="hidden" name="app" value="${appName}">` : `
            <div>
                <label class="block mb-2 font-semibold">${translations.form_app}</label>
                <select name="app" class="form-select">
                    <option value="">${translations.form_app}</option>
                    ${appsData.map(a => `<option value="${a.name}">${a.name}</option>`).join('')}
                </select>
            </div>
            `}
            
            <div>
                <label class="block mb-2 font-semibold">${translations.form_message}</label>
                <textarea name="message" class="form-textarea" placeholder="${translations.form_placeholder_message}">${translations.form_placeholder_message}</textarea>
            </div>
            
            <button type="submit" class="neon-button w-full">
                <i class="fab fa-whatsapp mr-2"></i>
                ${translations.form_submit}
            </button>
        </form>
    `;
}

// Get Country Flag Emoji
function getCountryFlag(countryCode) {
    if (!countryCode) return '🌐';
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// Handle Subscription
window.handleSubscription = function(event, appName = '') {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const phone = formData.get('phone');
    const country = formData.get('country');
    const app = appName || formData.get('app') || 'Flix IPTV';
    const message = formData.get('message');
    const dialCode = document.getElementById('dial-code').textContent;
    
    // Build WhatsApp message
    const whatsappMessage = `🎬 *Flix IPTV - ${currentLang === 'ar' ? 'طلب اشتراك' : currentLang === 'fr' ? 'Demande d\'abonnement' : currentLang === 'es' ? 'Solicitud de suscripción' : 'Subscription Request'}*

👤 ${translations.form_name}: ${name}
📞 ${translations.form_phone}: ${dialCode} ${phone}
🌍 ${translations.form_country}: ${country}
📱 ${translations.form_app}: ${app}
💰 ${currentLang === 'ar' ? 'الباقة' : currentLang === 'fr' ? 'Plan' : currentLang === 'es' ? 'Plan' : 'Plan'}: $70/${currentLang === 'ar' ? 'سنة' : currentLang === 'fr' ? 'an' : currentLang === 'es' ? 'año' : 'year'}

📝 ${translations.form_message}:
${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.link/9r70xe?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Close modal if open
    closeSubscriptionModal();
}

// Open Subscription Modal
window.openSubscriptionModal = function(appName = '') {
    let modal = document.getElementById('subscription-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'subscription-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <button onclick="closeSubscriptionModal()" class="modal-close">
                <i class="fas fa-times"></i>
            </button>
            
            <h2 class="text-3xl font-orbitron font-bold mb-2 gradient-text text-center">
                ${translations.form_title}
            </h2>
            <p class="text-center text-gray-muted mb-8">$70 / ${translations.pricing_per_year}</p>
            
            ${renderSubscriptionForm(appName)}
        </div>
    `;
    
    setTimeout(() => modal.classList.add('active'), 10);
}

// Close Subscription Modal
window.closeSubscriptionModal = function() {
    const modal = document.getElementById('subscription-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Render Floating Contact Widget
function renderFloatingContact() {
    const widget = document.getElementById('floating-contact');
    
    widget.innerHTML = `
        <div class="contact-widget">
            <div class="contact-menu" id="contact-menu">
                <a href="https://wa.link/9r70xe" target="_blank" class="hover:scale-105 transition-transform">
                    <i class="fab fa-whatsapp text-green-500"></i>
                    <span>WhatsApp</span>
                </a>
                <a href="https://m.me/Hany.Yousseff" target="_blank" class="hover:scale-105 transition-transform">
                    <i class="fab fa-facebook-messenger text-blue-600"></i>
                    <span>Messenger</span>
                </a>
                <a href="https://t.me/FLlXX" target="_blank" class="hover:scale-105 transition-transform">
                    <i class="fab fa-telegram text-blue-500"></i>
                    <span>Telegram</span>
                </a>
            </div>
            
            <button onclick="toggleContactMenu()" class="contact-toggle">
                <i class="fas fa-comment-dots text-2xl"></i>
            </button>
        </div>
    `;
}

// Toggle Contact Menu
window.toggleContactMenu = function() {
    const menu = document.getElementById('contact-menu');
    menu.classList.toggle('active');
}

// Close contact menu when clicking outside
document.addEventListener('click', function(event) {
    const widget = document.getElementById('floating-contact');
    if (widget && !widget.contains(event.target)) {
        const menu = document.getElementById('contact-menu');
        if (menu) menu.classList.remove('active');
    }
});

// Render Footer
function renderFooter() {
    const footer = document.getElementById('main-footer');
    
    footer.innerHTML = `
        <div class="container mx-auto max-w-6xl px-4">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <!-- About -->
                <div>
                    <h3 class="text-xl font-bold mb-4 gradient-text">${translations.footer_about}</h3>
                    <p class="text-gray-muted text-sm">
                        ${currentLang === 'ar' ? 'Flix IPTV - خدمة IPTV متميزة مع أكثر من 10,000 قناة وجودة 4K.' : currentLang === 'fr' ? 'Flix IPTV - Service IPTV premium avec plus de 10,000 chaînes et qualité 4K.' : currentLang === 'es' ? 'Flix IPTV - Servicio IPTV premium con más de 10,000 canales y calidad 4K.' : 'Flix IPTV - Premium IPTV service with 10,000+ channels and 4K quality.'}
                    </p>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h3 class="text-xl font-bold mb-4 gradient-text">${translations.footer_quick_links}</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/" class="text-gray-muted hover:text-electric-blue transition-colors">${translations.nav_home}</a></li>
                        <li><a href="/apps" class="text-gray-muted hover:text-electric-blue transition-colors">${translations.nav_apps}</a></li>
                        <li><a href="#pricing" class="text-gray-muted hover:text-electric-blue transition-colors">${translations.nav_pricing}</a></li>
                        <li><a href="/contact" class="text-gray-muted hover:text-electric-blue transition-colors">${translations.nav_contact}</a></li>
                    </ul>
                </div>
                
                <!-- Contact -->
                <div>
                    <h3 class="text-xl font-bold mb-4 gradient-text">${translations.footer_contact}</h3>
                    <ul class="space-y-2 text-sm text-gray-muted">
                        <li><a href="https://wa.link/9r70xe" target="_blank" class="hover:text-electric-blue transition-colors"><i class="fab fa-whatsapp mr-2"></i>WhatsApp</a></li>
                        <li><a href="https://m.me/Hany.Yousseff" target="_blank" class="hover:text-electric-blue transition-colors"><i class="fab fa-facebook-messenger mr-2"></i>Messenger</a></li>
                        <li><a href="https://t.me/FLlXX" target="_blank" class="hover:text-electric-blue transition-colors"><i class="fab fa-telegram mr-2"></i>Telegram</a></li>
                    </ul>
                </div>
                
                <!-- Social -->
                <div>
                    <h3 class="text-xl font-bold mb-4 gradient-text">${translations.footer_follow}</h3>
                    <div class="flex gap-3">
                        <a href="https://m.me/Hany.Yousseff" target="_blank" class="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-electric-blue flex items-center justify-center transition-all">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://t.me/FLlXX" target="_blank" class="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-electric-blue flex items-center justify-center transition-all">
                            <i class="fab fa-telegram"></i>
                        </a>
                        <a href="https://wa.link/9r70xe" target="_blank" class="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-electric-blue flex items-center justify-center transition-all">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-white/10 pt-8 text-center text-sm text-gray-muted">
                <p>© ${new Date().getFullYear()} Flix IPTV. ${translations.footer_rights}</p>
            </div>
        </div>
    `;
}

// Initialize scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.glass-card, .device-card, .testimonial-card, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// Make functions available globally
window.changeLanguage = changeLanguage;

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
