export default {
    getApplicationsList(state) {
        return state.applications.map(el => ({appName: el.appName, appId: el.appId}))
    }
}
