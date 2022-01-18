export default {
  setAllApplications(state, data) {
    state.allApplications = data;
  },
  setAllUsers(state, data) {
    state.allUsers = data;
  },
  setPaginationTokenAllApplications(state, token) {
    state.paginationTokenAllApplications = token
  },
  setPaginationTokenAllUsers(state, token) {
    state.paginationTokenAllUsers = token
  }
};
