<template>
  <section class="testimonials-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--one-column">

## Testimonials

</div>
      <div class="testimonials__slider-wrapper">
        <VueSlickCarousel
            v-bind="options"
            ref="slider">
          <div>
            <div class="testimonials__slide">
              <div class="testimonials__content-holder">
<svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
                <div class="testimonials__description">
                  <p>As a financial service provider operating in a country where the majority of the population have access to banking services through their mobile phones, establishing partnerships and integrating with MMPs has benefited us when extending services to the financially exclude</p>
                </div>
<svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z" fill="#99CCCC"/>
                    </svg>
              </div>
              <div class="testimonials__info-holder">
                <div class="testimonials__info-holder--container">
                  <div>
                    <p class="testimonials__info-holder--company">Musoni</p>
                    <p class="testimonials__info-holder--organisation">Banks and MFIs</p>
                  </div>
                  <div>
                    <p><router-link to="/use-cases/account-linking/">Account Linking</router-link></p>
                    <p><router-link to="/use-cases/agent-services/">Agent Services</router-link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template v-slot:prevArrow>
            <div class="testimonials__arrow testimonials__arrow-prev">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="#242529"/>
              </svg>
            </div>
          </template>
          <template v-slot:nextArrow>
            <div class="testimonials__arrow testimonials__arrow-next">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z" fill="#242529"/>
              </svg>
            </div>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>
