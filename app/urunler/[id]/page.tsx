'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useCart } from '../../contexts/CartContext'

// Örnek ürün verileri - gerçek uygulamada API'den çekilir
const productData: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Ürün 1',
    price: 99.99,
    category: 'Kategori A',
    summary: 'Mükemmel özellikler ve performans ile yüksek kaliteli ürün.',
    images: ['/placeholder-product.jpg', '/placeholder-product.jpg', '/placeholder-product.jpg'],
    specifications: {
      'Özellik 1': 'Değer 1',
      'Özellik 2': 'Değer 2',
      'Özellik 3': 'Değer 3',
    },
    documentation: 'Ürün dokümantasyonu ve kullanıcı kılavuzu bilgileri.',
    drivers: 'Sürücü indirme bağlantıları ve kurulum talimatları.',
  },
  '2': {
    id: '2',
    name: 'Ürün 2',
    price: 149.99,
    category: 'Kategori A',
    summary: 'Gelişmiş özelliklere sahip premium ürün.',
    images: ['/placeholder-product.jpg', '/placeholder-product.jpg'],
    specifications: {
      'Özellik 1': 'Değer 1',
      'Özellik 2': 'Değer 2',
    },
    documentation: 'Kapsamlı dokümantasyon mevcut.',
    drivers: 'En son sürücüler ve yazılım dahil.',
  },
}

const relatedProducts = [
  { id: '3', name: 'Ürün 3', price: 199.99, image: '/placeholder-product.jpg' },
  { id: '4', name: 'Ürün 4', price: 249.99, image: '/placeholder-product.jpg' },
]

type TabType = 'specifications' | 'documentation' | 'drivers'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = productData[productId]
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState<TabType>('specifications')
  const { addItem } = useCart()

  if (!product) {
    return (
      <main>
        <Navbar />
        <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h1>Ürün Bulunamadı</h1>
          <Link href="/urunler" className="btn btn-primary">Ürünlere Dön</Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <Link href="/urunler" className="back-link">← Ürünlere Dön</Link>
          <h1>{product.name}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="product-detail">
            <div className="product-gallery">
              <div className="product-main-image">
                <img src={product.images[selectedImage]} alt={product.name} />
              </div>
              <div className="product-thumbnails">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-info-detail">
              <div className="product-header">
                <h2>{product.name}</h2>
                <p className="product-price-large">₺{product.price.toFixed(2)}</p>
              </div>
              <p className="product-summary">{product.summary}</p>
              <p className="product-category">Kategori: {product.category}</p>

              <button
                className="btn btn-primary btn-large"
                onClick={() => addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images[0]
                })}
              >
                Sepete Ekle
              </button>

              <div className="product-tabs">
                <button
                  className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Özellikler
                </button>
                <button
                  className={`tab-btn ${activeTab === 'documentation' ? 'active' : ''}`}
                  onClick={() => setActiveTab('documentation')}
                >
                  Dokümantasyon
                </button>
                <button
                  className={`tab-btn ${activeTab === 'drivers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('drivers')}
                >
                  Sürücüler
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'specifications' && (
                  <div className="specs-list">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <strong>{key}:</strong> <span>{value as string}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'documentation' && (
                  <div className="tab-text">
                    <p>{product.documentation}</p>
                  </div>
                )}

                {activeTab === 'drivers' && (
                  <div className="tab-text">
                    <p>{product.drivers}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="related-products">
            <h2>İlgili Ürünler</h2>
            <div className="products-grid">
              {relatedProducts.map(related => (
                <div key={related.id} className="product-card">
                  <div className="product-image">
                    <img src={related.image} alt={related.name} />
                  </div>
                  <div className="product-info">
                    <h3>{related.name}</h3>
                    <p className="product-price">₺{related.price.toFixed(2)}</p>
                    <Link href={`/urunler/${related.id}`} className="btn btn-secondary">
                      Detayları Gör
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

