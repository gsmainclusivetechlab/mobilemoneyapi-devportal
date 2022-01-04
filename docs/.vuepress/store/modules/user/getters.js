export default {
  getFullName(state) {
    return `${state.userData.firstName} ${state.userData.lastName}`;
  },
  getUserName(state) {
    return state.userData.userName
  }
};
