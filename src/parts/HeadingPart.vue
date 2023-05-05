<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <h2 class="heading">
    <span class="heading_icon">➤</span>
    <span class="heading_text">{{ label }}</span>
  </h2>
</template>

<style scoped>
.heading {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.heading_icon {
  color: var(--main-color);
}
.heading_text {
  margin-left: 1rem;
}
</style>
