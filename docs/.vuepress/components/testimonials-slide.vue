<template>
  <div class="testimonials__slide">
    <div class="testimonials__content-holder">
      <svg
        class="testimonials__quote testimonials__quote--first"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z"
          fill="#99CCCC"
        />
      </svg>
      <div class="testimonials__description">
        <p>
          <slot name="description"></slot>
        </p>
      </div>
      <svg
        class="testimonials__quote testimonials__quote--last"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z"
          fill="#99CCCC"
        />
      </svg>
    </div>
    <div class="testimonials__info-holder">
      <div class="testimonials__info-holder--container">
        <img :style="customStyles" class="testimonials__info-image" :src="imageLink" alt="Company Logo" />
        <div>
          <p class="testimonials__info-holder--company">
            <slot name="company"></slot>
          </p>
          <p class="testimonials__info-holder--organisation">
            <slot name="organisation"></slot>
          </p>
        </div>
        <div>
          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testimonials-slide',
  props: {
    imageLink: {
      type: String,
      default: ''
    },
    customStyles: {
      type: String,
      default: ''
    }
  }
};
</script>
