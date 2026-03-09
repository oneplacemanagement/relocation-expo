# 🎯 COMPLETE STEP-BY-STEP DEPLOYMENT INSTRUCTIONS

## ✅ What I've Already Done For You:

1. ✅ Installed Resend email library
2. ✅ Created contact form API endpoint (`/api/contact`)
3. ✅ Updated contact form to actually send emails
4. ✅ Added error handling and success messages
5. ✅ Linked project to Vercel CLI
6. ✅ Committed and pushed all changes to GitHub
7. ✅ Created setup script for Resend API key

---

## 🚀 YOUR ACTION ITEMS (In Order):

### STEP 1: Get Resend API Key (5 minutes) 📧

1. Open browser and go to: **https://resend.com/**
2. Click **"Sign Up"** (free account - 100 emails/day, no credit card needed)
3. Verify your email address
4. Once logged in, go to: **https://resend.com/api-keys**
5. Click **"Create API Key"**
6. Name it: **"Relocation Expo Production"**
7. Click **"Add"**
8. **COPY THE API KEY** (starts with `re_`) - you won't see it again!

---

### STEP 2: Add API Key to Vercel (2 minutes) 🔑

**Option A: Automated (Easiest)**
```bash
# Run this command in your terminal:
./setup-resend.sh
```
- Paste your API key when prompted
- Script will add it to all Vercel environments automatically

**Option B: Manual via Dashboard**
1. Go to: https://vercel.com/dashboard
2. Select project: **relocation-expo**
3. Go to: **Settings** → **Environment Variables**
4. Click **"Add New"**
5. Enter:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_your_key_here` (paste your API key)
   - **Environments:** Select all three (Production, Preview, Development)
6. Click **"Save"**

---

### STEP 3: Disable Vercel Authentication (2 minutes) 🔓

**THIS IS CRITICAL - Your site is currently password-protected!**

1. Go to: **https://vercel.com/dashboard**
2. Select project: **relocation-expo**
3. Click **"Settings"** tab
4. Scroll down to **"Deployment Protection"** section
5. Find **"Vercel Authentication"** or **"Password Protection"**
6. **DISABLE IT** (toggle OFF)
7. Click **"Save"** if prompted
8. Wait 1-2 minutes for changes to apply

**How to Verify:**
- Open your production URL in an **incognito/private window**
- If you see the site WITHOUT a login prompt → ✅ Success!
- If you still see login → Wait 2-3 more minutes and try again

---

### STEP 4: Deploy to Vercel Production (1 minute) 🚀

```bash
# Run this command in your terminal:
vercel --prod
```

This will:
- Build your Next.js site
- Upload to Vercel
- Deploy to production
- Show you the live URL

**Expected output:**
```
✓ Deployed to production
https://relocation-expo.vercel.app
```

---

### STEP 5: Verify Domain in Resend (Optional but Recommended) 📬

**Why?** So emails come from `noreply@therelocationexpo.com` instead of `onboarding.resend.dev`

1. In Resend dashboard, go to: **"Domains"**
2. Click **"Add Domain"**
3. Enter: `therelocationexpo.com`
4. Follow DNS instructions:
   - Copy the DNS records shown
   - Add them to your domain registrar (GoDaddy, Namecheap, etc.)
   - Typical records:
     - TXT record for domain verification
     - MX records for bounce handling
     - DKIM records for authentication
5. Click **"Verify"** (may take 5-30 minutes)

**Skip This For Now?**
- You can use Resend's test domain initially: `onboarding.resend.dev`
- Emails will still work, they'll just come from that address
- You can add your domain later

---

### STEP 6: Test Everything (5 minutes) ✅

1. **Visit your production site** (in incognito window)
   - Should load WITHOUT login prompt ✅
   
2. **Go to Contact Page** (`/contact`)
   - Fill out the form
   - Click "Send Message"
   - Should see "Message Sent!" confirmation ✅
   
3. **Check your email** (`info@therelocationexpo.com`)
   - You should receive the contact form submission
   - Check spam folder if not in inbox
   
4. **Test on Mobile**
   - Open site on your phone
   - Verify it looks good and works properly
   
5. **Check Countdown Timer**
   - Should show days/hours/minutes until October 3, 2026

---

## 🎊 SUCCESS CRITERIA

Your site is LIVE and ready when:
- ✅ Public can access site without login
- ✅ Contact form sends emails successfully
- ✅ All pages load without errors
- ✅ Mobile view works properly
- ✅ Countdown timer displays correctly

---

## 🔍 TROUBLESHOOTING

### Problem: "Site still asks for login"
**Solution:**
1. Double-check Vercel Authentication is disabled
2. Clear browser cache or try incognito window
3. Wait 3-5 minutes for changes to propagate
4. Check correct project (relocation-expo)

### Problem: "Contact form shows error"
**Solution:**
1. Check Resend API key is set in Vercel: Settings → Environment Variables
2. Verify key starts with `re_` and has no extra spaces
3. Check Resend logs: https://resend.com/logs
4. Redeploy: `vercel --prod`

### Problem: "Email not received"
**Solution:**
1. Check spam/junk folder
2. Verify `info@therelocationexpo.com` email exists and is accessible
3. Check Resend dashboard → "Logs" to see if email was sent
4. If using custom domain, verify DNS records are correct
5. Try test email with personal Gmail to confirm sending works

### Problem: "Build failed on Vercel"
**Solution:**
1. Check Vercel deployment logs for specific error
2. Verify all environment variables are set
3. Try building locally first: `npm run build`
4. If local build works, redeploy: `vercel --prod`

---

## 📊 WHAT'S NEXT?

### Immediate (Before Launch):
- [ ] Set up Google Analytics
- [ ] Add your domain to Resend
- [ ] Test on multiple devices/browsers
- [ ] Proofread all content one final time

### Soon (First Week):
- [ ] Connect Wix ticketing system
- [ ] Monitor contact form submissions
- [ ] Check site performance/speed
- [ ] Promote on social media

### Later (Ongoing):
- [ ] Set up uptime monitoring
- [ ] Add error tracking (Sentry)
- [ ] Optimize images
- [ ] Regular content updates

---

## 📞 QUICK REFERENCE

**Vercel Dashboard:** https://vercel.com/dashboard  
**Resend Dashboard:** https://resend.com/  
**Your Production URL:** https://relocation-expo.vercel.app (or your custom domain)  
**Contact Email:** info@therelocationexpo.com  
**Event Date:** October 3, 2026, 11:30 AM - 5:00 PM

---

## ✅ DEPLOYMENT CHECKLIST

Copy this and check off as you go:

```
[ ] 1. Created Resend account
[ ] 2. Got Resend API key
[ ] 3. Added API key to Vercel (via script or dashboard)
[ ] 4. Disabled Vercel Authentication
[ ] 5. Ran: vercel --prod
[ ] 6. Verified site loads publicly (incognito test)
[ ] 7. Tested contact form submission
[ ] 8. Received test email at info@therelocationexpo.com
[ ] 9. Tested on mobile device
[ ] 10. Checked all pages load correctly
```

---

**Ready? Let's go! 🚀**

Start with STEP 1 above and work through each step in order.
When you're done, your site will be LIVE and fully functional!
