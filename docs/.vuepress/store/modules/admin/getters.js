export default {
  getCompanyByUsername(state) {
    return (username) => {
      return state.allUsers.find(el => el.userName.toLowerCase() === username.toLowerCase())?.companyName;
    };
  },
  getAllApplications(state, getters, rootState) {
    return state.allApplications.map(app => {
      const usagePlans = rootState.usagePlans.usagePlans;
      return {
        ...app,
        company: getters.getCompanyByUsername(app.userName),
        usagePlan: usagePlans.length ? usagePlans.find(el => el.id === app.usagePlan)?.name || '' : ''
      };
    });
  },
  getAllUsers(state) {
    return state.allUsers;
  }
};
