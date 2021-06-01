<template>
  <footer class="footer">
    <ul class="nav-links can-hide">
      <li class="nav-item" v-for="item in $site.themeConfig.footer">
        <router-link
            :to="item.link"
            class="nav-link"
        >{{item.text}}</router-link>
      </li>
    </ul>
    <div class="text-grey-darker text-center">&copy; 2021 Yours truely. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: auto;
}
</style>
