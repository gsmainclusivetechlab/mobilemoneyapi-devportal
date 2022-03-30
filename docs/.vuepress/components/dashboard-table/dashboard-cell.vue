<template>
  <td class="dashboard-table__cell">
    <tippy style="max-width: 100%" delay="600">
      <template v-slot:trigger>
        <div class="dashboard-table__cell-content">{{ value }}</div>
      </template>
      <span
        class="tooltip-text"
        @click="copyToClipboard"
        :class="{ 'tooltip-text--copied': isCopied }"
      >
        {{ value }}
      </span>
    </tippy>
  </td>
</template>

<script>
export default {
  name: 'dashboard-cell',

  props: ['value'],

  data() {
    return {
      isCopied: false,
      successTimeout: undefined
    };
  },

  methods: {
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.value)
        .then(() => {
          this.setSuccessCopy();
        })
        .catch((err) => {
          console.error('Async: Could not copy text: ', err);
        });
    },
    setSuccessCopy() {
      clearTimeout(this.successTimeout);
      this.isCopied = true;
      this.successTimeout = setTimeout(() => {
        this.isCopied = false;
      }, 500);
    }
  }
};
</script>

<style scoped></style>
