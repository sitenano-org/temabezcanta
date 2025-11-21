# Next.js E-Commerce Project

A modern, single-language Next.js e-commerce website built with TypeScript, React 19, and Next.js 16.

## Features

- 🛒 Shopping cart functionality
- 📦 Product listing with category filters
- 🖼️ Product detail pages with image gallery and tabs
- 💳 Checkout page with order form
- 📧 Email integration for order processing
- 📱 Fully responsive design
- ⚡ Modern UI with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Configure SMTP settings in `.env.local` (optional - will log to console if not configured)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Homepage
├── services/               # Services page
├── how-we-work/           # How we work page
├── clients/               # Clients page
├── contact/               # Contact page
├── products/              # Products pages
│   ├── page.tsx          # Products listing
│   └── [id]/page.tsx     # Product detail
├── checkout/              # Checkout page
├── components/            # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Providers.tsx
├── contexts/             # React contexts
│   └── CartContext.tsx
├── api/                  # API routes
│   └── send-order/       # Email API
└── globals.css           # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Email Setup

To enable email functionality, configure SMTP settings in `.env.local`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

If SMTP is not configured, orders will be logged to the console.

## Technologies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Nodemailer** - Email sending

## License

MIT

