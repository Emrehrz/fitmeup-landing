<script setup>
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useDarkModeStore } from '@/stores/darkMode';
import { storeToRefs } from 'pinia';

const darkModeStore = useDarkModeStore()
// storeToRefs ile reaktif değerleri al
const { isDarkMode } = storeToRefs(darkModeStore);

// Logoları import et
const lightLogo = new URL('../assets/img/Fitmeuplogo.png', import.meta.url).href;
const darkLogo = new URL('../assets/img/Fitmeuplogo1.png', import.meta.url).href;

</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 ">
    <nav class="flex items-center justify-between p-6 lg:px-8 lg:p-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="p-4 rounded-lg ">
          <img :src="isDarkMode ? darkLogo : lightLogo" alt="FitMeUp Logo" class="logo" />
          <!-- <img src="../assets/img/Fitmeuplogo.png" alt="FitMeUp Logo" class="logo" /> -->
          <!-- <img src="../assets/img/Fitmeuplogo.png" alt="FitMeUp Logo" class="logo" /> -->
        </a>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="https://calendar.app.google/xj7AgzCjhtLunRPD8" target="_blank"
          class="flex gap-2 items-center px-4 py-2 text-sm/6 font-semibold bg-gradient-to-r from-blue-700 to-blue-400 hover:opacity-90 text-white transition-opacity duration-300 rounded-md">
          DEMO GÖRÜŞME ALIN
          <ArrowRightIcon class="size-4" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  width: 12vw;
  /* Varsayılan olarak ekran genişliğinin %12'si */
  max-width: 180px;
  /* Maksimum 180px */
  min-width: 140px;
  /* Minimum 140px */
  height: auto;
  /* En-boy oranını korur */
  object-fit: contain;
  /* Görüntünün bozulmasını önler */
}

/* Çok küçük ekranlar için (örneğin, 390px genişlik) */
@media (max-width: 480px) {
  .logo {
    width: 16vw;
    /* Küçük ekranlarda daha büyük bir oran */
    max-width: 140px;
    /* Maksimum 140px */
    min-width: 95px;
    /* Minimum 120px */
  }
}

/* Küçük ekranlar için (480px - 640px) */
@media (min-width: 481px) and (max-width: 640px) {
  .logo {
    width: 15vw;
    max-width: 150px;
    min-width: 115px;
  }
}

/* Orta ekranlar için (641px - 1024px) */
@media (min-width: 641px) and (max-width: 1024px) {
  .logo {
    width: 12vw;
    max-width: 160px;
    min-width: 110px;
  }
}

/* Büyük ekranlar için (1025px ve üstü) */
@media (min-width: 1025px) {
  .logo {
    width: 5vw;
    max-width: 180px;
    /* Büyük ekranlarda biraz daha büyük */
    min-width: 95px;
  }
}

/* Logo rendering optimization */
.image-rendering-optimized {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
}
</style>