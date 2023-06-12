<template>
  <div class="header-login">
    <span>100%</span>
    <v-icon name="bi-battery-full" scale="1.53" />
    <p><v-icon name="bi-wifi" scale="1.3" /></p>
    <span>{{ currentTime }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    }, 60000);
  },
  name: "HeaderLogin",
};
</script>
