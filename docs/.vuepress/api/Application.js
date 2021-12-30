import Api from './Api';
import { APP_BY_ID, APPS, CREATE_APP, USER_NAME } from './constants';
import CookieManager from '../helpers/CookieManager';

export default class Application {
  static getApps() {
    const userName = CookieManager.getValue(USER_NAME);

    return Api.get(APPS.replace('{userName}', userName));
  }

  static postApp(payload) {
    return Api.post(CREATE_APP, payload);
  }

  static updateAppById(appId, payload) {
    const userName = CookieManager.getValue(USER_NAME);

    return Api.put(APP_BY_ID.replace('{userName}', userName).replace('{appId}', appId), payload);
  }

  static deleteAppById(appId) {
    const userName = CookieManager.getValue(USER_NAME);

    return Api.delete(APP_BY_ID.replace('{userName}', userName).replace('{appId}', appId));
  }
}
