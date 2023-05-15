<script setup lang="ts">
defineProps<{
  id: string;
  modelValue: boolean;
  name: string;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', checked: boolean): void;
}>();

function changeMenu(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    emits('update:modelValue', event.target.checked);
  }
}
</script>

<template>
  <label
    class="hamburger-menu"
    :for="id"
  >
    <input
      class="common_display-none"
      type="checkbox"
      :checked="modelValue"
      :id="id"
      :name="name"
      @change="changeMenu"
    />
    <div
      class="hamburger-menu_line-top"
      :class="{ open: modelValue }"
    ></div>
    <div
      class="hamburger-menu_line-center"
      :class="{ open: modelValue }"
    ></div>
    <div
      class="hamburger-menu_line-bottom"
      :class="{ open: modelValue }"
    ></div>
  </label>
</template>

<style scoped>
.hamburger-menu {
  border-radius: 10rem;
  display: block;
  position: absolute;
  height: 3rem;
  width: 3rem;
}
.hamburger-menu:hover {
  cursor: pointer;
}
.hamburger-menu_line-top,
.hamburger-menu_line-center,
.hamburger-menu_line-bottom {
  background-color: var(--main-color);
  border-radius: 0.2rem;
  height: 0.2rem;
  opacity: 1;
  position: absolute;
  transition: all 0.3s ease-out;
  width: 3rem;
}
.hamburger-menu_line-top {
  top: 0.8rem;
}
.hamburger-menu_line-center {
  top: 1.4rem;
}
.hamburger-menu_line-bottom {
  top: 2rem;
}
.hamburger-menu_line-top.open {
  top: 1.4rem;
  transform: rotate(45deg);
}
.hamburger-menu_line-center.open {
  opacity: 0;
  transform: translateX(-200%);
}
.hamburger-menu_line-bottom.open {
  top: 1.4rem;
  transform: rotate(-45deg);
}
</style>
