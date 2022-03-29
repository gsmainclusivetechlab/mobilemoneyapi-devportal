<template>
  <div class="copy-btn-wrap">
    <button class="copy-btn" @click.prevent="copyToClipboard($event)">
      <img src="/images/copy-icon.svg" alt="">
    </button>
    <span class="copy-popup">Copied to clipboard!</span>
  </div>
</template>

<script>
export default {
  name: 'copy-btn',
  methods: {
    copyToClipboard(e) {
      const parentNode = e.target.closest('.theme-code-group');
      const activeChildNodes = parentNode.getElementsByClassName('theme-code-block__active');
      const lastActiveChildNode = activeChildNodes[activeChildNodes.length - 1];
      let contentArr;
      if (lastActiveChildNode.getElementsByTagName('span').length) {
        contentArr = lastActiveChildNode.getElementsByTagName('span');
      } else contentArr = lastActiveChildNode.getElementsByTagName('code')[0];
    }
  }
};
</script>
