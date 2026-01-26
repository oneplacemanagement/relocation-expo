import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, destinationInterest, message, consent } = body;

    // Validation
    if (!fullName || !email || !destinationInterest || !consent) {
      return NextResponse.json(
        { error: 'Please fill in all required fields and accept the consent.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const consentTimestamp = new Date().toISOString();

    // Prepare email content
    const emailContent = `
New Registration for The Relocation Expo

Date: ${new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' })}

REGISTRANT DETAILS:
-------------------
Full Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Destination Interest: ${destinationInterest}

MESSAGE:
--------
${message || 'No message provided'}

CONSENT:
--------
Consent given: Yes
Consent timestamp: ${consentTimestamp}

---
This registration was submitted via the website registration form.
`;

    // Configure email transport based on environment variables
    const contactEmail = process.env.CONTACT_TO_EMAIL || 'info@therelocationexpo.com';

    // Try Resend first (recommended for Vercel)
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'noreply@therelocationexpo.com',
            to: contactEmail,
            subject: `New Expo Registration: ${fullName}`,
            text: emailContent,
          }),
        });

        if (!response.ok) {
          throw new Error('Resend API failed');
        }

        return NextResponse.json({ 
          success: true, 
          message: 'Registration received successfully!' 
        });
      } catch (resendError) {
        console.error('Resend failed:', resendError);
        // Fall through to SMTP
      }
    }

    // Fallback to SMTP (Nodemailer)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || '"The Relocation Expo" <noreply@therelocationexpo.com>',
        to: contactEmail,
        subject: `New Expo Registration: ${fullName}`,
        text: emailContent,
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Registration received successfully!' 
      });
    }

    // If neither Resend nor SMTP is configured, log to console (dev mode)
    console.log('=== REGISTRATION SUBMISSION (No email service configured) ===');
    console.log(emailContent);
    console.log('=========================================================');

    return NextResponse.json({ 
      success: true, 
      message: 'Registration received successfully! (Development mode: check server logs)' 
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your registration. Please try again later.' },
      { status: 500 }
    );
  }
}
