<template>
  <div class="auth-section section">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 class="auth-section__title">Forgot password?</h1>
        <span class="auth-section__sub-title">Please, enter your email address</span>
      </div>
      <div class="form-wrap">
        <form>
          <div class="form-row">
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="Enter e-mail">
          </div>
          <div class="button-holder">
            <router-link :to="'#'" class="btn btn--accent">Recover password</router-link>
            <span class="bottom-row">
              <router-link :to="'/login'" class="bold-grey-link">Go back to Sign in page</router-link>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forgot-password-section',
};
</script>
