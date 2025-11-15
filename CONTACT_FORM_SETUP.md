# Contact Form Setup Guide

Your contact form is now ready! Follow these simple steps to activate it:

## Option 1: Web3Forms (Recommended - FREE & Easy)

### Steps:
1. **Get your free access key:**
   - Go to https://web3forms.com
   - Enter your email address
   - Click "Get Access Key"
   - Check your email and copy the access key

2. **Add the access key to your code:**
   - Open `app/contact/page.tsx`
   - Find line with `access_key: "YOUR_ACCESS_KEY_HERE"`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key

3. **Configure email settings (Optional):**
   - Login to https://web3forms.com/dashboard
   - Set your preferred email address to receive submissions
   - Customize email templates
   - Add custom redirects

### Features:
✅ 100% Free forever (250 submissions/month)
✅ No backend needed
✅ Spam protection included
✅ Email notifications
✅ Works immediately after setup

---

## Option 2: Formspree (Alternative)

### Steps:
1. Go to https://formspree.io/
2. Sign up for free account
3. Create a new form and get your form endpoint
4. In `app/contact/page.tsx`, change the fetch URL to your Formspree endpoint:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       name: formData.fullName,
       email: formData.email,
       phone: formData.phone,
       message: formData.message,
     }),
   });
   ```

---

## Option 3: EmailJS (Client-side only)

### Steps:
1. Go to https://www.emailjs.com/
2. Sign up and create email service
3. Install EmailJS: `pnpm add @emailjs/browser`
4. Use EmailJS SDK in your component

---

## Testing Your Contact Form

1. **Start your development server:**
   ```bash
   pnpm dev
   ```

2. **Navigate to contact page:**
   - Go to http://localhost:3000/contact

3. **Test the form:**
   - Fill in all fields
   - Click "Send message"
   - Check for success message
   - Check your email for the submission

---

## Troubleshooting

### Form not sending?
- Check browser console for errors
- Verify your access key is correct
- Check your internet connection
- Ensure all required fields are filled

### Not receiving emails?
- Check spam folder
- Verify email address in Web3Forms dashboard
- Wait a few minutes (sometimes there's a delay)

### Getting CORS errors?
- Web3Forms handles CORS automatically
- Make sure you're using the correct API endpoint

---

## Additional Features You Can Add

### 1. Add reCAPTCHA (Spam Protection)
Web3Forms supports Google reCAPTCHA v3. Enable it in your dashboard.

### 2. Custom Thank You Page
Redirect users to a custom page after submission:
```javascript
if (result.success) {
  router.push('/thank-you');
}
```

### 3. Send Copy to User
Enable "Send copy to user" in Web3Forms dashboard settings.

### 4. File Attachments
Web3Forms Pro supports file uploads (paid plan).

---

## Environment Variables (Best Practice)

For better security, store your access key in environment variables:

1. Create `.env.local` file in your project root:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```

2. Update your code to use the environment variable:
   ```javascript
   access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
   ```

3. Add `.env.local` to `.gitignore` (should already be there)

---

## Support

- **Web3Forms Docs:** https://docs.web3forms.com
- **Web3Forms Support:** support@web3forms.com
- **Status Page:** https://status.web3forms.com

---

**That's it! Your contact form is ready to receive messages.** 🎉
