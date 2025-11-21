import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customer, items, total } = body

    // Create email content
    const emailContent = `
New Order Received

Customer Information:
- Name: ${customer.name}
- Email: ${customer.email}
- Phone: ${customer.phone}
${customer.company ? `- Company: ${customer.company}` : ''}
- Address: ${customer.address}
- City: ${customer.city}
- Country: ${customer.country}
${customer.notes ? `- Notes: ${customer.notes}` : ''}

Order Items:
${items.map((item: any) => `- ${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}

Total: $${total.toFixed(2)}
`

    // Configure nodemailer transporter
    // If SMTP is configured, use it; otherwise log to console
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM || smtpUser

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: parseInt(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      await transporter.sendMail({
        from: smtpFrom,
        to: 'info@example.com',
        subject: 'New Order Received',
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      })
    } else {
      // Fallback: log to console if SMTP not configured
      console.log('=== NEW ORDER ===')
      console.log(emailContent)
      console.log('=================')
    }

    return NextResponse.json({ success: true, message: 'Order received' })
  } catch (error) {
    console.error('Error sending order email:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process order' },
      { status: 500 }
    )
  }
}

