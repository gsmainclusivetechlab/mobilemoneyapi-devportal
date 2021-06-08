<template>
  <div class="industries-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">
          <h2 class="h2 section-title">Explore what’s possible</h2>
          <div class="section-description">Bibendum integer quam sem purus donec. Morbi volutpat euismod cras convallis quam.</div>
        </div>
        <div class="section-intro__column">
          <div class="industries-card">
            <div class="icon-box">
              <div class="icon-holder" :style="{'background-color': mainIndustry.iconBackground}">
                <img :src="mainIndustry.icon" alt="industry icon">
              </div>
            </div>
            <h5 class="industries-title">{{ mainIndustry.title }}</h5>
            <div class="industries-description">{{ mainIndustry.description }}</div>
            <router-link
              v-if="!mainIndustry.target"
              :to="mainIndustry.link"
              class="btn btn--transparent"
            >Learn more</router-link>
            <a v-else :href="mainIndustry.link" class="btn btn--transparent" target="_blank">
              Learn more
            </a>
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
              <h5 class="industries-title">{{ industry.title }}</h5>
              <div class="industries-description">{{ industry.description }}</div>
              <router-link
                v-if="!industry.target"
                :to="industry.link"
                class="btn btn--transparent"
              >Learn more</router-link>
              <a v-else :href="industry.link" class="btn btn--transparent" target="_blank">
                Learn more
              </a>
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
        link: '/examples/',
        icon: '/images/industry-1.svg',
        iconBackground: '#DE002B',
        title: 'Mobile Money Provider',
        description: 'Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.',
      },

      industries: [
        {
          link: 'https://www.gsma.com/aboutus/',
          target: '_blank',
          icon: '/images/industry-1.svg',
          iconBackground: '#DE002B',
          title: 'Mobile Money Providers',
          description: 'Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-2.svg',
          iconBackground: '#EE3772',
          title: 'Merchants & Service Providers',
          description: 'Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-3.svg',
          iconBackground: '#FCBB2C',
          title: 'Governments',
          description: 'Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-3.svg',
          iconBackground: '#00A182',
          title: 'Humanitarian Agencies',
          description: 'Tempor, pellentesque volutpat id ipsum ornare vestibulum, velit sed. Ut hendrerit commodo scelerisque ipsum vel.',
        },

        {
          link: '/examples/',
          icon: '/images/industry-4.svg',
          iconBackground: '#00A6C9',
          title: 'International Transfer Organisations',
          description: 'Fringilla egestas ut sit odio hendrerit in quis purus in. Molestie euismod cras dis neque eget urna eget amet enim.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-5.svg',
          iconBackground: '#FF6600',
          title: 'Payment Service Providers & Payment Aggregators',
          description: 'At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-1.svg',
          iconBackground: '#95226C',
          title: 'Banks & Microfinance Institutions',
          description: 'At et tristique vulputate est elementum aliquet. Odio magna semper mauris magna erat dolor justo condimentum.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-5.svg',
          iconBackground: '#99CCCC',
          title: 'FinTech Providers (Insurance Savings Loans)',
          description: 'Et vel tincidunt ipsum eleifend nisi. Ipsum sapien neque pellentesque nec nibh tellus scelerisque ut lectus.',
        },

        {
          link: '/examples/',
          icon: '/images/industry-1.svg',
          iconBackground: '#00A6C9',
          title: 'Employers',
          description: 'Integer pulvinar risus nisi tristique. Molestie dictumst ac in pulvinar et natoque semper vitae convallis.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-2.svg',
          iconBackground: '#FF6600',
          title: 'Energy & Utilities & AgriTech',
          description: 'Euismod pulvinar mattis laoreet mauris neque egestas lorem enim. At scelerisque nisl eros, nunc, eu urna, nisl viverra non.',
        },
        {
          link: '/examples/',
          icon: '/images/industry-3.svg',
          iconBackground: '#95226C',
          title: 'Education & Health',
          description: 'Risus, ligula facilisis viverra placerat a neque sed. Sagittis, sit nunc consectetur amet feugiat ornare.',
        },
        {
          link: '/examples/',
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
