<script setup lang="ts">
import { pages } from '@/const';
import { HamburgerMenu, PageTitle, NavigationBar } from '@Components';
import ProfileView from './views/ProfileView.vue';
import SkillView from './views/SkillView.vue';
import AchievementView from './views/AchievementView.vue';

const currentPage = ref(pages[0]);
const isOpen = ref(false);

function changeNavigationStatus() {
  isOpen.value = !isOpen.value;
}

function closeNavigation() {
  isOpen.value = false;
}
</script>

<template>
  <div>
    <!-- ハンバーガーメニュー -->
    <span class="app_menu-icon">
      <HamburgerMenu
        :isOpen="isOpen"
        @click="changeNavigationStatus"
      />
    </span>

    <!-- ナビゲーション -->
    <NavigationBar
      v-model="currentPage"
      class="app_navigation"
      :class="{ open: isOpen, close: !isOpen }"
      :pages="pages"
    />

    <!-- ナビゲーション以外をクリックでナビゲーションを閉じる -->
    <div
      class="app_navigation-background"
      :class="{ open: isOpen, close: !isOpen }"
      @click="closeNavigation"
    ></div>

    <!-- 記事 -->
    <main class="app_main">
      <PageTitle
        class="app_main-title"
        :text="currentPage"
      />
      <XyzTransition
        appear
        mode="out-in"
      >
        <!-- <router-view /> -->
        <!-- 定数の管理が課題 -->
        <ProfileView
          v-if="currentPage == 'PROFILE'"
          xyz="fade-100% up-3"
          class="app_main-article"
        />
        <SkillView
          v-else-if="currentPage == 'SKILL'"
          xyz="fade-100% up-3"
          class="app_main-article"
        />
        <AchievementView
          v-else-if="currentPage == 'ACHIEVEMENT'"
          xyz="fade-100% up-3"
          class="app_main-article"
        />
      </XyzTransition>
    </main>
  </div>
</template>

<style scoped>
/**
 * TODO: 将来的にはフォントサイズをここで指定して、コンポーネント側ではemで設定したい
 */
.app_menu-icon {
  left: 1.5rem;
  position: fixed;
  top: 2rem;
  z-index: 10;
}
.app_navigation {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: all 0.3s ease;
  width: 16rem;
  z-index: 9;
}
.app_navigation.open {
  transform: translateX(0);
}
.app_navigation.close {
  transform: translateX(-100%);
}
.app_navigation-background {
  height: 100%;
  position: fixed;
  width: 100%;
}
.app_navigation-background.open {
  z-index: 8;
}
.app_navigation-background.close {
  z-index: -1;
}
.app_main {
  height: 100%;
  padding-top: 1.5rem;
}
.app_main-title {
  margin: auto;
  margin-bottom: 6rem;
  width: 80%;
}
.app_main-article {
  margin: auto;
  width: 70%;
}
</style>
