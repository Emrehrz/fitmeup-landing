<template>
  <div class="w-full flex flex-col">
    <!-- Üst kısım - Resim sağa yaslanmış -->
    <div class="flex flex-col md:flex-row items-center justify-between px-0 py-6 sm:py-10 md:py-12">
      <!-- Sol taraf (yazı kısmı) -->
      <!-- Alt metin bölümü -->

      <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left mb-6 md:mb-0 sm:pl-8 px-4 sm:px-0 md:pl-16">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold sf-pro-bold">
          Öğrencilerinize kullanıcı dostu bir deneyim sunun
        </h2>
        <p class="text-base sm:text-lg md:text-xl sf-pro">
          her adımda motivasyonlarını artırın!
        </p>
      </div>

      <!-- Sağ taraf (telefonlar görüntüsü - sağa yaslanmış) -->
      <div class="w-full md:w-1/2 lg:w-3/5 flex justify-end overflow-visible">
        <img src="../assets/img/Phones.webp" alt="Fitmeup mobil uygulamasi"
          class="w-[95%] sm:w-[90%] md:w-full lg:w-full h-auto object-contain ml-auto transform hover:translate-y-2 transition-transform duration-500" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Gradient arka plan için daha yumuşak geçiş */
/* .bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradientMove 8s ease infinite;
} */

.sf-pro-bold {
  font-family: 'SF Pro Display Bold', sans-serif;
}

.sf-pro {
  font-family: 'SF Pro Display', sans-serif;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* Telefonlar için gelişmiş hover efekti */
img {
  transition: all 0.5s ease;
  will-change: transform;
}

img:hover {
  transform: translateY(-5px);
  filter: drop-shadow(0 10px 15px rgba(1, 100, 253, 0.3));
}

/* Overflow-visible eklemeleri */
@media (min-width: 768px) {
  .overflow-visible {
    overflow: visible !important;
  }
}

/* Responsive özelleştirmeler için extra medya sorguları */
@media (max-width: 640px) {
  img {
    max-width: 100%;
  }
}
</style>