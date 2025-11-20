# Quick Start Workflow - Generate Similar Projects Fast

## 🎯 Goal
Generate a multi-language Next.js e-commerce website in **30-60 minutes** with consistent structure and best practices.

## 📋 Pre-Development Checklist

### Phase 1: Project Setup (5 minutes)
- [ ] Create Next.js project: `npx create-next-app@latest project-name`
- [ ] Install core dependencies: `npm install nodemailer @types/nodemailer`
- [ ] Verify TypeScript configuration
- [ ] Set up folder structure (see template below)

### Phase 2: Core Infrastructure (10 minutes)
- [ ] Create translation files structure (`translations/en.json`, `tr.json`, `de.json`)
- [ ] Set up `TranslationContext.tsx` with locale management
- [ ] Set up `CartContext.tsx` for e-commerce
- [ ] Create `Providers.tsx` wrapper
- [ ] Configure `middleware.ts` for locale routing
- [ ] Set up `[locale]/layout.tsx` with dynamic metadata

### Phase 3: Base Components (10 minutes)
- [ ] Create `Navbar.tsx` with:
  - Language switcher
  - Navigation links
  - Shopping cart dropdown
- [ ] Create `Footer.tsx` with:
  - Language dropdown
  - Footer links
  - Copyright
- [ ] Add base styles to `globals.css`:
  - CSS variables (colors, spacing)
  - Base typography
  - Button styles
  - Container/layout utilities

### Phase 4: Pages (15 minutes)
- [ ] Homepage (`[locale]/page.tsx`):
  - Hero section
  - Services preview
  - Value propositions
  - Testimonials
  - FAQ
- [ ] Service pages (Services, How We Work, Clients, Contact)
- [ ] Products listing page with filters
- [ ] Product detail page with tabs
- [ ] Checkout page with form

### Phase 5: API & Integration (5 minutes)
- [ ] Create email API route (`/api/send-order/route.ts`)
- [ ] Configure SMTP settings (document in .env.example)
- [ ] Test email sending

### Phase 6: Styling & Polish (10 minutes)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Hover effects and transitions
- [ ] Loading states
- [ ] Error handling UI

### Phase 7: Testing & Refinement (5 minutes)
- [ ] Test language switching
- [ ] Test cart functionality
- [ ] Test checkout flow
- [ ] Verify SEO metadata
- [ ] Test responsive design

## 🚀 Step-by-Step Generation Template

### 1. Project Initialization Script

```bash
#!/bin/bash
# init-project.sh

PROJECT_NAME=$1

# Create Next.js app
npx create-next-app@latest $PROJECT_NAME --typescript --tailwind=false --app --no-src-dir --import-alias "@/*"

cd $PROJECT_NAME

# Install dependencies
npm install nodemailer @types/nodemailer

# Create folder structure
mkdir -p app/\[locale\]/{services,how-we-work,clients,contact,products/\[id\],checkout}
mkdir -p app/{components,contexts,api/send-order}
mkdir -p translations

echo "Project structure created!"
```

### 2. Translation File Template

**translations/en.json** (Base structure - copy for other languages):
```json
{
  "meta": {
    "title": "Brand Name – Tagline",
    "description": "SEO description",
    "keywords": "keyword1, keyword2, keyword3"
  },
  "navbar": {
    "logo": "BRAND",
    "services": "Services",
    "howWeWork": "How We Work",
    "clients": "Clients",
    "contact": "Contact",
    "products": "Products",
    "cart": "Cart",
    "checkout": "Checkout"
  },
  "hero": {
    "title": "Main Headline",
    "subtitle": "Supporting text",
    "cta": "Call to Action",
    "trustedBy": "Trusted by"
  },
  "pages": {
    "services": { "title": "...", "subtitle": "...", "intro": "..." },
    "checkout": {
      "title": "Checkout",
      "orderSummary": "Order Summary",
      "customerInfo": "Customer Information",
      "name": "Full Name",
      "email": "Email Address",
      "phone": "Phone Number",
      "company": "Company Name",
      "address": "Address",
      "city": "City",
      "country": "Country",
      "notes": "Order Notes",
      "subtotal": "Subtotal",
      "total": "Total",
      "placeOrder": "Place Order",
      "emptyCart": "Your cart is empty"
    }
  }
}
```

### 3. Component Templates

#### Navbar Template
```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '../contexts/TranslationContext'
import { useCart } from '../contexts/CartContext'

export default function Navbar() {
  const { t, locale, setLanguage } = useTranslation()
  const { items, totalItems } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link href={`/${locale}`} className="logo">{t.navbar.logo}</Link>
        <ul className="nav-links">
          <li><Link href={`/${locale}/services`}>{t.navbar.services}</Link></li>
          {/* Add more links */}
        </ul>
        {/* Language switcher & Cart */}
      </div>
    </nav>
  )
}
```

