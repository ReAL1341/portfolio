<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  id: string;
  label: string;
  name: string;
}>();

const emits = defineEmits<{
  (e: 'on-change', value: string): void;
}>();

const selectedValue = ref<string>();

function onChange() {
  if (selectedValue.value) {
    emits('on-change', selectedValue.value);
  }
}
</script>

<template>
  <label :for="id">
    <input
      v-model="selectedValue"
      class="common_display-none"
      type="radio"
      :checked="selectedValue == label"
      :id="id"
      :name="name"
      :value="label"
      @change="onChange"
    />
    {{ label }}
  </label>
</template>
