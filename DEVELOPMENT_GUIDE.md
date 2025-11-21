# Geliştirme Kılavuzu - Hızlı Referans

## 📚 Dokümantasyon Dosyaları

Bu proje kapsamlı dokümantasyon içerir:

1. **PROJECT_STRUCTURE.md** - Tam mimari ve yapı genel bakışı
2. **QUICK_START_WORKFLOW.md** - Benzer projeler oluşturmak için adım adım iş akışı
3. **AI_GENERATION_PROMPT.md** - AI destekli geliştirme için hazır şablonlar

## 🚀 Hızlı Başlangıç

### Yeni Projeler İçin
1. Adım adım talimatlar için `QUICK_START_WORKFLOW.md` dosyasını okuyun
2. AI yardımı için `AI_GENERATION_PROMPT.md` dosyasını şablon olarak kullanın
3. `PROJECT_STRUCTURE.md` dosyasındaki yapıyı takip edin

### Bu Projeyi Anlamak İçin
1. Mimari için `PROJECT_STRUCTURE.md` dosyasını inceleyin
2. Uygulama detayları için `QUICK_START_WORKFLOW.md` dosyasını kontrol edin
3. Üretim sürecini anlamak için `AI_GENERATION_PROMPT.md` dosyasını kullanın

## ⚡ Temel İş Akışı Adımları

### 1. Proje Kurulumu (5 dk)
```bash
npx create-next-app@latest project-name
cd project-name
npm install nodemailer @types/nodemailer
```

### 2. Yapı Oluşturma (5 dk)
- `app/` klasör yapısını oluştur
- `app/contexts/` ve `app/components/` klasörlerini kur

### 3. Temel Altyapı (10 dk)
- E-ticaret için CartContext
- Providers wrapper

### 4. Bileşenler (10 dk)
- Sepet ile Navbar
- Footer
- globals.css'de temel stiller

### 5. Sayfalar (15 dk)
- Ana sayfa
- Hizmet sayfaları
- Ürün listeleme ve detay
- Ödeme

### 6. Entegrasyon (5 dk)
- E-posta API route'u
- SMTP yapılandırması

## 📋 Kontrol Listesi Şablonu

Her yeni proje için bunu kopyalayın:

```
Proje: [İsim]
Tarih: [Tarih]

Kurulum:
[ ] Next.js projesi oluşturuldu
[ ] Bağımlılıklar yüklendi
[ ] Klasör yapısı oluşturuldu
[ ] TypeScript yapılandırıldı

Altyapı:
[ ] CartContext uygulandı
[ ] Providers wrapper oluşturuldu

Bileşenler:
[ ] Navbar bileşeni
[ ] Footer bileşeni
[ ] Temel stiller (globals.css)
[ ] Duyarlı tasarım

Sayfalar:
[ ] Ana sayfa
[ ] Hizmetler sayfası
[ ] Nasıl Çalışıyoruz sayfası
[ ] Müşteriler sayfası
[ ] İletişim sayfası
[ ] Ürün listeleme
[ ] Ürün detay
[ ] Ödeme

Özellikler:
[ ] Sepet işlevselliği çalışıyor
[ ] Ödeme formu çalışıyor
[ ] E-posta gönderme çalışıyor
[ ] SEO metadata mevcut
[ ] Duyarlı tasarım doğrulandı

Test:
[ ] Tüm sayfalar doğru yükleniyor
[ ] TypeScript hatası yok
[ ] Konsol hatası yok
[ ] Mobil duyarlı
[ ] Masaüstü duyarlı
```

## 🎯 Zaman Tahminleri

| Aşama | Süre | Açıklama |
|-------|------|----------|
| Kurulum | 5 dk | Proje başlatma |
| Altyapı | 10 dk | Bağlamlar |
| Bileşenler | 10 dk | Navbar, Footer, stiller |
| Sayfalar | 15 dk | Tüm sayfa bileşenleri |
| Entegrasyon | 5 dk | API route'ları, e-posta |
| Stil | 10 dk | Duyarlı tasarım |
| Test | 5 dk | Doğrulama |
| **Toplam** | **60 dk** | **Tam proje** |

## 🔧 Yaygın Komutlar

```bash
# Geliştirme
npm run dev          # Geliştirme sunucusunu başlat

# Üretim
npm run build        # Üretim için derle
npm start            # Üretim sunucusunu başlat

# Kod Kalitesi
npm run lint         # ESLint çalıştır
```

## 🎨 Tasarım Sistemi Hızlı Referans

### Renkler
```css
--color-primary: #000000;    /* Siyah */
--color-secondary: #808080;   /* Gri */
--color-muted: #666666;       /* Soluk gri */
```

### Tipografi
- Font: Inter (Google Fonts)
- Temel: 16px
- Başlıklar: 2rem - 3rem

### Düzen
- Container: max-width 1200px
- Bölüm padding: 3-5rem
- Duyarlı kesme noktaları: 768px, 1024px

## 🐛 Hızlı Düzeltmeler

### Sepet Çalışmıyor
- CartProvider'ın uygulamayı sardığını doğrula
- CartContext uygulamasını kontrol et

### E-posta Gönderilmiyor
- .env.local dosyasındaki SMTP kimlik bilgilerini doğrula
- API route uygulamasını kontrol et

## 📖 En İyi Uygulamalar

1. ✅ Tip güvenliği için TypeScript
2. ✅ Bileşen yeniden kullanılabilirliği
3. ✅ Sayfa başına SEO metadata
4. ✅ Duyarlı tasarım
5. ✅ Anlamsal HTML
6. ✅ Hata yönetimi
7. ✅ Yükleme durumları

## 🔄 Yineleme İş Akışı

1. **Yapı** → Klasör ve dosyaları oluştur
2. **Bağlamlar** → Durum yönetimini kur
3. **Bileşenler** → UI bileşenlerini oluştur
4. **Sayfalar** → Sayfa bileşenlerini oluştur
5. **Stil** → CSS ve duyarlı tasarım ekle
6. **Test** → İşlevselliği doğrula
7. **İnceleme** → İyileştir ve optimize et

## 💡 İpuçları

- Tutarlılık için bileşen şablonlarını kullan
- Sepet işlevselliğini erken test et
- Gerçek cihazlarda duyarlı tasarımı doğrula
- Özelleştirmeleri dokümante et

## 📞 Destek

Sorunlar veya sorular için:
1. Mimari için `PROJECT_STRUCTURE.md` dosyasını kontrol edin
2. Uygulama için `QUICK_START_WORKFLOW.md` dosyasını inceleyin
3. AI yardımı için `AI_GENERATION_PROMPT.md` dosyasını kullanın

---

**Son Güncelleme**: 2024
**Proje Türü**: Next.js E-Ticaret
**Sürüm**: 1.0.0
