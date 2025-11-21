# Hızlı Başlangıç İş Akışı - Benzer Projeleri Hızlıca Oluşturun

## 🎯 Hedef
Tutarlı yapı ve en iyi uygulamalarla **30-60 dakika** içinde bir Next.js e-ticaret web sitesi oluşturun.

## 📋 Geliştirme Öncesi Kontrol Listesi

### Aşama 1: Proje Kurulumu (5 dakika)
- [ ] Next.js projesi oluştur: `npx create-next-app@latest project-name`
- [ ] Temel bağımlılıkları yükle: `npm install nodemailer @types/nodemailer`
- [ ] TypeScript yapılandırmasını doğrula
- [ ] Klasör yapısını kur (aşağıdaki şablonu gör)

### Aşama 2: Temel Altyapı (10 dakika)
- [ ] E-ticaret için `CartContext.tsx` kur
- [ ] `Providers.tsx` wrapper'ı oluştur
- [ ] Metadata ile `layout.tsx` kur

### Aşama 3: Temel Bileşenler (10 dakika)
- [ ] Aşağıdakilerle `Navbar.tsx` oluştur:
  - Navigasyon bağlantıları
  - Alışveriş sepeti açılır menüsü
- [ ] Aşağıdakilerle `Footer.tsx` oluştur:
  - Footer bağlantıları
  - Telif hakkı
- [ ] `globals.css` dosyasına temel stiller ekle:
  - CSS değişkenleri (renkler, boşluklar)
  - Temel tipografi
  - Buton stilleri
  - Container/düzen yardımcıları

### Aşama 4: Sayfalar (15 dakika)
- [ ] Ana sayfa (`page.tsx`):
  - Hero bölümü
  - Hizmet önizlemesi
  - Değer önerileri
  - Referanslar
  - SSS
- [ ] Hizmet sayfaları (Hizmetler, Nasıl Çalışıyoruz, Müşteriler, İletişim)
- [ ] Filtrelerle ürün listeleme sayfası
- [ ] Sekmelerle ürün detay sayfası
- [ ] Form ile ödeme sayfası

### Aşama 5: API ve Entegrasyon (5 dakika)
- [ ] E-posta API route'u oluştur (`/api/send-order/route.ts`)
- [ ] SMTP ayarlarını yapılandır (.env.example'da dokümante et)
- [ ] E-posta göndermeyi test et

### Aşama 6: Stil ve İnceleme (10 dakika)
- [ ] Duyarlı tasarım (mobil, tablet, masaüstü)
- [ ] Hover efektleri ve geçişler
- [ ] Yükleme durumları
- [ ] Hata yönetimi UI

### Aşama 7: Test ve İyileştirme (5 dakika)
- [ ] Sepet işlevselliğini test et
- [ ] Ödeme akışını test et
- [ ] SEO metadata'yı doğrula
- [ ] Duyarlı tasarımı test et

## 🚀 Adım Adım Üretim Şablonu

### 1. Proje Başlatma Betiği

```bash
#!/bin/bash
# init-project.sh

PROJECT_NAME=$1

# Next.js uygulaması oluştur
npx create-next-app@latest $PROJECT_NAME --typescript --tailwind=false --app --no-src-dir --import-alias "@/*"

cd $PROJECT_NAME

# Bağımlılıkları yükle
npm install nodemailer @types/nodemailer

# Klasör yapısını oluştur
mkdir -p app/{services,how-we-work,clients,contact,products/\[id\],checkout}
mkdir -p app/{components,contexts,api/send-order}

echo "Proje yapısı oluşturuldu!"
```

## ⚡ Hızlı Komutlar

```bash
# Geliştirmeyi başlat
npm run dev

# Üretim için derle
npm run build

# Üretim sunucusunu başlat
npm start

# Kodu kontrol et
npm run lint
```

## 🎨 Tasarım Sistemi Hızlı Referans

### Renkler
- Birincil: Siyah (#000000)
- İkincil: Gri (#808080)
- Tutarlılık için CSS değişkenlerini kullan

### Boşluk
- rem birimlerini kullan (1rem = 16px)
- Container max-width: 1200px
- Bölüm padding: 3-5rem

### Tipografi
- Font: Inter (Google Fonts)
- Başlıklar: 2rem - 3rem
- Gövde: 1rem
- Satır yüksekliği: 1.6-1.8

## 🔄 Yineleme Kontrol Listesi

İlk kurulumdan sonra şunları yinele:
1. ✅ Bileşenleri stillendir
2. ✅ Görseller/varlıklar ekle
3. ✅ Tüm sayfaları test et
4. ✅ Performansı optimize et
5. ✅ Analitik ekle
6. ✅ Yayınla

## 📝 AI Asistanı İçin Notlar

Benzer projeler oluştururken şu sırayı takip et:
1. **Önce yapı** - Klasör yapısını ve temel dosyaları oluştur
2. **Bağlamlar** - Durum yönetimini kur
3. **Bileşenler** - Yeniden kullanılabilir UI bileşenlerini oluştur
4. **Sayfalar** - Sayfa bileşenlerini oluştur
5. **Stil** - CSS'i en son ekle (ayarlamak daha kolay)

**Korunacak temel desenler:**
- Etkileşimli bileşenlerde her zaman `'use client'` kullan
- Aynı klasör yapısını takip et
- Tip güvenliği için TypeScript kullan
- Bileşenleri küçük ve odaklı tut

## 🚨 Kaçınılması Gereken Yaygın Tuzaklar

1. ❌ Hook kullanan bileşenlerde `'use client'` unutma
2. ❌ TypeScript tiplerini atlama
3. ❌ Duyarlı tasarımı unutma
4. ❌ SEO metadata'yı atlama

## 📊 Zaman Tahminleri

- **Temel kurulum**: 15 dakika
- **Tam e-ticaret**: 45-60 dakika
- **Özel tasarımla**: 60-90 dakika
- **Üretime hazır**: 90-120 dakika

## 🎯 Başarı Kriterleri

Proje şu durumda hazırdır:
- ✅ Tüm sayfalar doğru yükleniyor
- ✅ Sepet işlevselliği çalışıyor
- ✅ Ödeme e-postaları gönderiyor
- ✅ Tüm cihazlarda duyarlı
- ✅ SEO metadata mevcut
- ✅ Konsol hatası yok
- ✅ TypeScript hatasız derleniyor
