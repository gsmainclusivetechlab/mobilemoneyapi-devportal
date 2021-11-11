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
    getAppByID(ctx, {developerId, appId}) {
        return new Promise((resolve, reject) => {
            Application.getAppByID(developerId, appId)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
    updateAppByID(ctx, {developerId, appId, data}) {
        return new Promise((resolve, reject) => {
            Application.updateAppByID(developerId, appId, data)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
    deleteAppByID(ctx, {developerId, appId}) {
        return new Promise((resolve, reject) => {
            Application.deleteAppByID(developerId, appId)
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
