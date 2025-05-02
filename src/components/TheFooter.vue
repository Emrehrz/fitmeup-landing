<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


</script>

<template>
  <footer class="bg-[#111827] text-white py-8 px-6 font-semibold">
    <div class="max-w-6xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
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
        <img src="../assets/img/Logo.webp" alt="Fit Me Up Logo" class="h-24 md:h-[180px] w-auto object-contain" />
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="mt-10 text-center text-sm text-gray-400 font-medium">
      © {{ new Date().getFullYear() }} Fitmeup. Tüm hakları saklıdır.
    </div>
  </footer>
</template>