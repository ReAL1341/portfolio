<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <div>
    <h1 class="title_label">{{ label }}</h1>
    <div class="title_underline"></div>
  </div>
</template>

<style scoped>
.title_label {
  font-family: var(--title-font);
  font-size: 3.4rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.title_underline {
  background-color: var(--main-color);
  border-radius: 1rem;
  height: 0.45rem;
  margin: auto;
}
</style>
