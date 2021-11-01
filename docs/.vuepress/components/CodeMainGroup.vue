<template>
  <ClientOnly>
    <div class="theme-code-group">
      <div class="lang-select-box" v-if="languages.length && activeCodeTabIndex" :class="{'opened': isListOpened}"
           @click="isListOpened =
      !isListOpened">
        <div class="active-lang">
          <div class="text">{{ provideObject.activeLanguage }}</div>
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
      <div class="theme-code-group__nav">
        <ul class="theme-code-group__ul">
          <li
            v-for="(tab, i) in codeTabs"
            :key="`${tab.title}${i}`"
            class="theme-code-group__li"
          >
            <button
              class="theme-code-group__nav-tab"
              :class="{
                'theme-code-group__nav-tab-active': i === activeCodeTabIndex,
              }"
              @click="changeCodeTab(i)"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>
      <slot/>
      <pre
        v-if="codeTabs.length < 1"
        class="pre-blank"
      >// Make sure to add code blocks to your code group</pre>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'CodeMainGroup',
  data () {
    return {
      codeTabs: [],
      activeCodeTabIndex: -1,
      //
      languages: [],
      isListOpened: false,
      provideObject: {
        activeLanguage: '',
        activeMethodIndex: -1
      }
    }
  },
  provide() {
    return {
      provideObject: this.provideObject
    }
  },
  watch: {
    activeCodeTabIndex (index) {
      this.activateCodeTab(index)
    }
  },
  mounted () {
    this.$on('get-code-languages', this.setActiveMethod)
    this.$on('set-method-index', (i) => {
      this.provideObject.activeMethodIndex = i
    })
    this.loadTabs()
    setTimeout(()=> {

      document.addEventListener('click', (event) => {
        if(!event.target.closest('.lang-select-box')) {
          this.isListOpened = false;
        }
      });
    }, 300);
  },
  beforeDestroy() {
    this.$off('get-code-languages')
    this.$off('set-method-index')
  },
  methods: {
    setActiveMethod(languages) {
      this.languages.push(...languages)
      this.provideObject.activeLanguage = languages[0]
    },
    changeLanguage(lang) {
      this.provideObject.activeLanguage = lang;
      this.changeCodeTab(1)
    },
    changeCodeTab (index) {
      this.activeCodeTabIndex = index
    },
    loadTabs () {
      this.codeTabs = (this.$slots.default || []).filter(slot => Boolean(slot.componentOptions)).map((slot, index) => {
        if (slot.componentOptions.propsData.active === '') {
          this.activeCodeTabIndex = index
        }

        return {
          title: slot.componentOptions.propsData.title,
          elm: slot.elm
        }
      })

      if (this.activeCodeTabIndex === -1 && this.codeTabs.length > 0) {
        this.activeCodeTabIndex = 0
      }

      this.activateCodeTab(0)
    },
    activateCodeTab (index) {
      this.codeTabs.forEach(tab => {
        if (tab.elm) {
          tab.elm.classList.remove('theme-code-block__active')
        }
      })

      if (this.codeTabs[index].elm) {
        this.codeTabs[index].elm.classList.add('theme-code-block__active')
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
  .theme-code-group {}
  .theme-code-group__nav {
    margin-bottom: -35px;
    background-color: $codeBgColor;
    padding-bottom: 22px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding-left: 10px;
    padding-top: 10px;
  }
  .theme-code-group__ul {
    margin: auto 0;
    padding-left: 0;
    display: inline-flex;
    list-style: none;
  }
  .theme-code-group__li {}
  .theme-code-group__nav-tab {
    border: 0;
    padding: 5px;
    cursor: pointer;
    background-color: transparent;
    font-size: 0.85em;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }
  .theme-code-group__nav-tab-active {
    border-bottom: #42b983 1px solid;
  }
  .pre-blank {
    color: #42b983;
  }
</style>
