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
            this.scrollHeight = this.$refs['code-with-block'].scrollHeight
            if (this.$refs['code-with-block'].querySelector('pre.language-json').scrollWidth > 350) {
                this.scrollHeight += 18;
            }
            this.getHeight()
        })
    },
    methods: {
        getHeight() {
            if (this.scrollHeight < 250) {
                this.isArrowActive = false;
                this.codeBlockHeight = this.scrollHeight;
            } else if (this.visibleContent) {
                this.codeBlockHeight = this.scrollHeight;
            } else {
                this.codeBlockHeight = 200;
            }
        },
        isToogleHiddenClass() {
            this.visibleContent = !this.visibleContent
            this.getHeight()
        },
    }
}
