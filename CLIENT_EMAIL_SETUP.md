# 📧 EMAIL SETUP GUIDE FOR CLIENT

**For:** The Relocation Expo Client  
**Purpose:** Enable contact form email delivery to Gmail accounts

---

## 🎯 WHAT YOU NEED TO DO

Your website's contact form is ready, but needs one final step to deliver emails to your Gmail accounts (`info@therelocationexpo.com` and `partner@therelocationexpo.com`).

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### **Step 1: Access Resend Account (5 minutes)**

**Option A: Create Resend Account**
1. Go to: https://resend.com/
2. Click "Sign Up"
3. Use your business email: `info@therelocationexpo.com` or `partner@therelocationexpo.com`
4. Verify your email
5. Log in to Resend dashboard

**Option B: Use Existing Account**
- If your developer already created an account, ask them for:
  - Login credentials
  - Or: Add you as a team member

---

### **Step 2: Add Your Domain to Resend (2 minutes)**

1. **In Resend Dashboard:**
   - Go to: https://resend.com/domains
   - Click **"Add Domain"**

2. **Enter Domain:**
   - Type: `therelocationexpo.com`
   - Click **"Add"**

3. **Copy DNS Records:**
   - Resend will show you DNS records to add
   - Keep this tab open - you'll need these values

**Example DNS Records (yours will be different):**
```
Type: TXT
Name: _resend
Value: resend-verify=abc123...

Type: TXT  
Name: resend._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0...
```

---

### **Step 3: Add DNS Records to Wix (5 minutes)**

1. **Log into Wix:**
   - Go to: https://www.wix.com/
   - Log in with your Wix account
   - Go to your site dashboard

2. **Navigate to DNS Settings:**
   - Click **"Settings"** (left sidebar)
   - Click **"Domains"**
   - Click on: `therelocationexpo.com`
   - Look for: **"Manage DNS Records"** or **"Advanced DNS Settings"**

3. **Add the TXT Records:**
   
   **First Record (_resend):**
   - Click **"Add Record"** or **"+ Add"**
   - Type: `TXT`
   - Host/Name: `_resend`
   - Value/Points to: [paste from Resend - the long verification code]
   - TTL: `3600` (or leave default)
   - Click **"Save"**

   **Second Record (resend._domainkey):**
   - Click **"Add Record"** again
   - Type: `TXT`
   - Host/Name: `resend._domainkey`
   - Value/Points to: [paste from Resend - the DKIM key starting with v=DKIM1...]
   - TTL: `3600` (or leave default)
   - Click **"Save"**

4. **Save Changes:**
   - Click **"Save DNS Settings"** or **"Apply Changes"**
   - Wix may show a warning about propagation time - that's normal

---

### **Step 4: Verify Domain (Wait 10-30 minutes)**

1. **Wait for DNS Propagation:**
   - DNS changes take 10-30 minutes
   - Sometimes up to 2 hours (rarely 24 hours)

2. **Check Verification:**
   - Go back to: https://resend.com/domains
   - Look for your domain: `therelocationexpo.com`
   - Status should change from "Pending" to **"Verified"** ✅

3. **If Not Verified After 30 Minutes:**
   - Click **"Verify"** button manually
   - Check DNS records are exactly as shown (no typos)
   - Wait a bit longer

---

### **Step 5: Test Contact Form (2 minutes)**

Once domain shows "Verified" in Resend:

1. **Go to Your Website:**
   - Visit: https://relocation-agcs1fyiv-oneplacemanagements-projects.vercel.app
   - Or your custom domain

2. **Go to Contact Page:**
   - Click "Contact" in menu

3. **Fill Out Form:**
   - Name: Your Name
   - Email: Your personal email (for testing)
   - Subject: Test Contact Form
   - Message: Testing email delivery

4. **Submit and Check:**
   - Click "Send Message"
   - Should see: "Message Sent!" ✅
   - Within 30 seconds, check BOTH Gmail inboxes:
     - `info@therelocationexpo.com`
     - `partner@therelocationexpo.com`
   - Both should receive the same email

5. **Check Email Details:**
   - From: "The Relocation Expo <noreply@therelocationexpo.com>"
   - Contains all form information
   - Click "Reply" - it should reply to the person who filled the form

