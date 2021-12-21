import Api from './Api';
import {APPS} from './constants';

export default class Application {
    static getApps() {
        return Api.get(APPS);
    }

    static postApp(payload) {
        return Api.post(APPS, payload);
    }

    static getAppById(developerId, appId) {
        return Api.get(`/${developerId}${APPS}/${appId}`);
    }

    static updateAppById(developerId, appId, payload) {
        return Api.put(`/${developerId}${APPS}/${appId}`, payload);
    }

    static deleteAppById(developerId, appId) {
        return Api.delete(`/${developerId}${APPS}/${appId}`);
    }
}
