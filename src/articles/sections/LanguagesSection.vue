<script setup lang="ts">
import { ref } from 'vue';
import { Language, languages } from '../../const';

const languageList = languages.map(function (language) {
  return language.name;
});
const selectedLanguage = ref<Language>(languages[0]);
function changeLanguage(value: string) {
  const newLanguage = languages.find(function (language) {
    return language.name == value;
  });
  if (newLanguage) {
    selectedLanguage.value = newLanguage;
  }
}
</script>

<template>
  <section>
    <heading-part label="Languages" />
    <div class="skill_languages">
      <div class="skill_languages-content">
        <h3 class="skill_languages-name">{{ selectedLanguage.name }}</h3>
        <div class="skill_languages-name-underline"></div>

        <switch-content-organism
          name="languages"
          class="skill_languages-detail"
          :details="selectedLanguage.details"
        />
      </div>

      <select-list-organism
        class="skill_languages-list"
        :options="languageList"
        @on-change="changeLanguage"
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
