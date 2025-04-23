<script setup>
const tags = [
  { name: 'Süreç Takibi', href: '#' },
  { name: 'Check-In Takibi', href: '#' },
  { name: 'Antrenman Özelleştirme', href: '#' },
  { name: 'WhatsApp Entegrasyonu', href: '#' },
  { name: 'Kişiye Özel Süreç', href: '#' },
  { name: 'Antrenman Özelleştirme', href: '#' },
];

import { ref, onMounted } from 'vue';

const animationSpeedSeconds = 25; // Animasyon hızı (saniye)
const marqueeContainerRef = ref(null);

// Ekranın genişliğine göre animasyon hızını hesaplama
onMounted(() => {
  // Ekran boyutu değişikliğinde animasyon hızını ayarla
  const updateAnimationDuration = () => {
    if (!marqueeContainerRef.value) return;

    const container = marqueeContainerRef.value;
    const contentWidth = container.scrollWidth;
    const viewportWidth = container.clientWidth;

    // Ekran genişliğine göre animasyonu ayarla
    if (contentWidth < viewportWidth) {
      // İçerik ekrandan küçükse animasyonu devre dışı bırak
      container.style.animation = 'none';
    } else {
      // İçerik ekrandan büyükse animasyonu etkinleştir
      container.style.animation = `scrollTags ${animationSpeedSeconds}s linear infinite`;
    }
  };

  updateAnimationDuration();
  window.addEventListener('resize', updateAnimationDuration);
});
</script>

<template>
  <div
    class="tags-tape-container w-full bg-gradient-to-r from-gray-400 to-[#F2F2F2] text-[Black] py-3 md:py-4 overflow-hidden">
    <div class="marquee-outer">
      <div ref="marqueeContainerRef" class="marquee-inner">
        <!-- İlk kopya -->
        <div class="tags-wrapper flex items-center space-x-3 md:space-x-4 text-sm md:text-sm lg:text-base">
          <div v-for="(tag, index) in tags" :key="`original-${index}`"
            class="tag-item flex items-center group whitespace-nowrap">
            <a :href="tag.href" class="tag-link hover:text-[DarkBlue] transition-colors duration-300 font-medium px-1">
              {{ tag.name }}
            </a>
            <span
              class="separator mx-1 md:mx-2 transform transition-transform duration-300 group-hover:translate-x-1">›</span>
          </div>
        </div>

        <!-- İkinci kopya (ilk kopyanın eşiti) -->
        <div class="tags-wrapper flex items-center space-x-3 md:space-x-4 text-sm md:text-sm lg:text-base">
          <div v-for="(tag, index) in tags" :key="`duplicate-${index}`"
            class="tag-item flex items-center group whitespace-nowrap">
            <a :href="tag.href" class="tag-link hover:text-[DarkBlue] transition-colors duration-300 font-medium px-1">
              {{ tag.name }}
            </a>
            <span
              class="separator mx-1 md:mx-2 transform transition-transform duration-300 group-hover:translate-x-1">›</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tags-tape-container {
  position: relative;
  width: 100%;
}

.marquee-outer {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee-inner {
  display: inline-flex;
  /* Inline-flex kullanarak içeriğin doğal genişlikte olmasını sağla */
  animation: scrollTags 25s linear infinite;
  will-change: transform;
  /* Performans optimizasyonu */
  padding-left: 0;
  /* Başlangıç noktasını kontrol etmek için */
}

/* Etiket öğelerinin düzgün aralık ve üst üste binmemesini sağla */
.tag-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* Öğelerin küçülmesini engelle */
}

@keyframes scrollTags {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
    /* Yalnızca öğelerin yarısı kadar kaydır (iki kopya olduğu için) */
  }
}

/* Fare ile üzerine gelince animasyonu durdur */
.marquee-outer:hover .marquee-inner {
  animation-play-state: paused;
}

.tags-wrapper {
  position: relative;
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
}

.tag-link {
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  /* Metin sarmalamayı engelle */
}

.tag-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #0133FD;
  transition: width 0.3s ease;
}

.tag-link:hover::after {
  width: 100%;
}

/* Ayırıcı stil iyileştirmesi */
.separator {
  font-weight: 300;
  display: inline-block;
  /* Düzgün oluşum sağla */
}

/* Kenarlarda gradient geçiş efekti ekle */
.tags-tape-container::before,
.tags-tape-container::after {
  content: '';
  position: absolute;
  top: 0;
  width: 60px;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.tags-tape-container::before {
  left: 0;
  background: linear-gradient(to right, rgba(229, 231, 235, 0.9), rgba(229, 231, 235, 0));
}

.tags-tape-container::after {
  right: 0;
  background: linear-gradient(to left, rgba(242, 242, 242, 0.9), rgba(242, 242, 242, 0));
}

/* Duyarlı ayarlamalar */
@media (max-width: 768px) {
  .marquee-inner {
    animation-duration: 20s;
    /* Orta ekranlarda daha hızlı */
  }
}

@media (max-width: 640px) {
  .marquee-inner {
    animation-duration: 15s;
    /* Küçük ekranlarda en hızlı */
  }

  .tag-link {
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    font-size: 0.75rem;
    /* Mobilde daha küçük yazı tipi */
  }

  .separator {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  .tags-tape-container::before,
  .tags-tape-container::after {
    width: 40px;
    /* Mobilde daha küçük gradient */
  }
}
</style>