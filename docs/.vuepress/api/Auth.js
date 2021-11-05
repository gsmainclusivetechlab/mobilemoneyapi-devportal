import Api from './Api';
import { LOGIN, REGISTER, LOGOUT, FORGOT_PASSWORD } from './constants';

export default class Auth {
  static signUp(payload) {
    return Api.post(REGISTER, payload);
  }

  static signIn(payload) {
    return Api.post(LOGIN, payload);
  }

  static forgotPassword(payload) {
    return Api.post(FORGOT_PASSWORD, payload);
  }

  static logOut(payload) {
    return Api.post(LOGOUT, payload);
  }
}
