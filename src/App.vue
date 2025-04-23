<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen max-w-screen bg-[Black]">
    <TheNavbar />
    <main class="w-full flex-grow ">
      <RouterView />
    </main>
    <TheFooter />
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