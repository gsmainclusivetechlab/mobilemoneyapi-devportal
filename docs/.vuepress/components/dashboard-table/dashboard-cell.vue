<template>
      <td class="dashboard-table__cell">
        <tippy
            interactive
            style="width: 100%"
            delay="600"
        >
          <template v-slot:trigger>
            <div class="dashboard-table__cell-content">{{ value }}</div>
          </template>

          <span @click="copyToClipboard">
            {{value}}
<!--                  <button @click='copyToClipboard' @blur="buttonText = 'Copy'" class='btn-tippy-copy'>{{ buttonText }}</button>-->
          </span>
        </tippy>
      </td>
</template>

<script>
export default {
  name: "dashboard-cell",
  props: ['value'],
  data() {
    return {
      buttonText: 'Copy'
    }
  },
  methods: {
    copyToClipboard() {
      this.buttonText = 'Copied!';

      navigator.clipboard.writeText(this.value)
          .catch((err) => {
            console.error('Async: Could not copy text: ', err);
          })
    }
  }
}
</script>

<style scoped>

</style>
