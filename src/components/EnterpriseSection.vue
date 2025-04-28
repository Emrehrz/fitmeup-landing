<template>
  <div
    class="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-24 lg:gap-32 pt-8 sm:py-12 md:py-16 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-24">
    <!-- Phone container -->
    <div class="w-full sm:w-1/2 md:w-2/5 flex justify-center md:justify-end relative mb-0">
      <div
        class="relative w-2/3 sm:w-3/4 md:w-4/5 h-auto transform hover:translate-y-2 transition-transform duration-500">
        <!-- Telefon resmi (arka plan olarak) -->
        <img src="../assets/img/Login1.webp" alt="Fitmeup mobil uygulamasi" class="w-full h-auto object-contain" />
        <!-- Video -->
        <video autoplay muted loop playsinline class="absolute object-cover rounded-3xl video-size">
          <source src="../assets/video/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <!-- Text content -->
    <div
      class="flex flex-col items-center md:items-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg inter-text text-center md:text-left">
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
  </div>
</template>

<style scoped>
/* Telefon kapsayıcısı için hover efekti */
.relative {
  transition: all 0.5s ease;
  will-change: transform;
}

.inter-text {
  font-family: 'Inter', sans-serif;
}

.relative:hover {
  transform: translateY(-5px);
  filter: drop-shadow(0 10px 15px rgba(1, 100, 253, 0.3));
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

/* Overflow-visible eklemeleri */
@media (min-width: 768px) {
  .overflow-visible {
    overflow: visible !important;
  }
}

/* Videoyu boyutlandırma */
.video-size {
  /* Telefon ekranının resme göre oranı: %22.7 genişlik, %31.4 yükseklik */
  /* Ancak, parent div'in değişken genişliklerini hesaba katmak için vw ve oran kullanıyoruz */
  width: calc(22.7% * (2 / 3));
  /* Küçük ekranlar için w-2/3 oranı */
  height: calc(31.4% * (2 / 3));
}

/* Küçük ekranlar için (w-2/3) */
@media (max-width: 640px) {
  .relative {
    max-width: 100%;
  }

  .video-size {
    width: calc(63.6% * (2 / 3));
    /* w-2/3 oranına göre */
    height: calc(101.5% * (2 / 3));
    top: 1.7% !important;
    right: 12% !important;
  }
}

/* Orta ekranlar için (sm:w-3/4) */
@media (min-width: 641px) and (max-width: 1024px) {
  .video-size {
    width: calc(56.7% * (3 / 4));
    /* sm:w-3/4 oranına göre */
    height: calc(90% * (3 / 4));
    top: 1.8% !important;
    right: 12% !important;
  }
}

/* Büyük ekranlar için (md:w-4/5) */
@media (min-width: 1025px) {
  .video-size {
    width: calc(53% * (4 / 5));
    /* md:w-4/5 oranına göre */
    height: calc(84.5% * (4 / 5));
    top: 1.8% !important;
    right: 12% !important;
  }
}
</style>