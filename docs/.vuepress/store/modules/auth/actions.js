import Auth from '@/api/Auth';
import CookieManager from '@/helpers/CookieManager';
import Api from '@/api/Api';
import {
  EMAIL_ALREADY_REGISTERED,
  ID_TOKEN,
  REFRESH_TOKEN,
  USERNAME_ALREADY_REGISTERED,
  X_USER_TOKEN
} from '@/api/constants';
import ModalWindow from '@/services/ModalWindow';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { USER, MY_APPS } from '../module-types';
import { GET_DATA, LOG_OUT, SIGN_IN } from '../action-types';
import { CLEAR_USER_DATA, SET_LOGGED_USER } from '../mutation-types';

export default {
  async [SIGN_IN]({ dispatch, commit }, payload) {
    try {
      const response = await Auth.signIn(payload);
      const { x_user_token, id_token, expires_in, refresh_token } = response.data;

      CookieManager.setValueWithExpires(X_USER_TOKEN, x_user_token, expires_in);
      CookieManager.setValueWithExpires(ID_TOKEN, id_token, expires_in);
      CookieManager.setValueWithExpires(REFRESH_TOKEN, refresh_token, 0, 30);

      Api.setTokens();

      commit(SET_LOGGED_USER, true);

      await dispatch(nameWithSlash(USER, GET_DATA), null, { root: true });
    } catch (err) {
      console.error(err);
    }

    return Promise.resolve();
  },

  async signUp(ctx, form) {
    const resolveObject = {
      status: true,
      errorField: '',
      errorMessage: ''
    };

    try {
      await Auth.signUp(form);
    } catch (e) {
      resolveObject.status = false;
      if (e?.response?.data?.error) {
        if (e.response.data.error === USERNAME_ALREADY_REGISTERED) {
          resolveObject.errorField = 'userName';
          resolveObject.errorMessage = e.response.data.errorDescription.replaceAll('.', '');
        } else if (e.response.data.error === EMAIL_ALREADY_REGISTERED) {
          resolveObject.errorField = 'email';
          resolveObject.errorMessage = e.response.data.errorDescription.replaceAll('.', '');
        } else {
          resolveObject.errorMessage = e.response.data.errorDescription;
        }
      }
    }

    return Promise.resolve(resolveObject);
  },

  async [LOG_OUT]({ commit }, payload) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await Auth.logOut(payload);

        CookieManager.removeValues(X_USER_TOKEN, ID_TOKEN, REFRESH_TOKEN);
        Api.removeTokens();

        commit(SET_LOGGED_USER, false);
        commit(nameWithSlash(USER, CLEAR_USER_DATA), null, { root: true });

        window.location.replace('/login/');
      }
    } catch (error) {
      console.log(error);
    }
  }
};
