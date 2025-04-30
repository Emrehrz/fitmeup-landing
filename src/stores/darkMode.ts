// src/stores/darkMode.js
import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';

export const useDarkModeStore = defineStore('darkMode', () => {
  // localStorage'dan kaydedilen dark mode tercihini oku, yoksa sistem tercihini kullan
  const savedMode = localStorage.getItem('dark-mode');
  const initialDarkMode = savedMode ? savedMode === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;

  // isDarkMode'u başlangıç değeriyle tanımla
  const isDarkMode = ref(initialDarkMode);

  // Dark mode'u toggle eden fonksiyon
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    // Tercihi localStorage'a kaydet
    localStorage.setItem('dark-mode', isDarkMode.value.toString());
  };

  // Sistem tercihine göre dark mode'u güncelle
  const updateDarkMode = (e?: MediaQueryListEvent) => {
    // Eğer kullanıcı bir tercih yaptıysa (localStorage'da bir değer varsa), sistem tercihini kullanma
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode !== null) {
      isDarkMode.value = savedMode === 'true';
    } else {
      isDarkMode.value = e ? e.matches : window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('dark-mode', isDarkMode.value.toString());
    }
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  };

  onMounted(() => {
    // Başlangıçta dark mode'u güncelle
    updateDarkMode();

    // Sistem tercihinde değişiklik olduğunda güncelle
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', updateDarkMode);
  });

  onUnmounted(() => {
    // Event listener'ı temizle
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.removeEventListener('change', updateDarkMode);
  });

  return { isDarkMode, toggleDarkMode };
});