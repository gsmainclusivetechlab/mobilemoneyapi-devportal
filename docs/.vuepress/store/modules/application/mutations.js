export default {
  setApplications(state, data) {
    state.applications = data;
  },

  setPaginationToken(state, token) {
    state.paginationToken = token
  },

  setSelectedApplication(state, id) {
    state.selectedApplication = state.applications.find(el => el.appId === id);
  },

  clearSelectedApplication(state) {
    state.selectedApplication = null;
  }
};
