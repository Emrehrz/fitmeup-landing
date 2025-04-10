<template>
  <nav class="w-full flex items-center justify-between px-4 md:px-24 py-4 md:py-0 relative z-10 bg-gren90">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="../assets/img/Logo2.png" alt="Logo" class="h-12 w-auto md:h-[140px] image-rendering-optimized" />
    </div>

    <!-- Hamburger button (mobile) -->
    <button @click="isOpen = !isOpen" class="md:hidden text-white focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Menu and CTA Desktop -->
    <div class="hidden md:flex items-center space-x-8">
      <!-- Menu items -->
      <ul class="flex items-center space-x-8 px-8 text-sm tracking-wide text-white">
        <li><a href="#" class="hover:underline">ÜRÜN HAKKINDA ↗</a></li>
        <li><a href="#" class="hover:underline">HİZMETLER ↗</a></li>
      </ul>

      <!-- CTA (Desktop version) -->
      <a href="#"
        class="p-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[Darkblue] to-[LightBlue] text-[Lighterblue] shadow-lg hover:opacity-90 transition">
        DEMO GÖRÜŞME ALIN ↗
      </a>
    </div>

    <!-- Mobile Menu (when expanded) -->
    <div :class="['md:hidden absolute top-full left-0 w-full bg-black p-4', isOpen ? 'block' : 'hidden']">
      <ul class="flex flex-col space-y-4 text-sm tracking-wide text-white">
        <li><a href="#" class="hover:underline">ÜRÜN HAKKINDA ↗</a></li>
        <li><a href="#" class="hover:underline">HİZMETLER ↗</a></li>
        <li>
          <a href="#"
            class="block text-center w-full p-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[Darkblue] to-[LightBlue] text-[Lighterblue] shadow-lg hover:opacity-90 transition">
            DEMO GÖRÜŞME ALIN ↗
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style>
/* Logo rendering optimization */
.image-rendering-optimized {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
}
</style>