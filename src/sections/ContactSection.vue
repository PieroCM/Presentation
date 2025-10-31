<template>
  <section id="contact" class="contact-section section">
    <div class="container">
      <RevealOnScroll>
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle text-secondary">
            Let's work together
          </p>
        </div>
      </RevealOnScroll>

      <div class="contact-grid">
        <!-- Contact Form -->
        <RevealOnScroll>
          <div class="contact-form-card glass-card">
            <h3 class="card-title">Send a Message</h3>
            <q-form @submit="handleSubmit" class="contact-form">
              <q-input
                v-model="form.name"
                label="Your Name"
                filled
                dark
                :rules="[val => !!val || 'Name is required']"
                class="form-input"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" />
                </template>
              </q-input>

              <q-input
                v-model="form.email"
                label="Email Address"
                type="email"
                filled
                dark
                :rules="[
                  val => !!val || 'Email is required',
                  val => /.+@.+\..+/.test(val) || 'Email must be valid'
                ]"
                class="form-input"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-email" />
                </template>
              </q-input>

              <q-input
                v-model="form.subject"
                label="Subject"
                filled
                dark
                :rules="[val => !!val || 'Subject is required']"
                class="form-input"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-text-subject" />
                </template>
              </q-input>

              <q-input
                v-model="form.message"
                label="Message"
                type="textarea"
                filled
                dark
                rows="5"
                :rules="[val => !!val || 'Message is required']"
                class="form-input"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-message-text" />
                </template>
              </q-input>

              <q-btn
                type="submit"
                unelevated
                rounded
                size="lg"
                label="Send Message"
                color="primary"
                class="submit-btn"
                icon-right="mdi-send"
              />
            </q-form>
          </div>
        </RevealOnScroll>

        <!-- Contact Info -->
        <RevealOnScroll>
          <div class="contact-info-card glass-card">
            <h3 class="card-title">Contact Information</h3>
            
            <div class="info-list">
              <div class="info-item" v-for="item in contactInfo" :key="item.label">
                <div class="info-icon">
                  <q-icon :name="item.icon" size="1.5rem" color="primary" />
                </div>
                <div class="info-content">
                  <div class="info-label text-secondary">{{ item.label }}</div>
                  <div class="info-value">{{ item.value }}</div>
                </div>
              </div>
            </div>

            <div class="social-links">
              <q-btn
                v-for="social in socialLinks"
                :key="social.label"
                round
                unelevated
                :icon="social.icon"
                :href="social.url"
                target="_blank"
                class="social-btn"
                size="md"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import RevealOnScroll from 'components/ui/RevealOnScroll.vue'

const $q = useQuasar()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactInfo = [
  { icon: 'mdi-email', label: 'Email', value: 'pierojesus_20@hotmail.com' },
  { icon: 'mdi-phone', label: 'Phone', value: '974271363' },
  { icon: 'mdi-map-marker', label: 'Location', value: 'Lima, Perú' },
]

const socialLinks = [
  { icon: 'mdi-github', label: 'GitHub', url: 'https://github.com/PieroCM' },
  { icon: 'mdi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/piero-jesus-calderón-mendez-50b73720a/' },
]

const handleSubmit = () => {
  $q.notify({
    type: 'positive',
    message: 'Message sent successfully! (Demo)',
    caption: 'Thank you for reaching out. I\'ll get back to you soon.',
    position: 'top',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }]
  })
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style lang="scss" scoped>
.contact-section {
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}

.contact-form-card, .contact-info-card {
  padding: 2.5rem;
  
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
}

.card-title {
  font-size: 1.5rem;
  margin: 0 0 2rem;
  color: #e6e9ef;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-input {
  ::v-deep(.q-field__control) {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    
    &:hover {
      border-color: rgba(255, 62, 108, 0.3);
    }
  }
  
  ::v-deep(.q-field__native) {
    color: #e6e9ef;
  }
  
  ::v-deep(.q-field__label) {
    color: #aab1c6;
  }
}

.submit-btn {
  background: linear-gradient(135deg, #ff3e6c, #ff914d);
  font-weight: 600;
  margin-top: 0.5rem;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(255, 62, 108, 0.4);
    transform: translateY(-2px);
  }
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.info-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.info-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 62, 108, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
}

.info-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.info-value {
  font-size: 1.125rem;
  color: #e6e9ef;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-btn {
  background: rgba(255, 62, 108, 0.1);
  color: #ff3e6c;
  border: 1px solid rgba(255, 62, 108, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #ff3e6c, #ff914d);
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 62, 108, 0.4);
  }
}
</style>
