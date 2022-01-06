import User from '../../../api/User';
import { Admin } from '../../../api/admin';

export default {
  getUserData({ commit, dispatch }) {
    Admin.getProfile()
      .then(({ data }) => {
        commit('setUserData', data);
        commit('auth/setLoggedUser', true, { root: true });

        if (data.role === 'admin' || data.role === 'superadmin') {
          dispatch('admin/getAllApplications', null, { root: true });
          dispatch('admin/getAllUsers', null, { root: true });
        }
        dispatch('usagePlans/getUsagePlans', null, { root: true });
        dispatch('application/getApps', null, { root: true });

      })
      .catch(console.log);
  },

  updateUserData({ commit, rootGetters }, payload) {
    const userName = rootGetters['user/getUserName']

    return new Promise((resolve) => {
      User.updateData(payload, userName)
        .then(({ data }) => {
          commit('setUserData', data);
          return resolve(true);
        })
        .catch(console.log);
    });
  }
};
