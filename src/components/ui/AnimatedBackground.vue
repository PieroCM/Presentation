<template>
  <div class="animated-background" ref="bgRef">
    <div class="gradient-layer"></div>
    <div class="shapes-layer">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bgRef = ref(null)
let parallaxX = 0
let parallaxY = 0

const handleMouseMove = (e) => {
  if (!bgRef.value) return
  
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  
  // Calculate parallax offset (subtle movement)
  parallaxX = (clientX / innerWidth - 0.5) * 20
  parallaxY = (clientY / innerHeight - 0.5) * 20
  
  bgRef.value.style.setProperty('--parallax-x', `${parallaxX}px`)
  bgRef.value.style.setProperty('--parallax-y', `${parallaxY}px`)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style lang="scss" scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  --parallax-x: 0px;
  --parallax-y: 0px;
}

.gradient-layer {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 62, 108, 0.15) 0%,
    transparent 50%
  ),
  radial-gradient(
    ellipse at bottom right,
    rgba(255, 145, 77, 0.12) 0%,
    transparent 50%
  ),
  radial-gradient(
    ellipse at center,
    rgba(0, 217, 255, 0.08) 0%,
    transparent 70%
  );
  background-size: 100% 100%;
  animation: bgShift 20s ease-in-out infinite;
  transform: translate(var(--parallax-x), var(--parallax-y));
  transition: transform 0.3s ease-out;
}

.shapes-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(var(--parallax-x), var(--parallax-y));
  transition: transform 0.5s ease-out;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  animation: floatSlow 25s ease-in-out infinite;
}

.shape-1 {
  top: 20%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 62, 108, 0.4), transparent);
  animation-delay: 0s;
}

.shape-2 {
  top: 60%;
  right: 15%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 145, 77, 0.3), transparent);
  animation-delay: -10s;
}

.shape-3 {
  bottom: 10%;
  left: 50%;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.25), transparent);
  animation-delay: -5s;
}

@media (max-width: 768px) {
  .shape {
    filter: blur(40px);
  }
  
  .shape-1, .shape-2, .shape-3 {
    width: 200px;
    height: 200px;
  }
}
</style>
