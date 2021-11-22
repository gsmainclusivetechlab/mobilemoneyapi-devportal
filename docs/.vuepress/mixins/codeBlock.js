export default {
    data() {
        return {
            codeBlockHeight: 200,
            isArrowActive: true,
            visibleContent: false,
            scrollHeight: 0,
        }
    },
    computed: {
        activeCodeBlock() {
            return this.$store.state.codePanel.activeCodeBlock
        }
    },
    methods: {
        getHeight() {
            const codeBlock = this.$refs['code-with-block'].querySelector('.theme-code-block__active .theme-code-block__active pre.language-json')

            if (this.scrollHeight < 300) {
                console.log('hi')
                this.isArrowActive = false;
                this.codeBlockHeight = this.scrollHeight;
            } else if (this.visibleContent) {
                this.codeBlockHeight = this.scrollHeight;
            } else {
                this.codeBlockHeight = 200;
            }

            codeBlock.style.maxHeight = `${this.codeBlockHeight}px`
        },
        isToogleHiddenClass() {
            this.visibleContent = !this.visibleContent;
            if (this.visibleContent) {
                this.$store.commit('codePanel/setActiveCodeBlock', this._uid)
            }
            this.getHeight()
        },
        initScrollHeight() {
            this.scrollHeight = this.$refs['code-with-block'].scrollHeight;
            const codeBlock = this.$refs['code-with-block'].querySelector('.theme-code-block__active .theme-code-block__active pre.language-json')
            if (codeBlock.scrollWidth > 350) {
                this.scrollHeight += 18;
            }
            this.getHeight();
        }
    }
}
