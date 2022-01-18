export default {
  setUsagePlans(state, data) {
    state.usagePlans = data;
  },

  setPaginationToken(state, token) {
    state.paginationToken = token;
  }
};
