<template>
  <q-page class="projects-page">
    <div class="page-header section">
      <div class="container">
        <h1 class="page-title">All Projects</h1>
        <p class="page-subtitle text-secondary">
          Explore my work and side projects
        </p>
      </div>
    </div>

    <div class="projects-content section">
      <div class="container">
        <!-- Filter Tags -->
        <div class="filter-section q-mb-xl">
          <h3 class="filter-title">Filter by technology</h3>
          <div class="filter-chips">
            <q-chip
              clickable
              :outline="selectedTag !== 'all'"
              color="primary"
              text-color="white"
              @click="selectedTag = 'all'"
              class="filter-chip"
            >
              All
            </q-chip>
            <q-chip
              v-for="tag in allTags"
              :key="tag"
              clickable
              :outline="selectedTag !== tag"
              color="primary"
              text-color="white"
              @click="selectedTag = tag"
              class="filter-chip"
            >
              {{ tag }}
            </q-chip>
          </div>
        </div>

        <!-- Projects Grid -->
        <transition-group name="list" tag="div" class="projects-grid">
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="project-card glass-card"
          >
            <div class="project-image-wrapper">
              <img
                :src="project.image"
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
                >
                  <q-tooltip>View Live</q-tooltip>
                </q-btn>
                <q-btn
                  round
                  unelevated
                  color="secondary"
                  icon="mdi-code-tags"
                  size="md"
                  @click="openLink(project.codeLink)"
                >
                  <q-tooltip>View Code</q-tooltip>
                </q-btn>
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
                  :class="{ 'tag-active': tag === selectedTag }"
                >
                  {{ tag }}
                </q-chip>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- No Results -->
        <div v-if="filteredProjects.length === 0" class="no-results">
          <q-icon name="mdi-folder-open" size="4rem" color="grey-6" />
          <p class="text-h6 text-secondary q-mt-md">No projects found</p>
          <q-btn
            flat
            label="Clear filter"
            color="primary"
            @click="selectedTag = 'all'"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import projectsData from 'src/data/projects.json'

const projects = ref(projectsData)
const selectedTag = ref('all')

const allTags = computed(() => {
  const tags = new Set()
  projects.value.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const filteredProjects = computed(() => {
  if (selectedTag.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => 
    project.tags.includes(selectedTag.value)
  )
})

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
.projects-page {
  position: relative;
  z-index: 1;
}

.page-header {
  padding-top: 120px;
  padding-bottom: 2rem;
  text-align: center;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin: 0 0 0.5rem;
}

.page-subtitle {
  font-size: 1.25rem;
}

.filter-section {
  text-align: center;
}

.filter-title {
  font-size: 1.25rem;
  margin: 0 0 1.5rem;
  color: #e6e9ef;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.filter-chip {
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:not(.q-chip--outline) {
    background: linear-gradient(135deg, #ff3e6c, #ff914d) !important;
  }
  
  &.q-chip--outline {
    border-color: rgba(255, 62, 108, 0.5);
    
    &:hover {
      background: rgba(255, 62, 108, 0.1);
    }
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
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
  transition: all 0.3s ease;
  
  &.tag-active {
    background: rgba(255, 62, 108, 0.2);
    border-color: rgba(255, 62, 108, 0.6);
    box-shadow: 0 0 8px rgba(255, 62, 108, 0.4);
  }
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

// List transition
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}

.list-move {
  transition: transform 0.4s ease;
}
</style>
