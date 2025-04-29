<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Sections list
const sections = [
  { name: 'Biz', id: 'hero-section' },
  { name: 'Web', id: 'app-section' },
  { name: 'Mobil', id: 'phone-grid' },
  { name: 'Altyapı', id: 'enterprise-section' },
];

// Active section state
const activeSection = ref('hero-section');

// Scroll to section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// IntersectionObserver to detect visible section
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { root: null, threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  // Observe each section
  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) observer?.observe(element);
  });
});

onUnmounted(() => {
  // Cleanup observer
  if (observer) {
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer?.unobserve(element);
    });
    observer = null;
  }
});
</script>

<template>
  <nav
    class="fixed top-0 right-0 h-screen w-16 sm:w-20 md:w-24 flex flex-col items-center justify-center py-8 bg-transparent z-50">
    <!-- Navigation Links -->
    <ul class="flex flex-col items-center space-y-6 sm:space-y-8">
      <li v-for="section in sections" :key="section.name" class="relative flex items-center">
        <!-- Link -->
        <a href="#" @click.prevent="scrollToSection(section.id)"
          class="relative flex gap-12 items-center text-xs sm:text-base font-semibold tracking-wide transition-all duration-300"
          :class="{
            'text-[#0164FD] dark:text-[#D5E5FF]': activeSection !== section.id,
            'text-white dark:text-white font-bold':
              activeSection === section.id,
          }">
          <!-- Text -->
          <span class="transform -rotate-90 whitespace-nowrap mr-0.5">{{ section.name }}</span>
          <!-- Dot -->
          <span
            class="absolute -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-[#0164FD] dark:border-[#D5E5FF] transition-all duration-300"
            :class="{
              'bg-[#0164FD] dark:bg-[#D5E5FF]': activeSection === section.id,
              'bg-transparent': activeSection !== section.id,
            }"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>



<style scoped>
/* Smooth transitions for hover and active states */
nav {
  transition: background-color 0.3s ease;
}

a:hover {
  color: #ffffff;
}

/* Rotate text and logo for vertical alignment */
.transform {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>