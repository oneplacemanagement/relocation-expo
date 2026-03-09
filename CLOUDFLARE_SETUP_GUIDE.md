# 🌐 CLOUDFLARE DNS SETUP GUIDE

## 📋 COMPLETE STEP-BY-STEP INSTRUCTIONS

### **What We're Doing:**
Moving DNS management from Wix to Cloudflare (FREE) so Resend can verify your domain.

**Important:** Domain stays registered with Wix, we're just changing who manages the DNS records.

---

## STEP 1: CREATE CLOUDFLARE ACCOUNT (5 minutes)

1. **Go to Cloudflare:**
   - Visit: https://www.cloudflare.com/
   - Click **"Sign Up"** (top right)

2. **Create Account:**
   - Enter email: Use client's business email (partner@therelocationexpo.com)
   - Create password
   - Verify email (check inbox for verification link)

3. **Log In:**
   - After verification, log into Cloudflare dashboard

---

## STEP 2: ADD YOUR DOMAIN (5 minutes)

1. **Add Site:**
   - Click **"Add a Site"** or **"Add Site"** button
   - Enter domain: `therelocationexpo.com` (without www or https)
   - Click **"Add Site"**

2. **Select Plan:**
   - Choose **"Free"** plan (€0/month) ✅
   - Scroll down and click **"Continue"**

3. **DNS Records Scan:**
   - Cloudflare will scan your existing DNS records from Wix
   - This takes 30-60 seconds
   - Click **"Continue"** when done

4. **Review DNS Records:**
   - You should see your existing records imported:
     - MX records (Google Workspace - aspmx.l.google.com)
     - A record (pointing to Wix)
     - CNAME records (possibly for www)
   - **Important:** Make sure the Google Workspace MX records are there!
   - If anything looks wrong, don't worry - we can fix it later
   - Click **"Continue"**

---

## STEP 3: GET CLOUDFLARE NAMESERVERS

Cloudflare will show you 2 nameservers. They'll look like:

```
ns1.cloudflare.com
ns2.cloudflare.com
```

**Or similar variations like:**
```
ada.ns.cloudflare.com
walt.ns.cloudflare.com
```

**COPY THESE DOWN!** You'll need them in the next step.

**Keep this Cloudflare tab open** - don't close it yet!

---

## STEP 4: UPDATE NAMESERVERS IN WIX (10 minutes)

1. **Log into Wix:**
   - Go to: https://www.wix.com/
   - Log in with your client's account

2. **Go to Domains:**
   - Click **"Settings"** (left sidebar)
   - Click **"Domains"**
   - Click on: **therelocationexpo.com**

3. **Find Nameserver Settings:**
   - Look for: **"Nameservers"** or **"Edit Nameservers"**
   - Or: **"Advanced DNS Settings"** → **"Nameservers"**
   - Click **"Change Nameservers"** or **"Edit"**

4. **Switch to Custom Nameservers:**
   - Select: **"Use Custom Nameservers"** or **"Switch to external nameservers"**
   - You'll see fields for nameservers

5. **Enter Cloudflare Nameservers:**
   - Nameserver 1: [paste first Cloudflare nameserver]
   - Nameserver 2: [paste second Cloudflare nameserver]
   - Example:
     ```
     NS1: ada.ns.cloudflare.com
     NS2: walt.ns.cloudflare.com
     ```

6. **Save Changes:**
   - Click **"Save"** or **"Update Nameservers"**
   - Wix will warn you: "This will affect your site" - **Click OK/Confirm**
   - This is expected and safe ✅

---

## STEP 5: VERIFY IN CLOUDFLARE (Wait 10-60 minutes)

1. **Back to Cloudflare Tab:**
   - Click **"Done, check nameservers"** or **"Continue"**

2. **Wait for Verification:**
   - Cloudflare checks if nameservers are updated
   - This can take: 10 minutes to 24 hours (usually 10-30 minutes)
   - Status will show: **"Pending"** or **"Pending Nameserver Update"**

