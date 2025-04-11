<template>
  <section class="relative isolate px-6 h-auto py-20 md:py-24 overflow-hidden">
    <!-- Arka plan blur elementleri - sağ tarafta konumlandırılmış -->
    <div class="absolute inset-0 w-[30%] md:w-[55%] h-full ml-auto right-0 top-0">
      <div class="blur-circle circle-1 bg-[Darkblue]/40"></div>
      <div class="blur-circle circle-2 bg-gray-200/40"></div>
      <div class="blur-circle circle-3 bg-[Darkblue]/40 "></div>
    </div>

    <!-- Hero içeriği - container kaldırıldı, tam genişlik -->
    <div
      class="relative h-full flex flex-col justify-center text-center items-center pt-0 -mt-16 md:mt-0 md:pb-24 px-4 ">
      <!-- Ana başlık -->
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-2 md:mb-4">
        Uzaktan Koçluk
      </h1>

      <!-- Alt başlık -->
      <p class="text-xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-10 font-light">
        süreçlerinizi uçtan uca dijitalleştirin.
      </p>

      <!-- Açıklama metni -->
      <p class="text-center text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 md:mb-16 text-gray-300">
        Fitmeup, fitness koçlarının öğrencileri ile olan iletişimini ve süreç takibini
        iyi organize edilmiş bir şekilde koçlarla buluşturan bir uygulamadır.
      </p>

      <!-- Butonlar -->
      <div
        class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-xs md:text-sm lg:text-base">
        <a href="#"
          class="px-8 py-3 rounded-full border border-white  hover:bg-white hover:text-black transition-colors duration-300 flex items-center">
          HEMEN ÜCRETSİZ KULLANIN
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <a href="#"
          class="px-8 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 hover:opacity-90 transition-opacity duration-300 flex items-center">
          DEMO GÖRÜŞME ALIN
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.7;
  mix-blend-mode: screen;
}

.circle-1 {
  width: 300px;
  height: 300px;
  bottom: -10%;
  left: 10%;
}

.circle-2 {
  width: 250px;
  height: 250px;
  top: 40%;
  right: 5%;
}

.circle-3 {
  width: 300px;
  height: 300px;
  top: -5%;
  left: 30%;
}

@media (min-width: 768px) {
  .circle-1 {
    width: 200px;
    height: 200px;
    bottom: -10%;
    left: 15%;
  }

  .circle-2 {
    width: 180px;
    height: 180px;
    top: 35%;
    right: 10%;
  }

  .circle-3 {
    width: 200px;
    height: 200px;
    top: -5%;
    left: 35%;
  }
}

@media (min-width: 1024px) {
  .circle-1 {
    width: 450px;
    height: 450px;
    bottom: -10%;
    left: 20%;
  }

  .circle-2 {
    width: 350px;
    height: 350px;
    top: 40%;
    right: 5%;
  }

  .circle-3 {
    width: 450px;
    height: 450px;
    top: -5%;
    left: 40%;
  }
}
</style>