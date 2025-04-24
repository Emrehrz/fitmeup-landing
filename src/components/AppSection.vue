<script>
export default {
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    }
  }
}
</script>

<template>
  <div class="relative w-full overflow-hidden min-h-screen">
    <!-- Arka plan halatlar (straps) -->
    <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-[#555b60]/90 to-[Black]">
      <img v-if="isMobile" src="../assets/img/Rope2.webp" alt="Arka plan halatlar"
        class="w-full h-full object-cover md:object-cover opacity-85" />
      <img v-else src="../assets/img/Rope-1.webp" alt="Arka plan halatlar"
        class="w-full h-full object-cover md:object-cover opacity-85" />
    </div>

    <!-- Siyah şeritler (Yazı kısmının üstünde) -->
    <div class="absolute w-full h-full overflow-hidden z-0">
      <img src="../assets/img/Blur.webp" alt="Arka plan halatlar" class="w-full h-full object-cover opacity-70" />
    </div>

    <!-- İçerik container -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col min-h-screen">
      <!-- Türkçe başlık -->
      <div class="text-center mb-6 md:mb-10">
        <h2 class="text-white text-xl md:text-2xl lg:text-3xl font-medium">
          Tüm koçluk süreçlerinizi tek bir noktadan yönetin.
        </h2>

        <!-- İkonlar ve Whatsapp ile birlikte kullanım metni -->
        <div class="flex items-center justify-center mt-4 space-x-3">
          <!-- <div class="flex items-center space-x-2">
            <div class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path
                  d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
            </div>
            <div class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </div>
            <div class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path
                  d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </div>
            <div class="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path
                  d="M8,12H16V14H8V12M10,16H14V18H10V16M8,8H16V10H8V8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
              </svg>
            </div>
          </div> -->
          <span class="text-white text-sm font-semibold">
            <div class="text-green-600">Whatsapp</div> 'ı fitmeup ile birlikte kullanın.
          </span>
        </div>
      </div>

      <!-- Laptop mockup -->
      <div class="flex-grow flex justify-center items-center perspective-1000 my-4">
        <div class="w-full max-w-4xl transform rotate-x-5 laptop-animation">
          <img src="../assets/img/Laptop.webp" alt="Laptop FitMeUp Uygulaması" class="w-full" />
        </div>
      </div>

      <!-- Alt metin bölümü -->
      <div class="text-center mt-4 mb-6 text-white">
        <h3 class="text-lg md:text-xl lg:text-2xl">
          Öğrencilerinize kullanıcı dostu bir deneyim sunun,
        </h3>
        <p class="text-base md:text-lg">
          her adımda motivasyonlarını artırın!
        </p>
      </div>
    </div>

    <!-- Siyah şeritler (Laptop kısmının altında) -->
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