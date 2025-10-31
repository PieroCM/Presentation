<template>
  <q-layout view="hHh lpR fFf">
    <AnimatedBackground />
    
    <q-header elevated class="header-glass">
      <q-toolbar class="container">
        <q-toolbar-title class="logo">
          <span class="text-gradient">Portfolio</span>
        </q-toolbar-title>

        <!-- Desktop Navigation -->
        <div class="nav-links gt-sm">
          <q-btn
            v-for="item in navItems"
            :key="item.label"
            flat
            :label="item.label"
            @click="handleNavClick(item)"
            :class="{ 'nav-active': isActive(item) }"
            class="nav-item"
          />
          <q-btn
            unelevated
            rounded
            label="Hire me"
            color="primary"
            class="q-ml-md btn-hire"
            @click="scrollToSection('contact')"
          />
        </div>

        <!-- Mobile Menu -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="lt-md"
          @click="mobileDrawer = !mobileDrawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer -->
    <q-drawer
      v-model="mobileDrawer"
      side="right"
      overlay
      behavior="mobile"
      class="mobile-drawer"
    >
      <q-list class="q-pa-md">
        <q-item
          v-for="item in navItems"
          :key="item.label"
          clickable
          v-ripple
          @click="handleNavClick(item)"
          :active="isActive(item)"
          active-class="text-primary"
        >
          <q-item-section>
            <q-item-label class="text-h6">{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-separator class="q-my-md" />
        
        <q-item>
          <q-btn
            unelevated
            rounded
            label="Hire me"
            color="primary"
            class="full-width"
            @click="scrollToSection('contact')"
          />
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AnimatedBackground from 'components/ui/AnimatedBackground.vue'

const router = useRouter()
const route = useRoute()
const mobileDrawer = ref(false)
const activeSection = ref('home')

const navItems = [
  { label: 'Home', anchor: 'home', route: '/' },
  { label: 'About', anchor: 'about', route: '/' },
  { label: 'Skills', anchor: 'skills', route: '/skills' },
  { label: 'Projects', anchor: 'projects', route: '/projects' },
  { label: 'Contact', anchor: 'contact', route: '/contact' },
]

const isActive = (item) => {
  if (route.path === '/') {
    return activeSection.value === item.anchor
  }
  return route.path === item.route
}

const handleNavClick = async (item) => {
  mobileDrawer.value = false
  
  if (route.path === '/' && item.route === '/') {
    // Same page, just scroll
    scrollToSection(item.anchor)
  } else if (item.route === '/') {
    // Navigate to home then scroll
    await router.push('/')
    setTimeout(() => scrollToSection(item.anchor), 100)
  } else {
    // Navigate to other page
    router.push(item.route)
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80 // Header height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    
    activeSection.value = sectionId
  }
}

// Track active section on scroll (for home page)
if (typeof window !== 'undefined') {
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, observerOptions)
  
  // Observe sections when DOM is ready
  setTimeout(() => {
    ['home', 'about', 'skills', 'projects', 'contact'].forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  }, 500)
}
</script>

<style lang="scss" scoped>
.header-glass {
  background: rgba(11, 15, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.logo {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-item {
  position: relative;
  font-weight: 500;
  color: #aab1c6;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff3e6c;
  }
  
  &.nav-active {
    color: #ff3e6c;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ff3e6c, transparent);
      animation: slideIn 0.3s ease;
    }
  }
}

.btn-hire {
  background: linear-gradient(135deg, #ff3e6c, #ff914d);
  font-weight: 600;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(255, 62, 108, 0.4);
    transform: translateY(-2px);
  }
}

.mobile-drawer {
  background: #0f1420;
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 70%;
    opacity: 1;
  }
}
</style>

