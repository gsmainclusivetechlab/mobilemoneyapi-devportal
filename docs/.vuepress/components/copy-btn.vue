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
          }
          else contentArr = lastActiveChildNode.getElementsByTagName('code')[0];
          contentArr.forEach((element) => {
              console.log('element', element.innerHTML)
              console.log('element length', element.innerHTML.length)
          });
          // console.log(contentArr);
          // navigator.clipboard.writeText(this[text]).then(function() {}, function(err) {
          //     console.error('Async: Could not copy text: ', err);
          // });
          // const popup = document.querySelectorAll(`span[data-bind="${text}"]`);
          // popup[0].style.opacity = 1;
          // setTimeout(() => { popup[0].style.transition = 'opacity ease-in-out 1.5s'; }, 0);
          // setTimeout(() => { popup[0].style.opacity = 0; }, 0);
          // popup[0].style.transition = 'none';
      }
  }
}
</script>
