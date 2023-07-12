<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div>
    <h1 class="title__text">
      {{ text }}
    </h1>
    <div class="title__underline"></div>
  </div>
</template>

<style scoped>
.title__text {
  font-family: var(--title-font);
  font-size: 3.4rem;
  height: 5.6rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.title__underline {
  background-color: var(--main-color);
  border-radius: 20rem;
  height: 0.45rem;
  margin: auto;
}
</style>
