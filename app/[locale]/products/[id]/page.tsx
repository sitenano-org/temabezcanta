'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { useTranslation } from '../../../contexts/TranslationContext'
import { useCart } from '../../../contexts/CartContext'

type ProductLabel = 'Training' | 'Automation' | 'Analytics' | 'Security'

interface Product {
  id: number
  title: string
  price: string
  summary: string
  label: ProductLabel
  shortSummary: string
  longDescription: {
    specs: string
    docs: string
    drivers: string
  }
  images: string[]
}

// Extended product data with details
const allProducts: Product[] = [
  {
    id: 1,
    title: "AI Training Platform",
    price: "$299",
    summary: "Comprehensive AI training platform with interactive modules, real-world case studies, and expert guidance to upskill your team.",
    label: "Training",
    shortSummary: "Transform your team's AI capabilities with our comprehensive training platform featuring interactive modules, hands-on exercises, and expert-led sessions.",
    longDescription: {
      specs: "• 50+ Interactive Modules\n• 200+ Real-world Case Studies\n• Expert Video Tutorials\n• Progress Tracking Dashboard\n• Certificate of Completion\n• Lifetime Access\n• Mobile App Support\n• 24/7 Community Access",
      docs: "• Getting Started Guide\n• API Documentation\n• Best Practices Handbook\n• Troubleshooting Guide\n• FAQ Section\n• Video Tutorial Library\n• Sample Projects\n• Integration Examples",
      drivers: "• Windows 10/11 Compatible\n• macOS 12+ Support\n• Linux Ubuntu 20.04+\n• Minimum 4GB RAM\n• 2GB Storage Space\n• Internet Connection Required\n• Modern Web Browser\n• Latest Updates Included"
    },
    images: ["product-1-main.jpg", "product-1-2.jpg", "product-1-3.jpg", "product-1-4.jpg"]
  },
  {
    id: 2,
    title: "Business Automation Suite",
    price: "$499",
    summary: "Complete automation solution for streamlining workflows, reducing manual tasks, and increasing operational efficiency by up to 70%.",
    label: "Automation",
    shortSummary: "Streamline your business operations with our powerful automation suite that eliminates repetitive tasks and boosts productivity by up to 70%.",
    longDescription: {
      specs: "• 100+ Pre-built Automation Templates\n• Custom Workflow Builder\n• API Integration Support\n• Real-time Monitoring Dashboard\n• Automated Reporting\n• Multi-user Collaboration\n• Cloud & On-premise Options\n• 99.9% Uptime SLA",
      docs: "• Installation Guide\n• Workflow Design Manual\n• API Reference\n• Integration Tutorials\n• Security Best Practices\n• Performance Optimization\n• Troubleshooting Guide\n• Video Walkthroughs",
      drivers: "• Windows Server 2019+\n• Linux Server Support\n• Docker Container Ready\n• Minimum 8GB RAM\n• 10GB Storage\n• Network Connectivity\n• Database Support (PostgreSQL/MySQL)\n• Auto-update Feature"
    },
    images: ["product-2-main.jpg", "product-2-2.jpg", "product-2-3.jpg", "product-2-4.jpg"]
  },
  {
    id: 3,
    title: "AI Consulting Package",
    price: "$999",
    summary: "Strategic AI consulting services including assessment, roadmap development, and implementation support for your business transformation.",
    label: "Training",
    shortSummary: "Get expert guidance on your AI transformation journey with comprehensive consulting services tailored to your business needs.",
    longDescription: {
      specs: "• Initial Business Assessment\n• Custom AI Roadmap\n• Implementation Strategy\n• 20 Hours Expert Consultation\n• Monthly Progress Reviews\n• Technical Support\n• Training Sessions Included\n• 6-Month Support Period",
      docs: "• Consulting Methodology\n• Assessment Templates\n• Roadmap Examples\n• Implementation Checklist\n• Best Practices Guide\n• Case Studies Library\n• ROI Calculator\n• Success Metrics Guide",
      drivers: "• No Installation Required\n• Cloud-based Platform\n• Web Browser Access\n• Mobile App Available\n• Video Conferencing Tools\n• Document Sharing Platform\n• Project Management Tools\n• Analytics Dashboard"
    },
    images: ["product-3-main.jpg", "product-3-2.jpg", "product-3-3.jpg"]
  },
  {
    id: 4,
    title: "Custom AI Development",
    price: "$2,499",
    summary: "Tailored AI solutions built specifically for your business needs, with dedicated support and ongoing maintenance included.",
    label: "Automation",
    shortSummary: "Get a fully customized AI solution designed specifically for your unique business requirements with dedicated development and support.",
    longDescription: {
      specs: "• Custom AI Model Development\n• Dedicated Development Team\n• Source Code Ownership\n• Full Documentation\n• Deployment Support\n• 1 Year Maintenance\n• Performance Optimization\n• Scalability Planning",
      docs: "• Architecture Documentation\n• API Documentation\n• User Manual\n• Developer Guide\n• Deployment Guide\n• Maintenance Procedures\n• Security Guidelines\n• Version History",
      drivers: "• Custom Deployment Options\n• Cloud Infrastructure Setup\n• On-premise Installation\n• Hybrid Solutions\n• Container Support\n• Load Balancing\n• Auto-scaling Configuration\n• Monitoring Tools"
    },
    images: ["product-4-main.jpg", "product-4-2.jpg", "product-4-3.jpg", "product-4-4.jpg"]
  },
  {
    id: 5,
    title: "AI Analytics Dashboard",
    price: "$199",
    summary: "Powerful analytics dashboard that provides real-time insights, data visualization, and predictive analytics for informed decision-making.",
    label: "Analytics",
    shortSummary: "Make data-driven decisions with our powerful analytics dashboard featuring real-time insights and advanced visualization tools.",
    longDescription: {
      specs: "• Real-time Data Processing\n• 50+ Visualization Types\n• Custom Report Builder\n• Predictive Analytics Engine\n• Data Export Options\n• Multi-user Access\n• Role-based Permissions\n• API Access Included",
      docs: "• Dashboard User Guide\n• Data Integration Manual\n• Report Building Tutorial\n• API Documentation\n• Visualization Guide\n• Export Formats\n• Security Settings\n• Performance Tips",
      drivers: "• Web Browser Based\n• Chrome/Firefox/Safari/Edge\n• Mobile Responsive\n• No Installation Required\n• Cloud Hosted\n• Minimum 2GB RAM\n• Internet Connection\n• Modern JavaScript Enabled"
    },
    images: ["product-5-main.jpg", "product-5-2.jpg", "product-5-3.jpg"]
  },
  {
    id: 6,
    title: "Chatbot Integration",
    price: "$399",
    summary: "Intelligent chatbot solution with natural language processing, multi-language support, and seamless integration with your existing systems.",
    label: "Automation",
    shortSummary: "Enhance customer service with our intelligent chatbot that understands natural language and integrates seamlessly with your systems.",
    longDescription: {
      specs: "• Natural Language Processing\n• 50+ Language Support\n• Multi-channel Integration\n• Custom Training Capabilities\n• Analytics Dashboard\n• Conversation History\n• API Integration\n• 24/7 Availability",
      docs: "• Integration Guide\n• API Reference\n• Training Manual\n• Customization Guide\n• Analytics Documentation\n• Troubleshooting\n• Best Practices\n• FAQ Section",
      drivers: "• REST API Integration\n• Webhook Support\n• SDK Available (Python/Node.js)\n• Cloud-based Service\n• No Server Required\n• SSL Encryption\n• GDPR Compliant\n• Auto-scaling"
    },
    images: ["product-6-main.jpg", "product-6-2.jpg", "product-6-3.jpg", "product-6-4.jpg"]
  },
  {
    id: 7,
    title: "Document Processing AI",
    price: "$349",
    summary: "Automated document processing system that extracts, categorizes, and analyzes documents with 99% accuracy, saving hours of manual work.",
    label: "Automation",
    shortSummary: "Automate your document workflow with AI-powered processing that extracts, categorizes, and analyzes documents with 99% accuracy.",
    longDescription: {
      specs: "• 99% Accuracy Rate\n• 100+ Document Formats\n• OCR Technology\n• Auto-categorization\n• Data Extraction\n• Batch Processing\n• Cloud Storage Integration\n• API Access",
      docs: "• Setup Guide\n• Format Support List\n• API Documentation\n• Integration Examples\n• Accuracy Tips\n• Troubleshooting\n• Security Guide\n• Performance Optimization",
      drivers: "• Cloud-based Processing\n• API Integration\n• Web Interface\n• Desktop App Available\n• Mobile App Support\n• Minimum 4GB RAM\n• Internet Connection\n• Supported Browsers"
    },
    images: ["product-7-main.jpg", "product-7-2.jpg", "product-7-3.jpg"]
  },
  {
    id: 8,
    title: "Predictive Analytics Tool",
    price: "$599",
    summary: "Advanced predictive analytics platform that forecasts trends, identifies opportunities, and helps you make data-driven business decisions.",
    label: "Analytics",
    shortSummary: "Forecast future trends and identify opportunities with our advanced predictive analytics platform powered by machine learning.",
    longDescription: {
      specs: "• Machine Learning Models\n• Time Series Forecasting\n• Trend Analysis\n• Opportunity Detection\n• Custom Model Training\n• Real-time Predictions\n• Data Visualization\n• Export Capabilities",
      docs: "• User Manual\n• Model Training Guide\n• API Documentation\n• Data Preparation Guide\n• Forecasting Methods\n• Best Practices\n• Troubleshooting\n• Case Studies",
      drivers: "• Python 3.8+ Required\n• R Support Available\n• Cloud API Access\n• Desktop Application\n• Jupyter Notebook Integration\n• Minimum 8GB RAM\n• GPU Support Optional\n• Internet Connection"
    },
    images: ["product-8-main.jpg", "product-8-2.jpg", "product-8-3.jpg", "product-8-4.jpg"]
  },
  {
    id: 9,
    title: "AI Content Generator",
    price: "$149",
    summary: "AI-powered content creation tool that generates high-quality articles, marketing copy, and social media posts in minutes.",
    label: "Training",
    shortSummary: "Create high-quality content in minutes with our AI-powered generator that produces articles, marketing copy, and social media posts.",
    longDescription: {
      specs: "• Multiple Content Types\n• SEO Optimization\n• Tone Customization\n• Language Support (30+)\n• Plagiarism Check\n• Content Templates\n• Bulk Generation\n• Export Options",
      docs: "• Getting Started Guide\n• Content Types Manual\n• SEO Guide\n• Customization Tips\n• API Documentation\n• Best Practices\n• Troubleshooting\n• Examples Library",
      drivers: "• Web-based Platform\n• Browser Extension\n• API Access\n• Mobile App\n• No Installation\n• Cloud Processing\n• Internet Required\n• Modern Browser"
    },
    images: ["product-9-main.jpg", "product-9-2.jpg", "product-9-3.jpg"]
  },
  {
    id: 10,
    title: "Customer Insights Platform",
    price: "$449",
    summary: "Deep customer analytics platform that analyzes behavior patterns, predicts preferences, and helps optimize your customer experience.",
    label: "Analytics",
    shortSummary: "Understand your customers better with deep analytics that reveal behavior patterns and predict preferences to optimize experiences.",
    longDescription: {
      specs: "• Behavior Analytics\n• Preference Prediction\n• Customer Segmentation\n• Churn Prediction\n• Sentiment Analysis\n• Real-time Dashboards\n• Data Integration\n• Custom Reports",
      docs: "• Platform Guide\n• Analytics Methods\n• Integration Manual\n• Dashboard Tutorial\n• Report Builder Guide\n• API Reference\n• Best Practices\n• Case Studies",
      drivers: "• Cloud Platform\n• Web Dashboard\n• Mobile App\n• API Integration\n• Data Connectors\n• No Installation\n• Internet Required\n• Browser Support"
    },
    images: ["product-10-main.jpg", "product-10-2.jpg", "product-10-3.jpg", "product-10-4.jpg"]
  },
  {
    id: 11,
    title: "AI Security Suite",
    price: "$799",
    summary: "Comprehensive security solution with AI-powered threat detection, automated response, and 24/7 monitoring to protect your business.",
    label: "Security",
    shortSummary: "Protect your business with AI-powered security that detects threats, automates responses, and provides 24/7 monitoring.",
    longDescription: {
      specs: "• AI Threat Detection\n• Automated Response\n• 24/7 Monitoring\n• Real-time Alerts\n• Vulnerability Scanning\n• Compliance Reporting\n• Multi-layer Protection\n• Incident Management",
      docs: "• Security Guide\n• Threat Detection Manual\n• Response Procedures\n• Compliance Guide\n• API Documentation\n• Integration Guide\n• Best Practices\n• Incident Response",
      drivers: "• Network Appliance\n• Cloud Service\n• Agent-based Installation\n• API Integration\n• Minimum 4GB RAM\n• Network Access\n• SSL/TLS Support\n• Auto-updates"
    },
    images: ["product-11-main.jpg", "product-11-2.jpg", "product-11-3.jpg"]
  },
  {
    id: 12,
    title: "Enterprise AI Package",
    price: "$4,999",
    summary: "Complete enterprise solution including all our AI tools, dedicated support, custom training, and priority implementation assistance.",
    label: "Training",
    shortSummary: "Get the complete AI transformation package with all our tools, dedicated support, and priority implementation assistance.",
    longDescription: {
      specs: "• All Product Access\n• Dedicated Support Team\n• Custom Training Programs\n• Priority Implementation\n• On-site Consultation\n• 24/7 Support\n• Custom Development\n• SLA Guarantee",
      docs: "• Enterprise Guide\n• Implementation Roadmap\n• Training Materials\n• Support Procedures\n• API Documentation\n• Integration Guides\n• Best Practices\n• Success Stories",
      drivers: "• Full Suite Access\n• Cloud Infrastructure\n• On-premise Options\n• Hybrid Solutions\n• Enterprise Integration\n• Scalable Architecture\n• High Availability\n• Disaster Recovery"
    },
    images: ["product-12-main.jpg", "product-12-2.jpg", "product-12-3.jpg", "product-12-4.jpg"]
  }
]

