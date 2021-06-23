<template>
  <div class="industries-section section--m-gap">
    <div class="container">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">
          <h2 v-if="title" class="h2 section-title">{{ title }}</h2>
          <div v-if="description" class="section-description">{{ description }}</div>
        </div>
        <div v-if="mainIndustry" class="section-intro__column">
           <router-link 
              v-if="!mainIndustry.target"
              :to="mainIndustry.link"
              class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" :style="{'background-color': mainIndustry.iconBackground}">
                  <img :src="mainIndustry.icon" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">{{ mainIndustry.title }}</h5>
              <div class="industries-description">{{ mainIndustry.description }}</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>

            <a v-else :href="mainIndustry.link" class="industries-card" target="_blank">
              <div class="icon-box">
                <div class="icon-holder" :style="{'background-color': mainIndustry.iconBackground}">
                  <img :src="mainIndustry.icon" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">{{ mainIndustry.title }}</h5>
              <div class="industries-description">{{ mainIndustry.description }}</div>
              <div class="btn btn--transparent">Learn more</div>
            </a>
        </div>
      </div>
      <div v-if="industries" class="industries-grid">
        <div class="cards-grid">
          <div class="cards-grid__item" v-for="(industry, index) in industries" :key="`industry-${index}`">
            <router-link 
              v-if="!industry.target"
              :to="industry.link"
              class="industries-card"
            >
              <div class="icon-box">
                <div class="icon-holder" :style="{'background-color': industry.iconBackground}">
                  <img :src="industry.icon" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">{{ industry.title }}</h5>
              <div class="industries-description">{{ industry.description }}</div>
              <div class="btn btn--transparent">Learn more</div>
            </router-link>

            <a v-else :href="industry.link" class="industries-card" target="_blank">
              <div class="icon-box">
                <div class="icon-holder" :style="{'background-color': industry.iconBackground}">
                  <img :src="industry.icon" alt="industry icon">
                </div>
              </div>
              <h5 class="industries-title">{{ industry.title }}</h5>
              <div class="industries-description">{{ industry.description }}</div>
              <div class="btn btn--transparent">Learn more</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "industries",
  props: {
    title:{
      type: String,
      default: null,
    },
    description:{
      type: String,
      default: null,
    },
    mainIndustry:{
      type: Object,
      default: null,
    },
    industries:{
      type: Array[Object],
      default: null,
    }
  },
}
</script>
