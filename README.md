# Flix IPTV - Premium IPTV Service Website

## 🎯 Project Overview
**Flix IPTV** is a professional, multilingual IPTV service sales website built with Hono framework and deployed on Cloudflare Pages.

### Key Features
- ✅ **Multilingual Support**: Auto-detection with AR (RTL), EN, FR, ES
- ✅ **24 App/Service Pages**: Complete catalog of IPTV apps and services
- ✅ **Responsive Design**: Mobile, Tablet, Desktop optimized
- ✅ **Dark Cinematic Theme**: Premium streaming aesthetic with glassmorphism
- ✅ **WhatsApp Integration**: Subscription form with auto-redirect
- ✅ **IP Geolocation**: Auto-detect country and phone code
- ✅ **Floating Contact Widget**: WhatsApp, Messenger, Telegram
- ✅ **SEO Optimized**: Meta tags, structured data

## 🌐 URLs

### Development
- **Local**: http://localhost:3000
- **Public**: https://3000-i6ifki3ejbzylf5sdkp2t-18e660f9.sandbox.novita.ai

### Production
- **Will be deployed to**: Cloudflare Pages
- **Expected URL**: https://webapp.pages.dev

## 📊 Data Architecture

### App Categories
1. **IPTV Players** (10 apps): Mega TV, Ipfox Player, Nova IPTV, Aroma IPTV, Maven IPTV, Ceme IPTV, Client Portal, Cobra IPTV, Dlta IPTV, Duplex Play
2. **Smart TV Apps** (10 apps): IBO Player, Flix IPTV App, ELK Player, FlixApp, Nanomid, Net Box, Net IPTV, Purple Smart IPTV, Amazon Fire TV, QuzuTV
3. **Satellite Receivers** (1 app): Satellite Receiver IPTV Setup
4. **Server Services** (3 apps): CCcam Server, N-Share, IPTV Reseller Panel

**Total: 24 unique apps with complete data**

### Storage Services
- **No database required**: Static content with API routes
- **Third-party APIs**: ipapi.co for geolocation

### Routing Structure
```
/ → Homepage (Hero, Features, Devices, Pricing, Testimonials, FAQ)
/apps → Apps directory with category filters
/apps/:id → Individual app detail pages (24 pages)
/contact → Contact page with form
/api/translations/:lang → Language translations
/api/apps → All apps data
/api/apps/:id → Single app data
/api/geolocation → IP-based location detection
```

## 🎨 Design System

### Colors
- **Background**: `#050810` (space black)
- **Primary**: `#00BFFF` (electric blue)
- **Accent**: `#FF4500` (vivid orange)
- **Gradient**: `linear-gradient(135deg, #00BFFF, #7B2FBE)`
- **Text**: White, `#A0AEC0` (muted gray)

### Typography
- **Headings**: Orbitron (futuristic) / Cairo (Arabic)
- **Body**: Nunito (Latin) / Cairo (Arabic)

### Effects
- Glassmorphism cards
- Neon glow buttons
- Star field background animation
- Smooth scroll animations
- Hover micro-interactions

## 💻 Tech Stack
- **Framework**: Hono (v4.12.5)
- **Runtime**: Cloudflare Workers
- **Styling**: TailwindCSS (CDN)
- **Icons**: Font Awesome 6
- **Build**: Vite + TypeScript
- **Deployment**: Cloudflare Pages with Wrangler

## 🚀 Development

### Install Dependencies
```bash
npm install
```

### Build Project
```bash
npm run build
```

### Start Development Server
```bash
# Using PM2 (recommended for sandbox)
pm2 start ecosystem.config.cjs

# Or directly
npm run dev:sandbox
```

### Test Server
```bash
curl http://localhost:3000
curl http://localhost:3000/api/translations/ar
curl http://localhost:3000/api/apps
```

### View Logs
```bash
pm2 logs flix-iptv --nostream
```

### Stop Server
```bash
pm2 delete flix-iptv
# Or
npm run clean-port
```

## 📱 Subscription Flow

1. User clicks "Subscribe Now" button
2. Subscription form modal opens
3. Form auto-fills:
   - Country (from IP geolocation)
   - Phone dial code (with flag emoji)
4. User enters: Name, Phone, selects App (optional)
5. On submit → redirects to WhatsApp with pre-filled message
6. WhatsApp link: `https://wa.link/9r70xe`

## 🔗 Contact Channels
- **WhatsApp**: https://wa.link/9r70xe
- **Messenger**: https://m.me/Hany.Yousseff
- **Telegram**: https://t.me/FLlXX

## 📦 Project Structure
```
webapp/
├── src/
│   ├── index.tsx              # Main Hono app with routing
│   ├── data/
│   │   └── apps.ts            # All 24 apps data
│   └── i18n/
│       └── translations.ts    # Multilingual translations (AR/EN/FR/ES)
├── public/
│   └── static/
│       ├── app.js             # Frontend JavaScript
│       └── styles.css         # Custom CSS with animations
├── dist/                      # Build output
├── ecosystem.config.cjs       # PM2 configuration
├── wrangler.jsonc             # Cloudflare Pages config
├── vite.config.ts             # Vite build config
└── package.json
```

## ✅ Completed Features
- [x] Multilingual system with auto-detection (AR RTL, EN, FR, ES)
- [x] Homepage with hero, features, devices, pricing, testimonials, FAQ
- [x] 24 unique app/service pages with dynamic routing
- [x] Apps directory with category filtering (All, Players, Smart TV, Satellite, Servers)
- [x] Contact page with social links
- [x] Subscription form with IP geolocation (auto-detect country & dial code)
- [x] Floating contact widget (WhatsApp, Messenger, Telegram)
- [x] Dark cinematic theme with glassmorphism effects
- [x] Neon glow animations and hover effects
- [x] Responsive design (mobile/tablet/desktop)
- [x] WhatsApp integration with pre-filled messages
- [x] SEO meta tags and Open Graph
- [x] Stars background animation
- [x] Language switcher (EN/AR/FR/ES)
- [x] Trust badges and customer testimonials
- [x] FAQ accordion section

## 🚀 Deployment Status
- **Local Development**: ✅ Active
- **GitHub**: ⏳ Pending
- **Cloudflare Pages**: ⏳ Pending

## 🔜 Next Steps
1. **Setup GitHub**: Configure GitHub authorization in sidebar → Push code
2. **Setup Cloudflare**: Configure Cloudflare API key in Deploy tab
3. **Deploy to Cloudflare Pages**: Run `npm run deploy:prod`
4. **Configure Custom Domain**: (optional) Add custom domain in Cloudflare
5. **Test All Pages**: Verify all 24 app pages and forms work correctly
6. **SEO Optimization**: Add structured data and sitemap
7. **Performance**: Optimize images and add lazy loading

## 📋 How to Deploy

### Prerequisites
- GitHub account configured in sidebar
- Cloudflare account with API key in Deploy tab

### Deployment Steps
```bash
# 1. Push to GitHub (after configuring GitHub in sidebar)
git remote add origin https://github.com/YOUR_USERNAME/flix-iptv.git
git push -u origin main

# 2. Deploy to Cloudflare Pages (after configuring API key)
npm run deploy:prod
```

## 📝 Notes
- All static files served from `/static/*` path
- API routes prefixed with `/api/*`
- Frontend uses Axios for API calls
- RTL support automatic for Arabic
- Price fixed at $70/year across all pages
- No external app download links (subscription-first approach)

---

**Last Updated**: 2026-03-04  
**Version**: 1.0.0  
**Status**: Development Ready ✅
