<template>
  <section class="get-started-section section--p-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">

## Ready to explore?

<div class="section-description">Find our latest API documentation.
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
