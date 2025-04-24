<template>
  <div class="w-full flex flex-col bg-gradient-to-br from-black/10 to-[#0164FD]/50">
    <!-- Üst kısım - Resim sağa yaslanmış -->
    <div class="flex flex-col md:flex-row items-center justify-between px-0 py-6 sm:py-10 md:py-12">
      <!-- Sol taraf (yazı kısmı) -->
      <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left mb-6 md:mb-0 sm:pl-8 px-4 sm:px-0 md:pl-16 ">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
          Öğrencilerinize kullanıcı dostu bir deneyim sunun
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-white/80 md:pr-6">
          Her adımda motivasyonlarını artırın ve eğitim sürecini kolaylaştırın!
        </p>
      </div>

      <!-- Sağ taraf (telefonlar görüntüsü - sağa yaslanmış) -->
      <div class="w-full md:w-1/2 lg:w-3/5 flex justify-end overflow-visible">
        <img src="../assets/img/Phones.webp" alt="Fitmeup mobil uygulamasi"
          class="w-[95%] sm:w-[90%] md:w-full lg:w-full h-auto object-contain ml-auto transform hover:translate-y-2 transition-transform duration-500" />
      </div>
    </div>

    <!-- Alt kısım - Büyütülmüş telefon ve açıklama -->
    <!-- <div
      class="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-24 lg:gap-32 pt-8 sm:py-12 md:py-16 lg:py-0 px-4 sm:px-8 md:px-16 lg:px-24">
      <div class="w-full sm:w-1/2 md:w-2/5 flex justify-center md:justify-end relative mb-0">
        <img src="../assets/img/Login1.webp" alt="Fitmeup mobil uygulamasi"
          class="w-2/3 sm:w-3/4 md:w-4/5 h-auto object-contain transform hover:translate-y-2 transition-transform duration-500" />
      </div>

      <div
        class="flex flex-col items-center md:items-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center md:text-left">
        <p
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-br from-[Lightblue] via-white to-[Darkblue] bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight sm:leading-snug">
          fitmeup altyapısıyla
          tamamen size ait olan
          koçluk uygulamanızı oluşturun
        </p>

        <a href="#"
          class="mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all text-base sm:text-lg shadow-lg hover:shadow-xl">
          HEMEN KATIL
        </a>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
/* Gradient arka plan için daha yumuşak geçiş */
/* .bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradientMove 8s ease infinite;
} */

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