<template>
  <div class="benefits-list-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">
        <slot name="title"></slot>
        <div class="section-description"><slot name="description"></slot></div>
      </div>
      <div class="benefits-list-holder">
        <div v-for="(list, index) in benefitsLists" class="benefits-list" :key="`list-${index}`">
          <h4 class="h4">{{ list.title }}</h4>
          <ul class="dotted-list">
            <li v-for="(item, index) in list.items" :key="`list-item-${index}`" class="dotted-list__item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'benefits-list',

  data: function() {
    return {
      benefitsLists: [
        {
          title: 'For API providers',
          items: [
            'Lobortis porta aliquam morbi eget. Duis in vitae sed eleifend hendrerit justo, vestibulum, proin.',
            'Dictumst vel velit augue vitae, eu rhoncus quis.',
            'Massa platea nunc metus vestibulum turpis lorem eu purus sed.',
          ]
        },
        {
          title: 'For API consumers',
          items: [
            'Aliquet sem ullamcorper metus, fames vivamus viverra varius ac aliquet.',
            'Orci sodales sit aliquam enim non convallis. Pharetra, nulla sed consectetur eu suscipit diam.',
            'Porta aenean a iaculis donec purus.',
          ]
        }
      ]
    }
  }
};
</script>
