# 🚀 Piero Calderón - Personal Portfolio

A modern, dark-themed personal portfolio with neon accents built with Quasar Framework (Vue 3 + Vite).

## 📍 Quick Edit Guide

| Content | Location | Type |
|---------|----------|------|
| **Name & Title** | `src/sections/HeroSection.vue` (lines 8-10) | Vue Component |
| **Bio & About** | `src/sections/AboutSection.vue` (lines 18-26) | Vue Component |
| **Hobbies** | `src/sections/AboutSection.vue` (lines 92-98) | JavaScript Array |
| **Timeline** | `src/sections/AboutSection.vue` (lines 102-124) | JavaScript Array |
| **Skills Data** | `src/data/skills.json` | JSON File |
| **Projects Data** | `src/data/projects.json` | JSON File |
| **Contact Info** | `src/sections/ContactSection.vue` (lines 142-144) | JavaScript Array |
| **Social Links** | `src/sections/ContactSection.vue` (lines 147-150) | JavaScript Array |
| **Avatar Image** | `public/avatar.jpg` | Image File (400x400px) |
| **Project Images** | `public/projects/*.jpg` | Image Files (600x400px) |

### Quick Commands
```bash
npm run dev     # Start development server
npm run build   # Build for production
```

## ✨ Features

- **Dark Theme with Neon Accents** - Eye-catching design with glassmorphism effects
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Animated Background** - Subtle parallax effects and gradient animations
- **One-Page Home** - Hero, About, Skills, Projects, and Contact sections
- **Dedicated Pages** - Separate pages for Skills, Projects, and Contact
- **Interactive Skills Management** - Add, edit, and delete skills (local state only)
- **Project Filtering** - Filter projects by technology tags
- **Contact Form** - Fully validated contact form with toast notifications
- **Smooth Scrolling** - Seamless navigation between sections
- **Accessibility** - Keyboard navigation and proper ARIA labels

## 🎨 Design

### Color Palette
- **Background Base**: `#0b0f17`
- **Background Panel**: `#0f1420`
- **Text Primary**: `#e6e9ef`
- **Text Secondary**: `#aab1c6`
- **Neon Primary**: `#ff3e6c` (pink/red)
- **Neon Secondary**: `#ff914d` (orange)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Special**: Outfit (Google Fonts)

## 📁 Project Structure

```
quasar-project/
├── public/
│   ├── avatar.jpg          # Your profile picture
│   ├── cv.pdf              # Your resume/CV
│   └── projects/           # Project images
│       ├── ecommerce.jpg
│       ├── ai-chat.jpg
│       └── ...
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── AnimatedBackground.vue
│   │       └── RevealOnScroll.vue
│   ├── css/
│   │   ├── app.scss                # Global styles
│   │   └── quasar.variables.scss   # Theme variables
│   ├── data/
│   │   ├── skills.json     # Your skills data
│   │   └── projects.json   # Your projects data
│   ├── layouts/
│   │   └── MainLayout.vue  # Main layout with navbar
│   ├── pages/
│   │   ├── IndexPage.vue   # Home page (one-page)
│   │   ├── SkillsPage.vue  # Skills management page
│   │   ├── ProjectsPage.vue # Projects showcase
│   │   └── ContactPage.vue  # Contact form
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   └── ContactSection.vue
│   └── router/
│       ├── index.js
│       └── routes.js
└── quasar.config.js         # Quasar configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd quasar-project
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npx quasar dev
```

The app will open automatically in your browser at `http://localhost:9000`

### Build for Production

```bash
npx quasar build
```

Built files will be in the `dist/` directory.

## 📝 Customization

### Update Personal Information

1. **Profile Information** - Edit in:
   - `src/sections/HeroSection.vue` - Name, title, bio
   - `src/sections/AboutSection.vue` - About text, hobbies, timeline
   - `src/sections/ContactSection.vue` - Email, phone, location

2. **Skills** - Edit `src/data/skills.json`:
```json
{
  "name": "Your Skill",
  "level": 85,
  "category": "Frontend"
}
```
Categories: `Frontend`, `Backend`, `ML`, `DevOps`

3. **Projects** - Edit `src/data/projects.json`:
```json
{
  "title": "Project Name",
  "tags": ["Vue", "Quasar"],
  "image": "/projects/image.jpg",
  "link": "https://demo.com",
  "codeLink": "https://github.com/...",
  "desc": "Project description"
}
```

4. **Images**:
   - Replace `public/avatar.jpg` with your photo (recommended: 400x400px)
   - Replace `public/cv.pdf` with your resume
   - Add project images to `public/projects/` (recommended: 600x400px)

### Change Colors

Edit `src/css/quasar.variables.scss`:
```scss
$primary: #ff3e6c;      // Main accent color
$secondary: #ff914d;    // Secondary accent
$bg-base: #0b0f17;      // Background color
$text-primary: #e6e9ef; // Text color
```

### Modify Content

- **Hero Section**: `src/sections/HeroSection.vue`
- **About Section**: `src/sections/AboutSection.vue`
- **Skills Section**: `src/sections/SkillsSection.vue`
- **Projects Section**: `src/sections/ProjectsSection.vue`
- **Contact Section**: `src/sections/ContactSection.vue`

## 🎯 Routes

- `/` - Home (one-page with all sections)
- `/skills` - Skills management page
- `/projects` - All projects showcase
- `/contact` - Contact form

### Anchor Navigation (Home Page)
- `#home` - Hero section
- `#about` - About section
- `#skills` - Skills preview
- `#projects` - Projects preview
- `#contact` - Contact section

## 🔧 Technologies Used

- **Framework**: Quasar Framework v2
- **Core**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite
- **Styling**: SCSS
- **Icons**: Material Design Icons (MDI v7)
- **Fonts**: Google Fonts (Inter, Poppins, Outfit)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Features Breakdown

### Animated Background
- CSS keyframe animations
- Mouse parallax effect
- Floating gradient shapes
- Responsive and performant

### Navigation
- Sticky header with glass effect
- Active section highlighting
- Smooth scroll to anchors
- Mobile-friendly drawer menu

### Skills Management
- Add new skills dynamically
- Edit existing skills
- Delete skills with confirmation
- Form validation (0-100 range)
- Category organization

### Projects Showcase
- Filter by technology tags
- Smooth transitions
- Image hover effects
- External links (demo & code)

### Contact Form
- Full form validation
- Toast notifications
- Email, phone, location display
- Social media links

## 📄 Notes

- **No Backend**: All data is stored locally in JSON files
- **Demo Mode**: Contact form shows success notification but doesn't send emails
- **Skills Editing**: Changes are not persisted (refresh resets data)
- **Placeholder Images**: Replace with actual images for production

## 🤝 Support

For Quasar framework documentation:
- https://quasar.dev
- https://quasar.dev/vue-components

For Vue 3 Composition API:
- https://vuejs.org/guide/introduction.html

## 📜 License

This is a personal portfolio template. Feel free to use and modify as needed.

## 🎉 Tips

1. **Performance**: Keep images optimized (use WebP format)
2. **SEO**: Add proper meta tags in `index.html`
3. **Analytics**: Add Google Analytics or similar tracking
4. **Deploy**: Host on Netlify, Vercel, or GitHub Pages
5. **Domain**: Connect a custom domain for professional presence

---

**Built with ❤️ using Quasar Framework**
