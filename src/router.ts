import { createRouter, createWebHistory } from 'vue-router';
import ProfileView from '@/views/ProfileView.vue';
import SkillView from '@/views/SkillView.vue';
import AchievementView from '@/views/AchievementView.vue';

const routes = [
  { path: '/', name: 'Profile', component: ProfileView },
  { path: '/skill', name: 'Skill', component: SkillView },
  { path: '/achievement', name: 'Achievement', component: AchievementView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
