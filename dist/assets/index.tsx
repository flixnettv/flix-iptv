import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { appsData } from './data/apps'
import { translations, detectLanguage, type Language } from './i18n/translations'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// API: Get translations
app.get('/api/translations/:lang', (c) => {
  const lang = c.req.param('lang') as Language
  return c.json(translations[lang] || translations.en)
})

// API: Get all apps
app.get('/api/apps', (c) => {
  return c.json(appsData)
})

// API: Get single app
app.get('/api/apps/:id', (c) => {
  const id = c.req.param('id')
  const app = appsData.find(a => a.id === id)
  if (!app) {
    return c.json({ error: 'App not found' }, 404)
  }
  return c.json(app)
})

// API: IP Geolocation
app.get('/api/geolocation', async (c) => {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    return c.json(data)
  } catch (error) {
    return c.json({ error: 'Failed to fetch location' }, 500)
  }
})

// Main page
app.get('/', (c) => {
  return c.html(renderHTML('home'))
})

// Apps directory page
app.get('/apps', (c) => {
  return c.html(renderHTML('apps'))
})

// Individual app pages
app.get('/apps/:id', (c) => {
  return c.html(renderHTML('app'))
})

// Contact page
app.get('/contact', (c) => {
  return c.html(renderHTML('contact'))
})

function renderHTML(page: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Flix IPTV - Stream Everything, Everywhere, Anytime. 10,000+ Channels, 4K Ultra HD, All Devices">
    <meta name="keywords" content="IPTV, streaming, live TV, movies, sports, VOD, 4K, HD">
    <title>Flix IPTV - Premium IPTV Service</title>
    
    <!-- Open Graph -->
    <meta property="og:title" content="Flix IPTV - Premium IPTV Service">
    <meta property="og:description" content="Stream 10,000+ channels worldwide with 4K quality">
    <meta property="og:type" content="website">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Cairo:wght@300;400;600;700&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Custom Styles -->
    <link href="/static/styles.css" rel="stylesheet">
    
    <!-- Tailwind Config -->
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        'space-black': '#050810',
                        'electric-blue': '#00BFFF',
                        'vivid-orange': '#FF4500',
                        'purple-deep': '#7B2FBE',
                        'gray-muted': '#A0AEC0'
                    },
                    fontFamily: {
                        'orbitron': ['Orbitron', 'sans-serif'],
                        'cairo': ['Cairo', 'sans-serif'],
                        'nunito': ['Nunito', 'sans-serif']
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-space-black text-white font-nunito antialiased" data-page="${page}">
    <!-- Stars Background -->
    <div class="stars-background"></div>
    
    <!-- Navigation -->
    <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-space-black/80 backdrop-blur-lg border-b border-white/10">
        <!-- Nav content loaded by app.js -->
    </nav>
    
    <!-- Main Content -->
    <main id="app" class="relative">
        <div class="loading-spinner">
            <div class="spinner"></div>
        </div>
    </main>
    
    <!-- Floating Contact Widget -->
    <div id="floating-contact" class="fixed bottom-6 right-6 z-50">
        <!-- Contact widget loaded by app.js -->
    </div>
    
    <!-- Footer -->
    <footer id="main-footer" class="bg-space-black/50 border-t border-white/10 py-12">
        <!-- Footer content loaded by app.js -->
    </footer>
    
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
</body>
</html>`
}

export default app
