<template>
  <div class="w-full flex flex-col sm:gap-6 bg-gradient-to-br from-black/20 to-[#0164FD]/50">
    <!-- Üst başlık - Telefon görseline daha yakın -->
    <div
      class="px-6 pt-8 md:py-10 text-center text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-br  from-white  to-[Lightblue] bg-clip-text text-transparent ">
      Öğrencilerinize kullanıcı dostu bir deneyim sunun, <br> her adımda motivasyonlarını artırın!
    </div>

    <!-- Telefonlar grid görüntüsü - overflow kontrolü ile -->
    <div class="w-full flex  overflow-hidden ">
      <img src="../assets/img/Phones.webp" alt="Fitmeup mobil uygulamasi"
        class="sm:w-[80%] md:w-[75%] h-fit ml-auto md:-mr-0 object-contain" />
    </div>

    <!-- Alt kısım - Telefon ve açıklama -->
    <div
      class="flex flex-col  md:flex-row items-center lg:justify-center justify-center gap-4 md:gap-8 py-8 md:py-16 md:px-24 px-4">
      <div class="w-full md:w-72 lg:w-full  relative">
        <img src="../assets/img/Login.webp" alt="Fitmeup mobil uygulamasi"
          class="w-2/3 md:w-1/2 mx-auto h-auto object-contain " />
      </div>

      <div class="flex flex-col items-center md:items-start max-w-md text-center md:text-left">
        <p
          class="text-lg md:text-xl lg:text-3xl font-medium bg-gradient-to-br  from-[Lightblue] via-white to-[Darkblue] bg-clip-text text-transparent mb-6 sm:leading-snug">
          fitmeup altyapısıyla
          tamamen size ait olan
          koçluk uygulamanızı oluşturun
        </p>

        <a href="#"
          class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all">
          HEMEN KATIL
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Gradient arka plan için daha yumuşak geçiş */
.bg-gradient-to-b {
  background-size: 100% 100%;
  /* background-attachment: fixed; */
}

/* Telefonlar için hover efekti */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: translateY(-5px);
}

/* Responsive özelleştirmeler */
@media (max-width: 768px) {
  .flex-col md\:flex-row {
    gap: 2rem;
  }
}
</style>