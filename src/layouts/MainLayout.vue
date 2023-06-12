<template>
  <div class="video-bg">
    <video width="320" height="240" autoplay loop muted>
      <source
        src="https://assets.codepen.io/3364143/7btrrd.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
  <div id="content" class="animate__animated animate__zoomInRight">
    <HeaderMain />
    <div class="wrapper">
      <SidebarMain />
      <div class="main-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain.vue";
import SidebarMain from "@/components/SidebarMain.vue";

export default {
  name: "MainLayout",
  components: {
    HeaderMain,
    SidebarMain,
  },
};
</script>
