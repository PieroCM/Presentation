<template>
  <q-page class="contact-page">
    <div class="page-header section">
      <div class="container">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle text-secondary">
          Let's start a conversation
        </p>
      </div>
    </div>

    <div class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
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
                v-model="form.phone"
                label="Phone Number (optional)"
                filled
                dark
                class="form-input"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-phone" />
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
                rows="6"
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

          <!-- Contact Info & Map -->
          <div class="contact-sidebar">
            <div class="contact-info-card glass-card q-mb-lg">
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
            </div>

            <div class="social-card glass-card">
              <h3 class="card-title">Follow Me</h3>
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
                  size="lg"
                >
                  <q-tooltip>{{ social.label }}</q-tooltip>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const contactInfo = [
  { icon: 'mdi-email', label: 'Email', value: 'pierojesus_20@hotmail.com' },
  { icon: 'mdi-phone', label: 'Phone', value: '974271363' },
  { icon: 'mdi-map-marker', label: 'Location', value: 'Lima, Perú' },
  { icon: 'mdi-clock-outline', label: 'Availability', value: 'Lun - Vie, 9:00 AM - 6:00 PM' },
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
    phone: '',
    subject: '',
    message: ''
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}

.contact-form-card, .contact-info-card, .social-card {
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
