<template>
  <div class="lang-content-box">
    <div class="lang-select-box" :class="{'opened': isListOpened}" @click="isListOpened = !isListOpened">
      <div class="active-lang">
        <div class="text">{{ activeLanguage }}</div>
        <div class="icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13.9999L4.5 10.4999L5.205 9.79492L8 12.5849L10.795 9.79492L11.5 10.4999L8 13.9999Z" fill="white"/>
            <path d="M8 2L11.5 5.5L10.795 6.205L8 3.415L5.205 6.205L4.5 5.5L8 2Z" fill="white"/>
          </svg>
        </div>
      </div>
      <ul class="lang-list">
        <li class="lang-list__item" v-for="item in languages" :key="`lang-${item}`" @click="changeLanguage(item)">
          {{ item }}
        </li>
      </ul>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'code-language-selector',

  data: function() {
    return {
      activeLanguage: 'vue',
      languages: [],
      isListOpened: false,
    }
  },

  mounted: function() {
    setTimeout(()=> {
      this.latnguageTabsInit();
    
      document.addEventListener('click', (event) => {
        if(!event.target.closest('.lang-select-box')) {
          this.isListOpened = false;
        }
      });
    }, 300);
  },

  methods: {
    latnguageTabsInit: function () {
      for(const child of this.$children) {
        this.languages.push(child.title);
      }

      this.activeLanguage = this.languages[0];
    },

    changeLanguage: function(lang) {
      this.activeLanguage = lang;
    },
  },
}
</script>