<template>
  <ClientOnly>
    <div class="theme-code-group" v-show="(title && provideObject.activeLanguage === title) ||
    !title" :style="{'padding': isButtonShow ? '8px 0 0' : '8px 0'}">
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
                'theme-code-group__nav-tab-active': i === provideObject.activeMethodIndex,
              }"
                @click="changeCodeTab(i)"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>
      <slot/>
      <div class="code-arrow" v-if="isButtonShow" @click="isVisibleContent = !isVisibleContent">
        {{ isVisibleContent ? 'Hidden' : 'Show more' }} {{scrollHeight}}
      </div>
      <pre
          v-if="codeTabs.length < 1"
          class="pre-blank"
      >// Make sure to add code blocks to your code group</pre>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'CodeGroup',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      codeTabs: [],
      afterInitComponent: false,

      scrollHeight: 200,
      isVisibleContent: true
    }
  },
  computed: {
    isButtonShow() {
      return this.scrollHeight >= 350
    }
  },
  watch: {
    'provideObject.activeMethodIndex'(index) {
      this.activateCodeTab(index)
      if (this.provideObject.activeCodeTabIndex === 0 && !this.title) {
        if (this.afterInitComponent) {
          this.checkScrollHeight()
        }
      }
    },
    isVisibleContent(val) {
      console.log('change')
      if (val) {
        this.$el.querySelector('.theme-code-block.theme-code-block__active > .language-json > pre.language-json').style.maxHeight = `${this.scrollHeight}px`
      } else {
        this.$el.querySelector('.theme-code-block.theme-code-block__active > .language-json > pre.language-json').style.maxHeight = '200px'
      }
    }
  },
  inject: {
    provideObject: {
      default: () => ({
        activeLanguage: '',
        activeMethodIndex: -1,
        activeCodeTabIndex: -1,
      })
    }
  },
  mounted() {
    this.loadTabs()
    this.$nextTick(() => {
      this.afterInitComponent = true
      this.checkScrollHeight()
    })
  },
  methods: {
    changeCodeTab(index) {
      if (this.$parent && this.$parent.$parent) {
        this.$parent.$parent.$emit('set-method-index', index)
        this.activateCodeTab(index)
      }
    },
    loadTabs() {
      let vm = this
      this.codeTabs = (this.$slots.default || []).filter(slot => Boolean(slot.componentOptions)).map((slot, index) => {
        if (slot.componentOptions.propsData.active === '') {
          vm.changeCodeTab(index)
        }

        return {
          title: slot.componentOptions.propsData.title,
          elm: slot.elm
        }
      })

      if (this.provideObject.activeMethodIndex === -1 && this.codeTabs.length > 0) {
        this.changeCodeTab(0)
      }
      this.activateCodeTab(0)
    },
    activateCodeTab(index) {
      this.codeTabs.forEach(tab => {
        if (tab.elm) {
          tab.elm.classList.remove('theme-code-block__active')
        }
      })

      if (this.codeTabs[index].elm) {
        this.codeTabs[index].elm.classList.add('theme-code-block__active')
      }
    },
    checkScrollHeight() {
      this.scrollHeight = this.$el.querySelector('.theme-code-block.theme-code-block__active > .language-json > pre.language-json')?.scrollHeight
      console.dir(this.$el.querySelector('.theme-code-block.theme-code-block__active > .language-json > pre.language-json'));
      if (this.scrollHeight >= 350) {
        this.scrollHeight += 18
        this.isVisibleContent = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.code-arrow {
  //position: absolute;
  text-align: center;
  background-position: center;
  background-size: cover;
  background-color: #242529;
  border-radius: 0 0 8px 8px;
  padding: 5px 10px;
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 500;
  z-index: 5;
  color: white;
  //left: 0;
  //right: 0;
  border-bottom: 3px solid #525356;

  &:hover {
    cursor: pointer;
  }
}

.theme-code-group {
}

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

.theme-code-group__li {
}

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
