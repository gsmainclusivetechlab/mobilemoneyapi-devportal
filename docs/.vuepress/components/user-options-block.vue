<template>
  <div class="user-options">
    <button v-if="isAllowOption('delete')" class="user-options__button user-options__button--delete" type="button" @click="$emit('deleteUser')">
      Delete
    </button>
    <button v-if="isAllowOption('block')" class="user-options__button user-options__button--unblock" type="button" @click="changeStatus">
      {{ userStatus === 2 ? 'Unblock' : 'Block' }}
    </button>
  </div>
</template>

<script>
export default {
  name: "user-options-block",

  props: {
    userStatus: {
      type: Number,
      default: 0
    },
    allowOptions: {
      type: Array,
      default: () => ([])
    }
  },

  data() {
    return {
      tempStatus: 1
    }
  },

  methods: {
    changeStatus() {
      if (this.userStatus !== 2) {
        this.tempStatus = this.userStatus
      }

      this.$emit('changeStatus', this.userStatus === 2 ? this.tempStatus : 2)
    },
    isAllowOption(option) {
      return this.allowOptions.includes(option)
    }
  }
}
</script>
