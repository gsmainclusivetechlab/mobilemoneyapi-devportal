import Application from '../../../api/Application';

export default {
  async getApps({ commit, state, rootGetters }, paginationToken = null) {
    const userName = rootGetters['user/getUserName'];

    try {
      const { data } = await Application.getApps(userName, paginationToken);
      commit('setApplications', data);
      if (state.selectedApplication) {
        commit('setSelectedApplication', state.selectedApplication.appId);
      }
    } catch (error) {
      if (error?.response?.data?.description === 'No App Data present') {
        commit('setApplications', {
          paginationToken: null,
          appData: []
        });
      }
    }
  },

  async postApp({ dispatch, rootGetters }, payload) {
    const userName = rootGetters['user/getUserName'];
    const userRole = rootGetters['user/getUserRole'];
    const data = {
      ...payload,
      userName
    };

    try {
      await Application.postApp(data);
      await dispatch('getApps');

      if (userRole === 'admin' || userRole === 'superadmin') {
        await dispatch('admin/getAllApplications', null, { root: true });
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve(true);
  },

  async updateAppById({ dispatch, state, rootGetters }, payload) {
    const appId = state.selectedApplication.appId;
    const userName = rootGetters['user/getUserName'];

    try {
      await Application.updateAppById(appId, payload, userName);
      await dispatch('getApps');
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  async deleteAppById({ dispatch, state, rootGetters }) {
    const appId = state.selectedApplication.appId;
    const userName = rootGetters['user/getUserName'];

    try {
      await Application.deleteAppById(appId, userName);
      await dispatch('getApps');
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },
};
