# 🔧 RESEND DOMAIN VERIFICATION GUIDE

## 🎯 WHY YOU NEED THIS:

**Current Issue:**
- ✅ Contact form works perfectly
- ❌ Resend test domain (`onboarding@resend.dev`) can ONLY send to YOUR email
- ❌ Cannot send to `info@therelocationexpo.com` or `partner@therelocationexpo.com`

**Solution:**
Verify your domain in Resend so you can:
- ✅ Send from `noreply@therelocationexpo.com` (professional!)
- ✅ Send to ANY email address (including info@ and partner@)
- ✅ Better email deliverability (less spam filtering)

---

## 📋 STEP-BY-STEP DOMAIN VERIFICATION

### **Step 1: Add Domain to Resend (2 minutes)**

1. **Go to Resend Dashboard:**
   - Visit: https://resend.com/domains
   - Click **"Add Domain"**

2. **Enter Your Domain:**
   - Type: `therelocationexpo.com`
   - Click **"Add"**

3. **Resend will show DNS records** you need to add

---

### **Step 2: Get Your DNS Records (Copy These)**

Resend will show you records like this (example):

**TXT Record (Domain Verification):**
```
Type: TXT
Name: _resend
Value: resend-verify=abc123xyz...
```

**MX Records (Optional - for receiving bounces):**
```
Type: MX
Priority: 10
Value: feedback-smtp.resend.com
```

**DKIM Records (Email Authentication):**
```
Type: TXT
Name: resend._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCS...
```

**📝 Copy these exactly as shown!**

---

### **Step 3: Add DNS Records to Your Domain**

**Where is your domain registered?**
- GoDaddy? Namecheap? Google Domains? Wix?

#### **If Domain is on Wix:**

1. **Go to Wix Dashboard:**
   - Log in: https://www.wix.com/
   - Go to: **Settings** → **Domains**

2. **Click Your Domain:**
   - Click on `therelocationexpo.com`
   - Look for: **"Advanced DNS"** or **"Edit DNS Records"**

3. **Add Each DNS Record:**
   
   **For TXT Record (_resend):**
   - Click **"Add Record"**
   - Type: `TXT`
   - Name/Host: `_resend`
   - Value: [paste the value from Resend]
   - TTL: 3600 (or default)
   - Click **"Save"**

   **For DKIM Record:**
   - Click **"Add Record"**
   - Type: `TXT`
   - Name/Host: `resend._domainkey`
   - Value: [paste the DKIM value from Resend]
   - TTL: 3600
   - Click **"Save"**

   **For MX Record (optional):**
   - Click **"Add Record"**
   - Type: `MX`
   - Priority: `10`
   - Value: `feedback-smtp.resend.com`
   - TTL: 3600
   - Click **"Save"**

#### **If Domain is NOT on Wix:**

Let me know your domain registrar and I'll give you specific instructions.

---

### **Step 4: Verify in Resend (5-30 minutes)**

1. **Wait for DNS Propagation:**
   - DNS changes take 5-30 minutes
   - Sometimes up to 24 hours

2. **Check Verification Status:**
   - Go back to: https://resend.com/domains
   - Your domain should show: ✅ "Verified"
   - If not, click **"Verify"** button

3. **Verify You Can Send:**
   - Status will change from "Pending" to "Verified"
   - You'll see a green checkmark ✅

---

### **Step 5: Update Contact Form Code**

Once domain is verified, I'll update the code from:
```typescript
from: 'The Relocation Expo <onboarding@resend.dev>'
to: ['pokeenan@gmail.com']
```

To:
```typescript
from: 'The Relocation Expo <noreply@therelocationexpo.com>'
to: ['info@therelocationexpo.com', 'partner@therelocationexpo.com']
```

---

## ⚡ TEMPORARY WORKAROUND (For Testing NOW)

**I've already updated the code** to send to `pokeenan@gmail.com` for testing.

**To test right now:**
1. Submit the contact form again
2. Check `pokeenan@gmail.com` inbox
3. You WILL receive the email ✅

**This proves:**
- ✅ Contact form works
- ✅ Email sending works
- ✅ Only blocked by test domain restriction

---

## 🔍 QUICK DNS CHECK

**After adding DNS records, check if they're live:**

```bash
# Check TXT record
dig _resend.therelocationexpo.com TXT

# Check DKIM record
dig resend._domainkey.therelocationexpo.com TXT
```

Or use online tool: https://mxtoolbox.com/

---

## 📊 TIMELINE

**Quick Test (Your Email):**
- ⏱️ **NOW:** Works immediately
- ✅ Proves everything is working

**Full Solution (Domain Verification):**
- ⏱️ **5-10 min:** Add DNS records in Wix
- ⏱️ **5-30 min:** Wait for DNS propagation
- ⏱️ **1 min:** Verify in Resend
- ⏱️ **1 min:** Update code to use verified domain
- ⏱️ **1 min:** Redeploy to Vercel

**Total Time:** ~15-45 minutes

---

## 🎯 RECOMMENDED APPROACH

### **Phase 1: Test NOW (5 minutes)**
1. ✅ Code already updated to send to your email
2. Test contact form again
3. Verify you receive email at `pokeenan@gmail.com`
4. Confirms everything works ✅

### **Phase 2: Full Setup (30 minutes)**
1. Add DNS records in Wix
2. Wait for verification
3. Update code to production emails
4. Redeploy
5. Test with real recipients

---

## ❓ COMMON QUESTIONS

**Q: Do I need to set up Wix email first?**
A: No! You can verify domain in Resend WITHOUT setting up Wix email. They're separate.

**Q: Will this affect my Wix email?**
A: No! Adding DNS records for Resend won't interfere with Wix email. They use different records.

**Q: Can I skip domain verification?**
A: Not really. The test domain only works for your email. You need verification for production.

**Q: What if DNS verification fails?**
A: Check DNS records are exactly as shown in Resend. Wait longer (up to 24 hours). Contact Resend support.

---

## 🚀 NEXT STEPS

**Choose One:**

**Option A: Test Immediately**
- Submit contact form right now
- Email will go to `pokeenan@gmail.com`
- Proves everything works ✅

**Option B: Set Up Domain First**
- Follow Step 1-4 above
- Then test with real emails

**Which would you like to do?** 🎯

---

**Current Status:**
- ✅ Code updated to send to your email (temporary)
- ⏳ Need to verify domain for production use
- 🎯 Ready to test immediately!
