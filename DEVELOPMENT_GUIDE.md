# Development Guide - Quick Reference

## 📚 Documentation Files

This project includes comprehensive documentation:

1. **PROJECT_STRUCTURE.md** - Complete architecture and structure overview
2. **QUICK_START_WORKFLOW.md** - Step-by-step workflow for generating similar projects
3. **AI_GENERATION_PROMPT.md** - Ready-to-use prompts for AI-assisted development

## 🚀 Quick Start

### For New Projects
1. Read `QUICK_START_WORKFLOW.md` for step-by-step instructions
2. Use `AI_GENERATION_PROMPT.md` as a template for AI assistance
3. Follow the structure in `PROJECT_STRUCTURE.md`

### For Understanding This Project
1. Review `PROJECT_STRUCTURE.md` for architecture
2. Check `QUICK_START_WORKFLOW.md` for implementation details
3. Use `AI_GENERATION_PROMPT.md` to understand the generation process

## ⚡ Key Workflow Steps

### 1. Project Setup (5 min)
```bash
npx create-next-app@latest project-name
cd project-name
npm install nodemailer @types/nodemailer
```

### 2. Create Structure (5 min)
- Create `app/[locale]/` folder structure
- Create `translations/` folder with language files
- Set up `app/contexts/` and `app/components/`

### 3. Core Infrastructure (10 min)
- TranslationContext with locale management
- CartContext for e-commerce
- Middleware for routing
- Providers wrapper

### 4. Components (10 min)
- Navbar with cart and language switcher
- Footer with language dropdown
- Base styles in globals.css

### 5. Pages (15 min)
- Homepage
- Service pages
- Products listing and detail
- Checkout

### 6. Integration (5 min)
- Email API route
- SMTP configuration

## 📋 Checklist Template

Copy this for each new project:

```
Project: [Name]
Date: [Date]

Setup:
[ ] Next.js project created
[ ] Dependencies installed
[ ] Folder structure created
[ ] TypeScript configured

Infrastructure:
[ ] Translation files created (all languages)
[ ] TranslationContext implemented
[ ] CartContext implemented
[ ] Middleware configured
[ ] Providers wrapper created

Components:
[ ] Navbar component
[ ] Footer component
[ ] Base styles (globals.css)
[ ] Responsive design

Pages:
[ ] Homepage
[ ] Services page
[ ] How We Work page
[ ] Clients page
[ ] Contact page
[ ] Products listing
[ ] Product detail
[ ] Checkout

Features:
[ ] Language switching works
[ ] Cart functionality works
[ ] Checkout form works
[ ] Email sending works
[ ] SEO metadata present
[ ] Responsive design verified

Testing:
[ ] All pages load correctly
[ ] No TypeScript errors
[ ] No console errors
[ ] Mobile responsive
[ ] Desktop responsive
```

## 🎯 Time Estimates

| Phase | Time | Description |
|-------|------|-------------|
| Setup | 5 min | Project initialization |
| Infrastructure | 10 min | Contexts, middleware |
| Components | 10 min | Navbar, Footer, styles |
| Pages | 15 min | All page components |
| Integration | 5 min | API routes, email |
| Styling | 10 min | Responsive design |
| Testing | 5 min | Verification |
| **Total** | **60 min** | **Complete project** |

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📝 Translation File Template

Always start with this structure:

```json
{
  "meta": {
    "title": "",
    "description": "",
    "keywords": ""
  },
  "navbar": {},
  "hero": {},
  "services": {},
  "pages": {},
  "footer": {}
}
```

## 🎨 Design System Quick Reference

### Colors
```css
--color-primary: #000000;    /* Black */
--color-secondary: #808080;   /* Gray */
--color-muted: #666666;       /* Muted gray */
```

### Typography
- Font: Inter (Google Fonts)
- Base: 16px
- Headings: 2rem - 3rem

### Layout
- Container: max-width 1200px
- Section padding: 3-5rem
- Responsive breakpoints: 768px, 1024px

## 🐛 Quick Fixes

### Redirect Loop
- Check middleware matcher pattern
- Verify locale detection logic

### Translation Errors
- Ensure all language files have same structure
- Check translation key paths

### Cart Not Working
- Verify CartProvider wraps app
- Check CartContext implementation

### Email Not Sending
- Verify SMTP credentials in .env.local
- Check API route implementation

## 📖 Best Practices

1. ✅ Always use translation keys
2. ✅ TypeScript for type safety
3. ✅ Component reusability
4. ✅ SEO metadata per page
5. ✅ Responsive design
6. ✅ Semantic HTML
7. ✅ Error handling
8. ✅ Loading states

## 🔄 Iteration Workflow

1. **Structure** → Create folders and files
2. **Contexts** → Set up state management
3. **Components** → Build UI components
4. **Pages** → Create page components
5. **Styling** → Add CSS and responsive design
6. **Testing** → Verify functionality
7. **Polish** → Refine and optimize

## 💡 Pro Tips

- Start with English translations, add others later
- Use component templates for consistency
- Test language switching early
- Verify responsive design on real devices
- Keep translation files in sync
- Document customizations

## 📞 Support

For issues or questions:
1. Check `PROJECT_STRUCTURE.md` for architecture
2. Review `QUICK_START_WORKFLOW.md` for implementation
3. Use `AI_GENERATION_PROMPT.md` for AI assistance

---

**Last Updated**: 2024
**Project Type**: Next.js Multi-Language E-Commerce
**Version**: 1.0.0

