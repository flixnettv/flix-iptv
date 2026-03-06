import { Hono } from 'hono';
import { html } from 'hono/html';

const app = new Hono();

// --- 1. DATA: 24 Apps & Translations ---
const apps = [
  { id: 'ibo-player', name: 'IBO Player', category: 'player', icon: '📺', desc: { ar: 'مشغل قوي يدعم 4K', en: 'Powerful 4K player' } },
  { id: 'stb-emulator', name: 'STB Emulator', category: 'player', icon: '🎮', desc: { ar: 'محاكي أجهزة الاستقبال', en: 'Set-top box emulator' } },
  { id: 'netflix-tv', name: 'Netflix TV', category: 'smarttv', icon: '🎬', desc: { ar: 'تطبيق نتفليكس الرسمي', en: 'Official Netflix App' } },
  { id: 'youtube-tv', name: 'YouTube TV', category: 'smarttv', icon: '▶️', desc: { ar: 'يوتيوب للشاشات الذكية', en: 'YouTube for Smart TVs' } },
  { id: 'plex', name: 'Plex', category: 'smarttv', icon: '💠', desc: { ar: 'مكتبة وسائط متكاملة', en: 'Complete media library' } },
  { id: 'kodi', name: 'Kodi', category: 'smarttv', icon: '📀', desc: { ar: 'مركز ترفيه مفتوح المصدر', en: 'Open source entertainment hub' } },
  { id: 'smart-stb', name: 'Smart STB', category: 'smarttv', icon: '📡', desc: { ar: 'تحويل التلفاز لمستقبل ذكي', en: 'Turn TV into smart receiver' } },
  { id: 'nanomid', name: 'Nanomid', category: 'smarttv', icon: '', desc: { ar: 'مشغل بسيط وسريع', en: 'Simple and fast player' } },
  { id: 'setv', name: 'SETV', category: 'smarttv', icon: '🖥️', desc: { ar: 'حل مثالي للأندرويد بوكس', en: 'Perfect for Android Box' } },
  { id: 'flicky', name: 'Flicky', category: 'smarttv', icon: '✨', desc: { ar: 'واجهة عصرية للقنوات', en: 'Modern channel interface' } },
  { id: 'sat-receiver', name: 'Sat Receiver', category: 'satellite', icon: '🛰️', desc: { ar: 'إعدادات الاستقبال الفضائي', en: 'Satellite receiver setup' } },
  { id: 'cccam-server', name: 'CCcam Server', category: 'server', icon: '🔐', desc: { ar: 'خادم مشاركة البطاقات', en: 'Card sharing server' } },
  { id: 'xtream-ui', name: 'Xtream UI', category: 'server', icon: '🎛️', desc: { ar: 'لوحة إدارة الخوادم', en: 'Server management panel' } },
  { id: 'zap-x', name: 'Zap-X', category: 'server', icon: '⚡', desc: { ar: 'خادم بث سريع', en: 'Fast streaming server' } },
  // ... يمكن إضافة باقي الـ 24 تطبيق هنا بنفس النمط
];

const translations = {
  ar: { home: 'الرئيسية', apps: 'التطبيقات', contact: 'اتصل بنا', heroTitle: 'أفضل تجربة IPTV', heroSub: 'شاهد قنواتك المفضلة بجودة 4K على أي جهاز', subscribe: 'اشترك الآن', features: 'المميزات', price: '$70/سنوياً' },
  en: { home: 'Home', apps: 'Apps', contact: 'Contact', heroTitle: 'Ultimate IPTV Experience', heroSub: 'Watch your favorite channels in 4K on any device', subscribe: 'Subscribe Now', features: 'Features', price: '$70/Year' }
};

