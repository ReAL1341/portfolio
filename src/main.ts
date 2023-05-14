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
import SkillArticle from './articles/SkillArticle.vue';
import TopArticle from './articles/TopArticle.vue';
app.component('skill-article', SkillArticle);
app.component('top-article', TopArticle);

/**
 * sections
 */
import LanguagesSection from './articles/sections/LanguagesSection.vue';
import ProfileSection from './articles/sections/ProfileSection.vue';
import ToolsSection from './articles/sections/ToolsSection.vue';
app.component('languages-section', LanguagesSection);
app.component('profile-section', ProfileSection);
app.component('tools-section', ToolsSection);

/**
 * organisms
 */
import NavigationOrganism from './organisms/NavigationOrganism.vue';
import SelectListOrganism from './organisms/SelectListOrganism.vue';
import SwitchContentOrganism from './organisms/SwitchContentOrganism.vue';
app.component('navigation-organism', NavigationOrganism);
app.component('select-list-organism', SelectListOrganism);
app.component('switch-content-organism', SwitchContentOrganism);

/**
 * parts
 */
import HamburgerMenuPart from './parts/HamburgerMenuPart.vue';
import HeadingPart from './parts/HeadingPart.vue';
import SelectItermPart from './parts/SelectItemPart.vue';
import TitlePart from './parts/TitlePart.vue';
app.component('hamburger-menu-part', HamburgerMenuPart);
app.component('heading-part', HeadingPart);
app.component('select-item-part', SelectItermPart);
app.component('title-part', TitlePart);

app.mount('#app');
