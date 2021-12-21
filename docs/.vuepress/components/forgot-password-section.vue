<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 class="auth-section__title">Forgot password?</h1>
        <span class="auth-section__sub-title">Please, enter your username</span>
      </div>
      <div class="form-wrap">
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="form">
          <form @submit.prevent="handleSubmit(forgotPassword)">
            <ValidationProvider class="form-row"
                                vid="userName"
                                :rules="{ required: { allowFalse: false }}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="userName">
                Username
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.userName" id="userName" placeholder="Enter username">
            </ValidationProvider>
            <div class="button-holder">
              <button type="submit" :disabled="invalid" class="btn btn--accent">Recover password</button>
              <span class="bottom-row">
              <router-link to="/login" class="bold-grey-link">Go back to Sign in page</router-link>
            </span>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../api/Auth";

export default {
  name: 'forgot-password-section',
  data() {
    return {
      form: {
        userName: ''
      }
    }
  },
  methods: {
    async forgotPassword() {
      await Auth.forgotPassword(this.form)
          .then(() => {
            this.$router.push({path: '/forgot-password/confirmation', query: {userName: this.form.userName}})
          })
          .catch((e) => {
            console.log(e)
          })
    }
  }
};
</script>
