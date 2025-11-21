'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../contexts/CartContext'

// Örnek ürün verileri
const products = [
  { id: '1', name: 'Ürün 1', price: 99.99, category: 'Kategori A', image: '/placeholder-product.jpg' },
  { id: '2', name: 'Ürün 2', price: 149.99, category: 'Kategori A', image: '/placeholder-product.jpg' },
  { id: '3', name: 'Ürün 3', price: 199.99, category: 'Kategori B', image: '/placeholder-product.jpg' },
  { id: '4', name: 'Ürün 4', price: 249.99, category: 'Kategori B', image: '/placeholder-product.jpg' },
  { id: '5', name: 'Ürün 5', price: 299.99, category: 'Kategori C', image: '/placeholder-product.jpg' },
  { id: '6', name: 'Ürün 6', price: 349.99, category: 'Kategori C', image: '/placeholder-product.jpg' },
]

const categories = ['Tümü', 'Kategori A', 'Kategori B', 'Kategori C']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const { addItem } = useCart()

  const filteredProducts = selectedCategory === 'Tümü'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Ürünlerimiz</h1>
          <p className="page-subtitle">Geniş kaliteli ürün seçkimizi keşfedin</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">₺{product.price.toFixed(2)}</p>
                  <div className="product-actions">
                    <Link href={`/urunler/${product.id}`} className="btn btn-secondary">
                      Detayları Gör
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                      })}
                    >
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

