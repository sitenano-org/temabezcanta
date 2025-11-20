# Next.js Multi-Language E-Commerce Project Structure

## 📋 Project Overview

This is a Next.js 16+ application with:
- **Multi-language support** (EN, TR, DE) with URL-based routing
- **E-commerce functionality** (products, cart, checkout)
- **Email integration** for order processing
- **SEO optimization** with dynamic metadata
- **Responsive design** with modern UI/UX

## 🏗️ Architecture

### Core Technologies
- **Next.js 16.0.3** (App Router)
- **React 19.2.0**
- **TypeScript 5.5.3**
- **Nodemailer** (email sending)

### Project Structure

```
noname/
├── app/
│   ├── [locale]/              # Locale-based routing
│   │   ├── layout.tsx         # Locale layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── services/
│   │   ├── how-we-work/
│   │   ├── clients/
│   │   ├── contact/
│   │   ├── products/
│   │   │   ├── page.tsx       # Products listing
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Product detail
│   │   └── checkout/
│   │       └── page.tsx        # Checkout page
│   ├── api/
│   │   └── send-order/
│   │       └── route.ts       # Email API endpoint
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation with cart
│   │   ├── Footer.tsx         # Footer with language switcher
│   │   └── Providers.tsx     # Context providers wrapper
│   ├── contexts/
│   │   ├── TranslationContext.tsx  # i18n management
│   │   └── CartContext.tsx          # Shopping cart state
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── translations/
│   ├── en.json                # English translations
│   ├── tr.json                # Turkish translations
│   └── de.json                # German translations
├── middleware.ts              # Locale detection & routing
├── package.json
└── tsconfig.json
```

## 🔑 Key Features

### 1. Multi-Language System
- **URL-based routing**: `/en/`, `/tr/`, `/de/`
- **Translation files**: JSON-based, structured by sections
- **Dynamic metadata**: SEO-friendly per language
- **Cookie persistence**: Remembers user's language preference
- **Browser detection**: Auto-detects from Accept-Language header

### 2. E-Commerce
- **Product listing**: Filterable grid with categories
- **Product detail**: Image gallery, tabs (specs/docs/drivers), related products
- **Shopping cart**: Persistent state, dropdown in navbar
- **Checkout**: Customer form, order summary, email integration

### 3. Context Management
- **TranslationContext**: Manages language state and translations
- **CartContext**: Manages shopping cart items and totals
- **Providers**: Wraps app with all contexts

### 4. Styling
- **CSS Variables**: Centralized color scheme (black/gray theme)
- **Responsive Design**: Mobile-first approach
- **Component Styles**: Scoped in globals.css with BEM-like naming

## 📝 Translation File Structure

```json
{
  "meta": {
    "title": "...",
    "description": "...",
    "keywords": "..."
  },
  "navbar": { ... },
  "hero": { ... },
  "services": { ... },
  "pages": {
    "products": { ... },
    "checkout": { ... },
    ...
  },
  "footer": { ... }
}
```

## 🚀 Development Workflow

### Initial Setup
1. Create Next.js app: `npx create-next-app@latest`
2. Install dependencies: `npm install nodemailer @types/nodemailer`
3. Set up TypeScript configuration
4. Create folder structure

### Adding New Pages
1. Create page in `app/[locale]/[page-name]/page.tsx`
2. Add translations to all language files
3. Update Navbar links if needed
4. Add styles to `globals.css`

### Adding New Languages
1. Create new translation file: `translations/[locale].json`
2. Add locale to `middleware.ts` locales array
3. Update `TranslationContext.tsx` imports
4. Update `[locale]/layout.tsx` metadata function

## 🔧 Configuration

### Environment Variables (.env.local)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
SMTP_FROM=your-email@gmail.com
```

### Middleware Configuration
- Locale detection priority: Cookie → Accept-Language → Default
- Redirects root to `/en` (or detected locale)
- Skips static files and API routes

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "next": "^16.0.3",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "nodemailer": "^7.0.10",
    "@types/nodemailer": "^7.0.4"
  }
}
```

## 🎨 Design System

### Colors
- Primary: `#000000` (black)
- Secondary: `#808080` (gray)
- Muted: `#666666`
- Background: `#ffffff`
- Accent: Gradient (primary to secondary)

### Typography
- Font: Inter (Google Fonts)
- Base size: 16px
- Responsive scaling

### Components
- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`
- Cards: `.card`, `.service-card`
- Forms: `.form-group`, `.form-row`
- Layout: `.container`, `.section`

## 🔍 SEO Features

- Dynamic metadata per locale
- Canonical URLs
- Hreflang tags
- Language-specific keywords
- Semantic HTML structure

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🐛 Common Issues & Solutions

1. **Redirect loops**: Check middleware matcher pattern
2. **Translation errors**: Verify JSON structure matches across all languages
3. **Cart not persisting**: Check CartContext provider wrapping
4. **Email not sending**: Verify SMTP credentials in .env.local

## 📚 Best Practices

1. **Always use translation keys**: Never hardcode text
2. **Type safety**: Use TypeScript interfaces for all data structures
3. **Component reusability**: Extract common patterns
4. **SEO**: Always include meta tags per page
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **Performance**: Lazy load images, optimize fonts

