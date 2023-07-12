<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();

const emits = defineEmits<{
  (e: 'click'): void;
}>();

// 開閉状態によって切り替わるスタイル
const openCloseStatusStyleClass = computed(function () {
  return { open: props.isOpen };
});

function onClick() {
  emits('click');
}
</script>

<template>
  <div
    class="hamburger-menu__wrapper"
    @click="onClick"
  >
    <div
      class="hamburger-menu__line-top"
      :class="openCloseStatusStyleClass"
    ></div>
    <div
      class="hamburger-menu__line-center"
      :class="openCloseStatusStyleClass"
    ></div>
    <div
      class="hamburger-menu__line-bottom"
      :class="openCloseStatusStyleClass"
    ></div>
  </div>
</template>

<style scoped>
.hamburger-menu__wrapper {
  display: block;
  position: absolute;
  height: 3rem;
  width: 3rem;
}
.hamburger-menu__wrapper:hover {
  cursor: pointer;
}
.hamburger-menu__line-top,
.hamburger-menu__line-center,
.hamburger-menu__line-bottom {
  background-color: var(--main-color);
  border-radius: 0.2rem;
  height: 0.2rem;
  opacity: 1;
  position: absolute;
  transition: all 0.3s ease-out;
  width: 3rem;
}
.hamburger-menu__line-top {
  top: 0.8rem;
}
.hamburger-menu__line-center {
  top: 1.4rem;
}
.hamburger-menu__line-bottom {
  top: 2rem;
}
.hamburger-menu__line-top.open {
  top: 1.4rem;
  transform: rotate(45deg);
}
.hamburger-menu__line-center.open {
  opacity: 0;
  transform: translateX(-200%);
}
.hamburger-menu__line-bottom.open {
  top: 1.4rem;
  transform: rotate(-45deg);
}
</style>
