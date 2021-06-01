<template>
  <div class="demo-component">
    <button v-on:click="counter += 1">Push me</button>
    <p>Button was pushed {{ counter }} times</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
      }
    }
  }
</script>
