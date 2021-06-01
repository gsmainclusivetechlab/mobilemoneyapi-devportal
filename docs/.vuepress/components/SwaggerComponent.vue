<template>
  <div class="swagger" id="swagger"></div>
</template>

<script>
import 'swagger-ui/dist/swagger-ui.css';

export default {
  name: "SwaggerComponent",
  props: ['url'],
  mounted() {
    import("swagger-ui/dist/swagger-ui-es-bundle.js").then(swagger => {
      if (swagger) {
        const SwaggerUI = require('swagger-ui');
        SwaggerUI({
          url: this.url,
          dom_id: '#swagger',
        });
      }
    });
  }
}
</script>
