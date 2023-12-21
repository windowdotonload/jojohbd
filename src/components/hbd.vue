<script setup></script>

<template>
  <div class="container">
    <img src="../assets/hbd.gif" alt="hbd" class="hbd-video" />
  </div>
</template>

<style scoped>
.container {
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
.hbd-video {
  height: 60%;
  border-radius: 16px;
  box-shadow: 0 0 10px rgb(156, 156, 156, 0.8);
  margin-top: -10%;
}
</style>
