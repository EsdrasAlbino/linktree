# 🔗 Personal Linktree - GitHub Pages

A beautiful, responsive linktree-style landing page showcasing my key projects.

## 🎨 Features

- ✨ Modern, gradient design with dark theme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations and hover effects
- ⚡ Fast loading and optimized performance
- ♿ Accessible with keyboard navigation
- 🎯 SEO-friendly metadata

## 🚀 Projects Featured

### 1. Tangram
Complete educational platform with:
- React Native mobile app
- NestJS backend API
- PostgreSQL database
- Machine Learning integration
- Business Intelligence analytics

**Tech Stack:** React Native, NestJS, PostgreSQL, ML

### 2. Genius Finance
AI-powered financial assistant featuring:
- Next.js frontend
- NestJS backend
- WhatsApp bot integration
- Smart financial analytics
- Automated transaction tracking

**Tech Stack:** Next.js, NestJS, WhatsApp API, AI

### 3. BikeRevision System
B2B bike maintenance management with:
- WhatsApp-based revision tracking
- Stripe payment integration
- QR code client identification
- Multi-company support
- Real-time notifications

**Tech Stack:** NestJS, WhatsApp Web.js, Stripe, PostgreSQL

## 📦 Deployment to GitHub Pages

### Method 1: Simple Deployment

1. **Create a new repository** named `<username>.github.io` (replace `<username>` with your GitHub username)

2. **Upload the files:**
   ```bash
   cd linktree-github-page
   git init
   git add .
   git commit -m "Initial commit: Linktree landing page"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```

3. **Access your site** at `https://<username>.github.io`

### Method 2: Deploy to Existing Repository

1. **Upload to any repository:**
   ```bash
   git add .
   git commit -m "Add linktree landing page"
   git push
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select source: `main` branch, `/root` folder
   - Save and wait for deployment

3. **Access your site** at `https://<username>.github.io/<repository-name>`

## 🛠️ Customization

### Update Profile Information

Edit `index.html`:

```html
<!-- Change name -->
<h1 class="name">Your Name</h1>

<!-- Change bio -->
<p class="bio">Your Title | Your Description</p>

<!-- Update GitHub username -->
<a href="https://github.com/YourUsername">...</a>
```

### Update Project Links

Replace the GitHub links in each card:

```html
<a href="https://github.com/YourUsername/YourProject" ...>
```

### Customize Colors

Edit `styles.css` variables:

```css
:root {
    --bg-primary: #0f172a;        /* Main background */
    --accent-tangram: #8b5cf6;    /* Tangram accent color */
    --accent-genius: #10b981;     /* Genius accent color */
    --accent-bike: #f59e0b;       /* Bike accent color */
}
```

### Add More Projects

Copy a link card template in `index.html`:

```html
<a href="your-link" class="link-card custom-class">
    <div class="link-icon">
        <!-- Your SVG icon -->
    </div>
    <div class="link-content">
        <h2 class="link-title">Project Name</h2>
        <p class="link-description">Description</p>
        <div class="link-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
    </div>
    <div class="link-arrow">...</div>
</a>
```

## 🎯 Features Included

### Animations
- Fade-in on page load
- Smooth hover transitions
- Card lift effect on hover
- Ripple effect on click
- Floating particles (optional)

### Accessibility
- Keyboard navigation support
- ARIA labels
- Focus states
- Screen reader friendly

### Performance
- Optimized CSS
- Minimal JavaScript
- Fast loading times
- Mobile-first design

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/your-repo.git
   cd your-repo
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx http-server
     
     # VS Code
     # Use Live Server extension
     ```

3. **Access locally:**
   Open `http://localhost:8000` in your browser

## 📝 File Structure

```
linktree-github-page/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Interactive features
└── README.md          # Documentation
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Update your avatar:** The page automatically loads your GitHub avatar. Ensure your GitHub profile has a good photo.

2. **Add analytics:** Uncomment the analytics tracking code in `script.js` to track visits.

3. **Custom domain:** You can use a custom domain by adding a `CNAME` file.

4. **SEO optimization:** Update the meta description in `index.html` for better search visibility.

5. **Social sharing:** Add Open Graph meta tags for better social media sharing.

## 🌟 Showcase

This linktree page features:
- Clean, modern design
- Professional presentation
- Easy navigation
- Mobile-optimized experience
- Fast performance

Perfect for sharing on:
- GitHub profile README
- Social media bios
- Email signatures
- Business cards (QR code)
- Professional networking

---

Built with ❤️ for the open-source community.

**[View Live Demo](https://yourusername.github.io)**
# linktree
