# Brand Assets

This folder contains brand assets for The Relocation Expo.

## Logo Files

- `logo.svg` - Main logo (text version)
- `globe.svg` - Globe icon

## Converting PDF to Web Formats

You have PDF files that need to be converted:
1. `/Users/philipkeenan/Downloads/Black Text.pdf` → `logo.svg`
2. `/Users/philipkeenan/Downloads/White--Globe Icon.pdf` → `globe.svg`

### Conversion Options:

#### Option 1: Using Adobe Illustrator
1. Open the PDF file in Adobe Illustrator
2. File → Save As → SVG
3. Use "SVG 1.1" profile
4. Save to this directory

#### Option 2: Using Inkscape (Free)
1. Open the PDF in Inkscape
2. File → Save As → Optimized SVG
3. Save to this directory

#### Option 3: Using Online Converter
1. Visit cloudconvert.com or similar
2. Convert PDF → SVG
3. Download and place in this directory

#### Option 4: Export as PNG (if SVG conversion is difficult)
1. Open PDF in Preview (macOS) or Adobe Reader
2. Export as PNG at high resolution (300dpi, 2x or 3x size)
3. Save as `logo.png` and `globe.png`

## Using in Code

The logo and icon are referenced in the codebase as:
- `/brand/logo.svg` (or logo.png)
- `/brand/globe.svg` (or globe.png)

Update the Header component (`src/components/layout/Header.tsx`) once you add the actual files.

## Color Guidelines

- Navy: #2B2F48
- Accent Yellow: #EFC544
- Off-white: #EFEFF0
- Muted Grey: #535466
- Blue-grey: #5C6D8C
