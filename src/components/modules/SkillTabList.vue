<script setup lang="ts">
defineProps<{
  selectedTab: string;
  tabs: Array<string>;
}>();

const emits = defineEmits<{
  (e: 'change', tab: string): void;
}>();

function changeTab(selectedTab: string) {
  emits('change', selectedTab);
}
</script>

<template>
  <ul class="skill-tab-list__wrapper">
    <li
      v-for="tab in tabs"
      class="skill-tab-list__item"
      :class="{ selected: tab == selectedTab }"
      :key="tab"
      @click="changeTab(tab)"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<style scoped>
.skill-tab-list__wrapper {
  padding: 0 1rem;
}
.skill-tab-list__item {
  box-sizing: border-box;
  color: #999999;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 2rem;
  transform: scale(1);
  transition: all 0.3s ease-in;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: scale(1);
  -webkit-font-smoothing: antialiased;
}
.skill-tab-list__item:hover {
  cursor: pointer;
}
.skill-tab-list__item.selected {
  color: var(--text-color);
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
</style>
