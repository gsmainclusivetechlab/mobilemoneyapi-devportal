<template>
  <section class="get-started-section section--p-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">

## Get Started with Development

<div class="section-description">We offers a powerful and easy to use tools to take full
          advantage of the Mobile Money API Specification.
        </div>
      </div>
      <div class="buttons-holder content-center get-started__btn-holder">
        <router-link
            v-if="borderedLink"
            :to="borderedLink.link"
            class="btn"
        > {{ borderedLink.text }}
        </router-link>
        <router-link
            v-if="accentLink"
            :to="accentLink.link"
            class="btn btn--accent"
        > {{ accentLink.text }}
        </router-link>
      </div>
    </div>
  </section>
</template>
