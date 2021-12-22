import Application from "../../../api/Application";

export default {
    getApps({commit}) {
        Application.getApps()
            .then(({data}) => {
                commit('setApplications', data)
            })
            .catch((e) => {
                if (e.response.data.description === "No App Data present") {
                    commit('setApplications', [])
                }
            })
    },

    postApp({dispatch}, payload) {
        Application.postApp(payload)
            .then(() => {
                dispatch('getApps')
            })
            .catch((e) => {
                console.log(e);
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

    updateAppById({dispatch}, {appId, data}) {
        Application.updateAppById(appId, data)
            .then(() => {
                dispatch('getApps')
            })
            .catch((e) => {
                console.log(e);
            })
    },

    deleteAppById({dispatch}, {appId}) {
        Application.deleteAppById(appId)
            .then(() => {
                dispatch('getApps')
            })
            .catch((e) => {
                console.log(e);
            })
    },
};
