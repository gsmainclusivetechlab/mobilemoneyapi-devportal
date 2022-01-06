import AllApplications from '../../../api/admin/allApplications';
import AllUsers from '../../../api/admin/allUsers';
import AllPlans from '../../../api/admin/allPlans';

export default {
  getAllApplications({ commit }) {
    AllApplications.get()
      .then(({ data }) => {
        commit('setAllApplications', data);
      })
      .catch(console.log);
  },

  deleteApplicationByUser({ dispatch }, { userName, appId }) {
    AllApplications.deleteById(userName, appId)
      .then(() => {
        dispatch('getAllApplications');
        dispatch('application/getApps', null, { root: true });
      })
      .catch(console.log);
  },

  getAllUsers({ commit }) {
    AllUsers.get()
      .then(({ data }) => {
        commit('setAllUsers', data.users);
      })
      .catch(console.log)
      .finally(() => {
        return Promise.resolve();
      });
  },

  async updateRole({ dispatch, state }, userId) {
    const { role, userName } = state.allUsers.find(user => user.userId === userId);

    const roles = [
      'user', 'admin'
    ];

    const roleIndex = roles.indexOf(role) + 1;

    const data = {
      role: roles[roleIndex] ? roles[roleIndex] : roles[0]
    };

    try {
      await AllUsers.updateRole(userName, data);
      await dispatch('getAllUsers');
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  setUserStatus({ dispatch, state }, userName) {
    const { userEnabled } = state.allUsers.find(user => user.userName === userName);
    AllUsers.setUserStatus(userName, userEnabled)
      .then(() => {
        dispatch('getAllUsers');
      })
      .catch(console.log);
  },

  deleteUserByUsername({ dispatch }, userName) {
    AllUsers.deleteByUsername(userName)
      .then(() => {
        dispatch('getAllUsers');
      })
      .catch(console.log);
  },

  async changePublishedState({ dispatch }, { planId, published }) {
    try {
      await AllPlans.updateStateById({ planId, published: ! published });
      await dispatch('usagePlans/getUsagePlans', null, { root: true });
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  }
};
