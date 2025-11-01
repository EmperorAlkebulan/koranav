# KoraNav Website - Deployment Guide

## Understanding Your Application

Your KoraNav website is a **modern full-stack application**, not a traditional static website. Here's what that means:

### Traditional vs. Modern Websites

**Traditional Website (what you might be looking for):**
- Direct HTML files (index.html)
- Direct CSS files (style.css)
- Direct JavaScript files (script.js)

**Your Modern Application (what you have):**
- React components (compiled to HTML/CSS/JS during build)
- Tailwind CSS (compiled to CSS during build)
- TypeScript (compiled to JavaScript during build)
- Express backend server (handles contact form)

### What Happens During Build

When you run `npm run build:frontend`, Vite will:
1. Compile all React components → HTML
2. Compile all Tailwind classes → Optimized CSS file
3. Compile all TypeScript → Optimized JavaScript files
4. Bundle everything into the `dist/public` folder

The result will include the files you're looking for, but they're auto-generated!

---

## Deployment Options

### Option 1: Netlify (Frontend Only - Static Site)

**✅ Pros:**
- Free hosting
- Easy GitHub integration
- Automatic deploys
- Great performance

**❌ Cons:**
- **Contact form will NOT work** (no backend server)
- Requires Netlify Functions for form handling (extra setup)

#### Steps to Deploy to Netlify:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - KoraNav website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your KoraNav repository

3. **Configure Build Settings:**
   - **Build command:** `npm run build:frontend`
   - **Publish directory:** `dist/public`
   - Click "Deploy site"

4. **Files Generated After Build:**
   After deployment, your `dist/public` folder will contain:
   - `index.html` (main HTML file)
   - `assets/index-[hash].css` (your compiled styles)
   - `assets/index-[hash].js` (your compiled JavaScript)
   - `assets/IMG_7826_1761458161898-[hash].png` (logo)
   - `assets/IMG_7860_1761460607545-[hash].jpeg` (Severus image)

**Note:** The `netlify.toml` file is already configured in your project!

---

### Option 2: Replit Publishing (Recommended - Full Stack)

**✅ Pros:**
- Contact form WILL work (backend included)
- Easiest deployment option
- Everything works out of the box
- Free SSL certificate
- Custom domain support

**❌ Cons:**
- Requires Replit account

#### Steps to Deploy on Replit:

Simply click the **"Publish"** button in your Replit interface. That's it!

Your site will be live at: `https://your-project-name.replit.app`

---

### Option 3: Netlify + Netlify Functions (Full Stack)

To make the contact form work on Netlify, you need to convert the Express backend to Netlify Functions.

#### Create Netlify Function for Contact Form:

1. Create `netlify/functions/contact.js`:

```javascript
export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Here you would typically:
    // 1. Send email via SendGrid/Mailgun
    // 2. Save to database
    // 3. Send to CRM
    
    console.log('Contact form submission:', data);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Message received!'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}
```

2. Update `netlify.toml`:

```toml
[build]
  command = "npm run build:frontend"
  publish = "dist/public"
  functions = "netlify/functions"
```

3. Update contact form API endpoint in your code to use `/.netlify/functions/contact`

---

## Files Generated During Build Process

After running `npm run build:frontend`, you'll find these in `dist/public/`:

```
dist/public/
├── index.html                          ← Main HTML page
├── assets/
│   ├── index-[hash].css               ← All your styles (compiled from Tailwind)
│   ├── index-[hash].js                ← All your React code (compiled from TypeScript)
│   ├── IMG_7826_1761458161898-[hash].png  ← KoraNav logo
│   └── IMG_7860_1761460607545-[hash].jpeg ← Severus WMS image
└── vite.svg                            ← Vite logo
```

**Note:** The `[hash]` values change with each build for cache busting.

---

## Quick Commands Reference

```bash
# Development (runs both frontend and backend)
npm run dev

# Build frontend only (for Netlify)
npm run build:frontend

# Build full-stack (frontend + backend)
npm run build

# Preview built site locally
npx vite preview --outDir dist/public
```

---

## Troubleshooting

### "I don't see style.css or script.js files"

That's correct! Modern build tools bundle everything:
- **All CSS** → `assets/index-[hash].css`
- **All JavaScript** → `assets/index-[hash].js`

### "My contact form doesn't work on Netlify"

Netlify only hosts static files. You need to either:
1. Use Replit Publishing instead (recommended)
2. Set up Netlify Functions (see Option 3 above)
3. Use a third-party form service like Formspree or Netlify Forms

### "Build failed on Netlify"

Make sure:
1. Node version is set to 20 (configured in `netlify.toml`)
2. Build command is `npm run build:frontend`
3. Publish directory is `dist/public`

---

## Recommended Deployment Path

For the best experience with your KoraNav website:

1. **Use Replit Publishing** for your live production site (contact form works!)
2. **Use Netlify** for a marketing-only version if needed (disable contact form)

---

## Need Help?

- **Replit Publishing Docs:** https://docs.replit.com/
- **Netlify Docs:** https://docs.netlify.com/
- **Vite Build Docs:** https://vitejs.dev/guide/build.html
