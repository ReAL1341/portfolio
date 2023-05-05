<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

const props = defineProps<{
  label: string;
}>();

const { label } = toRefs(props);
const title = ref<string>(label.value);
const isShow = ref<boolean>(true);
watch(label, function () {
  isShow.value = false;
  setTimeout(function () {
    title.value = label.value;
    isShow.value = true;
  }, 400);
});
</script>

<template>
  <div>
    <h1 class="title_label">
      <XyzTransition
        appear
        mode="out-in"
      >
        <span
          v-if="isShow"
          xyz="fade-100%"
        >
          {{ title }}
        </span>
      </XyzTransition>
    </h1>
    <div class="title_underline"></div>
  </div>
</template>

<style scoped>
.title_label {
  font-family: var(--title-font);
  font-size: 3.4rem;
  height: 5.6rem;
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
