<script setup>
import { ref } from "vue";
const playVideo = ref(false);
const videoRef = ref(null);
const canPlay = ref(false);
const imgIndex = ref(2);
const playAction = () => {
  if (!canPlay.value) return;
  playVideo.value = true;
  videoRef.value.play();
};
setInterval(() => {
  if (imgIndex.value === 3) {
    imgIndex.value = 1;
  } else {
    imgIndex.value++;
  }
}, 2800);
setTimeout(() => {
  canPlay.value = true;
}, 1800);
</script>

<template>
  <div class="container">
    <div class="content__box">
      <div class="hbd__pleaceholder" v-show="!playVideo" @click="playAction">
        <img
          :src="`/src/assets/hbd${imgIndex}.jpg`"
          alt="hbd"
          class="img_box"
          :style="{
            opacity: imgIndex == 1 ? 1 : 0,
          }"
        />
        <img
          :src="`/src/assets/hbd${imgIndex}.jpg`"
          alt="hbd"
          class="img_box"
          :style="{
            opacity: imgIndex == 2 ? 1 : 0,
          }"
        />
        <img
          :src="`/src/assets/hbd${imgIndex}.jpg`"
          alt="hbd"
          class="img_box"
          :style="{
            opacity: imgIndex == 3 ? 1 : 0,
          }"
        />
      </div>
      <video
        :style="{ opacity: playVideo ? 1 : 0 }"
        src="../assets/hbd.mp4"
        class="hbd-video"
        loop
        ref="videoRef"
        preload="auto"
        :controls="false"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background: #f1e5a8;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: hidden;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0;
  backdrop-filter: blur(10px);
}
.content__box {
  box-sizing: border-box;
  padding: 0;
  height: 60%;
  min-width: 39%;
  width: fit-content;
  position: relative;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: -10%;
}
.hbd__pleaceholder {
  width: 100%;
  height: 100%;
  z-index: 99;
  position: absolute;
}
.img_box {
  width: 100%;
  height: 100%;
  transition: all 0.8s ease-in-out;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
.hbd-video {
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 0 10px rgb(156, 156, 156, 0.8);
}
</style>
