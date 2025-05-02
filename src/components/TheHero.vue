<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="relative isolate px-4 pt-12 sm:px-6 md:px-8 md:pt-0 text-[Black] dark:text-gray-200">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[Darkblue] to-gray-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-1/2 w-[36rem] sm:w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-900 to-gray-500 opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

    <div class="mx-auto max-w-3xl py-28 lg:py-36 px-4 sm:px-0 text-center">
      <h1 class="hero-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-1">
        Uzaktan Koçluk
      </h1>

      <p class="hero-content text-lg sm:text-xl md:text-2xl font-light mb-6">
        süreçlerinizi uçtan uca dijitalleştirin.
      </p>

      <p class="inter-text mt-6 text-lg font-medium text-pretty  sm:text-xl/8"> fitmeup, fitness
        koçlarının
        öğrencileri ile olan iletişimini ve süreç takibini
        iyi organize edilmiş bir şekilde koçlarla buluşturan bir uygulamadır.</p>

      <div class="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="https://calendar.app.google/xj7AgzCjhtLunRPD8" target="_blank"
          class="inter-text rounded-full border dark:text-white border-[Black] hover:bg-[Black] hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition-colors px-5 py-3 text-sm font-semibold ">
          HEMEN ÜCRETSİZ KULLANIN
        </a>

        <a href="https://calendar.app.google/xj7AgzCjhtLunRPD8" target="_blank"
          class="inter-text flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-gradient-to-r from-blue-700 to-blue-400 hover:opacity-90 rounded-md text-white">
          DEMO GÖRÜŞME ALIN
          <ArrowRightIcon class="w-4 h-4" />
        </a>
      </div>
    </div>

    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true">
      <div
        class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-gray-500 to-[Darkblue] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true">
      <div
        class="relative left-1/2 w-[36rem] sm:w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-gray-500 to-blue-900 opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
  </div>
</template>

<style scoped>
.hero-title {
  font-family: 'SF Pro Display Italic', sans-serif;
}

.hero-content {
  font-family: 'SF Pro Display', sans-serif;
}

.inter-text {
  font-family: 'Inter', sans-serif;
}
</style>