3. **Check Status:**
   - Go to: Cloudflare Dashboard → therelocationexpo.com
   - Look for status at top
   - When ready, it will say: **"Active"** ✅

4. **You'll Get Email:**
   - Cloudflare sends email when site is active
   - "Your site is now active on Cloudflare"

**While waiting, let's continue with the next steps...**

---

## STEP 6: VERIFY YOUR WEBSITE STILL WORKS

**Important:** After nameserver change, verify your site still loads:

1. **Clear Browser Cache:**
   - Press: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

2. **Visit Your Site:**
   - Go to: https://therelocationexpo.com
   - Should still load normally ✅
   - If not, wait 10-20 minutes for DNS propagation

3. **Test Email:**
   - Send test email to: partner@therelocationexpo.com
   - Should still receive in Gmail ✅

**If anything doesn't work, wait 30 minutes for DNS to propagate globally.**

---

## STEP 7: ADD RESEND DNS RECORDS TO CLOUDFLARE (5 minutes)

Once Cloudflare shows **"Active"**:

1. **Log into Resend:**
   - Go to: https://resend.com/
   - Log in (or create account)

2. **Add Domain:**
   - Go to: https://resend.com/domains
   - Click **"Add Domain"**
   - Enter: `therelocationexpo.com`
   - Click **"Add"**

3. **Copy DNS Records:**
   - Resend will show 2 TXT records:
     ```
     Type: TXT
     Name: _resend
     Value: resend-verify=abc123...
     
     Type: TXT
     Name: resend._domainkey
     Value: v=DKIM1; k=rsa; p=MIGfMA0...
     ```
   - **Keep this tab open**

4. **Add Records in Cloudflare:**
   - Go to: Cloudflare Dashboard → therelocationexpo.com
   - Click **"DNS"** (left sidebar) → **"Records"**
   - Click **"Add Record"**

   **First Record (_resend):**
   - Type: `TXT`
   - Name: `_resend`
   - Content: [paste the resend-verify value]
   - TTL: Auto
   - Proxy status: DNS only (gray cloud, not orange)
   - Click **"Save"**

   **Second Record (resend._domainkey):**
   - Click **"Add Record"** again
   - Type: `TXT`
   - Name: `resend._domainkey`
   - Content: [paste the v=DKIM1 value]
   - TTL: Auto
   - Proxy status: DNS only (gray cloud)
   - Click **"Save"**

---

## STEP 8: VERIFY DOMAIN IN RESEND (Wait 10-30 minutes)

1. **Wait for DNS Propagation:**
   - DNS changes take 10-30 minutes
   - Sometimes up to 2 hours

2. **Verify in Resend:**
   - Go back to: https://resend.com/domains
   - Click **"Verify"** button next to your domain
   - If successful: Status changes to **"Verified"** ✅
   - If not ready: "Verification failed, please wait" - wait 10 more minutes and try again

3. **Check DNS Propagation:**
   - Use: https://dnschecker.org/
   - Enter: `_resend.therelocationexpo.com`
   - Type: TXT
   - Should show the verification record globally

---

## STEP 9: TEST CONTACT FORM (2 minutes)

Once Resend shows **"Verified"**:

1. **Deploy Latest Code:**
   - (Developer will do this)
   - Or it's already deployed ✅

2. **Visit Website:**
   - Go to: https://therelocationexpo.com/contact
   - Or production URL

3. **Fill Out Form:**
   - Name: Test User
   - Email: your-personal-email@gmail.com
   - Subject: Testing Contact Form
   - Message: Testing email delivery via Cloudflare + Resend

4. **Submit:**
   - Click **"Send Message"**
   - Should see: **"Message Sent!"** ✅

5. **Check Email:**
   - Within 30 seconds, check: partner@therelocationexpo.com
   - Email should arrive! ✅
   - From: "The Relocation Expo <noreply@therelocationexpo.com>"
   - Contains all form details

---

## ✅ SUCCESS CHECKLIST

