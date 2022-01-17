export default {
  setApplications(state, data) {
    state.applications = data;
  },
  setSelectedApplication(state, id) {
    state.selectedApplication = state.applications.appData.find(el => el.appId === id);
  },
  clearSelectedApplication(state) {
    state.selectedApplication = null;
  }
};
