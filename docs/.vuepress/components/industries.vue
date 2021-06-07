<template>
  <div class="industries-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">
          <h2 class="h2 section-title">Mobile Money Metrics</h2>
        </div>
        <div class="section-intro__column">
          <div class="section-description">
            <div class="industries-card">
              <div class="icon-box">
                <div class="icon-holder" :style="{'background-color': mainIndustry.iconBackground}">
                  <img :src="mainIndustry.icon" alt="industry icon">
                </div>
              </div>
              <h6 class="industries-title">{{ mainIndustry.icon }}</h6>
              <div class="industries-description">{{ mainIndustry.description }}</div>
              <a href="#" class="btn btn--transparent">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="industries-grid">
        <div class="cards-grid">
          <div class="cards-grid__item" v-for="(industry, index) in industries" :key="`industry-${index}`">
            <div class="industries-card">
              <div class="icon-box">
                <div class="icon-holder" :style="{'background-color': industry.iconBackground}">
                  <img :src="industry.icon" alt="industry icon">
                </div>
              </div>
              <h6 class="industries-title">{{ industry.icon }}</h6>
              <div class="industries-description">{{ industry.description }}</div>
              <a href="#" class="btn btn--transparent">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "industries",

  data: function() {
    return {
      mainIndustry: {
        icon: '/images/industry-1.svg',
        iconBackground: '#DE002B',
        title: 'Mobile Money Provider',
        description: 'Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.',
      },

      industries: [
        {
          icon: '/images/industry-1.svg',
          iconBackground: '#DE002B',
          title: 'Mobile Money Providers',
          description: 'Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.',
        },
        {
          icon: '/images/industry-2.svg',
          iconBackground: '#EE3772',
          title: 'Merchants &amp; Service Providers',
          description: 'Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.',
        },
        {
          icon: '/images/industry-3.svg',
          iconBackground: '#FCBB2C',
          title: 'Governments',
          description: 'Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.',
        },
        {
          icon: '/images/industry-3.svg',
          iconBackground: '#00A182',
          title: 'Humanitarian Agencies',
          description: 'Tempor, pellentesque volutpat id ipsum ornare vestibulum, velit sed. Ut hendrerit commodo scelerisque ipsum vel.',
        },

        {
          icon: '/images/industry-4.svg',
          iconBackground: '#00A6C9',
          title: 'International Transfer Organisations',
          description: 'Fringilla egestas ut sit odio hendrerit in quis purus in. Molestie euismod cras dis neque eget urna eget amet enim.',
        },
        {
          icon: '/images/industry-5.svg',
          iconBackground: '#FF6600',
          title: 'Payment Service Providers & Payment Aggregators',
          description: 'At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.',
        },
        {
          icon: '/images/industry-1.svg',
          iconBackground: '#95226C',
          title: 'Banks & Microfinance Institutions',
          description: 'At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.',
        },
        {
          icon: '/images/industry-5.svg',
          iconBackground: '#99CCCC',
          title: 'FinTech Providers (Insurance Savings Loans)',
          description: 'Et vel tincidunt ipsum eleifend nisi. Ipsum sapien neque pellentesque nec nibh tellus scelerisque ut lectus.',
        },

        {
          icon: '/images/industry-1.svg',
          iconBackground: '#00A6C9',
          title: 'Employers',
          description: 'Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.',
        },
        {
          icon: '/images/industry-2.svg',
          iconBackground: '#FF6600',
          title: 'Energy & Utilities & AgriTech',
          description: 'Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.',
        },
        {
          icon: '/images/industry-3.svg',
          iconBackground: '#95226C',
          title: 'Education & Health',
          description: 'Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.',
        },
        {
          icon: '/images/industry-3.svg',
          iconBackground: '#99CCCC',
          title: 'Mobile Money Agents',
          description: 'Tempor, pellentesque volutpat id ipsum ornare vestibulum, velit sed. Ut hendrerit commodo scelerisque ipsum vel.',
        },
      ]
    }
  }
}
</script>