```
[ ] Created Cloudflare account
[ ] Added therelocationexpo.com to Cloudflare
[ ] Copied Cloudflare nameservers
[ ] Updated nameservers in Wix
[ ] Waited for Cloudflare to show "Active" (10-60 min)
[ ] Verified website still loads
[ ] Verified email still works (partner@)
[ ] Added domain to Resend
[ ] Copied Resend DNS records
[ ] Added _resend TXT record to Cloudflare
[ ] Added resend._domainkey TXT record to Cloudflare
[ ] Waited for DNS propagation (10-30 min)
[ ] Domain verified in Resend (green checkmark)
[ ] Tested contact form
[ ] Email received in partner@therelocationexpo.com
```

---

## 🎊 YOU'RE DONE!

**What You've Achieved:**
- ✅ Full DNS control with Cloudflare (FREE)
- ✅ Resend domain verified
- ✅ Contact form sends professional emails
- ✅ Emails from: noreply@therelocationexpo.com
- ✅ Bonus: Cloudflare CDN, security, analytics

**Total Time:** 30-90 minutes (mostly waiting for propagation)

---

## 🔧 TROUBLESHOOTING

### **Problem: Cloudflare stuck on "Pending"**
**Solution:**
- Wait longer (can take up to 24 hours, usually 30 min)
- Check nameservers in Wix are EXACTLY as shown
- Clear browser cache
- Try incognito window

### **Problem: Website not loading after nameserver change**
**Solution:**
- Wait 30 minutes for DNS propagation
- Clear browser cache (Cmd+Shift+R)
- Check in Cloudflare: DNS → Records → Verify A record points to Wix
- If missing, add A record pointing to Wix IP

### **Problem: Email stopped working**
**Solution:**
- Check Cloudflare: DNS → Records → Verify MX records present
- Should have 5 MX records (Google Workspace):
  - aspmx.l.google.com (priority 10)
  - alt1.aspmx.l.google.com (priority 20)
  - alt2.aspmx.l.google.com (priority 30)
  - alt3.aspmx.l.google.com (priority 40)
  - alt4.aspmx.l.google.com (priority 50)
- If missing, add them manually

### **Problem: Resend domain not verifying**
**Solution:**
- Wait longer (up to 2 hours)
- Check DNS with: https://dnschecker.org/
- Verify TXT records are exactly as shown (no typos)
- Make sure Proxy status is "DNS only" (gray cloud) not "Proxied" (orange cloud)
- Click "Verify" again in Resend

### **Problem: Contact form shows error**
**Solution:**
- Make sure domain is verified in Resend first
- Check Resend logs: https://resend.com/logs
- Verify RESEND_API_KEY is set in Vercel
- Try redeploying: `vercel --prod`

---

## 📞 NEED HELP?

**Cloudflare Support:**
- Community: https://community.cloudflare.com/
- Docs: https://developers.cloudflare.com/

**Resend Support:**
- Docs: https://resend.com/docs
- Support: https://resend.com/support

**Wix Support:**
- Nameserver Help: https://support.wix.com/en/article/changing-your-name-servers
- Live Chat: Available in Wix dashboard

---

## 🎯 BENEFITS OF CLOUDFLARE

**You now have:**
- ✅ Full DNS control (any records, any time)
- ✅ Cloudflare CDN (faster website)
- ✅ DDoS protection (security)
- ✅ Analytics (traffic insights)
- ✅ SSL/TLS management
- ✅ Page Rules (advanced routing)
- ✅ Resend works perfectly
- ✅ All for FREE!

**Worth the 30-minute setup!** 🚀

---

## ⏱️ TIMELINE SUMMARY

- **5 min:** Create Cloudflare account + add domain
- **5 min:** Update nameservers in Wix
- **10-60 min:** Wait for Cloudflare activation (WAITING)
- **5 min:** Add Resend DNS records to Cloudflare
- **10-30 min:** Wait for DNS propagation (WAITING)
- **2 min:** Test contact form

**Total Active Time:** ~17 minutes  
**Total Waiting Time:** 20-90 minutes  
**Best Strategy:** Set it up, then go have lunch! ☕

---

**Ready to start? Begin with STEP 1 above!** 🎯
