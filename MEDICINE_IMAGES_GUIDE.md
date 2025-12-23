# 🖼️ How to Add Medicine Images

## Step 1: Create an Images Folder

Create a new folder named `images` in your project directory:
- **Location:** `c:\Users\Dell\Desktop\deepakpharmchem\images\`
- **Structure:**
  ```
  deepakpharmchem/
  ├── images/
  │   ├── medicine-1.jpg
  │   ├── medicine-2.jpg
  │   ├── medicine-3.jpg
  │   ├── medicine-4.jpg
  │   ├── medicine-5.jpg
  │   ├── medicine-6.jpg
  │   └── medicine-7.jpg
  ├── index.html
  ├── script.js
  ├── styles.css
  └── README.md
  ```

## Step 2: Prepare Your Medicine Images

- **Recommended size:** 400x300 pixels (or any square/rectangular format)
- **Recommended format:** JPG, PNG (PNG recommended for better quality)
- **File naming:** Keep names simple like `medicine-1.jpg`, `medicine-2.jpg`, etc.
- **Image quality:** Use clear, high-quality images of the medicine packaging/tablets

## Step 3: Update HTML to Add Images

In your `index.html`, replace the placeholder icons with actual images in each medicine card.

### Current Structure (with placeholder icons):
```html
<div class="card-image">
    <div class="placeholder-image pain-color">
        <i class="fas fa-capsules"></i>
    </div>
    <span class="badge">Popular</span>
</div>
```

### New Structure (with real images):
```html
<div class="card-image">
    <img src="images/medicine-1.jpg" alt="Durotan-SL Tablet" class="medicine-image">
    <span class="badge">Popular</span>
</div>
```

## Mapping: Which Image Goes Where?

| Card Number | Medicine Name | Image File | Category |
|-------------|---------------|-----------|----------|
| 1 | Durotan-SL Tablet | `images/medicine-1.jpg` | pain |
| 2 | Durotan-MP Tablet | `images/medicine-2.jpg` | cold |
| 3 | Durotan-D3 Tablet | `images/medicine-3.jpg` | vitamins |
| 4 | Durotan-D3 MD Tablet | `images/medicine-4.jpg` | digestive |
| 5 | Durotan-OD Tablet | `images/medicine-5.jpg` | pain |
| 6 | Durotan-XT Tablet | `images/medicine-6.jpg` | cold |
| 7 | Smart Durotan Tablets | `images/medicine-7.jpg` | vitamins |

## Step 4: CSS Styling for Images

The `styles.css` already supports the placeholder divs. Add this CSS for the actual images:

```css
/* Medicine Card Images */
.medicine-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: var(--transition);
}

.medicine-card:hover .medicine-image {
    transform: scale(1.05);
}
```

## Step 5: Update Each Medicine Card

Find each medicine card in `index.html` and replace the `placeholder-image` div with an `<img>` tag:

### Example for Card 1:
**Find this:**
```html
<!-- Medicine Card 1 -->
<div class="medicine-card" data-category="pain">
    <div class="card-image">
        <div class="placeholder-image pain-color">
            <i class="fas fa-capsules"></i>
        </div>
        <span class="badge">Popular</span>
    </div>
```

**Replace with:**
```html
<!-- Medicine Card 1 -->
<div class="medicine-card" data-category="pain">
    <div class="card-image">
        <img src="images/medicine-1.jpg" alt="Durotan-SL Tablet" class="medicine-image">
        <span class="badge">Popular</span>
    </div>
```

## Quick Reference: Image Locations

All 7 medicine images should be placed in:
```
c:\Users\Dell\Desktop\deepakpharmchem\images\
```

File names:
- `medicine-1.jpg` - Durotan-SL Tablet
- `medicine-2.jpg` - Durotan-MP Tablet
- `medicine-3.jpg` - Durotan-D3 Tablet
- `medicine-4.jpg` - Durotan-D3 MD Tablet
- `medicine-5.jpg` - Durotan-OD Tablet
- `medicine-6.jpg` - Durotan-XT Tablet
- `medicine-7.jpg` - Smart Durotan Tablets

## Summary of Changes Made

✅ **Removed Medicine Card 8** - Only 7 products now  
✅ **Removed all prices** - Shopping cart icon is now the only action button  
✅ **Ready for images** - You can now add your medicine images  

## Next Steps

1. Create the `images` folder
2. Add your 7 medicine images
3. Update the HTML to reference the images using the format shown above
4. Test in your browser

Need help? Check the existing HTML structure in `index.html` to see the current card format!
