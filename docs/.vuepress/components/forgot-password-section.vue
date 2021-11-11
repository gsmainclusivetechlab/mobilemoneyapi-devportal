<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 class="auth-section__title">Forgot password?</h1>
        <span class="auth-section__sub-title">Please, enter your email address</span>
      </div>
      <div class="form-wrap">
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="form">
          <form @submit.prevent="handleSubmit(forgotPassword)">
            <ValidationProvider class="form-row"
                                vid="email"
                                :rules="{ required: { allowFalse: false }, email: true}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="email">
                E-mail
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="email" v-model="form.email" id="email" placeholder="Enter e-mail">
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
export default {
  name: 'forgot-password-section',
  data() {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    async forgotPassword() {
      // await this.$store.dispatch('auth/forgotPassword', this.form)
      //     .then(() => {
      //       this.$router.push('/login/')
      //     })
      //     .catch(() => {
      //       console.log('error')
      //     })
      console.log('forgot-password')
      this.$router.push('/login/')

    }
  }
};
</script>
