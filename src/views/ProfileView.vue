<template>
  <section>
    <div class="top_profile">
      <div class="top_profile-icon">
        <img
          src="/assets/real_icon.png"
          class="top_profile-icon-image"
        />
      </div>
      <div class="top_profile-text">
        <p class="name">田島 友平</p>
        <p class="handle-name">@ReAL1341</p>
        <p class="background">
          2024年 東京工業大学 工学院電気電子系 卒業見込み
        </p>
        <p class="pasttime">趣味：プログラミング、音ゲー、お酒</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.top_profile {
  display: flex;
  flex-direction: row;
}
.top_profile-icon {
  border: solid 0.3rem var(--main-color);
  border-radius: 10rem;
  height: 12.5rem;
  width: 12.5rem;
}
.top_profile-icon-image {
  height: 100%;
  width: auto;
}
.top_profile-text {
  text-align: center;
  width: calc(100% - 12.5rem);
}
.top_profile-text > .name {
  font-size: 2.5rem;
  margin-bottom: 0.1rem;
}
.top_profile-text > .handle-name {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}
.top_profile-text > .background,
.top_profile-text > .pasttime {
  font-size: 1rem;
  margin-bottom: 0.8rem;
}
</style>
