# The Relocation Expo Website

A modern, fast, mobile-first event website built with Next.js, TypeScript, and Tailwind CSS.

**Event Details:**
- **Name:** The Relocation Expo
- **Date:** 3 October 2026
- **Time:** 10:00–17:00
- **Venue:** RDS Simmonscourt, Dublin, Ireland

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── exhibitors/        # Exhibitors page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms & conditions
│   └── api/               # API routes
│       └── register-interest/  # Form submission handler
├── components/
│   ├── ui/                # Design system components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/              # Home page sections
│   └── CookieBanner.tsx   # Cookie consent banner
├── data/                  # Data files (edit these!)
│   ├── event.ts          # Event details
│   ├── exhibitors.ts     # Exhibitor list
│   └── faqs.ts           # FAQ content
└── app/globals.css       # Global styles

public/
└── brand/                # Logo and brand assets
    └── README.md         # Instructions for adding logos
```

## ✏️ Editing Content

### Event Details

Edit `src/data/event.ts` to change:
- Event name, date, time, venue
- Contact email
- Call-to-action buttons
- Social media links

```typescript
export const eventData = {
  name: 'The Relocation Expo',
  date: '3 October 2026',
  hours: '10:00–17:00',
  // ... more fields
};
```

### Exhibitors

Edit `src/data/exhibitors.ts` to add, remove, or modify exhibitors:

```typescript
export const exhibitors: Exhibitor[] = [
  {
    id: 'unique-id',
    name: 'Company Name',
    description: 'Description here',
    website: 'https://example.com',
    category: 'visa', // visa | migration | relocation | financial | employment | other
    destinations: ['Australia', 'Canada'],
    featured: true, // Shows on homepage
  },
  // ... more exhibitors
];
```

### FAQs

Edit `src/data/faqs.ts` to add or modify questions:

```typescript
export const faqs: FAQ[] = [
  {
    id: 'unique-id',
    question: 'Your question here?',
    answer: 'Your answer here.',
    category: 'general', // general | tickets | visa | venue
  },
  // ... more FAQs
];
```

### Schedule

Edit the schedule array in `src/components/home/ScheduleSection.tsx`.

## 📧 Email Setup

The registration form sends submissions via email. Configure one of the following:

### Option 1: Resend (Recommended for Vercel)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@yourdomain.com
CONTACT_TO_EMAIL=info@therelocationexpo.com
```

### Option 2: SMTP (Gmail, Outlook, etc.)

Add to `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="The Relocation Expo" <noreply@yourdomain.com>
CONTACT_TO_EMAIL=info@therelocationexpo.com
```

**Note:** For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833).

### Development Mode

If no email service is configured, submissions will be logged to the server console for testing.

## 🎨 Brand Assets

1. Convert your PDF logos to web formats (see `public/brand/README.md`)
2. Place files in `public/brand/`:
   - `logo.svg` (or `logo.png`)
   - `globe.svg` (or `globe.png`)
3. Update the Header component if needed

### Color Palette

The theme uses these brand colors (defined in `tailwind.config.ts`):

- **Navy:** `#2B2F48` (background)
- **Accent Yellow:** `#EFC544` (CTAs, highlights)
- **Off-white:** `#EFEFF0` (text)
- **Muted Grey:** `#535466` (secondary text)
- **Blue-grey:** `#5C6D8C` (accents)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

Vercel will automatically:
- Build and deploy on every push
- Provide a production URL
- Handle SSL certificates

### Environment Variables on Vercel

Add these in your Vercel project settings → Environment Variables:

```
RESEND_API_KEY=your_key_here
RESEND_FROM_EMAIL=noreply@yourdomain.com
CONTACT_TO_EMAIL=info@therelocationexpo.com
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Custom Domain

1. Purchase a domain (e.g., therelocationexpo.com)
2. In Vercel dashboard, go to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXT_PUBLIC_BASE_URL` environment variable

## 🛠️ Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📱 Features

✅ **Modern Stack:** Next.js 15, TypeScript, Tailwind CSS  
✅ **SEO Ready:** Metadata, OpenGraph, sitemap, robots.txt  
✅ **Accessible:** Keyboard navigation, ARIA labels, focus states  
✅ **Mobile-First:** Responsive design for all screen sizes  
✅ **Lead Capture:** Registration form with email notifications  
✅ **GDPR Compliant:** Cookie banner, privacy policy, consent tracking  
✅ **Fast:** Optimized for performance  
✅ **Easy to Edit:** Data-driven content (no code changes needed)  

## 📄 Pages

- `/` - Home page (hero, sections, registration form)
- `/exhibitors` - Full exhibitor list
- `/faq` - Complete FAQ list
- `/contact` - Contact form and details
- `/privacy` - Privacy policy
- `/terms` - Terms & conditions

## 🔒 GDPR Compliance

The site includes:
- Cookie consent banner
- Privacy policy template
- Consent timestamp tracking
- User rights documentation
- Data retention information

## 🤝 Support

For questions or issues:
- Check documentation in this README
- Review comments in data files
- Contact: [YOUR EMAIL HERE]

## 📝 License

[Add your license here]

---

Built with ❤️ for The Relocation Expo
