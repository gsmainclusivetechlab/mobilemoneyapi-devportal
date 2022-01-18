<template>
  <ClientOnly>
    <div class="theme-code-group" :class="{'theme-code-group__hidden': !((title && provideObject.activeLanguage === title) ||
    !title)}" :style="{'padding': isButtonShow ? '8px 0 0' : '8px 0'}">
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
      <div class="code-arrow" v-if="isButtonShow" @click="isButtonClick()">
        {{ isVisibleContent ? 'Show less' : 'Show more' }}
      </div>
      <pre
          v-if="codeTabs.length < 1"
          class="pre-blank"
      >// Make sure to add code blocks to your code group</pre>
    </div>
  </ClientOnly>
</template>

<script>
import { nameWithSlash } from '../../helpers/vuexHelper';
import { CODE_PANEL } from '../../store/modules/module-types';
import { SET_ACTIVE_CODE_BLOCK } from '../../store/modules/mutation-types';

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

      scrollHeight: 130,
      isVisibleContent: true,
      isNonCollapse: false
    };
  },
  computed: {
    isButtonShow() {
      return this.scrollHeight >= 220;
    },
    activeCodeBlock() {
      return this.$store.state.codePanel.activeCodeBlock;
    }
  },
  watch: {
    'provideObject.activeMethodIndex'(index) {
      this.activateCodeTab(index);
      if (this.provideObject.activeCodeTabIndex === 0 && ! this.title) {
        if (this.afterInitComponent) {
          this.checkScrollHeight();
        }
      }
    },
    'provideObject.heightOfCodeGroup'(value) {
      this.setMinHeight(value);
    },
    'provideObject.activeCodeTabIndex'(newVal, oldVal) {
      if (oldVal) {
        this.checkScrollHeight();
      }
    },
    'provideObject.activeLanguage'(newVal, oldVal) {
      if (oldVal) {
        this.checkScrollHeight();
      }
    },
    activeCodeBlock(val) {
      if (val !== this.$parent.$parent._uid && ! this.isNonCollapse) {
        this.isButtonClick(false);
      }
    }
  },
  inject: {
    provideObject: {
      default: () => ({
        activeLanguage: '',
        activeMethodIndex: -1,
        activeCodeTabIndex: -1,
        heightOfCodeGroup: 130
      })
    }
  },
  mounted() {
    this.loadTabs();
    this.$nextTick(() => {
      this.afterInitComponent = true;
      this.checkScrollHeight();
    });
  },
  methods: {
    setMinHeight(value) {
      const elements = this.$el.querySelectorAll('.theme-code-block > div[class^="language-"] > pre[class^="language-"]');
      const elementsActive = this.$el.querySelectorAll('.theme-code-block.theme-code-block__active > .language-json > pre.language-json');

      for (let el of elements) {
        if (value === 130) {
          el.style.minHeight = `${value + 23}px`;
        } else {
          el.style.minHeight = `${value}px`;
        }
      }

      for (let el of elementsActive) {
        el.style.minHeight = `${value}px`;
      }
    },
    isButtonClick(param) {
      if (param !== undefined) this.isVisibleContent = param;
      else this.isVisibleContent = ! this.isVisibleContent;

      if (this.isVisibleContent) {
        this.$el.querySelector('.theme-code-block.theme-code-block__active > div[class^="language-"] > pre[class^="language-"]').style.maxHeight = `${this.scrollHeight}px`;
        this.$store.commit(nameWithSlash(CODE_PANEL, SET_ACTIVE_CODE_BLOCK), this.$parent.$parent._uid);
      } else if (this.$el.querySelector('.theme-code-block.theme-code-block__active > div[class^="language-"] > pre[class^="language-"]')) {
        this.$el.querySelector('.theme-code-block.theme-code-block__active > div[class^="language-"] > pre[class^="language-"]').style.maxHeight = '130px';
      }
    },
    changeCodeTab(index) {
      if (this.$parent && this.$parent.$parent) {
        this.$parent.$parent.$emit('set-method-index', index);
        this.activateCodeTab(index);
      }
    },
    loadTabs() {
      let vm = this;
      this.codeTabs = (this.$slots.default || []).filter(slot => Boolean(slot.componentOptions)).map((slot, index) => {
        if (slot.componentOptions.propsData.active === '') {
          vm.changeCodeTab(index);
        }

        return {
          title: slot.componentOptions.propsData.title,
          elm: slot.elm
        };
      });

      if (this.provideObject.activeMethodIndex === -1 && this.codeTabs.length > 0) {
        this.changeCodeTab(0);
      }
      this.activateCodeTab(0);
    },
    activateCodeTab(index) {
      this.codeTabs.forEach(tab => {
        if (tab.elm) {
          tab.elm.classList.remove('theme-code-block__active');
        }
      });

      if (this.codeTabs[index].elm) {
        this.codeTabs[index].elm.classList.add('theme-code-block__active');
      }
    },
    checkScrollHeight() {
      this.scrollHeight = this.$el.querySelector('.theme-code-block.theme-code-block__active > div[class^="language-"] > pre[class^="language-"]')?.scrollHeight;

      const scrollWidth = this.$el.querySelector('.theme-code-block.theme-code-block__active > div[class^="language-"] > pre[class^="language-"]')?.scrollWidth;

      this.scrollHeight += 31; // code copy

      if (scrollWidth >= 350) {
        this.scrollHeight += 8;
      }

      if (this.scrollHeight >= 220) {
        this.isButtonClick(false);
        this.isNonCollapse = false;
        this.$parent.$parent.$emit('set-code-height', 130);
      } else {
        this.isNonCollapse = true;
        this.$parent.$parent.$emit('set-code-height', this.scrollHeight);
      }
    }
  }
};
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


.theme-code-group__hidden {
  height: 0;
  padding: 0 !important;
  visibility: hidden;
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
