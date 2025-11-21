# Next.js E-Ticaret Proje Yapısı

## 📋 Proje Genel Bakışı

Bu, aşağıdaki özelliklere sahip bir Next.js 16+ uygulamasıdır:
- **E-ticaret işlevselliği** (ürünler, sepet, ödeme)
- **Sipariş işleme için e-posta entegrasyonu**
- **Dinamik metadata ile SEO optimizasyonu**
- **Modern UI/UX ile duyarlı tasarım**

## 🏗️ Mimari

### Temel Teknolojiler
- **Next.js 16.0.3** (App Router)
- **React 19.2.0**
- **TypeScript 5.5.3**
- **Nodemailer** (e-posta gönderme)

### Proje Yapısı

```
proje-adi/
├── app/
│   ├── layout.tsx             # Kök düzen
│   ├── page.tsx               # Ana sayfa
│   ├── services/
│   ├── how-we-work/
│   ├── clients/
│   ├── contact/
│   ├── products/
│   │   ├── page.tsx           # Ürün listeleme
│   │   └── [id]/
│   │       └── page.tsx       # Ürün detay
│   ├── checkout/
│   │   └── page.tsx            # Ödeme sayfası
│   ├── api/
│   │   └── send-order/
│   │       └── route.ts       # E-posta API endpoint'i
│   ├── components/
│   │   ├── Navbar.tsx         # Sepet ile navigasyon
│   │   ├── Footer.tsx         # Footer
│   │   └── Providers.tsx     # Bağlam sağlayıcı wrapper
│   ├── contexts/
│   │   └── CartContext.tsx          # Alışveriş sepeti durumu
│   └── globals.css            # Global stiller
├── package.json
└── tsconfig.json
```

## 🔑 Temel Özellikler

### 1. E-Ticaret
- **Ürün listeleme**: Kategorilerle filtrelenebilir ızgara
- **Ürün detay**: Görsel galerisi, sekmeler (özellikler/dokümantasyon/sürücüler), ilgili ürünler
- **Alışveriş sepeti**: Kalıcı durum, navbar'da açılır menü
- **Ödeme**: Müşteri formu, sipariş özeti, e-posta entegrasyonu

### 2. Bağlam Yönetimi
- **CartContext**: Alışveriş sepeti öğelerini ve toplamları yönetir
- **Providers**: Uygulamayı tüm bağlamlarla sarar

### 3. Stil
- **CSS Değişkenleri**: Merkezi renk şeması (siyah/gri teması)
- **Duyarlı Tasarım**: Mobil öncelikli yaklaşım
- **Bileşen Stilleri**: BEM benzeri isimlendirme ile globals.css'de kapsamlı

## 🚀 Geliştirme İş Akışı

### İlk Kurulum
1. Next.js uygulaması oluştur: `npx create-next-app@latest`
2. Bağımlılıkları yükle: `npm install nodemailer @types/nodemailer`
3. TypeScript yapılandırmasını kur
4. Klasör yapısını oluştur

### Yeni Sayfalar Ekleme
1. `app/[sayfa-adi]/page.tsx` içinde sayfa oluştur
2. Gerekirse Navbar bağlantılarını güncelle
3. `globals.css` dosyasına stiller ekle

## 🔧 Yapılandırma

### Ortam Değişkenleri (.env.local)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
SMTP_FROM=your-email@gmail.com
```

## 📦 Temel Bağımlılıklar

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

## 🎨 Tasarım Sistemi

### Renkler
- Birincil: `#000000` (siyah)
- İkincil: `#808080` (gri)
- Soluk: `#666666`
- Arka plan: `#ffffff`
- Vurgu: Gradyan (birincilden ikincile)

### Tipografi
- Font: Inter (Google Fonts)
- Temel boyut: 16px
- Duyarlı ölçekleme

### Bileşenler
- Butonlar: `.btn`, `.btn-primary`, `.btn-secondary`
- Kartlar: `.card`, `.service-card`
- Formlar: `.form-group`, `.form-row`
- Düzen: `.container`, `.section`

## 🔍 SEO Özellikleri

- Sayfa başına dinamik metadata
- Kanonik URL'ler
- Anlamsal HTML yapısı

## 📱 Duyarlı Kesme Noktaları

- Mobil: < 768px
- Tablet: 768px - 1024px
- Masaüstü: > 1024px

## 🐛 Yaygın Sorunlar ve Çözümler

1. **Sepet kalıcı değil**: CartContext provider sarmasını kontrol et
2. **E-posta gönderilmiyor**: .env.local dosyasındaki SMTP kimlik bilgilerini doğrula

## 📚 En İyi Uygulamalar

1. **Tip güvenliği**: Tüm veri yapıları için TypeScript arayüzlerini kullan
2. **Bileşen yeniden kullanılabilirliği**: Ortak desenleri çıkar
3. **SEO**: Her zaman sayfa başına meta etiketleri ekle
4. **Erişilebilirlik**: Anlamsal HTML ve ARIA etiketleri kullan
5. **Performans**: Görselleri tembel yükle, fontları optimize et
