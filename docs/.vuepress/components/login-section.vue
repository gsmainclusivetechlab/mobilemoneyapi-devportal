<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <router-link :to="'/'" class="btn-link-back">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z" fill="currentColor"></path></svg>
        </router-link>
        <h1 class="auth-section__title">Log in</h1>
      </div>
      <div class="form-wrap">
        <form>
          <div class="form-row">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter e-mail">
          </div>
          <div class="form-row">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Create password">
          </div>
          <div class="form-row forgot-password-row">
            <router-link :to="'/forgot-password'" class="btn-forgot-password">Forgot password?</router-link>
          </div>
          <div class="button-holder">
            <router-link :to="'#'" class="btn btn--accent">Log in</router-link>
            <span class="bottom-row">
              <router-link :to="'/signup'">Sign up</router-link> instead?
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-section',
};
</script>
