export default {
    data () {
        return {
            codeBlockHeight: 200,
            isArrowActive: true,
            visibleContent: false,
            scrollHeight: 0,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scrollHeight = this.$refs['code-with-block'].scrollHeight;
            if (this.$refs['code-with-block'].querySelector('.theme-code-block__active pre.language-json').scrollWidth > 350) {
                this.scrollHeight += 18;
            }
            this.getHeight();
        })
        //pre[class^="language-"]
    },
    computed: {
      activeCodeBlock() {
          return this.$store.state.codePanel.activeCodeBlock
      }
    },
    watch: {
        activeCodeBlock(val) {
            if(val !== this._uid) {
                this.visibleContent = false
                this.getHeight()
            }
        }
    },
    methods: {
        getHeight() {
            if (this.scrollHeight < 300) {
                this.isArrowActive = false;
                this.codeBlockHeight = this.scrollHeight;
            } else if (this.visibleContent) {
                this.codeBlockHeight = this.scrollHeight;
            } else {
                this.codeBlockHeight = 200;
            }
            this.$refs['code-with-block'].querySelector('pre.language-json').style.maxHeight = `${this.codeBlockHeight}px`
        },
        isToogleHiddenClass() {
            this.visibleContent = !this.visibleContent;
            if(this.visibleContent) {
                this.$store.commit('codePanel/setActiveCodeBlock', this._uid)
            }
            this.getHeight()
        },
    }
}
