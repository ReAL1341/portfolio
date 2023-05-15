<script setup lang="ts">
import { ref } from 'vue';
import { pages } from './const';

const currentPage = ref(pages[0]);
const isOpen = ref(false);

function closeNavigation() {
  isOpen.value = false;
}
</script>

<template>
  <div>
    <!-- ハンバーガーメニュー -->
    <span class="app_menu-icon">
      <hamburger-menu-part
        v-model="isOpen"
        id="app_menu-icon"
        name="app_menu-icon"
      />
    </span>

    <!-- ナビゲーション -->
    <app-navigation-organism
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
      <title-part
        class="app_main-title"
        :label="currentPage"
      />
      <XyzTransition
        appear
        mode="out-in"
      >
        <!-- 定数の管理が課題 -->
        <profile-article
          v-if="currentPage == 'PROFILE'"
          xyz="fade-100% up-3"
          class="app_main-article"
        />
        <skill-article
          v-else-if="currentPage == 'SKILL'"
          xyz="fade-100% up-3"
          class="app_main-article"
        />
        <achievement-article
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
  background-color: var(--base-deep-color);
  height: 100%;
  left: 0;
  padding-top: 5rem;
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
