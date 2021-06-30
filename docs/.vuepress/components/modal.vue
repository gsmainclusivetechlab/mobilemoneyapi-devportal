<template>
  <div class="modal"
       v-if="showModal"
       :class="[{'modal--opened': showModal}, classModification]"
       @click="closeModal">
    <div class="modal_content" @click.stop>
      <button class="modal_close" type="button" @click="closeModal"></button>
      <div class="modal_header">
        <template>
          <slot name="header"></slot>
        </template>
      </div>
      <div class="modal_body">
        <template>
          <slot name="body"></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'Modal',
  props: {
    showModal: Boolean,
    classModification: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
