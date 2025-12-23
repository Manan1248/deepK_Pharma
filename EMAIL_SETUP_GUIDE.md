# Email Setup Guide for Enquiry Form

## How to Get Emails from Customer Enquiries

Your website is now configured to send customer enquiries to your email. Follow these steps:

### Step 1: Replace YOUR_EMAIL_HERE
In both files, replace `YOUR_EMAIL_HERE@gmail.com` with your actual email address:

- **File**: index.html (2 places)
  - Line with enquiry form action
  - Line with contact form action

Example:
```
BEFORE: action="https://formsubmit.co/YOUR_EMAIL_HERE@gmail.com"
AFTER:  action="https://formsubmit.co/deepak@example.com"
```

### Step 2: Replace yourdomain.com (Optional)
If you have your own domain, replace `https://yourdomain.com/success.html` with your actual success page. 
If not, you can:
- Remove these lines: `<input type="hidden" name="_next" value="...">`
- OR change to: `<input type="hidden" name="_next" value="https://yoursite.com">`

### Step 3: First Time Activation
After updating the email:
1. Save the files
2. Visit your website in browser
3. Fill and submit the enquiry form
4. You'll receive an email from FormSubmit asking to CONFIRM your email
5. Click the confirmation link in that email
6. Done! All future enquiries will go to your inbox

### How It Works
- **Service Used**: FormSubmit.co (Free, No Backend Needed)
- **What Happens**:
  - Customer fills the form with: Name, Email, Phone, Company, Medicine Type, Quantity, Details
  - They click "Submit Enquiry"
  - All information is sent to YOUR EMAIL
  - Customer sees a success message
  - You get an email with all their details

### Features Included
✅ No backend server needed  
✅ No coding required  
✅ Free service  
✅ SPAM protection built-in  
✅ Secure form submission  
✅ Automatic email formatting  

### Troubleshooting

**Not receiving emails?**
- Check spam/promotions folder
- Verify you confirmed the FormSubmit email
- Make sure email address has no typos

**Want to customize further?**
Visit: https://formsubmit.co/documentation

**Need a custom backend?**
You can later use services like:
- Firebase
- Netlify Functions
- AWS Lambda
- Node.js + Express

### Contact Form Too
The contact form (Get in Touch section) also sends emails with the same setup.

---
**Need Help?** The forms are configured and ready to work. Just follow Step 1 above!
