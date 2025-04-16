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