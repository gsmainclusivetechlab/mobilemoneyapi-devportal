<template>
  <div class="what-you-get-section section section--m-gap">
    <div class="container">
      <div class="what-you-get__box">
        <div class="image-holder">
          <img class="image" src="/images/what_youll_get.jpg" alt="">
        </div>
        <div class="content-holder">
          <div class="section-intro">
            <h2 class="h2 section-title"><slot name="title"></slot></h2>
            <div class="section-description"><slot name="description"></slot></div>
          </div>
          <ul class="what-you-get__list">
            <li class="what-you-get__list-item">
              <div class="icon-box">
                <div class="icon-holder docs">
                  <img src="/images/what-you-get-icon-1.svg" alt="">
                </div>
              </div>
              <div class="title">API Docs</div>
            </li>
            <li class="what-you-get__list-item">
              <div class="icon-box">
                <div class="icon-holder use-cases">
                  <img src="/images/what-you-get-icon-2.svg" alt="">
                </div>
              </div>
              <div class="title">API Use Cases</div>
            </li>
            <li class="what-you-get__list-item">
              <div class="icon-box">
                <div class="icon-holder simulator">
                  <img src="/images/what-you-get-icon-3.svg" alt="">
                </div>
              </div>
              <div class="title">GSMA Simulator</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'what-you-get',
};
</script>
