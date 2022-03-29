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
              <button type="submit" :disabled="invalid || waitingResponse" class="btn btn--accent">
                <span v-if="!waitingResponse">Recover password</span>
                <spinner-component v-else/>
              </button>
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
import Auth from '../api/Auth';
import SpinnerComponent from './helpers/spinner-component';

export default {
  name: 'forgot-password-section',
  components: { SpinnerComponent },
  data() {
    return {
      form: {
        userName: ''
      },
      waitingResponse: false
    };
  },
  methods: {
    async forgotPassword() {
      this.waitingResponse = true;

      await Auth.forgotPassword(this.form)
          .then(() => {
            window.location.replace(`/forgot-password/confirmation.html?userName=${this.form.userName}`);
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            this.waitingResponse = false;
          });
    }
  }
};
</script>
