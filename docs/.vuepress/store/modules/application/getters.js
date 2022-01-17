export default {
  getApplicationsList(state) {
    return state.applications.appData.map(el => ({ appName: el.appName, appId: el.appId, keyIssued: el.keyIssued }));
  },

  getPaginationToken(state) {
    return state.applications.paginationToken
  },
};
