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
  <ul>
    <li
      v-for="tab in tabs"
      class="switch-content_tab-text"
      :key="tab"
      @click="changeTab(tab)"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<style scoped>
.switch-content_tab {
  display: flex;
  flex-direction: row;
  margin-bottom: 2.5rem;
}
.switch-content_tab > li {
  margin-right: 2rem;
}
.switch-content_tab-text {
  box-sizing: border-box;
  color: #999999;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  transform: scale(1);
  transition: all 0.3s ease-in;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: scale(1);
  -webkit-font-smoothing: antialiased;
}
</style>
