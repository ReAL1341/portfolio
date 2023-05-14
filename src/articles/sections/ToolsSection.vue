<script setup lang="ts">
import { ref } from 'vue';
import { Tool, tools } from '../../const';

const toolList = tools.map(function (tool) {
  return tool.name;
});
const selectedTool = ref<Tool>(tools[0]);
const isShow = ref<boolean>(true);
function changeTool(value: string) {
  const newTool = tools.find(function (tool) {
    return tool.name == value;
  });
  if (newTool) {
    isShow.value = false;
    setTimeout(function () {
      selectedTool.value = newTool;
      isShow.value = true;
    }, 400);
  }
}
</script>

<template>
  <section>
    <heading-part label="Tools" />
    <div class="skill_languages">
      <XyzTransition
        appear
        mode="out-in"
      >
        <div
          v-if="isShow"
          class="skill_languages-content"
        >
          <h3 class="skill_languages-name">{{ selectedTool.name }}</h3>
          <div class="skill_languages-name-underline"></div>
          <div class="switch-content_text">
            {{ selectedTool.description }}
          </div>
        </div>
      </XyzTransition>

      <select-list-organism
        class="skill_languages-list"
        :options="toolList"
        @on-change="changeTool"
      />
    </div>
  </section>
</template>

<style scoped>
.skill_languages {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.skill_languages-content {
  width: calc(95% - 13rem);
}
.skill_languages-name {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}
.skill_languages-name-underline {
  background-color: var(--text-color);
  border-radius: 1rem;
  height: 0.25rem;
  margin-bottom: 1rem;
}
.skill_languages-detail {
  margin: auto;
  width: 80%;
}
.skill_languages-list {
  width: 13rem;
}
</style>
