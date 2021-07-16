<template>
  <div class="dashboard-content">
    <div class="account-flex-container">
      <div class="account-title-info-wrap">
        <h3 class="content-title">My account</h3>
      </div>
      <div class="account-info-container">
        <div class="account-info-title-wrap">
          <span class="account-info-title">Personal information</span>
          <button class="btn btn--transparent edit-btn" type="button"
                  @click="handleAccountDetailsEdit()"
                  v-if="accountEditBtnEnabled"
          >Edit</button>
        </div>
        <div class="fields-wrap">
          <div class="input-group">
            <label for="fullName">Full name</label>
            <input type="text" id="fullName"
                   v-model="accountDB.fullName"
                   :disabled="accountDetailsDisabled">
          </div>
          <div class="input-group">
            <label for="company">Company</label>
            <input type="text" id="company"
                   v-model="accountDB.company"
                   :disabled="accountDetailsDisabled">
          </div>
          <div class="input-group input-wrapper__custom-select">
            <label for="timezone">Timezone</label>
            <v-select
                return-object
                id="timezone"
                name="timezone"
                :clearable="false"
                :options="items"
                :disabled="accountDetailsDisabled"
                v-model="accountDB.timezone"
            ></v-select>
          </div>
          <div class="update-btn-wrap">
            <button class="btn btn--accent update-btn" type="button"
                    v-if="accountUpdateBtnEnabled"
                    @click="handleAccountDetailsUpdate()"
            >Update</button>
          </div>

        </div>
      </div>
      <div class="account-info-container">
        <div class="account-info-title-wrap">
          <span class="account-info-title">Security</span>
          <button class="btn btn--transparent edit-btn" type="button"
                  @click="handleAccountSecurityEdit()"
                  v-if="accountSecurityBtnEnabled"
          >Edit</button>
        </div>
        <div class="fields-wrap">
          <div class="input-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="accountDB.email" :disabled="accountSecurityDisabled">
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="accountDB.password" :disabled="accountSecurityDisabled">
          </div>
          <div class="update-btn-wrap">
            <button class="btn btn--accent update-btn" type="button"
                    v-if="accountSecurityUpdateBtnEnabled"
                    @click="handleAccountSecurityUpdate()"
            >Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tabIcon = `
  <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 9C11.642 9 15 10.567 15 12.5V15H0V12.5C0 10.567 3.358 9 7.5 9ZM14 12.5C14 11.12 11.09 10 7.5 10C3.91 10 1 11.12 1 12.5V14H14V12.5ZM7.5 0C8.42826 0 9.3185 0.368749 9.97487 1.02513C10.6313 1.6815 11 2.57174 11 3.5C11 4.42826 10.6313 5.3185 9.97487 5.97487C9.3185 6.63125 8.42826 7 7.5 7C6.57174 7 5.6815 6.63125 5.02513 5.97487C4.36875 5.3185 4 4.42826 4 3.5C4 2.57174 4.36875 1.6815 5.02513 1.02513C5.6815 0.368749 6.57174 0 7.5 0ZM7.5 1C6.83696 1 6.20107 1.26339 5.73223 1.73223C5.26339 2.20107 5 2.83696 5 3.5C5 4.16304 5.26339 4.79893 5.73223 5.26777C6.20107 5.73661 6.83696 6 7.5 6C8.16304 6 8.79893 5.73661 9.26777 5.26777C9.73661 4.79893 10 4.16304 10 3.5C10 2.83696 9.73661 2.20107 9.26777 1.73223C8.79893 1.26339 8.16304 1 7.5 1Z"/>
  </svg>
`

export default {
    name: 'my-account-tab',

    data() {
        return {
            tabTitle: 'My account',
            tabIcon: tabIcon,
            accountEditBtnEnabled: true,
            accountDetailsDisabled: true,
            accountUpdateBtnEnabled: false,
            accountSecurityBtnEnabled: true,
            accountSecurityDisabled: true,
            accountSecurityUpdateBtnEnabled: false,
            accountDB: {
                fullName: 'Thomas Ride',
                company: 'Porto',
                timezone: 'GMT+3',
                email: 'thomas.ride@mail.com',
                password: '12345678',
            },
            items: ['GMT+1',
                'GMT+2',
                'GMT+4'],
        }
    },

    methods: {
        handleAccountDetailsEdit() {
            this.accountDetailsDisabled = !this.accountDetailsDisabled;
            this.accountEditBtnEnabled = false;
            this.accountUpdateBtnEnabled = true;
        },
        handleAccountSecurityEdit() {
            this.accountSecurityDisabled = !this.accountSecurityDisabled;
            this.accountSecurityBtnEnabled = false;
            this.accountSecurityUpdateBtnEnabled = true;
        },
        handleAccountDetailsUpdate() {
            this.accountDetailsDisabled = true;
            this.accountEditBtnEnabled = true;
            this.accountUpdateBtnEnabled = false;
        },
        handleAccountSecurityUpdate() {
            this.accountSecurityDisabled = true;
            this.accountSecurityBtnEnabled = true;
            this.accountSecurityUpdateBtnEnabled = false;
        },
    }
};
</script>
