export default {
    created() {
        this.activeTabName = this.tabs.length ? this.tabs[0] : ''
    },

    methods: {
        handleTabSwitch(tabName) {
            this.activeTabName = tabName;
            this.$forceUpdate()
        },
        isActiveTab(title) {
            return title === this.activeTabName
        },
    }
}
