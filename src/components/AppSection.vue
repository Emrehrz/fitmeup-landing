<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAppleWhole, faClipboardCheck, faDumbbell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <div class="relative w-full overflow-hidden min-h-screen">
    <!-- Background ropes (straps) -->
    <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-[#555b60]/90 to-[Black]">
      <img v-if="isMobile" src="../assets/img/Rope2.webp" alt="Arka plan halatlar"
        class="w-full h-full object-cover opacity-85" />
      <img v-else src="../assets/img/Rope-1.webp" alt="Arka plan halatlar"
        class="w-full h-full object-cover opacity-85" />
    </div>

    <!-- Black stripes (above text area) -->
    <div class="absolute w-full h-full overflow-hidden z-0">
      <img src="../assets/img/Blur.webp" alt="Arka plan halatlar" class="w-full h-full object-cover opacity-70" />
    </div>

    <!-- Content container -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 md:py-20 flex flex-col min-h-screen">
      <!-- Title -->
      <div class="text-center mb-6 md:mb-10">
        <h2 class="text-white text-xl md:text-2xl lg:text-3xl font-medium px-2">
          Tüm koçluk süreçlerinizi tek bir noktadan yönetin.
        </h2>

        <!-- Icons and Whatsapp usage text -->
        <div class="flex flex-col sm:flex-row items-center justify-center mt-4 space-y-3 sm:space-y-0 sm:space-x-3">
          <!-- <div class="flex items-center space-x-4 sm:space-x-3 text-white">
            <FontAwesomeIcon :icon="faAppleWhole" />
            <FontAwesomeIcon :icon="faSearch" />
            <FontAwesomeIcon :icon="faDumbbell" />
            <FontAwesomeIcon :icon="faClipboardCheck" />
          </div> -->
          <span class="text-white text-sm sm:text-lg font-semibold px-2 mt-2 sm:mt-0">
            <FontAwesomeIcon :icon="faWhatsapp" class="text-green-400 my-auto mr-1" />
            <span class="rounded-lg text-green-400 font-bold">Whatsapp</span>'ı
            <span class="text-[Lightblue]">fitmeup</span>
            ile birlikte kullanın.
          </span>
        </div>
      </div>

      <!-- Laptop mockup -->
      <div class="flex-grow flex justify-center items-center perspective-1000">
        <div class="w-full max-w-4xl transform rotate-x-5 laptop-animation">
          <img src="../assets/img/Laptop.webp" alt="Laptop FitMeUp Uygulaması" class="w-full" />
        </div>
      </div>

    </div>

    <!-- Black stripes (below laptop section) -->
    <div class="absolute bottom-0 w-full overflow-hidden z-10">
      <img src="../assets/img/Blur.webp" alt="Arka plan halatlar" class="w-full h-auto object-cover opacity-85" />
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.rotate-x-5 {
  transform: rotateX(5deg);
}

.laptop-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: rotateX(5deg) translateY(0px);
  }

  50% {
    transform: rotateX(5deg) translateY(-15px);
  }

  100% {
    transform: rotateX(5deg) translateY(0px);
  }
}

@media (max-width: 768px) {
  .laptop-animation {
    animation: float-mobile 6s ease-in-out infinite;
  }

  @keyframes float-mobile {
    0% {
      transform: rotateX(3deg) translateY(0px);
    }

    50% {
      transform: rotateX(3deg) translateY(-10px);
    }

    100% {
      transform: rotateX(3deg) translateY(0px);
    }
  }
}
</style>