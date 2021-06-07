<template>
  <footer class="footer main-footer">
    <div class="main-footer__content-holder">
      <ul class="nav-links can-hide">
        <li class="nav-item" v-for="item in $site.themeConfig.footer">
          <router-link
            v-if="!item.target"
            :to="item.link"
            class="nav-link"
          >{{item.text}}</router-link>
          <a v-else :href="item.link" class="nav-link" target="_blank">
            {{item.text}}
          </a>
        </li>
      </ul>
      <div class="copyright"> Copyright &copy; 2021 GSMA. GSM and the GSM Logo are registered and owned by the GSMA.</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