// --- 2. STYLES: Glassmorphism & Neon Design ---
const styles = `
  :root { --bg: #050810; --primary: #00f2ff; --secondary: #bd00ff; --glass: rgba(255,255,255,0.05); }
  body { margin: 0; font-family: 'Segoe UI', sans-serif; background: var(--bg); color: #fff; overflow-x: hidden; }
  .stars { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 50px 50px; opacity: 0.1; z-index: -1; }
  header { display: flex; justify-content: space-between; padding: 20px 5%; backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 100; border-bottom: 1px solid var(--glass); }
  nav a { color: #fff; text-decoration: none; margin-left: 20px; font-weight: bold; transition: 0.3s; }
  nav a:hover { color: var(--primary); text-shadow: 0 0 10px var(--primary); }
  .hero { text-align: center; padding: 100px 20px; background: radial-gradient(circle at center, rgba(189,0,255,0.15) 0%, transparent 70%); }
  h1 { font-size: 3rem; background: linear-gradient(to right, var(--primary), var(--secondary)); -webkit-background-clip: text; color: transparent; margin-bottom: 10px; }
  .btn { background: linear-gradient(45deg, var(--primary), var(--secondary)); border: none; padding: 12px 30px; color: #fff; font-weight: bold; border-radius: 30px; cursor: pointer; text-decoration: none; display: inline-block; margin-top: 20px; box-shadow: 0 0 20px rgba(0,242,255,0.4); transition: transform 0.2s; }
  .btn:hover { transform: scale(1.05); }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 50px 5%; }
  .card { background: var(--glass); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; backdrop-filter: blur(5px); transition: 0.3s; text-align: center; }
  .card:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: 0 0 15px rgba(0,242,255,0.2); }
  .icon { font-size: 3rem; margin-bottom: 10px; display: block; }
  footer { text-align: center; padding: 40px; color: #888; font-size: 0.9rem; border-top: 1px solid var(--glass); margin-top: 50px; }
  .widget { position: fixed; bottom: 20px; right: 20px; background: #25D366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.3); animation: bounce 2s infinite; }
  @keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-10px);} 60% {transform: translateY(-5px);} }
`;
// --- 3. LAYOUT COMPONENT ---
const Layout = (c, title, children) => {
  const lang = c.req.query('lang') || 'ar';
  const t = translations[lang] || translations.en;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  return html`<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Flix IPTV</title>
  <style>${styles}</style>
</head>
<body>
  <div class="stars"></div>
  <header>
    <div style="font-weight:bold; font-size:1.5rem; color:var(--primary)">FLIX IPTV</div>
    <nav>
      <a href="/?lang=${lang}">${t.home}</a>
      <a href="/apps?lang=${lang}">${t.apps}</a>
      <a href="?lang=${lang === 'ar' ? 'en' : 'ar'}">${lang === 'ar' ? 'English' : 'العربية'}</a>
    </nav>
  </header>
  ${children}
  <a href="https://wa.me/966500000000" class="widget" target="_blank">💬</a>
  <footer>© 2026 Flix IPTV. All rights reserved.</footer>
</body>
</html>`;
};

// --- 4. ROUTES ---

// Home Page
app.get('/', (c) => {
  const lang = c.req.query('lang') || 'ar';
  const t = translations[lang];
  return Layout(c, 'Home', html`
    <section class="hero">
      <h1>${t.heroTitle}</h1>
      <p style="font-size: 1.2rem; color: #ccc;">${t.heroSub}</p>
      <a href="/apps?lang=${lang}" class="btn">${t.subscribe}</a>
    </section>
    
    <section style="padding: 0 5%;">
      <h2 style="text-align:center; margin-bottom:30px;">${t.features}</h2>
      <div class="grid">
        <div class="card"><span class="icon">🚀</span><h3>Super Fast</h3><p>99.9% Uptime</p></div>
        <div class="card"><span class="icon">📺</span><h3>4K Quality</h3><p>Ultra HD Streams</p></div>
        <div class="card"><span class="icon">🛡️</span><h3>Secure</h3><p>Encrypted Connection</p></div>      </div>
    </section>

    <section style="text-align:center; padding: 50px 20px; background: var(--glass); margin: 50px 5%; border-radius: 20px;">
      <h2>Premium Plan</h2>
      <h1 style="font-size: 4rem; margin: 10px 0;">${t.price}</h1>
      <a href="https://wa.me/966500000000?text=I want to subscribe" class="btn">WhatsApp Order</a>
    </section>
  `);
});

// Apps Directory
app.get('/apps', (c) => {
  const lang = c.req.query('lang') || 'ar';
  const t = translations[lang];
  
  const appCards = apps.map(app => `
    <a href="/app/${app.id}?lang=${lang}" style="text-decoration:none; color:inherit;">
      <div class="card">
        <span class="icon">${app.icon}</span>
        <h3>${app.name}</h3>
        <p style="color:#aaa; font-size:0.9rem;">${app.desc[lang]}</p>
      </div>
    </a>
  `).join('');

  return Layout(c, 'Apps', html`
    <div class="hero" style="padding: 50px 20px;">
      <h1>${t.apps}</h1>
      <p>Choose your preferred application</p>
    </div>
    <div class="grid">${appCards}</div>
  `);
});

// Single App Page
app.get('/app/:id', (c) => {
  const id = c.req.param('id');
  const lang = c.req.query('lang') || 'ar';
  const app = apps.find(a => a.id === id);
  
  if (!app) return c.text('App not found', 404);

  return Layout(c, app.name, html`
    <div style="max-width: 800px; margin: 50px auto; padding: 20px; text-align: center;">
      <span class="icon" style="font-size: 5rem;">${app.icon}</span>
      <h1 style="font-size: 2.5rem;">${app.name}</h1>
      <p style="font-size: 1.2rem; color: #ddd; margin-bottom: 30px;">${app.desc[lang]}</p>
      
      <div class="card" style="text-align: left; margin-bottom: 20px;">        <h3>📥 How to Install</h3>
        <ol style="line-height: 1.8; color: #ccc;">
          <li>Download the app from the store.</li>
          <li>Open the app and note the MAC Address.</li>
          <li>Contact us on WhatsApp to activate.</li>
          <li>Enjoy watching!</li>
        </ol>
      </div>

      <a href="https://wa.me/966500000000?text=Activate ${app.name}" class="btn">Activate Now</a>
      <br><br>
      <a href="/apps?lang=${lang}" style="color: var(--primary);">← Back to Apps</a>
    </div>
  `);
});

export default app;