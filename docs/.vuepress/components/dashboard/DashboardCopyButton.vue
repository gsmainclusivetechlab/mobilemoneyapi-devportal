<template>
  <div>
    <button class="copy-btn" type="button" @click="copyToClipboard">
      <img src="/images/copy-icon.svg" alt="">
    </button>
    <span class="copy-popup" :class="{'copy-popup__active': copyActive}">Copied to clipboard!</span>
  </div>
</template>

<script>
export default {
  name: "DashboardCopyButton",
  data() {
    return {
      copyActive: false
    }
  },
  props: ['value'],
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.value)
          .then(() => {
            this.copyActive = true;
            setTimeout(() => {
              this.copyActive = false
            }, 1000)
          })
          .catch((err) => {
            console.error('Async: Could not copy text: ', err);
          })
    }
  }
}
</script>
