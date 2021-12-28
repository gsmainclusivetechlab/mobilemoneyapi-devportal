import Application from "../../../api/Application";
import CookieManager from "../../../helpers/CookieManager";

export default {
    getApps({commit, state}) {
        Application.getApps()
            .then(({data}) => {
                commit('setApplications', data)

                if (state.selectedApplication) {
                    commit('setSelectedApplication', state.selectedApplication.appId)
                }
            })
            .catch((e) => {
                if (e.response.data.description === "No App Data present") {
                    commit('setApplications', [])
                }
            })
    },

    postApp({dispatch}, payload) {
        const userName = CookieManager.getValue('userName');

        const data = {
            ...payload,
            userName
        }

        return new Promise((resolve) => {
            Application.postApp(data)
                .then(() => {
                    dispatch('getApps');
                    return resolve(true);
                })
                .catch(console.log)
        })
    },

    updateAppById({dispatch, state}, payload) {
        const appId = state.selectedApplication.appId
        return new Promise((resolve) => {
            Application.updateAppById(appId, payload)
                .then(() => {
                    dispatch('getApps')
                    resolve(true)
                })
                .catch(console.log)
        })
    },

    deleteAppById({dispatch, state}) {
        const appId = state.selectedApplication.appId

        return new Promise ((resolve) => {
            Application.deleteAppById(appId)
                .then(() => {
                    dispatch('getApps')
                    return resolve();
                })
                .catch(console.log)
        })

    },
};
