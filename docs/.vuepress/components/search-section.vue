<template>
  <div class="search-section section--p-gap has-bg">
    <div class="container container--thin">
      <div class="section-intro">
        <h1 class="hero-section__title text-center">{{ title }}</h1>
        <div class="hero-section__description text-center">{{ description }}</div>
      </div>
      <div class="search-input-holder">
        <input
          type="text"
          class="input input--search"
          v-model="filterInput"
          @input="handleSearch"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-section',

  props: [
    'title',
    'description',
  ],

  data: function() {
    return {
      filterInput: '',
    }
  },

  created: function() {
    console.log('faq gage created');
  },

  methods: {
    handleSearch: function() {
      this.$emit('on-search', this.filterInput);
    }
  }
}
</script>