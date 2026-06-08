import { NextResponse } from 'next/server';

/**
 * Server-side contact form handler.
 * Keeps the Web3Forms access key off the client bundle and lets us
 * rate-limit / validate before forwarding.
 */

interface Body {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** honeypot - bots fill this, humans don't */
  honeypot?: string;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, subject, message, honeypot } = body;

  if (honeypot) {
    // Silent success - fool the bot
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  if (message.length > 5000 || name.length > 200 || subject.length > 200) {
    return NextResponse.json({ error: 'Field too long' }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not configured.');
    return NextResponse.json(
      { error: 'Server is not configured' },
      { status: 500 },
    );
  }

  try {
    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: subject || 'New Contact Form Submission',
        from_name: name,
        email,
        message,
      }),
    });

    const result = await upstream.json();

    if (!upstream.ok || result.success === false) {
      console.error('Web3Forms upstream error:', result);
      return NextResponse.json(
        { error: result.message || 'Upstream error' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact submit error:', err);
    return NextResponse.json({ error: 'Network error' }, { status: 500 });
  }
}
