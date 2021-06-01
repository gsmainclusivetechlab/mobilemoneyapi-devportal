<template>
  <header class="navbar">
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
    <nav
      class="links"
    >
      <ul class="nav-links can-hide">
        <li class="nav-item" v-for="item in $site.themeConfig.nav">
          <router-link
            :to="item.link"
            class="nav-link"
          >{{item.text}}</router-link>
        </li>
      </ul>
      <SearchBox/>
    </nav>
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
