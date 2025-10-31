<template>
  <q-page class="skills-page">
    <div class="page-header section">
      <div class="container">
        <h1 class="page-title">Skills & Technologies</h1>
        <p class="page-subtitle text-secondary">
          My technical skills and expertise levels
        </p>
      </div>
    </div>

    <div class="skills-content section">
      <div class="container">
        <!-- Skills by Category -->
        <div v-for="category in categories" :key="category" class="category-section q-mb-xl">
          <h2 class="category-header">{{ category }}</h2>
          <div class="skills-grid">
            <div
              v-for="(skill, index) in skillsByCategory(category)"
              :key="index"
              class="skill-card glass-card"
            >
              <div class="skill-card-header">
                <div class="skill-info">
                  <h4 class="skill-name">{{ skill.name }}</h4>
                  <q-badge :label="`${skill.level}%`" color="primary" class="skill-badge" />
                </div>
              </div>
              
              <q-linear-progress
                :value="skill.level / 100"
                color="primary"
                track-color="grey-9"
                size="8px"
                rounded
                class="skill-progress"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import skillsData from 'src/data/skills.json'

// Read-only: sort by level descending
const skills = ref([...skillsData].sort((a, b) => b.level - a.level))

// Get unique categories from skills
const categories = [...new Set(skills.value.map(s => s.category))]

const skillsByCategory = (category) => {
  return skills.value.filter(s => s.category === category).sort((a, b) => b.level - a.level)
}
</script>

<style lang="scss" scoped>
.skills-page {
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



.category-section {
  margin-top: 3rem;
}

.category-header {
  font-size: 2rem;
  margin: 0 0 1.5rem;
  color: #ff3e6c;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &::before {
    content: '';
    width: 5px;
    height: 32px;
    background: linear-gradient(180deg, #ff3e6c, #ff914d);
    border-radius: 4px;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.skill-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.skill-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.skill-name {
  font-size: 1.125rem;
  margin: 0;
  color: #e6e9ef;
}

.skill-badge {
  font-size: 0.875rem;
  font-weight: 600;
}

.skill-progress {
  ::v-deep(.q-linear-progress__model) {
    background: linear-gradient(90deg, #ff3e6c, #ff914d);
  }
}
</style>
