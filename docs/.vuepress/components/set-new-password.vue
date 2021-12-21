<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 class="auth-section__title">Set new password</h1>
      </div>
      <div class="form-wrap">
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="set-new-password">
          <form @submit.prevent="handleSubmit(setNewPassword)">
            <ValidationProvider class="form-row"
                                vid="password"
                                :rules="{ required: { allowFalse: false }, verify_password: true, min: 8 }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="password">Password
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="password" v-model="form.password" id="password" placeholder="Enter password">
            </ValidationProvider>
            <div class="button-holder">
              <button class="btn btn--accent" type="submit" :disabled="invalid">Set new password</button>
              <span class="bottom-row">
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
  name: "set-new-password",

  data() {
    return {
      form: {
        newPassword: ''
      }
    }
  },

  methods: {
    async setNewPassword() {
      await Auth.setNewPassword(this.$route.query.userName, this.form)
          .then(() => {
            this.$router.push({path: '/login/'})
          })
          .catch((e) => {
            console.log(e)
          })
    }
  }
}
</script>

<style scoped>

</style>
