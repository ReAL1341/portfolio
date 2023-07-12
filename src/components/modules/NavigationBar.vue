<script setup lang="ts">
defineProps<{
  modelValue: string;
  pages: Array<string>;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function updateValue(value: string) {
  emits('update:modelValue', value);
}
</script>

<template>
  <nav>
    <ul class="navigation">
      <li
        v-for="page in pages"
        class="navigation_item"
        :key="page"
      >
        <select-item-part
          name="navigation"
          class="navigation_item-label"
          :checked="modelValue == page"
          :class="{ selected: modelValue == page }"
          :label="page"
          :id="'navigation_' + page"
          @on-change="updateValue"
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--base-deep-color);
  padding-top: 7rem;
}
.navigation {
  height: 100%;
}
.navigation_item {
  margin-bottom: 2rem;
  text-align: center;
}
.navigation_item-label {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  transform: scale(1);
  transition: all 0.3s ease-in;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: scale(1);
  -webkit-font-smoothing: antialiased;
}
.navigation_item-label:hover {
  cursor: pointer;
  text-shadow: 0px 0px 1rem var(--main-color);
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  -webkit-transform: scale(1.2);
}
.navigation_item-label.selected {
  color: var(--main-color);
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
</style>
