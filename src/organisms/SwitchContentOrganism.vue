<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import { Detail } from '../const';

const props = defineProps<{
  details: Array<Detail>;
}>();

const { details } = toRefs(props);
const selectedDetail = ref<Detail>(details.value[0]);
watch(details, function () {
  selectedDetail.value = details.value[0];
});
function changeDetail(value: string) {
  const newDetail = props.details.find(function (detail) {
    return detail.title == value;
  });
  if (newDetail) {
    selectedDetail.value = newDetail;
  }
}
</script>

<template>
  <div>
    <!-- リスト -->
    <ul class="switch-content_tab">
      <li
        v-for="detail in details"
        :key="detail.title"
      >
        <select-item-part
          name="switch-content"
          class="switch-content_tab-text"
          :class="{ selected: selectedDetail.title == detail.title }"
          :label="detail.title"
          :id="'switch-content_' + detail.title"
          @on-change="changeDetail"
        />
      </li>
    </ul>

    <!-- 表示コンテンツ -->
    <div class="switch-content_text">
      <div>{{ selectedDetail.description }}</div>
    </div>
  </div>
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
.switch-content_tab-text:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.3s ease-out;
  -webkit-transform: scale(1.2);
}
.switch-content_tab-text.selected {
  color: var(--text-color);
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
}
</style>
