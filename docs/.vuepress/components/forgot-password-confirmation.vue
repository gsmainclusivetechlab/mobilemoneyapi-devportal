<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 class="auth-section__title">Forgot password confirmation</h1>
        <span class="auth-section__sub-title">Please, enter code from message and new password</span>
      </div>
      <div class="form-wrap">
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="form">
          <form @submit.prevent="handleSubmit(forgotPasswordConfirmation)">
            <ValidationProvider class="form-row"
                                vid="verificationCode"
                                :rules="{ required: { allowFalse: false }}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="verificationCode">
                Code
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.verificationCode" id="verificationCode" placeholder="Enter code">
            </ValidationProvider>
            <ValidationProvider class="form-row"
                                vid="newPassword"
                                :rules="{ required: { allowFalse: false }, verify_password: true, min: 8 }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="newPassword">
                New password
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="password" v-model="form.newPassword" id="newPassword" placeholder="Enter new password">
            </ValidationProvider>
            <ValidationProvider class="form-row"
                                vid="confirmPassword"
                                :rules="{ required: { allowFalse: false }, verify_password: true, min: 8, confirmed: 'newPassword'}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="confirmPassword">
                New password confirmation
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="password" v-model="form.confirmPassword" id="confirmPassword" placeholder="Enter password confirmation">
            </ValidationProvider>
            <div class="button-holder">
              <button type="submit" :disabled="invalid || waitingResponse" class="btn btn--accent">
                <span v-if="!waitingResponse">Set new password</span>
                <spinner-component v-else/>
              </button>
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
import Auth from '@/api/Auth';
import SpinnerComponent from './helpers/spinner-component';

export default {
  name: 'forgot-password-confirmation',
  components: { SpinnerComponent },
  data() {
    return {
      form: {
        'userName': this.$route.query.userName,
        'verificationCode': '',
        'newPassword': '',
        'confirmPassword': ''
      },
      waitingResponse: false
    };
  },

  methods: {
    async forgotPasswordConfirmation() {
      this.waitingResponse = true;

      await Auth.forgotPasswordConfirmation(this.form)
          .then(() => {
            this.$router.push({ path: '/login/' });
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

<style scoped>

</style>
