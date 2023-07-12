<script setup lang="ts">
import { SkillDetail, SkillList } from '@Components';
import { Skill, skills } from '@/const';

const selectedSkill = ref<Skill>(skills[0]);
const isVisible = ref<boolean>(true);

// 表示する説明文を切り替える
function changeDisplay(selectedSkillName: string) {
  const newSkill = skills.find(function (skill) {
    return skill.name == selectedSkillName;
  });
  if (newSkill) {
    isVisible.value = false;
    setTimeout(function () {
      selectedSkill.value = newSkill;
      isVisible.value = true;
    }, 400);
  }
}

const skillNameList = skills.map(function (skill) {
  return skill.name;
});
</script>

<template>
  <div class="skill">
    <XyzTransition
      appear
      mode="out-in"
    >
      <div
        v-if="isVisible"
        class="skill_content"
      >
        <h3 class="skill_name">{{ selectedSkill.name }}</h3>
        <div class="skill_name-underline"></div>
        <SkillDetail
          name="languages"
          class="skill_detail"
          :details="selectedSkill.details"
        />
      </div>
    </XyzTransition>

    <SkillList
      class="skill_list"
      :options="skillNameList"
      @on-change="changeDisplay"
    />
  </div>
</template>

<style scoped>
.skill {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.skill_content {
  width: calc(95% - 13rem);
}
.skill_name {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}
.skill_name-underline {
  background-color: var(--text-color);
  border-radius: 1rem;
  height: 0.25rem;
  margin-bottom: 1rem;
}
.skill_detail {
  margin: auto;
  width: 80%;
}
.skill_list {
  width: 13rem;
}
</style>
