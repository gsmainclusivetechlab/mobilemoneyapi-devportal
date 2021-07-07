<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <router-link :to="'/'" class="btn-link-back">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z" fill="currentColor"></path></svg>
        </router-link>
        <h1 class="auth-section__title">Sign up</h1>
      </div>
      <div class="form-wrap">
        <form>
          <div class="form-row">
            <label for="full-name">Full name</label>
            <input type="text" id="full-name" placeholder="Enter full name">
          </div>
          <div class="form-row">
            <label for="company">Company</label>
            <input type="text" id="company" placeholder="Enter company name">
          </div>
          <div class="form-row">
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="Enter e-mail">
          </div>
          <div class="form-row">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Create password">
          </div>
          <div class="form-row privacy-row">
            <input type="checkbox" id="privacy-checkbox">
            <label class="privacy-checkbox" for="privacy-checkbox">I agree with <a href="https://www.gsma.com/aboutus/legal" target="_blank">GSMA Terms and Conditions</a> and have read the <a href="https://www.gsma.com/aboutus/legal/privacy" target="_blank">GSMA Privacy Statement</a>.</label>
          </div>
          <div class="button-holder">
            <router-link :to="'#'" class="btn btn--accent">Sign up</router-link>
            <span class="bottom-row">
              <router-link :to="'/login'">Log in</router-link> instead?
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup-section',
};
</script>
