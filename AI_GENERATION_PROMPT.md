# AI Generation Prompt Template

Use this prompt template to generate similar Next.js multi-language e-commerce projects quickly and consistently.

## 🎯 Master Prompt

```
Create a Next.js 16+ multi-language e-commerce website with the following specifications:

## Project Requirements

### 1. Technology Stack
- Next.js 16+ with App Router
- TypeScript
- React 19+
- Nodemailer for email functionality

### 2. Multi-Language Support
- Support 3 languages: English (en), Turkish (tr), German (de)
- URL-based routing: /en/, /tr/, /de/
- Translation files in JSON format
- Language switcher in navbar and footer
- Cookie-based language persistence
- Browser language detection
- Dynamic SEO metadata per language

### 3. Project Structure
```
app/
├── [locale]/
│   ├── layout.tsx (with dynamic metadata)
│   ├── page.tsx (homepage)
│   ├── services/page.tsx
│   ├── how-we-work/page.tsx
│   ├── clients/page.tsx
│   ├── contact/page.tsx
│   ├── products/
│   │   ├── page.tsx (listing with filters)
│   │   └── [id]/page.tsx (detail with tabs)
│   └── checkout/page.tsx
├── components/
│   ├── Navbar.tsx (with cart dropdown)
│   ├── Footer.tsx (with language switcher)
│   └── Providers.tsx
├── contexts/
│   ├── TranslationContext.tsx
│   └── CartContext.tsx
├── api/
│   └── send-order/route.ts
└── globals.css
translations/
├── en.json
├── tr.json
└── de.json
middleware.ts
```

### 4. Core Features

#### Translation System
- TranslationContext with useTranslation hook
- All text must use translation keys
- Translation files structured by sections (meta, navbar, hero, pages, footer)
- Language switching updates URL and cookie

#### E-Commerce
- Product listing page with category filters
- Product detail page with:
  - Image gallery (main + thumbnails)
  - Product info (name, price, summary)
  - Tabs (Specifications, Documentation, Drivers)
  - Related products
- Shopping cart with:
  - Add to cart functionality
  - Cart dropdown in navbar
  - Quantity management
  - Total price calculation
- Checkout page with:
  - Order summary
  - Customer information form
  - Email sending to info@domain.com

#### Styling
- CSS variables for colors (primary: black, secondary: gray)
- Responsive design (mobile-first)
- Modern UI with hover effects
- Sticky navbar with scroll detection
- Component-based CSS in globals.css

### 5. Implementation Details

#### Middleware
- Detect locale from URL, cookie, or Accept-Language header
- Redirect root to /en (or detected locale)
- Skip static files and API routes

#### Translation Context
- Accept locale from URL params
- setLanguage function updates URL and cookie
- Prevent redirect loops
- Use useMemo for performance

#### Cart Context
- Manage cart items with add/remove/update
- Calculate totals
- Clear cart after checkout
- Persist in component state (can add localStorage later)

#### Email API
- Use Nodemailer
- Send formatted order email
- Include customer info and order items
- Handle SMTP configuration via env variables
- Fallback to console log if SMTP not configured

### 6. Translation File Structure
```json
{
  "meta": {
    "title": "Brand – Tagline",
    "description": "SEO description",
    "keywords": "keywords"
  },
  "navbar": { "logo": "...", "services": "...", ... },
  "hero": { "title": "...", "subtitle": "...", ... },
  "pages": {
    "products": { ... },
    "checkout": { ... },
    ...
  },
  "footer": { ... }
}
```

### 7. Design Requirements
- Color scheme: Primary black (#000000), Secondary gray (#808080)
- Typography: Inter font from Google Fonts
- Buttons: .btn, .btn-primary, .btn-secondary classes
- Layout: .container class with max-width 1200px
- Responsive breakpoints: mobile < 768px, tablet 768-1024px, desktop > 1024px

### 8. Code Quality
- Use TypeScript with strict mode
- All components properly typed
- Use 'use client' for interactive components
- Follow Next.js 16 App Router conventions
- No hardcoded text (always use translations)
- Semantic HTML
- Accessible components

### 9. Development Workflow
1. Set up project structure first
2. Create contexts (Translation, Cart)
3. Build base components (Navbar, Footer)
4. Create pages
5. Add styling
6. Test all functionality

### 10. Specific Implementation Notes
- Navbar: Sticky, scroll detection, cart dropdown, language switcher
- Footer: Language dropdown, links, copyright
- Homepage: Hero, services preview, value props, testimonials, FAQ
- Products: Grid layout, filter navbar, product cards
- Product Detail: Image gallery, tabs, related products
- Checkout: Two-column layout (summary + form), validation, email sending

## Expected Output
A fully functional Next.js application with:
- ✅ All pages working
- ✅ Language switching functional
- ✅ Cart and checkout working
- ✅ Email integration ready
- ✅ Responsive design
- ✅ SEO optimized
- ✅ TypeScript without errors
- ✅ Clean, maintainable code

Generate the complete project following this structure and requirements.
```

## 🔄 Variations for Different Project Types

### For Content/Blog Sites
```
Replace e-commerce features with:
- Blog post listing
- Category filtering
- Post detail pages
- Search functionality
- Newsletter subscription
```

### For Service/Portfolio Sites
```
Replace e-commerce with:
- Service packages
- Portfolio gallery
- Case studies
- Contact forms
- Booking/consultation forms
```

### For SaaS Landing Pages
```
Replace e-commerce with:
- Pricing plans
- Feature comparison
- Testimonials
- Demo requests
- Sign-up forms
```

## 📝 Quick Customization Points

When adapting the prompt, change:
1. **Brand name**: Replace "SITENANO" with target brand
2. **Languages**: Adjust locale array
3. **Color scheme**: Update CSS variables
4. **Pages**: Modify page list
5. **Features**: Add/remove e-commerce, blog, etc.

## 🎯 Quality Checklist

After generation, verify:
- [ ] All translation keys exist in all language files
- [ ] No hardcoded text in components
- [ ] TypeScript compiles without errors
- [ ] All pages accessible via correct URLs
- [ ] Language switching works
- [ ] Responsive design works
- [ ] SEO metadata present
- [ ] No console errors
- [ ] Cart functionality works
- [ ] Email API configured

## 💡 Pro Tips

1. **Start with structure**: Always create folder structure first
2. **Contexts before components**: Set up state management early
3. **Translation-first**: Add translation keys before implementing UI
4. **Component reuse**: Extract common patterns
5. **Progressive enhancement**: Build basic version first, enhance later

## 🔧 Troubleshooting Prompts

If something doesn't work, use these follow-up prompts:

```
Fix [specific issue] in the [component/page]. 
The issue is: [description]
Expected behavior: [what should happen]
Current behavior: [what's happening now]
```

Example:
```
Fix the language switcher in the Navbar component.
The issue is: URL doesn't update when changing language
Expected behavior: URL should change from /en/services to /tr/services
Current behavior: URL stays as /en/services
```

