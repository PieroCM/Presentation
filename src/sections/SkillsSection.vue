<template>
  <section id="skills" class="skills-section section">
    <div class="container">
      <RevealOnScroll>
        <div class="section-header">
          <h2 class="section-title">Skills & Expertise</h2>
          <p class="section-subtitle text-secondary">
            Technologies I work with
          </p>
        </div>
      </RevealOnScroll>

      <div class="skills-grid">
        <RevealOnScroll v-for="category in categories" :key="category">
          <div class="category-card glass-card">
            <h3 class="category-title">{{ category }}</h3>
            <div class="skills-list">
              <div
                v-for="skill in skillsByCategory(category)"
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percent">{{ skill.level }}%</span>
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
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div class="skills-cta">
          <q-btn
            outline
            rounded
            size="lg"
            label="View all skills"
            class="btn-outline"
            icon-right="mdi-arrow-right"
            @click="goToSkillsPage"
          />
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import RevealOnScroll from 'components/ui/RevealOnScroll.vue'
import skillsData from 'src/data/skills.json'

const router = useRouter()
const skills = ref(skillsData)

const categories = computed(() => {
  return [...new Set(skills.value.map(s => s.category))]
})

const skillsByCategory = (category) => {
  return skills.value.filter(s => s.category === category).slice(0, 4)
}

const goToSkillsPage = () => {
  router.push('/skills')
}
</script>

<style lang="scss" scoped>
.skills-section {
  background: linear-gradient(180deg, rgba(15, 20, 32, 0.5), transparent);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.category-card {
  padding: 2rem;
}

.category-title {
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
  color: #ff3e6c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(180deg, #ff3e6c, #ff914d);
    border-radius: 4px;
  }
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 500;
  color: #e6e9ef;
  font-size: 1rem;
}

.skill-percent {
  font-size: 0.875rem;
  color: #aab1c6;
  font-weight: 600;
}

.skill-progress {
  border-radius: 4px;
  
  ::v-deep(.q-linear-progress__model) {
    background: linear-gradient(90deg, #ff3e6c, #ff914d);
  }
}

.skills-cta {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
</style>
