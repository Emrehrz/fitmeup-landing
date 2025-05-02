<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


</script>

<template>
  <footer class="bg-[#111827] text-white py-4 px-6 sm:pt-12 md:pt-16 lg:pt-18 font-semibold">
    <div class="max-w-6xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 ">
      <!-- Contact -->
      <div class="text-center md:text-left flex flex-col justify-center">
        <h3 class="text-xl font-semibold mb-3">İletişim</h3>

        <a href="mailto:fitmeupteam@gmail.com" target="_blank"
          class="block text-base text-gray-300 hover:text-white transition">
          <FontAwesomeIcon :icon="faEnvelope" />

          fitmeupteam@gmail.com
        </a>
      </div>

      <!-- Social -->
      <div class="text-center md:text-left flex flex-col justify-center">
        <h3 class="text-xl font-semibold mb-3">Sosyal</h3>
        <ul class="space-y-2 text-base text-gray-300">
          <!-- <li>
            <a href="#" class="hover:text-white transition">LinkedIn</a>
          </li> -->
          <li>
            <a href="https://www.instagram.com/fitmeup.app/" target="_blank">
              <FontAwesomeIcon :icon="faInstagram" />
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <!-- Logo -->
      <div class="hidden sm:flex justify-center md:justify-end items-center">
        <img src="../assets/img/Fitmeuplogo1.png" alt="Fit Me Up Logo" class="logo" />
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="mt-10 text-center text-sm text-gray-400 font-medium">
      © {{ new Date().getFullYear() }} Fitmeup. Tüm hakları saklıdır.
    </div>
  </footer>
</template>

<style>
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
</style>