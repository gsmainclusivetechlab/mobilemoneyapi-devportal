<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <router-link :to="'/'" class="btn-link-back">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z" fill="currentColor"></path>
          </svg>
        </router-link>
        <h1 class="auth-section__title">Log in</h1>
      </div>
      <div class="form-wrap">
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="form">
          <form @submit.prevent="handleSubmit(signIn)">
            <ValidationProvider class="form-row"
                                vid="email"
                                :rules="{ required: { allowFalse: false } }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="email">Username
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.userName" id="email" placeholder="Enter username">
            </ValidationProvider>
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
            <p class="form-row__error" v-if="errorMessage">{{errorMessage}}</p>

            <div class="form-row forgot-password-row">
              <router-link to="/forgot-password" class="btn-forgot-password">Forgot password?</router-link>
            </div>
            <div class="button-holder">
              <button class="btn btn--accent" type="submit" :disabled="invalid || waitingResponse">
                <span v-if="!waitingResponse">Log in</span>
                <spinner-component v-else/>
              </button>
              <span class="bottom-row">
              <router-link to="/signup">Sign up</router-link> instead?
            </span>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComponent from "./helpers/spinner-component";

export default {
  name: 'login-section',
  components: {SpinnerComponent},
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      waitingResponse: false,
      errorMessage: ''
    }
  },
  methods: {
    async signIn() {
      this.waitingResponse = true
      this.errorMessage = ''

      await this.$store.dispatch('auth/signIn', this.form)
          .then(() => {
            this.$router.push({path: '/dashboard/'})
          })
          .catch((e) => {
            if(e === 'NotAuthorizedException') {
              this.errorMessage = 'User credentials are not valid'
            }
          })
          .finally(() => {
            this.waitingResponse = false
          })
    }
  }
};
</script>
