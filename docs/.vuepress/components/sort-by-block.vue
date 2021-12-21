<template>
  <div class="sort-by-options">
    <button
        class="sort-by-options__button"
        type="button"
        v-for="item of getValues"
        :key="item"
        :class="{'sort-by-options__button--active': item === value}"
        @click="setSortValue(item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "sort-by-block",

  props: {
    value: {
      type: String,
      default: ''
    },
    pageType: {
      type: String,
      default: ''
    }
  },

  computed: {
    getValues() {
      if(this.pageType === 'users') return this.valuesUsers
      if(this.pageType === 'applications') return this.valuesApplications
      if(this.pageType === 'plans') return this.valuesPlans
      return []
    }
  },

  data() {
    return {
      valuesUsers: [
          'Newest',
          'Oldest',
          'Active',
          'Inactive',
          'Blocked'
      ],
      valuesApplications: [
          'Key Issue Date',
          'Author',
          'Usage plan'
      ],
      valuesPlans: [
          'Unpublish',
          'Publish'
      ]
    }
  },

  methods: {
    setSortValue(item) {
      this.$emit('input', item)
      this.$emit('hide-sort-block')
    }
  }
}
</script>
