import Api from './Api';
import CookieManager from '../helpers/CookieManager';
import { USER, USER_NAME } from './constants';

export default class User {
  static getData() {
    const userName = CookieManager.getValue(USER_NAME);

    return Api.get(USER.replace('{userName}', userName));
  }

  static updateData(payload) {
    const userName = CookieManager.getValue(USER_NAME);

    return Api.put(USER.replace('{userName}', userName), payload);
  }
}
