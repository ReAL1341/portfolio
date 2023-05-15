<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  name: string;
  checked: boolean;
}>();

const emits = defineEmits<{
  (e: 'on-change', value: string): void;
}>();

function onChange(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    emits('on-change', event.target.value);
  }
}
</script>

<template>
  <label :for="id">
    <input
      class="common_display-none"
      type="radio"
      :checked="checked"
      :id="id"
      :name="name"
      :value="label"
      @change="onChange"
    />
    {{ label }}
  </label>
</template>
