<script setup lang="ts">
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
  <div class="skill-list__wrapper">
    <div class="skill-list__line"></div>
    <ul class="skill-list__content">
      <li
        v-for="option in options"
        class="xyz-nested"
        xyz="fade-100% stagger-0.5 delay-1"
        :key="option"
        @click="updateValue(option)"
      >
        <span
          class="skill-list__text"
          :class="{ selected: selectedLanguage == option }"
        >
          {{ option }}
        </span>
      </li>
    </ul>
    <div class="skill-list__line"></div>
  </div>
</template>

<style scoped>
.skill-list__wrapper {
  box-sizing: border-box;
  padding: 0 1rem;
}
.skill-list__line {
  background-color: var(--text-color);
  border-radius: 1rem;
  height: 0.25rem;
  margin: 1rem auto;
}
.select-list_menu-input {
  display: none;
}
.skill-list__content > li {
  margin-bottom: 0.5rem;
  text-align: center;
}
.skill-list__text {
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
.skill-list__text:hover {
  cursor: pointer;
  text-shadow: 0px 0px 1rem var(--main-color);
  transform: scale(1.4);
  transition: all 0.3s ease-out;
  -webkit-transform: scale(1.4);
}
.skill-list__text.selected {
  color: var(--main-color);
  transform: scale(1.4);
  -webkit-transform: scale(1.4);
}
</style>
