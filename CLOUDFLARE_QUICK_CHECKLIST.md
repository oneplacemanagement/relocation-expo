# ⚡ CLOUDFLARE QUICK START CHECKLIST

## 📋 15-MINUTE ACTIVE WORK (+ Waiting Time)

### **Phase 1: Setup (10 minutes)**
```
[ ] 1. Go to cloudflare.com → Sign Up
[ ] 2. Add site: therelocationexpo.com
[ ] 3. Choose FREE plan
[ ] 4. Review imported DNS records (verify MX records present)
[ ] 5. Copy the 2 Cloudflare nameservers shown
[ ] 6. Log into Wix → Settings → Domains → therelocationexpo.com
[ ] 7. Change nameservers to Cloudflare's nameservers
[ ] 8. Save in Wix
```

**⏸️ WAIT: 10-60 minutes for Cloudflare to show "Active"**

---

### **Phase 2: Resend Setup (5 minutes)**
```
[ ] 9. Verify Cloudflare shows "Active" status
[ ] 10. Verify website still loads: therelocationexpo.com
[ ] 11. Log into Resend → Domains → Add Domain
[ ] 12. Enter: therelocationexpo.com
[ ] 13. Copy the 2 TXT records Resend shows
[ ] 14. In Cloudflare: DNS → Add Record
[ ] 15. Add _resend TXT record (gray cloud, not orange)
[ ] 16. Add resend._domainkey TXT record (gray cloud)
[ ] 17. Save
```

**⏸️ WAIT: 10-30 minutes for DNS propagation**

---

### **Phase 3: Verify & Test (2 minutes)**
```
[ ] 18. In Resend: Click "Verify" button
[ ] 19. Status should show "Verified" ✅
[ ] 20. Go to: website/contact
[ ] 21. Fill out and submit test form
[ ] 22. Check partner@therelocationexpo.com for email
[ ] 23. Success! 🎉
```

---

## 🎯 KEY NAMESERVERS TO COPY

When you add your domain to Cloudflare, it will show 2 nameservers like:

```
ada.ns.cloudflare.com
walt.ns.cloudflare.com
```

**Write them down here:**
```
NS1: ________________________________
NS2: ________________________________
```

You'll enter these in Wix (Step 7).

---

## 🎯 KEY DNS RECORDS TO ADD

When you add domain to Resend, copy these values:

**_resend TXT Record:**
```
Value: _______________________________________
```

**resend._domainkey TXT Record:**
```
Value: _______________________________________
```

You'll add these to Cloudflare (Steps 15-16).

---

## ⏱️ TIMELINE

| Phase | Active Time | Waiting Time |
|-------|-------------|--------------|
| Phase 1 | 10 min | 10-60 min |
| Phase 2 | 5 min | 10-30 min |
| Phase 3 | 2 min | 0 min |
| **Total** | **17 min** | **20-90 min** |

**Best Strategy:** Do Phase 1, then go have coffee. Do Phase 2, then have lunch. Do Phase 3, celebrate! ☕🍔🎉

---

## 🆘 QUICK TROUBLESHOOTING

**Cloudflare stuck on "Pending"?**
→ Wait longer (up to 24 hrs, usually 30 min)

**Website not loading?**
→ Wait 30 min for DNS propagation, clear cache (Cmd+Shift+R)

**Email stopped working?**
→ Check Cloudflare DNS has MX records (aspmx.l.google.com)

**Resend not verifying?**
→ Wait longer, check records are "DNS only" (gray cloud, not orange)

---

## 📄 FULL DETAILED GUIDE

See `CLOUDFLARE_SETUP_GUIDE.md` for complete step-by-step instructions with screenshots and troubleshooting.

---

**Ready? Start with Step 1!** 🚀
