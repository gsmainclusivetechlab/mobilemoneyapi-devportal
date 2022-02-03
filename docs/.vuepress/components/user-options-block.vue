<template>
  <div class="user-options">
    <button v-if="isAllowOption('delete')" class="user-options__button user-options__button--delete" type="button" @click="$emit('deleteUser')">
      Delete
    </button>
    <button v-if="isAllowOption('block')" class="user-options__button user-options__button--unblock" type="button" @click="changeStatus">
      {{ userStatus ? 'Block' : 'Unblock' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'user-options-block',

  props: {
    userStatus: {
      type: Boolean,
      default: false
    },
    allowOptions: {
      type: Array,
      default: () => ([])
    }
  },

  methods: {
    changeStatus() {
      this.$emit('changeStatus');
    },
    isAllowOption(option) {
      return this.allowOptions.includes(option);
    }
  }
};
</script>
