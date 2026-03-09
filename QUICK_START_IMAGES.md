# 🚀 QUICK START - Add Your First Image

## Step 1: Download Image (2 minutes)
Visit: https://unsplash.com/s/photos/career-fair

Look for: 
- Wide expo hall shot
- People networking
- Professional setting
- High resolution

Download → Save as: `public/images/hero/expo-hall.jpg`

---

## Step 2: Enable Image (1 minute)

Open: `src/components/home/HeroSection.tsx`

Find lines 19-26 (around line 19):

```tsx
{/* Optional: Uncomment when hero image is added */}
{/* <Image
  src="/images/hero/expo-hall.jpg"
  alt="Career fair expo hall with professionals networking"
  fill
  className="object-cover opacity-40"
  priority
  quality={90}
/> */}
```

Remove the `{/* */}` comments:

```tsx
<Image
  src="/images/hero/expo-hall.jpg"
  alt="Career fair expo hall with professionals networking"
  fill
  className="object-cover opacity-40"
  priority
  quality={90}
/>
```

---

## Step 3: Test (1 minute)

```bash
npm run dev
```

Visit: http://localhost:3000

**You should see your image as the hero background!** 🎉

---

## Adjust If Needed

### Too Dark?
Change: `className="object-cover opacity-40"`  
To: `className="object-cover opacity-50"`

### Too Light?
Change: `className="object-cover opacity-40"`  
To: `className="object-cover opacity-30"`

### Overlay Too Dark?
Find line ~23: `<div className="absolute inset-0 bg-navy/70 z-10" />`  
Change `/70` to `/60` (lighter) or `/80` (darker)

---

## Commit Your Changes

```bash
git add .
git commit -m "Add hero background image"
git push origin feature/add-authentic-imagery
```

---

## Done! 🎊

Your site now has authentic photography!

**Next**: Add more images to other sections (optional)
**Rollback**: `git checkout design-experiment` (if needed)

---

**Total Time: ~5 minutes** ⏱️
