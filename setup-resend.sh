#!/bin/bash

# Add Resend API Key to Vercel
# Run this after you get your API key from https://resend.com/api-keys

echo "📧 Setting up Resend API Key on Vercel..."
echo ""
echo "First, get your API key from: https://resend.com/api-keys"
echo ""
read -p "Enter your Resend API Key (starts with re_): " RESEND_KEY

if [ -z "$RESEND_KEY" ]; then
  echo "❌ No API key provided. Exiting."
  exit 1
fi

echo ""
echo "Adding RESEND_API_KEY to Vercel (all environments)..."

# Add to production
vercel env add RESEND_API_KEY production <<< "$RESEND_KEY"

# Add to preview
vercel env add RESEND_API_KEY preview <<< "$RESEND_KEY"

# Add to development
vercel env add RESEND_API_KEY development <<< "$RESEND_KEY"

echo ""
echo "✅ Done! API key added to all environments."
echo ""
echo "Now updating .env.local for local development..."
sed -i.bak "s/RESEND_API_KEY=.*/RESEND_API_KEY=$RESEND_KEY/" .env.local && rm .env.local.bak

echo "✅ Updated .env.local"
echo ""
echo "🚀 Ready to deploy! Run: vercel --prod"
