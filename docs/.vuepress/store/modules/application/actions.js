import Application from "../../../api/Application";

export default {
    getApps() {
        return new Promise((resolve, reject) => {
            Application.getApps()
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
    postApp(ctx, payload) {
        return new Promise((resolve, reject) => {
            Application.postApp(payload)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
    getAppById(ctx, {developerId, appId}) {
        return new Promise((resolve, reject) => {
            Application.getAppById(developerId, appId)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
    updateAppById(ctx, {developerId, appId, data}) {
        return new Promise((resolve, reject) => {
            Application.updateAppById(developerId, appId, data)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
    deleteAppById(ctx, {developerId, appId}) {
        return new Promise((resolve, reject) => {
            Application.deleteAppById(developerId, appId)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
};
