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

        return new Promise((resolve, reject) => {
            Application.postApp(data)
                .then(() => {
                    dispatch('getApps');
                    return resolve(true);
                })
                .catch((e) => {
                    console.log(e);
                    return reject(false)
                })
        })
    },

    getAppById({dispatch}, {appId}) {
        Application.getAppById(appId)
            .then(() => {
                dispatch('getApps')
            })
            .catch((e) => {
                return reject(e)
            })
    },

    updateAppById({dispatch, state}, payload) {
        const appId = state.selectedApplication.appId
        return new Promise((resolve, reject) => {
            Application.updateAppById(appId, payload)
                .then(() => {
                    dispatch('getApps')
                    resolve(true)
                })
                .catch((e) => {
                    console.log(e);
                    return reject(false)
                })
        })
    },

    deleteAppById({dispatch, state}) {
        const appId = state.selectedApplication.appId

        return new Promise ((resolve, reject) => {
            Application.deleteAppById(appId)
                .then(() => {
                    dispatch('getApps')
                    return resolve();
                })
                .catch((e) => {
                    console.log(e);
                    return reject()
                })
        })

    },
};
