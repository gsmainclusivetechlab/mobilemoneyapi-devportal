<template>
  <div class="mm-metrics-section section--p-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--two-columns">
        <div class="section-intro__column">
          <h2 class="h2 section-title"><slot name="title"></slot></h2>
        </div>
        <div class="section-intro__column">
          <div class="section-description"><slot name="description"></slot></div>
        </div>
      </div>
      <div class="iframe-box">
        <!-- <iframe src="" frameborder="0"></iframe> -->
        <img src="/images/iframe_placeholder.png" alt="iframe will be here">
      </div>
      <a href="https://www.gsma.com/mobilemoneymetrics/wp-content/uploads/Deployment_Tracker_dataset.xlsx" target="_blank" class="btn btn--accent">Download dataset</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "iframe-component",
}
</script>
