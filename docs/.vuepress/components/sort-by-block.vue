<template>
  <div class="sort-by-options">
    <button
        class="sort-by-options__button"
        type="button"
        v-for="item of getValues"
        :key="item.title"
        :class="{'sort-by-options__button--active': item.value === value}"
        @click="setSortValue(item.value)"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'sort-by-block',

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
      if (this.pageType === 'users') return this.valuesUsers;
      if (this.pageType === 'applications') return this.valuesApplications;
      if (this.pageType === 'plans') return this.valuesPlans;
      return [];
    }
  },

  data() {
    return {
      valuesUsers: [
        {
          title: 'Newest',
          value: 'Newest'
        },
        {
          title: 'Oldest',
          value: 'Oldest'
        },
        {
          title: 'First name',
          value: 'firstName'
        }
      ],
      valuesApplications: [
        {
          title: 'Key Issue Date',
          value: 'keyIssued'
        },
        {
          title: 'Author',
          value: 'author'
        },
        {
          title: 'Usage plan',
          value: 'usagePlanName'
        }
      ],
      valuesPlans: [
        {
          title: 'Unpublish',
          value: 'unPublish'
        },
        {
          title: 'Publish',
          value: 'publish'
        },
        {
          title: 'Alphabetically',
          value: 'planName'
        }
      ]
    };
  },

  methods: {
    setSortValue(item) {
      this.$emit('input', item);
      this.$emit('hide-sort-block');
    }
  }
};
</script>