---

## ✅ SUCCESS CHECKLIST

```
[ ] Created/accessed Resend account
[ ] Added therelocationexpo.com to Resend
[ ] Copied DNS records from Resend
[ ] Logged into Wix
[ ] Added _resend TXT record to Wix DNS
[ ] Added resend._domainkey TXT record to Wix DNS
[ ] Saved DNS changes in Wix
[ ] Waited 10-30 minutes
[ ] Domain shows "Verified" in Resend
[ ] Tested contact form
[ ] Email received in info@therelocationexpo.com
[ ] Email received in partner@therelocationexpo.com
```

---

## 🔍 TROUBLESHOOTING

### **Problem: "Domain not verified after 30 minutes"**
**Solutions:**
- Double-check DNS records are EXACTLY as shown (no extra spaces)
- Wait longer (up to 24 hours in rare cases)
- Use online DNS checker: https://mxtoolbox.com/SuperTool.aspx
  - Enter: `_resend.therelocationexpo.com`
  - Should show the TXT record
- Contact Wix support if records aren't showing up

### **Problem: "Email not arriving"**
**Solutions:**
- Check spam/junk folder in Gmail
- Wait 2-3 minutes (sometimes delayed)
- Check Resend logs: https://resend.com/logs
  - Should show "Delivered" status
- Make sure domain is verified (green checkmark in Resend)

### **Problem: "Contact form shows error"**
**Solutions:**
- Make sure domain is verified in Resend first
- Check your developer redeployed the website
- Try refreshing the page and submitting again

---

## 💰 COST

**Resend Pricing:**
- **FREE Tier:** 3,000 emails/month, 100 emails/day
- **More than enough** for a contact form
- No credit card required for free tier

**Your Current Setup:**
- Contact form submissions: Maybe 5-20 per day
- Well within free limits ✅

---

## 🔐 SECURITY NOTES

**Important:**
- DNS records for Resend **do not** interfere with your Gmail/Google Workspace
- They're just for verifying you own the domain
- Your existing Gmail setup continues to work normally
- Resend only sends emails FROM your domain, doesn't receive them

**Keep Safe:**
- Don't share your Resend API key (developer has it securely stored)
- Keep Resend login credentials secure
- Use two-factor authentication if available

---

## 📱 MOBILE NOTIFICATIONS

To get instant notifications when someone submits the form:

1. **On iPhone:**
   - Gmail app should already notify you
   - Make sure notifications are enabled for Gmail app

2. **On Android:**
   - Gmail app will notify you automatically
   - Check notification settings if not working

3. **Desktop:**
   - Enable Chrome notifications for Gmail
   - Or use Gmail desktop app

---

## 🎯 WHAT HAPPENS AFTER SETUP

**When someone fills out your contact form:**
1. They click "Send Message"
2. Within 10-30 seconds:
   - Email arrives in `info@therelocationexpo.com` ✅
   - Email arrives in `partner@therelocationexpo.com` ✅
3. You get notification on your phone 📱
4. You can reply directly from Gmail
5. Your reply goes to the person who filled out the form

**Professional and Automatic!** 🚀

---

## 📞 NEED HELP?

**Resend Support:**
- Documentation: https://resend.com/docs
- Support: https://resend.com/support

**Wix Support:**
- DNS Help: https://support.wix.com/en/article/adding-or-updating-txt-records-in-your-wix-account
- Live Chat: Available in Wix dashboard

**Your Developer:**
- Contact them if technical issues
- They can check logs and troubleshoot

---

## ⏱️ ESTIMATED TIME

**Total Setup Time:** 15-40 minutes
- Step 1: Create/access Resend account: 5 min
- Step 2: Add domain to Resend: 2 min
- Step 3: Add DNS records to Wix: 5 min
- Step 4: Wait for verification: 10-30 min
- Step 5: Test: 2 min

**Best Practice:**
Do Steps 1-3, then go have coffee while DNS propagates ☕

---

## 🎊 YOU'RE DONE!

Once the domain is verified and you've tested the form successfully, your contact form is **fully functional and professional**!

All future contact form submissions will automatically arrive in both Gmail inboxes. 📧✅
