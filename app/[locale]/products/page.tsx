'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from '../../contexts/TranslationContext'

type ProductLabel = 'All' | 'Training' | 'Automation' | 'Analytics' | 'Security'

interface Product {
  id: number
  title: string
  price: string
  summary: string
  label: ProductLabel
}

// Sample product data with labels
const products: Product[] = [
  {
    id: 1,
    title: "AI Training Platform",
    price: "$299",
    summary: "Comprehensive AI training platform with interactive modules, real-world case studies, and expert guidance to upskill your team.",
    label: "Training"
  },
  {
    id: 2,
    title: "Business Automation Suite",
    price: "$499",
    summary: "Complete automation solution for streamlining workflows, reducing manual tasks, and increasing operational efficiency by up to 70%.",
    label: "Automation"
  },
  {
    id: 3,
    title: "AI Consulting Package",
    price: "$999",
    summary: "Strategic AI consulting services including assessment, roadmap development, and implementation support for your business transformation.",
    label: "Training"
  },
  {
    id: 4,
    title: "Custom AI Development",
    price: "$2,499",
    summary: "Tailored AI solutions built specifically for your business needs, with dedicated support and ongoing maintenance included.",
    label: "Automation"
  },
  {
    id: 5,
    title: "AI Analytics Dashboard",
    price: "$199",
    summary: "Powerful analytics dashboard that provides real-time insights, data visualization, and predictive analytics for informed decision-making.",
    label: "Analytics"
  },
  {
    id: 6,
    title: "Chatbot Integration",
    price: "$399",
    summary: "Intelligent chatbot solution with natural language processing, multi-language support, and seamless integration with your existing systems.",
    label: "Automation"
  },
  {
    id: 7,
    title: "Document Processing AI",
    price: "$349",
    summary: "Automated document processing system that extracts, categorizes, and analyzes documents with 99% accuracy, saving hours of manual work.",
    label: "Automation"
  },
  {
    id: 8,
    title: "Predictive Analytics Tool",
    price: "$599",
    summary: "Advanced predictive analytics platform that forecasts trends, identifies opportunities, and helps you make data-driven business decisions.",
    label: "Analytics"
  },
  {
    id: 9,
    title: "AI Content Generator",
    price: "$149",
    summary: "AI-powered content creation tool that generates high-quality articles, marketing copy, and social media posts in minutes.",
    label: "Training"
  },
  {
    id: 10,
    title: "Customer Insights Platform",
    price: "$449",
    summary: "Deep customer analytics platform that analyzes behavior patterns, predicts preferences, and helps optimize your customer experience.",
    label: "Analytics"
  },
  {
    id: 11,
    title: "AI Security Suite",
    price: "$799",
    summary: "Comprehensive security solution with AI-powered threat detection, automated response, and 24/7 monitoring to protect your business.",
    label: "Security"
  },
  {
    id: 12,
    title: "Enterprise AI Package",
    price: "$4,999",
    summary: "Complete enterprise solution including all our AI tools, dedicated support, custom training, and priority implementation assistance.",
    label: "Training"
  }
]

const labels: ProductLabel[] = ['All', 'Training', 'Automation', 'Analytics', 'Security']

export default function ProductsPage() {
  const { t, locale } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<ProductLabel>('All')

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.label === activeFilter)

  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{t.pages.products.title}</h1>
          <p className="page-subtitle">{t.pages.products.subtitle}</p>
          <p className="page-intro">{t.pages.products.intro}</p>
        </div>
      </div>

      {/* Product Filter Navbar */}
      <div className="product-filters">
        <div className="container">
          <nav className="filter-nav">
            {labels.map((label) => (
              <button
                key={label}
                className={`filter-btn ${activeFilter === label ? 'active' : ''}`}
                onClick={() => setActiveFilter(label)}
              >
                {label}
                {activeFilter === label && (
                  <span className="filter-count">({filteredProducts.length})</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <section className="products-section container">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">Product {product.id}</div>
                <span className="product-label">{product.label}</span>
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <div className="product-price">{product.price}</div>
                <p className="product-summary">{product.summary}</p>
                <Link href={`/${locale}/products/${product.id}`} className="btn btn-primary product-btn">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </section>
      <Footer />
    </main>
  )
}

