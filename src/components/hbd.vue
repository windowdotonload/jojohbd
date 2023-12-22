<script setup>
import { ref } from "vue";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
alert('hello')
const playVideo = ref(false);
const videoRef = ref(null);
const msg = ref("can not play video");
const playAction = () => {
  playVideo.value = true;
  videoRef.value.play();
};
const canplaythrough = (e) => {
  console.log(e);
  alert("can play video")
  msg.value = "can play video";
  console.log("canplaythrough");
};
</script>

<template>
  <div class="container">
    {{ msg }}
    <div class="content__box">
      <div
        style="
          background: red;
          width: 100%;
          height: 100%;
          z-index: 99;
          position: absolute;
        "
        v-show="!playVideo"
        @click="playAction"
      ></div>
      <video
        src="../assets/hbd.mp4"
        class="hbd-video"
        loop
        ref="videoRef"
        preload="auto"
        @canplaythrough="canplaythrough"
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
  width: 50%;
  max-width: 50%;
  position: relative;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hbd-video {
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 0 10px rgb(156, 156, 156, 0.8);
}
</style>
