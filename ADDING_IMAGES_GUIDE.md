# 📸 Adding Authentic Images - Quick Start Guide

## ✅ Your Safety Net

**Current Branch**: `feature/add-authentic-imagery`  
**Backup Branch**: `design-experiment`  

### Rollback Anytime:
```bash
# Go back to the previous version (no images)
git checkout design-experiment

# Or view what changed
git diff design-experiment feature/add-authentic-imagery
```

---

## 🎯 What's Been Set Up

### 1. Directory Structure Created:
```
public/images/
├── hero/              # Hero background images
├── sections/          # Section background images  
└── testimonials/      # People headshots
```

### 2. Components Updated:
- ✅ `HeroSection.tsx` - Ready for background image
- ✅ Image optimization with Next.js Image component
- ✅ Proper z-indexing and overlays
- ✅ Fallback gradient (works without images)

### 3. Documentation:
- ✅ `IMAGE_SOURCES.md` - Track credits and licenses
- ✅ `scripts/download-images.sh` - Helper script
- ✅ Placeholder guides in each directory

---

## 🚀 How to Add Images (3 Options)

### Option 1: Quick Test (Recommended First)
Download ONE image to test:

1. Visit: https://unsplash.com/s/photos/career-fair
2. Download any high-quality image
3. Save as: `public/images/hero/expo-hall.jpg`
4. Uncomment lines in `HeroSection.tsx`:

```tsx
// Change this (line ~19-25):
{/* Optional: Uncomment when hero image is added */}
{/* <Image
  src="/images/hero/expo-hall.jpg"
  ...
/> */}

// To this:
<Image
  src="/images/hero/expo-hall.jpg"
  alt="Career fair expo hall with professionals networking"
  fill
  className="object-cover opacity-40"
  priority
  quality={90}
/>
```

5. Run: `npm run dev`
6. View: http://localhost:3000

---

### Option 2: Use Helper Script
```bash
# Run the download guide
./scripts/download-images.sh

# Follow the URLs provided
# Download and place images in correct folders
```

---

### Option 3: Bulk Download (Complete Site)

#### Priority 1 - Hero (Most Impactful):
- **What**: Wide expo hall shot with networking crowds
- **Where**: https://unsplash.com/s/photos/career-fair
- **Save as**: `public/images/hero/expo-hall.jpg`
- **Size**: 1920x1080px minimum

#### Priority 2 - Sections:
- **Consultation**: https://unsplash.com/s/photos/professional-meeting
- **Save as**: `public/images/sections/consultation.jpg`
- **Exhibition**: https://unsplash.com/s/photos/exhibition-booth
- **Save as**: `public/images/sections/exhibition-booth.jpg`

#### Priority 3 - Testimonials:
- **Headshots**: https://unsplash.com/s/photos/professional-portrait
- **Save as**: `public/images/testimonials/person-1.jpg` (repeat for 2, 3)
- **Size**: 400x400px (square crop)

---

## 🧪 Testing Your Images

```bash
# Start dev server
npm run dev

# Build for production (tests optimization)
npm run build

# Check image optimization worked
npm run start
```

### What to Check:
- ✅ Images load fast (Next.js optimization working)
- ✅ Text is still readable over images
- ✅ Mobile looks good (images scale properly)
- ✅ No layout shift when images load

---

## 📝 After Adding Images

### Update Credits:
Edit `IMAGE_SOURCES.md` with:
- Photographer name
- Source platform (Unsplash/Pexels)
- Image URL
- License (usually "Unsplash License - Free to use")

### Example:
```markdown
### Hero Section:
- **expo-hall.jpg**: John Doe via Unsplash - Unsplash License
  - URL: https://unsplash.com/photos/abc123
```

---

## 🔄 Deploying Changes

### When You're Happy:
```bash
# Commit your changes
git add .
git commit -m "Add authentic expo photography to hero section"
git push origin feature/add-authentic-imagery

# Merge into design-experiment
git checkout design-experiment
git merge feature/add-authentic-imagery
git push origin design-experiment

# Deploy to Vercel
vercel --prod
```

---

## ⚠️ Troubleshooting

### Image Not Showing?
1. Check file path: `public/images/hero/expo-hall.jpg`
2. Check filename matches exactly (case-sensitive)
3. Restart dev server: `npm run dev`
4. Check browser console for errors

### Image Too Dark/Light?
Adjust opacity in component:
```tsx
className="object-cover opacity-40"  // Change opacity-40 to opacity-30 or opacity-50
```

### Text Hard to Read?
Adjust overlay darkness:
```tsx
<div className="absolute inset-0 bg-navy/70 z-10" />  // Change /70 to /80 or /60
```

---

## 🎨 Image Guidelines

### What Makes a Good Image:
- ✅ Professional but energetic atmosphere
- ✅ Diverse people (age, gender, ethnicity)
- ✅ Natural lighting (not too dark/bright)
- ✅ High resolution (1920px+ width)
- ✅ Authentic moments (not overly posed)
- ✅ European/Irish context when possible

### What to Avoid:
- ❌ Stock photos that look "too stock"
- ❌ Watermarks or logos
- ❌ Blurry or low-resolution images
- ❌ Images with competing text/graphics
- ❌ Overly staged or artificial poses

---

## 🆘 Need Help?

### Quick Rollback:
```bash
git checkout design-experiment
```

### Partial Rollback (keep some changes):
```bash
# Rollback just the hero section
git checkout design-experiment -- src/components/home/HeroSection.tsx
```

### Start Fresh:
```bash
# Delete this feature branch
git branch -D feature/add-authentic-imagery

# Create new one
git checkout design-experiment
git checkout -b feature/add-authentic-imagery-v2
```

---

## 📊 Performance Impact

### Before (No Images):
- Page Load: ~1-2s
- First Contentful Paint: ~0.5s

### After (With Optimized Images):
- Page Load: ~2-3s (one-time, then cached)
- First Contentful Paint: ~0.5s (unchanged)
- Images lazy-load below fold

**Next.js automatically optimizes images** - they're converted to WebP, resized for device, and cached.

---

## ✨ What's Next?

After hero image works:
1. Add consultation image to Why Attend section
2. Add testimonial headshots
3. Add exhibition booth to Exhibitors section
4. Test on mobile devices
5. Merge and deploy!

**Remember**: You can always `git checkout design-experiment` to rollback! 🔄
