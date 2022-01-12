import { CONFIRMED } from '../../../api/constants';

export default {
  getCompanyByUsername(state) {
    return (username) => {
      return state.allUsers.find(el => el.userName.toLowerCase() === username.toLowerCase())?.companyName;
    };
  },
  getAllApplications(state, getters, rootState) {
    return state.allApplications.appData.map(app => {
      const usagePlans = rootState.usagePlans.usagePlans;
      return {
        ...app,
        company: getters.getCompanyByUsername(app.userName),
        usagePlan: usagePlans.length ? usagePlans.find(el => el.id === app.usagePlan)?.name || '' : ''
      };
    });
  },
  getPaginationForAllApps(state) {
    return state.allApplications.paginationToken
  },
  getAllUsers(state) {
    return state.allUsers.map(user => {
      const status = ! user.userEnabled ? 'Blocked' : user.userStatus === CONFIRMED ? 'Active' : 'Inactive';
      return {
        ...user,
        status
      };
    });
  }
};
