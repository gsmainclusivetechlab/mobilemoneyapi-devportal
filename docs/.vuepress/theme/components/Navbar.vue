<template>
  <header class="main-header">
    <div class="container">
      <div class="main-header__box">
        <div class="logo-holder">
          <RouterLink
              :to="$localePath"
              class="home-link"
          >
            <img
                v-if="$site.themeConfig.logo"
                class="logo"
                :src="$withBase($site.themeConfig.logo)"
                :alt="$siteTitle"
            >
          </RouterLink>
        </div>
        <nav
          class="links main-nav"
        >
          <ul class="nav-links can-hide">
            <li class="nav-item" :class="{'has-submenu': item.submenu ? true : false}" v-for="(item, index) in $site.themeConfig.nav" :key="index">
              <router-link
                :to="item.link"
                class="nav-link"
              >{{item.text}}
                <div class="expand-icon">
                  <img
                    v-if="item.submenu"
                    src="/images/expand_arrow.svg"
                    alt="arrow icon"
                  >
                </div>
              </router-link>

              <ul v-if="item.submenu" class="nav-links nav-links__submenu">
                <li v-for="(item, index) in item.submenu" :key="index" class="nav-item" >
                  <router-link
                    :to="item.link"
                    class="nav-link"
                  >{{item.text}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <SearchBox/>
        <div class="login-links">
          <button type="button" class="btn btn--register">Sign up</button>
          <button type="button" class="btn btn--accent">Log in</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: {
    SearchBox,
  },
  name: "Navbar"
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: auto;
}
.logo {
  max-width: 200px;
}
</style>
