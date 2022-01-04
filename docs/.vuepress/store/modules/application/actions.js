import Application from '../../../api/Application';

export default {
  getApps({ commit, state, rootGetters }) {
    const userName = rootGetters['user/getUserName']

    Application.getApps(userName)
      .then(({ data }) => {
        commit('setApplications', data);

        if (state.selectedApplication) {
          commit('setSelectedApplication', state.selectedApplication.appId);
        }
      })
      .catch((e) => {
        if (e.response.data.description === 'No App Data present') {
          commit('setApplications', []);
        }
      });
  },

  postApp({ dispatch, rootGetters }, payload) {
    const userName = rootGetters['user/getUserName']

    const data = {
      ...payload,
      userName
    };

    return new Promise((resolve) => {
      Application.postApp(data)
        .then(() => {
          dispatch('getApps');
          return resolve(true);
        })
        .catch(console.log);
    });
  },

  updateAppById({ dispatch, state, rootGetters }, payload) {
    const appId = state.selectedApplication.appId;
    const userName = rootGetters['user/getUserName']

    return new Promise((resolve) => {
      Application.updateAppById(appId, payload, userName)
        .then(() => {
          dispatch('getApps');
          resolve(true);
        })
        .catch(console.log);
    });
  },

  deleteAppById({ dispatch, state, rootGetters }) {
    const appId = state.selectedApplication.appId;
    const userName = rootGetters['user/getUserName']

    return new Promise((resolve) => {
      Application.deleteAppById(appId, userName)
        .then(() => {
          dispatch('getApps');
          return resolve();
        })
        .catch(console.log);
    });

  },
};
