<script setup lang="ts">
import { Detail } from '@/const';
import SkillTabList from './SkillTabList.vue';

const props = defineProps<{
  details: Array<Detail>;
}>();

const { details } = toRefs(props);
const detailTitleList = details.value.map(function (detail) {
  return detail.title;
});
const selectedDetail = ref<Detail>(details.value[0]);
const isVisible = ref<boolean>(true);

// 表示する詳細情報の変更
function changeDisplay(selectedDetailTitle: string) {
  const newDetail = details.value.find(function (detail) {
    return detail.title == selectedDetailTitle;
  });
  if (newDetail) {
    isVisible.value = false;
    setTimeout(function () {
      selectedDetail.value = newDetail;
      isVisible.value = true;
    }, 400);
  }
}
</script>

<template>
  <div>
    <!-- リスト -->
    <SkillTabList
      :selectedTab="selectedDetail.title"
      :tabs="detailTitleList"
      @change="changeDisplay"
    />

    <!-- 表示コンテンツ -->
    <div class="switch-content_text">
      <XyzTransition
        appear
        mode="out-in"
      >
        <div
          v-if="isVisible"
          xyz="fade-100% up-2"
        >
          {{ selectedDetail.description }}
        </div>
      </XyzTransition>
    </div>
  </div>
</template>

<style scoped>
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
