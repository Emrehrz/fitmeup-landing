<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- Arka plan blur elementleri -->
    <div class="absolute inset-0 w-full h-full">
      <!-- Sağ üst blur efekti -->
      <img src="../assets/img/blur.png" alt=""
        class="absolute top-0 right-0 w-[808px] h-[633px] object-cover z-0 rounded-md" />

    </div>

    <!-- Hero içeriği -->
    <div class="container mx-auto px-4 md:px-24 relative z-10 h-full flex flex-col justify-center items-center">
      <!-- Ana başlık -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-2 md:mb-4">
        Uzaktan Koçluk
      </h1>

      <!-- Alt başlık -->
      <p class="text-xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-10">
        süreçlerinizi uçtan uca dijitalleştirin.
      </p>

      <!-- Açıklama metni -->
      <p class="text-center text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 md:mb-16">
        Fitmeup, fitness koçlarının öğrencileri ile olan iletişimini ve süreç takibini
        iyi organize edilmiş bir şekilde koçlarla buluşturan bir uygulamadır.
      </p>

      <!-- Butonlar -->
      <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <a href="#"
          class="px-5 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
          HEMEN ÜCRETSİZ KULLANIN
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <a href="#"
          class="px-5 py-3 rounded-full bg-gradient-to-r from-[Darkblue] to-[LightBlue] text-[Lighterblue] text-blue-100 hover:opacity-90 transition-opacity duration-300">
          DEMO GÖRÜŞME ALIN
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 inline" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero component için herhangi bir script gerekmiyor
</script>

<style scoped>
/* Özel stillemeler buraya eklenebilir */
</style>