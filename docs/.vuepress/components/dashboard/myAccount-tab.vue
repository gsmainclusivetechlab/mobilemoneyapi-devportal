<template>
  <div class="dashboard-content">
    <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="edit-profile">
      <form @submit.prevent="handleSubmit(updateAccountData)">
        <div class="account-flex-container">
          <div class="account-title-info-wrap">
            <h3 class="content-title">My account</h3>
          </div>
          <div class="account-info-container">
            <div class="account-info-title-wrap">
              <span class="account-info-title">Personal information</span>
              <button class="btn btn--transparent edit-btn" type="button"
                      @click="accountEdit = true"
                      v-if="!accountEdit"
              >Edit
              </button>
            </div>
            <div class="fields-wrap">
              <ValidationProvider class="input-group"
                                  vid="lastName"
                                  :rules="{ required: { allowFalse: false }, alpha: true, min: 2}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="lastName">Last name<span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span></label>
                <input type="text" v-model="user.lastName" id="lastName" placeholder="Enter last name" :disabled="!accountEdit">
              </ValidationProvider>
              <ValidationProvider class="input-group"
                                  vid="firstName"
                                  :rules="{ required: { allowFalse: false }, alpha: true, min: 2}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="firstName">First name<span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span></label>
                <input type="text" v-model="user.firstName" id="firstName" placeholder="Enter first name" :disabled="!accountEdit">
              </ValidationProvider>
              <ValidationProvider class="input-group"
                                  vid="companyName"
                                  :rules="{ required: { allowFalse: false }, min: 2}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="companyName">Company<span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span></label>
                <input type="text" v-model="user.companyName" id="companyName" placeholder="Enter company name" :disabled="!accountEdit">
              </ValidationProvider>
            </div>
          </div>
          <div class="account-info-container">
            <div class="account-info-title-wrap">
              <span class="account-info-title">Security</span>
            </div>
            <div class="fields-wrap">
              <ValidationProvider class="input-group"
                                  vid="email"
                                  :rules="{ required: { allowFalse: false }, email: true}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="email">E-mail<span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span></label>
                <input type="email" v-model="user.email" id="email" placeholder="Enter email" :disabled="!accountEdit">
              </ValidationProvider>
              <div class="update-btn-wrap">
                <button class="btn btn--accent update-btn" type="submit"
                        v-if="accountEdit">
                  <span v-if="!waitingResponse">Update</span>
                  <spinner-component v-else></spinner-component>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SpinnerComponent from '../helpers/spinner-component';

export default {
  name: 'my-account-tab',
  components: { SpinnerComponent },
  data() {
    return {
      accountEdit: false,
      waitingResponse: false,
      user: {
        'timeZone': '',
        'firstName': '',
        'lastName': '',
        'email': '',
        'companyName': ''
      }
    };
  },

  computed: {
    ...mapState('user', ['userData'])
  },

  created() {
    this.user = {
      ...this.userData,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  },

  methods: {
    async updateAccountData() {
      this.waitingResponse = true;
      await this.$store.dispatch('user/updateUserData', this.user)
          .then(() => {
            this.accountEdit = false;
          })
          .finally(() => {
            this.waitingResponse = false;
          });
    }
  }
};
</script>