#### Page Template
```tsx
'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from '../../contexts/TranslationContext'

export default function PageName() {
  const { t } = useTranslation()

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{t.pages.pageName.title}</h1>
          <p className="page-subtitle">{t.pages.pageName.subtitle}</p>
        </div>
      </div>
      {/* Page content */}
      <Footer />
    </main>
  )
}
```

### 4. Context Templates

#### TranslationContext.tsx
```tsx
'use client'
import { createContext, useContext, useMemo, useCallback, useRef, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import enTranslations from '../../translations/en.json'
// Import other languages

type Language = 'en' | 'tr' | 'de'
type Translations = typeof enTranslations

const TranslationContext = createContext<...>(undefined)

export function TranslationProvider({ children, locale }: { children: ReactNode; locale: Language }) {
  const router = useRouter()
  const pathname = usePathname()
  
  const setLanguage = useCallback((lang: Language) => {
    document.cookie = `locale=${lang}; path=/; max-age=31536000`
    const pathWithoutLocale = pathname?.replace(new RegExp(`^/${locale}/?`), '').replace(/^\/|\/$/g, '') || ''
    const newPath = pathWithoutLocale ? `/${lang}/${pathWithoutLocale}` : `/${lang}`
    router.replace(newPath)
  }, [locale, pathname, router])

  const value = useMemo(() => ({
    language: locale,
    setLanguage,
    t: translations[locale] || translations.en,
    locale,
  }), [locale, setLanguage])

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) throw new Error('useTranslation must be used within TranslationProvider')
  return context
}
```

### 5. CSS Template Structure

```css
/* globals.css */

:root {
  --color-primary: #000000;
  --color-secondary: #808080;
  --color-muted: #666666;
  --color-text: #333333;
  --font-base: 'Inter', sans-serif;
  --spacing-unit: 1rem;
}

/* Base styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: var(--font-base); line-height: 1.6; }

/* Layout */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }

/* Components */
.btn { padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; }
.btn-primary { background: var(--color-primary); color: white; }
.navbar { position: fixed; top: 0; width: 100%; z-index: 1000; }

/* Responsive */
@media (max-width: 768px) { /* Mobile styles */ }
```

### 6. Middleware Template

```tsx
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'tr', 'de']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    const locale = getLocale(request) || defaultLocale
    request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  return NextResponse.next()
}

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale
  
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    for (const locale of locales) {
      if (acceptLanguage.includes(locale)) return locale
    }
  }
  
  return defaultLocale
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*|.*\\.).*)'],
}
```

## ⚡ Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Design System Quick Reference

### Colors
- Primary: Black (#000000)
- Secondary: Gray (#808080)
- Use CSS variables for consistency

### Spacing
- Use rem units (1rem = 16px)
- Container max-width: 1200px
- Section padding: 3-5rem

### Typography
- Font: Inter (Google Fonts)
- Headings: 2rem - 3rem
- Body: 1rem
- Line height: 1.6-1.8

## 🔄 Iteration Checklist

After initial setup, iterate through:
1. ✅ Add content to translation files
2. ✅ Style components
3. ✅ Add images/assets
4. ✅ Test all pages
5. ✅ Optimize performance
6. ✅ Add analytics
7. ✅ Deploy

## 📝 Notes for AI Assistant

When generating similar projects, follow this order:
1. **Structure first** - Create folder structure and core files
2. **Contexts** - Set up state management
3. **Components** - Build reusable UI components
4. **Pages** - Create page components
5. **Styling** - Add CSS last (easier to adjust)

**Key patterns to maintain:**
- Always use `'use client'` for interactive components
- Use translation keys, never hardcode text
- Follow the same folder structure
- Use TypeScript for type safety
- Keep components small and focused

## 🚨 Common Pitfalls to Avoid

1. ❌ Don't forget `'use client'` on components using hooks
2. ❌ Don't hardcode text - always use translations
3. ❌ Don't skip TypeScript types
4. ❌ Don't forget to add translations for all languages
5. ❌ Don't forget responsive design
6. ❌ Don't skip SEO metadata

## 📊 Time Estimates

- **Basic setup**: 15 minutes
- **Full e-commerce**: 45-60 minutes
- **With custom design**: 60-90 minutes
- **Production ready**: 90-120 minutes

## 🎯 Success Criteria

Project is ready when:
- ✅ All pages load correctly
- ✅ Language switching works
- ✅ Cart functionality works
- ✅ Checkout sends emails
- ✅ Responsive on all devices
- ✅ SEO metadata present
- ✅ No console errors
- ✅ TypeScript compiles without errors

