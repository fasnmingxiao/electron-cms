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
  <div id="content_login">
    <div class="background_image"></div>
    <div class="content">
      <HeaderLogin />
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderLogin from "@/components/HeaderLogin.vue";
export default {
  name: "LoginLayout",
  components: {
    HeaderLogin,
  },
};
</script>
