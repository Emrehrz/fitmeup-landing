<script setup>
const tags = [
  { name: 'Süreç Takibi', href: '#' },
  { name: 'Check-In Takibi', href: '#' },
  { name: 'Antrenman Özelleştirme', href: '#' },
  { name: 'WhatsApp Entegrasyonu', href: '#' },
  { name: 'Kişiye Özel Süreç', href: '#' },
  { name: 'Antrenman Özelleştirme', href: '#' },
  { name: 'WhatsApp', href: '#' },
];
</script>

<template>
  <div
    class="tags-tape-container w-full bg-gradient-to-r from-gray-400 to-[#F2F2F2] text-[Black] py-3 md:py-4 overflow-x-auto whitespace-nowrap">
    <div class="container mx-auto px-4 md:px-8">
      <div class="tags-wrapper flex items-center space-x-3 md:space-x-4 text-xs md:text-sm lg:text-base">
        <div v-for="(tag, index) in tags" :key="index" class="tag-item flex items-center group">
          <a :href="tag.href" class="tag-link hover:text-[DarkBlue] transition-colors duration-300 font-medium px-1">
            {{ tag.name }}
          </a>
          <span v-if="index < tags.length - 1"
            class="separator  mx-1 md:mx-2 transform transition-transform duration-300 group-hover:translate-x-1">›</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tags-tape-container {
  position: relative;
}

.tags-tape-container::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50px;
  pointer-events: none;
}

.tags-wrapper {
  position: relative;
  padding: 0.25rem 0;
}

.tag-link {
  position: relative;
  transition: all 0.3s ease;
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

/* Improved separator style */
.separator {
  font-weight: 300;
}

/* Hide scrollbar but keep functionality */
.whitespace-nowrap::-webkit-scrollbar {
  display: none;
}

.whitespace-nowrap {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Add a subtle sliding in animation when page loads */
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.tag-item {
  animation: slideIn 0.5s ease forwards;
  animation-delay: calc(0.05s * var(--i));
  opacity: 0;
}

/* Override animation for small screens */
@media (max-width: 640px) {
  .tag-item {
    animation: none;
    opacity: 1;
  }

  .tag-link {
    padding-right: 0.25rem;
    padding-left: 0.25rem;
  }
}
</style>