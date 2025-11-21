# AI Üretim Şablonu

Benzer Next.js e-ticaret projelerini hızlı ve tutarlı bir şekilde oluşturmak için bu şablonu kullanın.

## 🎯 Ana Şablon

```
Aşağıdaki özelliklere sahip bir Next.js 16+ e-ticaret web sitesi oluşturun:

## Proje Gereksinimleri

### 1. Teknoloji Yığını
- App Router ile Next.js 16+
- TypeScript
- React 19+
- E-posta işlevselliği için Nodemailer

### 2. Proje Yapısı
```
app/
├── layout.tsx (metadata ile)
├── page.tsx (ana sayfa)
├── services/page.tsx
├── how-we-work/page.tsx
├── clients/page.tsx
├── contact/page.tsx
├── products/
│   ├── page.tsx (filtrelerle liste)
│   └── [id]/page.tsx (sekmelerle detay)
├── checkout/page.tsx
├── components/
│   ├── Navbar.tsx (sepet açılır menüsü ile)
│   ├── Footer.tsx
│   └── Providers.tsx
├── contexts/
│   └── CartContext.tsx
├── api/
│   └── send-order/route.ts
└── globals.css
```

### 3. Temel Özellikler

#### E-Ticaret
- Kategori filtreleri ile ürün listeleme sayfası
- Ürün detay sayfası:
  - Görsel galerisi (ana + küçük resimler)
  - Ürün bilgisi (isim, fiyat, özet)
  - Sekmeler (Özellikler, Dokümantasyon, Sürücüler)
  - İlgili ürünler
- Alışveriş sepeti:
  - Sepete ekleme işlevselliği
  - Navbar'da sepet açılır menüsü
  - Miktar yönetimi
  - Toplam fiyat hesaplama
- Ödeme sayfası:
  - Sipariş özeti
  - Müşteri bilgileri formu
  - info@domain.com adresine e-posta gönderme

#### Stil
- Renkler için CSS değişkenleri (birincil: siyah, ikincil: gri)
- Duyarlı tasarım (mobil öncelikli)
- Hover efektleri ile modern arayüz
- Kaydırma algılamalı yapışkan navbar
- globals.css'de bileşen tabanlı CSS

### 4. Uygulama Detayları

#### Sepet Bağlamı
- Sepet öğelerini ekle/kaldır/güncelle ile yönet
- Toplamları hesapla
- Ödeme sonrası sepeti temizle
- Bileşen durumunda kalıcı hale getir (daha sonra localStorage eklenebilir)

#### E-posta API
- Nodemailer kullan
- Biçimlendirilmiş sipariş e-postası gönder
- Müşteri bilgilerini ve sipariş öğelerini dahil et
- SMTP yapılandırmasını env değişkenleri ile yönet
- SMTP yapılandırılmamışsa konsol günlüğüne düşür

### 5. Tasarım Gereksinimleri
- Renk şeması: Birincil siyah (#000000), İkincil gri (#808080)
- Tipografi: Google Fonts'tan Inter fontu
- Butonlar: .btn, .btn-primary, .btn-secondary sınıfları
- Düzen: max-width 1200px ile .container sınıfı
- Duyarlı kesme noktaları: mobil < 768px, tablet 768-1024px, masaüstü > 1024px

### 6. Kod Kalitesi
- Strict mod ile TypeScript kullan
- Tüm bileşenler düzgün şekilde yazılmış
- Etkileşimli bileşenler için 'use client' kullan
- Next.js 16 App Router kurallarını takip et
- Anlamsal HTML
- Erişilebilir bileşenler

### 7. Geliştirme İş Akışı
1. Önce proje yapısını oluştur
2. Sepet bağlamını oluştur
3. Temel bileşenleri oluştur (Navbar, Footer)
4. Sayfaları oluştur
5. Stil ekle
6. Tüm işlevselliği test et

### 8. Özel Uygulama Notları
- Navbar: Yapışkan, kaydırma algılama, sepet açılır menüsü
- Footer: Bağlantılar, telif hakkı
- Ana sayfa: Hero, hizmet önizlemesi, değer önerileri, referanslar, SSS
- Ürünler: Izgara düzeni, filtre navbar'ı, ürün kartları
- Ürün Detayı: Görsel galerisi, sekmeler, ilgili ürünler
- Ödeme: İki sütunlu düzen (özet + form), doğrulama, e-posta gönderme

## Beklenen Çıktı
Aşağıdakilerle tam işlevsel bir Next.js uygulaması:
- ✅ Tüm sayfalar çalışıyor
- ✅ Sepet ve ödeme çalışıyor
- ✅ E-posta entegrasyonu hazır
- ✅ Duyarlı tasarım
- ✅ SEO optimize edilmiş
- ✅ Hata olmadan TypeScript
- ✅ Temiz, bakımı kolay kod

Bu yapı ve gereksinimleri takip ederek tam projeyi oluşturun.
```

## 🔄 Farklı Proje Türleri İçin Varyasyonlar

### İçerik/Blog Siteleri İçin
```
E-ticaret özelliklerini şunlarla değiştirin:
- Blog yazısı listeleme
- Kategori filtreleme
- Yazı detay sayfaları
- Arama işlevselliği
- Bülten aboneliği
```

### Hizmet/Portföy Siteleri İçin
```
E-ticareti şunlarla değiştirin:
- Hizmet paketleri
- Portföy galerisi
- Vaka çalışmaları
- İletişim formları
- Rezervasyon/danışmanlık formları
```

### SaaS Landing Sayfaları İçin
```
E-ticareti şunlarla değiştirin:
- Fiyatlandırma planları
- Özellik karşılaştırması
- Referanslar
- Demo talepleri
- Kayıt formları
```

## 📝 Hızlı Özelleştirme Noktaları

Şablonu uyarlarken şunları değiştirin:
1. **Marka adı**: Hedef marka ile değiştir
2. **Renk şeması**: CSS değişkenlerini güncelle
3. **Sayfalar**: Sayfa listesini değiştir
4. **Özellikler**: E-ticaret, blog vb. ekle/kaldır

## 🎯 Kalite Kontrol Listesi

Oluşturma sonrası doğrulayın:
- [ ] TypeScript hatasız derleniyor
- [ ] Tüm sayfalar doğru URL'lerden erişilebilir
- [ ] Duyarlı tasarım çalışıyor
- [ ] SEO metadata mevcut
- [ ] Konsol hatası yok
- [ ] Sepet işlevselliği çalışıyor
- [ ] E-posta API yapılandırılmış

## 💡 İpuçları

1. **Yapıyla başla**: Her zaman önce klasör yapısını oluştur
2. **Bileşenlerden önce bağlamlar**: Durum yönetimini erken kur
3. **Bileşen yeniden kullanımı**: Ortak desenleri çıkar
4. **Aşamalı geliştirme**: Önce temel sürümü oluştur, sonra geliştir

## 🔧 Sorun Giderme İstekleri

Bir şey çalışmıyorsa, bu takip isteklerini kullanın:

```
[component/page] içindeki [belirli sorun]'u düzelt. 
Sorun: [açıklama]
Beklenen davranış: [ne olması gerektiği]
Mevcut davranış: [şu anda ne olduğu]
```

Örnek:
```
Navbar bileşenindeki sepet açılır menüsünü düzelt.
Sorun: Sepet öğeleri görüntülenmiyor
Beklenen davranış: Açıldığında sepet tüm öğeleri göstermeli
Mevcut davranış: Sepet açılır menüsü boş
```
