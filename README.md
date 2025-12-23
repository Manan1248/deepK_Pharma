# Deepak Pharm Chem - Pharmaceutical Website

A modern, responsive pharmaceutical e-commerce website with beautiful animations, card-based medicine display, and comprehensive features.

## 📋 Features

### Core Pages
- **Home** - Eye-catching hero section with call-to-action
- **About Us** - Company information and key features
- **Services** - 6 service cards with hover animations
- **Medicines** - Grid layout with medicine cards and filtering
- **Contact** - Contact form and location information
- **Enquiry** - Detailed form for medicine inquiries

### Visual Effects & Animations
✨ **Interactive Elements:**
- Floating shape animations in hero section
- Card hover effects with elevation and transformation
- Smooth scroll animations
- Parallax scrolling effects
- Icon rotation on hover
- Smooth transitions on all interactive elements

🎨 **Design Features:**
- Modern gradient backgrounds
- Color-coded medicine categories
- Badge system (Popular, Best Seller, New, Trusted)
- Star rating system
- Responsive grid layouts
- Professional color scheme

### Functionality
- **Medicine Filtering** - Filter medicines by category (Pain Relief, Cold & Cough, Vitamins, Digestive)
- **Add to Cart** - Interactive cart buttons with animations
- **Form Validation** - Contact and enquiry forms with validation
- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Navigation** - Smooth scrolling navigation with active link highlighting
- **Mobile Menu** - Hamburger menu for mobile devices
- **Modal Notifications** - Success messages for form submissions
- **Toast Notifications** - Quick feedback messages

## 📁 File Structure

```
deepakpharmchem-website/
├── index.html      # Main HTML file with all sections
├── styles.css      # Complete styling with animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🚀 How to Use

1. **Extract Files** - Place all three files (index.html, styles.css, script.js) in the same folder

2. **Open Website** - Double-click `index.html` or open it in your web browser

3. **Customize Content** - Edit the following in `index.html`:
   - Company name and contact details
   - Medicine names and prices
   - About us text
   - Service descriptions
   - Contact information

## 🎨 Color Scheme

- **Primary Color**: #1e3a8a (Deep Blue)
- **Secondary Color**: #0ea5e9 (Sky Blue)
- **Accent Color**: #06b6d4 (Cyan)
- **Success Color**: #10b981 (Green)
- **Warning Color**: #f59e0b (Amber)
- **Danger Color**: #ef4444 (Red)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## ⌨️ Keyboard Shortcuts

- **Alt + H** - Go to Home
- **Alt + M** - Go to Medicines
- **Alt + C** - Go to Contact

## 🎯 Customization Guide

### Change Medicine Cards
1. Find the medicine card section in `index.html`
2. Modify the medicine name, type, price, and description
3. Change the color class (pain-color, cold-color, vitamins-color, digestive-color)
4. Update the badge text (Popular, Best Seller, New, Trusted)

### Add More Medicines
Copy an existing medicine card div and modify:
```html
<div class="medicine-card" data-category="pain">
    <!-- Modify this card -->
</div>
```

### Change Images
Currently uses Font Awesome icons. To add actual images:
1. Replace the icon div with: `<img src="your-image.jpg" alt="Medicine name">`
2. Adjust CSS for image sizing as needed

### Update Contact Information
Search for these in `index.html` and update:
- Phone numbers
- Email addresses
- Physical address
- Business hours

## 🎬 Animation Effects Included

- **Float Animation** - Logo floats up and down
- **Slide Up** - Content slides up on page load
- **Bounce** - About section image bounces
- **Fade In/Out** - Smooth opacity transitions
- **Scale & Rotate** - Hover effects on buttons and icons
- **Transform** - Cards lift on hover
- **Parallax** - Background shapes move with scroll
- **Glow Effect** - Focus states with box shadows

## 📱 Mobile Features

- Hamburger menu for navigation
- Fully responsive grid layouts
- Touch-friendly button sizes
- Mobile-optimized forms
- Responsive font sizes

## 🔒 Security Notes

- Forms are front-end only (add backend for actual submissions)
- To send emails, you'll need to integrate a backend service
- Consider adding reCAPTCHA for production
- Use HTTPS when deploying to production

## 🚀 Deployment

1. **Local**: Simply open index.html in browser
2. **Web Server**: Upload all three files to your hosting
3. **GitHub Pages**: Create a repository and enable Pages
4. **Netlify**: Drag and drop your folder
5. **Vercel**: Connect your repository

## 💡 Future Enhancements

- Backend integration for form handling
- Shopping cart functionality
- Product detail pages
- Search functionality
- User reviews and ratings
- Payment gateway integration
- Blog/news section
- Multi-language support

## 📝 Notes

- All images are currently placeholder icons (Font Awesome)
- Replace with actual medicine images for production
- Update company information with actual details
- Configure email service for form submissions
- Add analytics tracking (Google Analytics)
- Optimize images for web
- Set up SSL certificate for HTTPS

## 🤝 Support

For questions or customization needs, you can:
1. Review the inline comments in the code
2. Modify CSS variables in styles.css for quick theme changes
3. Check Font Awesome library for available icons

## 📄 License

This website template is provided as-is for use by Deepak Pharm Chem.

---

**Created**: December 2025
**Version**: 1.0.0

Enjoy your new pharmaceutical website! 🎉
