<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useDarkMode } from './composables/useDarkMode';

// Dark mode'u değiştirme fonksiyonu
const { isDarkMode, toggleDarkMode } = useDarkMode();

</script>

<template>
  <div
    class="flex flex-col min-h-screen max-w-screen bg-gradient-to-br from-black/10 to-[#0164FD]/50 text-[Black] dark:bg-[Black] dark:text-white">
    <TheNavbar />
    <main class="w-full flex-grow ">
      <RouterView />
    </main>
    <TheFooter />
    <button @click="toggleDarkMode"
      class="fixed bottom-4 right-4 p-3 rounded-full bg-[LightBlue] dark:bg-[Black] text-[Black] dark:text-[LightBlue] shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 z-10"
      aria-label="Dark mode ve light mode arasında geçiş yap">
      <FontAwesomeIcon :icon="isDarkMode ? faSun : faMoon" class="w-5 h-5" />
    </button>
  </div>
</template>

<style>
/* Chrome, Edge ve Safari için */
::-webkit-scrollbar {
  width: 4px;
  /* Daha ince scrollbar için 8px yerine 6px kullanıyoruz */
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Firefox için */
* {
  scrollbar-width: thin;
  /* Firefox'ta "thin" değeri zaten oldukça ince */
  scrollbar-color: #888 #f1f1f1;
}
</style>