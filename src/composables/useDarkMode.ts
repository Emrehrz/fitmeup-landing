// src/composables/useDarkMode.ts
import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('dark-mode', isDarkMode.value.toString());
  };

  onMounted(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode) {
      isDarkMode.value = savedMode === 'true';
      document.documentElement.classList.toggle('dark', isDarkMode.value);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDarkMode.value = prefersDark;
      document.documentElement.classList.toggle('dark', isDarkMode.value);
      localStorage.setItem('dark-mode', isDarkMode.value.toString());
    }

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('dark-mode')) {
        isDarkMode.value = e.matches;
        document.documentElement.classList.toggle('dark', isDarkMode.value);
      }
    });
  });

  return { isDarkMode, toggleDarkMode };
}