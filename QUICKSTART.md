# 🚀 Quick Start Guide

## Run the Portfolio

```bash
cd quasar-project
npm run dev
```

The app will automatically open in your browser at **http://localhost:9000**

## 📝 What You Need to Customize

### 1. Personal Information (5 minutes)

**File: `src/sections/HeroSection.vue`** (line 18-20)
```vue
<h1 class="hero-title">
  Hello, I'm <span class="text-gradient">YOUR NAME</span>
</h1>
<h2 class="hero-subtitle">YOUR TITLE</h2>
```

**File: `src/sections/ContactSection.vue`** (line 137-141)
```javascript
const contactInfo = [
  { icon: 'mdi-email', label: 'Email', value: 'your.email@example.com' },
  { icon: 'mdi-phone', label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: 'mdi-map-marker', label: 'Location', value: 'Your City, Country' },
]
```

### 2. Skills Data (2 minutes)

**File: `src/data/skills.json`**
- Add/remove/edit your skills
- Set level from 0-100
- Categories: Frontend, Backend, ML, DevOps

### 3. Projects Data (5 minutes)

**File: `src/data/projects.json`**
- Update project titles and descriptions
- Change links (demo & code)
- Add real project images to `public/projects/`

### 4. Images (3 minutes)

- Replace `public/avatar.jpg` with your photo (400x400px recommended)
- Replace `public/cv.pdf` with your resume
- Add project screenshots to `public/projects/`

### 5. About Section (5 minutes)

**File: `src/sections/AboutSection.vue`**
- Update bio paragraphs (lines 21-33)
- Edit hobbies (lines 59-66)
- Update experience timeline (lines 81-106)

## 🎨 Change Theme Colors

**File: `src/css/quasar.variables.scss`**

```scss
$primary: #ff3e6c;      // Main pink/red accent
$secondary: #ff914d;    // Orange accent
$bg-base: #0b0f17;      // Dark background
```

## 📦 Build for Production

```bash
npm run build
```

Output will be in `dist/spa` folder.

## 🌐 Deploy

Upload the `dist/spa` folder to:
- Netlify (drag & drop)
- Vercel
- GitHub Pages
- Any static hosting

## ✅ Checklist

- [ ] Update name and title in Hero section
- [ ] Update contact information
- [ ] Replace avatar image
- [ ] Add your resume PDF
- [ ] Update skills in JSON
- [ ] Update projects in JSON
- [ ] Add project images
- [ ] Update About section text
- [ ] Change social media links
- [ ] Test all navigation links
- [ ] Build and deploy

## 🎯 Key Features

- ✨ Dark theme with neon accents
- 📱 Fully responsive design
- 🎨 Glassmorphism effects
- ✏️ Editable skills page
- 🔍 Filterable projects
- 📬 Contact form with validation
- 🚀 Smooth animations and transitions

## 📚 Learn More

See **README-PORTFOLIO.md** for complete documentation.

---

**Ready in under 30 minutes!** 🎉
