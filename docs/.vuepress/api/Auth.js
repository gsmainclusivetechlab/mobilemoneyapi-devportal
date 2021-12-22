import Api from './Api';
import {LOGIN, REGISTER, LOGOUT, FORGOT_PASSWORD, SET_NEW_PASSWORD, RESET_PASSWORD_CONFIRMATION} from './constants';

export default class Auth {
  static signUp(payload) {
    return Api.post(REGISTER, payload);
  }

  static signIn(payload) {
    return Api.post(LOGIN, payload);
  }

  static setNewPassword(userName, payload) {
    return Api.put(SET_NEW_PASSWORD.replace('{userName}', userName), payload);
  }

  static forgotPassword(payload) {
    return Api.post(FORGOT_PASSWORD, payload);
  }

  static forgotPasswordConfirmation(payload) {
    return Api.post(RESET_PASSWORD_CONFIRMATION, payload);
  }

  static logOut(payload) {
    return Api.post(LOGOUT, payload);
  }
}
