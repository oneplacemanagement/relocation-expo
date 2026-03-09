# Image Sources & Credits

This document tracks all images used in The Relocation Expo website.

## Image Directory Structure

```
public/images/
├── hero/              # Hero section backgrounds
├── sections/          # Section backgrounds and features
└── testimonials/      # People photos for testimonials
```

## Recommended Stock Photo Sources

### Free High-Quality Sources:
1. **Unsplash** (https://unsplash.com) - Free for commercial use
2. **Pexels** (https://pexels.com) - Free for commercial use
3. **Pixabay** (https://pixabay.com) - Free for commercial use

### Search Keywords to Use:

#### Hero Section:
- "career fair crowd"
- "job expo networking"
- "business conference hall"
- "professional networking event"
- "recruitment fair Dublin"

#### Why Attend Section:
- "professional handshake meeting"
- "career counseling session"
- "business consultation"
- "recruiter interview"

#### Exhibitor Section:
- "exhibition booth"
- "trade show stands"
- "corporate event display"
- "branded exhibition stand"

#### Who Should Attend:
- "diverse professionals"
- "young professional Ireland"
- "family planning future"
- "career change consultation"

#### Testimonials:
- "professional headshot Irish"
- "business portrait European"
- "authentic professional photo"

## Image Specifications

### Hero Images:
- **Dimensions**: 1920x1080px minimum
- **Format**: WebP (with JPG fallback)
- **Optimization**: Use Next.js Image component
- **File size**: <500KB after optimization

### Section Images:
- **Dimensions**: 1200x800px minimum
- **Format**: WebP (with JPG fallback)
- **File size**: <300KB after optimization

### Testimonial Photos:
- **Dimensions**: 400x400px minimum (square)
- **Format**: WebP (with JPG fallback)
- **File size**: <100KB after optimization

## Current Images Needed

### Priority 1 (High Impact):
- [ ] Hero background: Wide expo hall with networking crowds
- [ ] Why Attend: Professional consultation/meeting
- [ ] Exhibitors: Professional booth displays

### Priority 2 (Supporting):
- [ ] Who Should Attend: 3-4 diverse professional portraits
- [ ] Testimonials: 3 professional headshots
- [ ] Background accents: Subtle Dublin/RDS imagery

### Priority 3 (Nice to Have):
- [ ] Footer: RDS venue exterior
- [ ] About section: Team/office environment
- [ ] Success stories: Before/after lifestyle imagery

## Download Instructions

### Manual Download:
1. Visit Unsplash/Pexels
2. Search using keywords above
3. Download highest resolution
4. Save to appropriate directory
5. Update this file with credits

### Using the Download Script:
```bash
# Install dependencies (if needed)
npm install

# Run the image download helper
npm run download-images
```

## Image Credits

### Hero Section:
- **hero-expo-hall.jpg**: [Photographer Name] via [Source] - [License]

### Sections:
- **networking-consultation.jpg**: [Photographer Name] via [Source] - [License]

### Testimonials:
- **testimonial-1.jpg**: [Photographer Name] via [Source] - [License]

## Optimization Checklist

- [ ] All images converted to WebP format
- [ ] JPG fallbacks provided for older browsers
- [ ] Images run through Next.js Image optimization
- [ ] Alt text added for accessibility
- [ ] Lazy loading enabled for below-fold images
- [ ] Proper aspect ratios maintained

## Rollback Instructions

If images cause issues, rollback to the previous version:

```bash
# Switch back to design-experiment branch
git checkout design-experiment

# Or view changes
git diff design-experiment feature/add-authentic-imagery

# Or cherry-pick specific changes
git checkout design-experiment -- path/to/file
```

## License Compliance

All images must be:
- ✅ Free for commercial use
- ✅ No attribution required (preferred)
- ✅ Modification allowed
- ✅ Redistribution allowed

**Note**: Always verify license before using. When in doubt, check the source platform's license page.
