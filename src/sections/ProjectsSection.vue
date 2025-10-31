<template>
  <section id="projects" class="projects-section section">
    <div class="container">
      <RevealOnScroll>
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle text-secondary">
            Some of my recent work
          </p>
        </div>
      </RevealOnScroll>

      <div class="projects-grid">
        <RevealOnScroll v-for="project in featuredProjects" :key="project.title">
          <div class="project-card glass-card">
            <div class="project-image-wrapper">
              <img
                :src="withBase(project.image)"
                :alt="project.title"
                class="project-image"
                @error="handleImageError"
              />
              <div class="project-overlay">
                <q-btn
                  round
                  unelevated
                  color="primary"
                  icon="mdi-open-in-new"
                  size="md"
                  @click="openLink(project.link)"
                />
                <q-btn
                  round
                  unelevated
                  color="secondary"
                  icon="mdi-code-tags"
                  size="md"
                  @click="openLink(project.codeLink)"
                />
              </div>
            </div>
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc text-secondary">{{ project.desc }}</p>
              
              <div class="project-tags">
                <q-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  size="sm"
                  class="project-tag"
                >
                  {{ tag }}
                </q-chip>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div class="projects-cta">
          <q-btn
            outline
            rounded
            size="lg"
            label="View all projects"
            class="btn-outline"
            icon-right="mdi-arrow-right"
            @click="goToProjectsPage"
          />
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { withBase } from '@/composables/useBasePath'
import RevealOnScroll from 'components/ui/RevealOnScroll.vue'
import projectsData from 'src/data/projects.json'

const router = useRouter()
const projects = ref(projectsData)

const featuredProjects = computed(() => projects.value.slice(0, 4))

const goToProjectsPage = () => {
  router.push('/projects')
}

const openLink = (url) => {
  if (url && url !== '#') {
    window.open(url, '_blank')
  }
}

const handleImageError = (e) => {
  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%230f1420" width="600" height="400"/%3E%3Ctext fill="%23aab1c6" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Image%3C/text%3E%3C/svg%3E'
}
</script>

<style lang="scss" scoped>
.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    .project-overlay {
      opacity: 1;
    }
    
    .project-image {
      transform: scale(1.05);
    }
  }
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #0f1420;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 15, 23, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  margin: 0 0 0.75rem;
  color: #e6e9ef;
}

.project-desc {
  margin: 0 0 1rem;
  line-height: 1.6;
  font-size: 0.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  background: rgba(255, 62, 108, 0.1);
  color: #ff3e6c;
  border: 1px solid rgba(255, 62, 108, 0.3);
  font-size: 0.75rem;
}

.projects-cta {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
</style>
