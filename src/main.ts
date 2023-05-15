import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

/**
 * 外部ライブラリ
 */
import VueAnimXyz from '@animxyz/vue3';
import '@animxyz/core';
app.use(VueAnimXyz);

/**
 * articles
 */
import AchievementArticle from './articles/AchievementArticle.vue';
import ProfileArticle from './articles/ProfileArticle.vue';
import SkillArticle from './articles/SkillArticle.vue';
app.component('achievement-article', AchievementArticle);
app.component('profile-article', ProfileArticle);
app.component('skill-article', SkillArticle);

/**
 * organisms
 */
import AppNavigationOrganism from './organisms/AppNavigationOrganism.vue';
import SkillDescriptionOrganism from './organisms/SkillDescriptionOrganism.vue';
import SkillListOrganism from './organisms/SkillListOrganism.vue';
app.component('app-navigation-organism', AppNavigationOrganism);
app.component('skill-description-organism', SkillDescriptionOrganism);
app.component('skill-list-organism', SkillListOrganism);

/**
 * parts
 */
import HamburgerMenuPart from './parts/HamburgerMenuPart.vue';
import SelectItermPart from './parts/SelectItemPart.vue';
import TitlePart from './parts/TitlePart.vue';
app.component('hamburger-menu-part', HamburgerMenuPart);
app.component('select-item-part', SelectItermPart);
app.component('title-part', TitlePart);

app.mount('#app');
