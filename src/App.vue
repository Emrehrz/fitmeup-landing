<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[Black]">
    <TheNavbar />
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>