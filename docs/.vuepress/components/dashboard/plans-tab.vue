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
                <input type="text" v-model="accountDB.lastName" id="lastName" placeholder="Enter last name" :disabled="!accountEdit">
              </ValidationProvider>
              <ValidationProvider class="input-group"
                                  vid="firstName"
                                  :rules="{ required: { allowFalse: false }, alpha: true, min: 2}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="firstName">First name<span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span></label>
                <input type="text" v-model="accountDB.firstName" id="firstName" placeholder="Enter first name" :disabled="!accountEdit">
              </ValidationProvider>
              <ValidationProvider class="input-group"
                                  vid="username"
                                  :rules="{ required: { allowFalse: false }, min: 2}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="username">Username<span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span></label>
                <input type="text" v-model="accountDB.username" id="username" placeholder="Enter username" :disabled="!accountEdit">
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
                <input type="email" v-model="accountDB.email" id="email" placeholder="Enter email" :disabled="!accountEdit">
              </ValidationProvider>
              <ValidationProvider class="input-group"
                                  vid="password"
                                  :rules="{ required: { allowFalse: false }, verify_password: true, min: 8}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="password">Password<span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span></label>
                <input v-if="accountEdit" type="password" v-model="accountDB.password" id="password" placeholder="Enter password" :disabled="!accountEdit">
                <input v-else type="password" value="••••••••" placeholder="••••••••" :disabled="!accountEdit">
              </ValidationProvider>
              <div class="update-btn-wrap">
                <button class="btn btn--accent update-btn" type="submit"
                        v-if="accountEdit">
                  Update
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
export default {
  name: "plans-tab",

  data() {
    return {
      accountEdit: false,
      accountDB: {
        firstName: 'Thomas',
        lastName: 'Ride',
        username: 'thomasride-96',
        email: 'thomas.ride@mail.com',
        password: '',
      }
    }
  },

  methods: {
    updateAccountData() {
      this.accountEdit = false
    }
  }
}
</script>

<style scoped>

</style>
