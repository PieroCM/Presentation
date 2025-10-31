<template>
  <section id="home" class="hero-section section">
    <div class="container">
      <div class="hero-grid">
        <!-- Left: Text Content -->
        <div class="hero-content">
          <div class="hero-text reveal">
            <h1 class="hero-title">
              Hello, I'm <span class="text-gradient">Piero Calderon</span>
            </h1>
            <h2 class="hero-subtitle">Junior Software Developer & ML-minded Data Analyst</h2>
            <p class="hero-description text-secondary">
               Soy Piero: construyo interfaces en Vue/Quasar, APIs en .NET y conecto todo con Postgres. 
               Me gusta llevar IA a productos reales (XGBoost, PyTorch) y bajar a tierra ideas de robótica con Raspberry Pi. 
               He trabajado en PUSAQ (UGEL Arequipa), el sitio de IGD Group y el proyecto “Tony” Glove (IEMTRONICS 2024). 
               Estudio en ESAN, itero rápido, documento bien y disfruto café, gaming y explorar museos en Lima.
            </p>
            
            <div class="hero-actions">
              <q-btn
                unelevated
                rounded
                size="lg"
                label="Get a project"
                class="btn-primary"
                icon-right="mdi-arrow-right"
                @click="scrollToProjects"
              />
              <q-btn
                outline
                rounded
                size="lg"
                label="My resume"
                class="btn-outline"
                icon-right="mdi-download"
                @click="downloadResume"
              />
            </div>
          </div>
        </div>

        <!-- Right: Avatar with Glow -->
        <div class="hero-avatar-container reveal">
          <div class="avatar-wrapper">
            <div class="glow-ring glow-ring-1"></div>
            <div class="glow-ring glow-ring-2"></div>
            <div class="glow-ring glow-ring-3"></div>
            <img
              src="/avatar.jpg"
              alt="Piero Calderón"
              class="avatar-image"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="stats-container reveal">
        <div class="stat-card glass-card" v-for="stat in stats" :key="stat.label">
          <q-icon :name="stat.icon" size="2rem" color="primary" />
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label text-secondary">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const stats = [
  { icon: 'mdi-folder-multiple', value: '4', label: 'Projects' },
  { icon: 'mdi-account-group', value: '3', label: 'Clients' },
  { icon: 'mdi-clock-outline', value: '2 yrs', label: 'Experience' },
]

const scrollToProjects = () => {
  const element = document.getElementById('projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleImageError = (e) => {
  // Fallback placeholder
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%230f1420" width="400" height="400"/%3E%3Ctext fill="%23aab1c6" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAR%3C/text%3E%3C/svg%3E'
}

// Reveal animation on mount
onMounted(() => {
  const reveals = document.querySelectorAll('.reveal')
  reveals.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('is-visible')
    }, index * 150)
  })
})
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
  position: relative;
  z-index: 1;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin: 0 0 0.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  color: #aab1c6;
  font-weight: 500;
  margin: 0 0 1rem;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  max-width: 540px;
  
  @media (max-width: 960px) {
    margin: 0 auto;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    
    .q-btn {
      width: 100%;
    }
  }
}

.hero-avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 960px) {
    order: -1;
  }
}

.avatar-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
  
  @media (max-width: 600px) {
    width: 280px;
    height: 280px;
  }
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 62, 108, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.glow-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  opacity: 0.6;
  
  &.glow-ring-1 {
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-color: #ff3e6c;
    animation: glowPulse 3s ease-in-out infinite;
  }
  
  &.glow-ring-2 {
    top: -25px;
    left: -25px;
    right: -25px;
    bottom: -25px;
    border-color: #ff914d;
    animation: glowPulse 3s ease-in-out infinite 0.5s;
  }
  
  &.glow-ring-3 {
    top: -40px;
    left: -40px;
    right: -40px;
    bottom: -40px;
    border-color: #ff3e6c;
    opacity: 0.3;
    animation: glowPulse 3s ease-in-out infinite 1s;
  }
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #e6e9ef;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
