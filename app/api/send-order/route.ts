import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, totalPrice, customerInfo } = body

    // Format order email
    const orderItems = items.map((item: any) => 
      `- ${item.title} (${item.quantity}x) - ${item.price}`
    ).join('\n')

    const emailBody = `
Yeni Sipariş Alındı

Müşteri Bilgileri:
Ad Soyad: ${customerInfo.name}
E-posta: ${customerInfo.email}
Telefon: ${customerInfo.phone}
Şirket: ${customerInfo.company || 'Belirtilmemiş'}
Adres: ${customerInfo.address}
Şehir: ${customerInfo.city}
Ülke: ${customerInfo.country}
Notlar: ${customerInfo.notes || 'Yok'}

Sipariş Ürünleri:
${orderItems}

Toplam: $${totalPrice.toFixed(2)}

---
Bu sipariş SITENANO web sitesi üzerinden verilmiştir.
    `.trim()

    // Create transporter (using Gmail SMTP as example)
    // For production, configure with your actual SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // If SMTP credentials are not configured, log the order instead
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('=== NEW ORDER (Email not configured, logging instead) ===')
      console.log(emailBody)
      console.log('========================================================')
      
      // Return success even without email (for development)
      return NextResponse.json({ 
        success: true, 
        message: 'Order received (logged to console - configure SMTP for email sending)' 
      })
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'info@sitenano.com',
      subject: 'Yeni Sipariş - SITENANO Web Sitesi',
      text: emailBody,
      html: `
        <h2>Yeni Sipariş Alındı</h2>
        <h3>Müşteri Bilgileri:</h3>
        <p><strong>Ad Soyad:</strong> ${customerInfo.name}</p>
        <p><strong>E-posta:</strong> ${customerInfo.email}</p>
        <p><strong>Telefon:</strong> ${customerInfo.phone}</p>
        <p><strong>Şirket:</strong> ${customerInfo.company || 'Belirtilmemiş'}</p>
        <p><strong>Adres:</strong> ${customerInfo.address}</p>
        <p><strong>Şehir:</strong> ${customerInfo.city}</p>
        <p><strong>Ülke:</strong> ${customerInfo.country}</p>
        <p><strong>Notlar:</strong> ${customerInfo.notes || 'Yok'}</p>
        
        <h3>Sipariş Ürünleri:</h3>
        <ul>
          ${items.map((item: any) => 
            `<li>${item.title} (${item.quantity}x) - ${item.price}</li>`
          ).join('')}
        </ul>
        
        <h3>Toplam: $${totalPrice.toFixed(2)}</h3>
        
        <hr>
        <p><em>Bu sipariş SITENANO web sitesi üzerinden verilmiştir.</em></p>
      `,
    })

    return NextResponse.json({ success: true, message: 'Order received and email sent' })
  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process order' },
      { status: 500 }
    )
  }
}

