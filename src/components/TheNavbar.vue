<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'ÜRÜN HAKKINDA ', href: '#' },
  { name: 'HİZMETLER', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 ">
    <nav class="flex items-center justify-between p-6 lg:px-8 lg:p-8" aria-label="Global">
      <div class="flex lg:flex-1">

        <a href="#" class="p-4 rounded-lg bg-[#232323]">
          <img src="../assets/img/fitmeuplogo.webp" alt="FitMeUp Logo" class="logo" />
        </a>
      </div>
      <!-- <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div> -->
      <!-- <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="flex gap-2 text-sm/6 font-semibold">
          {{ item.name }}
          <ArrowUpRightIcon class="size-4" aria-hidden="true" />
        </a>
      </div> -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="https://calendar.app.google/xj7AgzCjhtLunRPD8" target="_blank"
          class="flex gap-2 items-center px-4 py-2 text-sm/6 font-semibold bg-gradient-to-r from-blue-700 to-blue-400 hover:opacity-90 text-white transition-opacity duration-300 rounded-md">
          DEMO GÖRÜŞME ALIN
          <ArrowRightIcon class="size-4" />
        </a>
      </div>
    </nav>
    <!-- <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br bg-white text-[Black] dark:bg-[Black] dark:text-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <button type="button" class="ml-auto rounded-md p-2.5" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-[LightBlue] dark:divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50">
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <a href="#"
                class="flex gap-2 items-center px-4 py-2 text-sm/6 font-semibold bg-gradient-to-r from-blue-700 to-blue-400 hover:opacity-90 transition-opacity duration-300 rounded-md text-white">
                DEMO GÖRÜŞME ALIN
                <ArrowRightIcon class="size-4" />
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog> -->
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