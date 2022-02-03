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
                                vid="newPassword"
                                :rules="{ required: { allowFalse: false }, verify_password: true, min: 8 }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="newPassword">Password
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="password" v-model="form.newPassword" id="newPassword" placeholder="Enter password">
            </ValidationProvider>
            <ValidationProvider class="form-row"
                                vid="confirmPassword"
                                :rules="{ required: { allowFalse: false }, verify_password: true, min: 8, confirmed: 'newPassword'}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="confirmPassword">
                Password confirmation
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="password" v-model="confirmPassword" id="confirmPassword" placeholder="Enter password confirmation">
            </ValidationProvider>
            <div class="button-holder">
              <button class="btn btn--accent" type="submit" :disabled="invalid || waitingResponse">
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
  name: 'set-new-password',
  components: { SpinnerComponent },
  data() {
    return {
      form: {
        newPassword: ''
      },
      confirmPassword: '',
      waitingResponse: false
    };
  },

  methods: {
    async setNewPassword() {
      this.waitingResponse = true;

      await Auth.setNewPassword(this.$route.query.userName, this.form)
          .then(({ data }) => {
            if (data.name && data.code) {
              return Promise.reject(false); // TODO add error message or global error handler
            }
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
