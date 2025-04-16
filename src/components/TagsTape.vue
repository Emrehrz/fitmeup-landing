<script setup>
const tags = [
  { name: 'Takibi', href: '#' },
  { name: 'Check-In Takibi', href: '#' },
  { name: 'Antrenman Özelleştirme', href: '#' },
  { name: 'WhatsApp Entegrasyonu', href: '#' },
  { name: 'Kişiye Özel Süreç', href: '#' },
  { name: 'Antrenman Özelleştirme', href: '#' },
  { name: 'WhatsApp', href: '#' },
]
</script>
<template>
  <div class="w-full bg-white text-black py-3 md:py-4 overflow-x-auto whitespace-nowrap">
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex items-center space-x-2 md:space-x-4 text-sm md:text-base lg:text-lg">
        <div class="flex gap-2" v-for="tag in tags">
          <a href="#" class="hover:text-blue-600 transition-colors duration-200 font-medium">{{ tag.name }}</a>
          <span class="text-gray-500">»</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Yatay kaydırma çubuğunu gizlemek için */
.whitespace-nowrap::-webkit-scrollbar {
  display: none;
}

.whitespace-nowrap {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

@media (max-width: 640px) {
  .whitespace-nowrap a {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
}
</style>