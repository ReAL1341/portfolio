<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  options: Array<string>;
}>();

const emits = defineEmits<{
  (e: 'on-change', value: string): void;
}>();

const selectedLanguage = ref<string>(props.options[0]);
function updateValue(value: string) {
  selectedLanguage.value = value;
  if (selectedLanguage.value) {
    emits('on-change', selectedLanguage.value);
  }
}
</script>

<template>
  <div class="select-list">
    <div class="select-list_line"></div>
    <ul class="select-list_menu">
      <li
        v-for="option in options"
        class="xyz-nested"
        xyz="fade-100% stagger-0.5 delay-1"
        :key="option"
      >
        <select-item-part
          name="select-list"
          class="select-list_menu-text"
          :class="{ selected: selectedLanguage == option }"
          :label="option"
          :id="'select-list_' + option"
          @on-change="updateValue"
        />
      </li>
    </ul>
    <div class="select-list_line"></div>
  </div>
</template>

<style scoped>
.select-list {
  box-sizing: border-box;
  padding: 0 1rem;
}
.select-list_line {
  background-color: var(--text-color);
  border-radius: 1rem;
  height: 0.25rem;
  margin: 1rem auto;
}
.select-list_menu-input {
  display: none;
}
.select-list_menu > li {
  margin-bottom: 0.5rem;
  text-align: center;
}
.select-list_menu-text {
  box-sizing: border-box;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  transform: scale(1);
  transition: all 0.3s ease-in;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: scale(1);
  -webkit-font-smoothing: antialiased;
}
.select-list_menu-text:hover {
  cursor: pointer;
  text-shadow: 0px 0px 1rem var(--main-color);
  transform: scale(1.4);
  transition: all 0.3s ease-out;
  -webkit-transform: scale(1.4);
}
.select-list_menu-text.selected {
  color: var(--main-color);
  transform: scale(1.4);
  -webkit-transform: scale(1.4);
}
</style>
