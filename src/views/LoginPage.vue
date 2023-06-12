<template>
  <div class="wp_form_login" v-bind:class="{ 'login-loading': submitLoading }">
    <form v-on:submit.prevent="submitForm" class="d-flex flex-column">
      <input
        type="text"
        placeholder="Username"
        ref="usernameInput"
        v-model="username"
        v-bind:class="{
          'animate__animated animate__shakeX animate__fast': invalidUsername,
        }"
      />
      <div class="d-flex">
        <input
          type="password"
          v-model="password"
          ref="passwordInput"
          placeholder="Enter Password"
          v-bind:class="{
            'animate__animated animate__shakeX animate__fast': invalidPass,
          }"
        />
        <button type="submit">
          <v-icon name="bi-chevron-right" scale="1.5"></v-icon>
        </button>
      </div>
    </form>
    <div class="submit-loadding">
      <div class="d-flex justify-content-center">
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      invalidUsername: false,
      invalidPass: false,
      submitLoading: false,
    };
  },
  methods: {
    async submitForm() {
      if (!this.username || !this.password) {
        if (!this.username) {
          this.$refs.usernameInput.focus();
          this.invalidUsername = true;
          setTimeout(() => {
            this.invalidUsername = false;
          }, 1000);
        } else {
          this.$refs.passwordInput.focus();
          this.invalidPass = true;
          setTimeout(() => {
            this.invalidPass = false;
          }, 1000);
        }
        return;
      }
      this.submitLoading = true;
      this.$store
        .dispatch("AUTH/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          if (response) {
            this.$router.push({ name: "home" });
          }
          this.submitLoading = false;
        });
    },
  },
};
</script>