type TabType = 'specs' | 'docs' | 'drivers'

export default function ProductDetailPage() {
  const params = useParams()
  const { t, locale } = useTranslation()
  const { addToCart } = useCart()
  const productId = parseInt(params?.id as string)
  const product = allProducts.find(p => p.id === productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState<TabType>('specs')

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0] || '',
      })
    }
  }

  if (!product) {
    return (
      <main>
        <Navbar />
        <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
          <h1>Product Not Found</h1>
          <Link href={`/${locale}/products`} className="btn btn-primary">Back to Products</Link>
        </div>
        <Footer />
      </main>
    )
  }

  // Get related products (same label, excluding current product)
  const relatedProducts = allProducts.filter(
    p => p.label === product.label && p.id !== product.id
  )

  return (
    <main>
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link href={`/${locale}/products`}>Products</Link>
          <span> / </span>
          <span>{product.title}</span>
        </div>
      </div>

      <section className="product-detail-section container">
        <div className="product-detail-grid">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <div className="image-placeholder-large">
                {product.images[selectedImage] || `Product ${product.id} - Image ${selectedImage + 1}`}
              </div>
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="thumbnail-placeholder">
                    {image || `Thumb ${index + 1}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <span className="product-label-badge">{product.label}</span>
            <h1>{product.title}</h1>
            <p className="product-short-summary">{product.shortSummary}</p>
            <div className="product-price-large">{product.price}</div>
            <button className="btn btn-primary btn-large" onClick={handleAddToCart}>
              {t.pages.products.detail.addToCart}
            </button>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="product-description">
          <div className="description-tabs">
            <button
              className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              {t.pages.products.detail.specs}
            </button>
            <button
              className={`tab-btn ${activeTab === 'docs' ? 'active' : ''}`}
              onClick={() => setActiveTab('docs')}
            >
              {t.pages.products.detail.docs}
            </button>
            <button
              className={`tab-btn ${activeTab === 'drivers' ? 'active' : ''}`}
              onClick={() => setActiveTab('drivers')}
            >
              {t.pages.products.detail.drivers}
            </button>
          </div>
          <div className="tab-content">
            <div className="tab-pane active">
              <pre className="description-text">{product.longDescription[activeTab]}</pre>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>{t.pages.products.detail.relatedProducts}</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/${locale}/products/${relatedProduct.id}`}
                  className="related-product-card"
                >
                  <div className="related-product-image">
                    <div className="product-placeholder-small">
                      Product {relatedProduct.id}
                    </div>
                  </div>
                  <div className="related-product-info">
                    <h3>{relatedProduct.title}</h3>
                    <div className="related-product-price">{relatedProduct.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

