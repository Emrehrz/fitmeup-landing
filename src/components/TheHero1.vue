<template>
  <section class="relative isolate px-6 lg:px-8 overflow-hidden ">
    <!-- Arka plan blur elementleri -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>

    <!-- Ana içerik bölümü -->
    <div class="mx-auto max-w-5xl py-32 sm:py-40 lg:py-48">
      <div class="text-center">
        <!-- Ana başlık -->
        <h1 class="text-5xl font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
          Uzaktan Koçluk
        </h1>

        <!-- Alt başlık -->
        <p class="mt-4 text-2xl font-light text-balance tracking-wide text-white sm:text-3xl lg:text-4xl">
          süreçlerinizi uçtan uca dijitalleştirin.
        </p>

        <!-- Açıklama metni -->
        <p class="mt-8 text-base text-pretty text-gray-300 mx-auto max-w-2xl sm:text-lg">
          Fitmeup, fitness koçlarının öğrencileri ile olan iletişimini ve süreç takibini
          iyi organize edilmiş bir şekilde koçlarla buluşturan bir uygulamadır.
        </p>

        <!-- Butonlar -->
        <div class="mt-12 flex items-center justify-center gap-x-6 flex-col sm:flex-row space-y-4 sm:space-y-0">
          <a href="#"
            class="rounded-full px-8 py-3.5 text-sm font-medium text-white border border-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
            HEMEN ÜCRETSİZ KULLANIN
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a href="#"
            class="rounded-full px-8 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-blue-700 to-blue-400 hover:opacity-90 transition-opacity duration-300 flex items-center">
            DEMO GÖRÜŞME ALIN
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Alt blur efekti -->
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true">
      <div
        class="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-700 to-blue-500 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero component için herhangi bir script gerekmiyor
</script>

<style scoped>
/* Özel stillemeler gerekiyorsa buraya ekleyebilirsiniz */
</style>