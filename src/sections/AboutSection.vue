<template>
  <section id="about" class="about-section section">
    <div class="container">
      <RevealOnScroll>
        <div class="section-header">
          <h2 class="section-title">About me</h2>
          <p class="section-subtitle text-secondary">
            Get to know me better
          </p>
        </div>
      </RevealOnScroll>

      <div class="about-grid">
        <!-- Bio -->
        <RevealOnScroll>
          <div class="bio-card glass-card">
            <h3 class="card-title">Who I Am</h3>
            <div class="bio-content">
              <p>
                Soy desarrollador de software por curiosidad: me gustan los microservicios, entender el flujo end-to-end de la web y diseñar backend y frontend. También me apasiona la IA para mejorar la calidad de productos web y móviles.
              </p>
              <p>
                Cuando no codeo, juego videojuegos, practico idiomas (inglés, japonés, portugués), camino por Lima y visito museos. Me encanta aprender constantemente y experimentar con nuevas tecnologías que pueda aplicar en proyectos reales.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <!-- Hobbies -->
        <RevealOnScroll>
          <div class="hobbies-card glass-card">
            <h3 class="card-title">Hobbies & Interests</h3>
            <div class="hobbies-grid">
              <q-chip
                v-for="hobby in hobbies"
                :key="hobby.label"
                :icon="hobby.icon"
                class="hobby-chip"
                color="primary"
                text-color="white"
                size="lg"
              >
                {{ hobby.label }}
              </q-chip>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <!-- Experience Timeline -->
      <RevealOnScroll>
        <div class="timeline-card glass-card">
          <h3 class="card-title">Experience & Education</h3>
          <div class="timeline">
            <div
              v-for="(item, index) in timeline"
              :key="index"
              class="timeline-item"
            >
              <div class="timeline-marker">
                <q-icon :name="item.icon" size="1.5rem" />
              </div>
              <div class="timeline-content">
                <div class="timeline-date">{{ item.date }}</div>
                <h4 class="timeline-title">{{ item.title }}</h4>
                <div class="timeline-subtitle text-secondary">{{ item.subtitle }}</div>
                <p class="timeline-description">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup>
import RevealOnScroll from 'components/ui/RevealOnScroll.vue'

const hobbies = [
  { icon: 'mdi-hiking', label: 'Caminatas' },
  { icon: 'mdi-coffee', label: 'Coffee' },
  { icon: 'mdi-music', label: 'Music' },
  { icon: 'mdi-gamepad-variant', label: 'Gaming' },
  { icon: 'mdi-chess-knight', label: 'Ajedrez' },
  { icon: 'mdi-robot', label: 'Robótica' },
  { icon: 'mdi-book-open-variant', label: 'Leer libros' },
]

const timeline = [
  {
    icon: 'mdi-school',
    date: 'Ago 2022',
    title: 'Estudiante',
    subtitle: 'Universidad ESAN',
    description: 'Ingreso por Beca a Ingeniería de Sistemas (2022-2). Enfoque en desarrollo web, bases de datos y machine learning.'
  },
  {
    icon: 'mdi-briefcase',
    date: 'Ago 2024',
    title: 'Freelance - Proyectos Web',
    subtitle: 'Inicio de trabajos freelance',
    description: 'Aplicación de conocimientos de la carrera en proyectos reales: desarrollo full-stack, integración de APIs y bases de datos.'
  },
  {
    icon: 'mdi-briefcase',
    date: 'Ago 2025 - Presente',
    title: 'Full Stack & Analyst',
    subtitle: 'En progreso',
    description: 'Mejora de habilidades con objetivo de Senior Developer y fundar empresa de software. Especialización en ML aplicado a web y móvil.'
  },
]
</script>

<style lang="scss" scoped>
.about-section {
  background: linear-gradient(180deg, transparent, rgba(15, 20, 32, 0.5));
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0 0 0.5rem;
}

.section-subtitle {
  font-size: 1.125rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}

.bio-card, .hobbies-card, .timeline-card {
  padding: 2.5rem;
  
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
}

.card-title {
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
  color: #e6e9ef;
}

.bio-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  p {
    margin: 0;
    line-height: 1.7;
    color: #aab1c6;
  }
}

.hobbies-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hobby-chip {
  background: linear-gradient(135deg, #ff3e6c, #ff914d) !important;
  font-weight: 500;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  
  @media (max-width: 600px) {
    gap: 1rem;
  }
}

.timeline-marker {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 62, 108, 0.1);
  border: 2px solid #ff3e6c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff3e6c;
  flex-shrink: 0;
}

.timeline-content {
  padding-bottom: 0.5rem;
}

.timeline-date {
  font-size: 0.875rem;
  color: #ff3e6c;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timeline-title {
  font-size: 1.25rem;
  margin: 0 0 0.25rem;
  color: #e6e9ef;
}

.timeline-subtitle {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.timeline-description {
  margin: 0;
  line-height: 1.6;
  color: #aab1c6;
}
</style>
