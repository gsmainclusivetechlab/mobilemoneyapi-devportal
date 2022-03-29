import Api from './Api';
import { USER } from './constants';

export default class User {
  static updateData(payload, userName) {
    return Api.put(USER.replace('{userName}', userName), payload);
  }
}
