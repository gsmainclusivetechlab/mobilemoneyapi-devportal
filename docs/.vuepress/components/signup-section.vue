<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <router-link to="/" class="btn-link-back">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z"
                  fill="currentColor"></path>
          </svg>
        </router-link>
        <h1 class="auth-section__title">Sign up</h1>
      </div>
      <div class="form-wrap">
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="form">
          <form @submit.prevent="handleSubmit(signUp)">
            <ValidationProvider class="form-row"
                                vid="first-name"
                                :rules="{ required: { allowFalse: false }, alpha_with_dash: true, min: 2 }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="first-name">
                First name
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.firstName" id="first-name" placeholder="Enter first name">
            </ValidationProvider>

            <ValidationProvider class="form-row"
                                vid="last-name"
                                :rules="{ required: { allowFalse: false }, alpha_with_dash: true, min: 2 }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="last-name">Last name
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.lastName" id="last-name"
                     placeholder="Enter last name">
            </ValidationProvider>

            <ValidationProvider class="form-row"
                                vid="userName"
                                :rules="{ required: { allowFalse: false }, min: 3, without_space: true }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="userName">Username
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.userName" id="userName" placeholder="Enter username">
            </ValidationProvider>

            <ValidationProvider class="form-row"
                                vid="companyName"
                                :rules="{ required: { allowFalse: false }, min: 2 }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="companyName">Company name
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.companyName" id="companyName" placeholder="Enter company name">
            </ValidationProvider>

            <ValidationProvider class="form-row"
                                vid="email"
                                :rules="{ required: { allowFalse: false }, email: true }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="email">E-mail
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="email" v-model="form.email" id="email" placeholder="Enter e-mail">
            </ValidationProvider>

            <ValidationProvider class="form-row privacy-row"
                                vid="privacy-checkbox"
                                :rules="{ required: { allowFalse: false } }"
                                v-slot="{ errors }"
                                tag="div">
              <input type="checkbox" v-model="privacyCheckbox" id="privacy-checkbox">
              <label class="privacy-checkbox"
                     :class="[errors[0] ? 'form-row__error-checkbox' : '' ]"
                     for="privacy-checkbox">
                I agree with
                <a href="https://www.gsma.com/aboutus/legal" target="_blank">
                  GSMA Terms and Conditions
                </a> and have read the <a
                  href="https://www.gsma.com/aboutus/legal/privacy" target="_blank">GSMA Privacy
                Statement</a>.</label>
            </ValidationProvider>
            <p class="form-row__error" v-if="errorMessage">{{ errorMessage }}</p>

            <div class="button-holder">
              <button type="submit" :disabled="invalid || waitingResponse" class="btn btn--accent">
                <span v-if="!waitingResponse">Sign up</span>
                <spinner-component v-else/>
              </button>
              <span v-if="!successSignUp" class="bottom-row">
              <router-link to="/login">Log in</router-link> instead?
            </span>
              <span v-else class="bottom-row">
              Successful registration! Please check your email and <router-link to="/login">go to Login</router-link>!
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
import { USERNAME_ALREADY_REGISTERED, EMAIL_ALREADY_REGISTERED } from '@/api/constants';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { AUTH } from '@/store/modules/module-types';

export default {
  name: 'signup-section',
  components: { SpinnerComponent },
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        companyName: '',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      privacyCheckbox: false,
      waitingResponse: false,
      errorMessage: '',
      successSignUp: false
    };
  },
  methods: {
    async signUp() {
      this.successSignUp = false;
      this.waitingResponse = true;
      this.errorMessage = '';

      const resolveObject = await this.$store.dispatch(nameWithSlash(AUTH, 'signUp'), this.form);

      if (resolveObject.status) {
        this.successSignUp = true;
      } else if (resolveObject.errorField) {
        this.$refs.form.setErrors({
          [resolveObject.errorField]: resolveObject.errorMessage
        });
      } else {
        this.errorMessage = resolveObject.errorMessage;
      }

      this.waitingResponse = false;
    }
  }
};
</script>
