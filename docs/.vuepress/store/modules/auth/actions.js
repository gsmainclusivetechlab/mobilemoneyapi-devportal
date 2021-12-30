import Auth from '../../../api/Auth';
import CookieManager from '../../../helpers/CookieManager';
import Api from '../../../api/Api';
import { ID_TOKEN, REFRESH_TOKEN, USER_NAME, X_USER_TOKEN } from '../../../api/constants';

export default {
  signIn({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      Auth.signIn(payload)
        .then((res) => {
          const { x_user_token, id_token, expires_in, refresh_token } = res.data;


          CookieManager.setValueWithExpires(X_USER_TOKEN, x_user_token, 60);
          CookieManager.setValueWithExpires(ID_TOKEN, id_token, 60);
          CookieManager.setValueWithExpires(USER_NAME, payload.userName, expires_in);
          CookieManager.setValueWithExpires(REFRESH_TOKEN, refresh_token, expires_in * 2);

          Api.setTokens();

          commit('setLoggedUser', true);
          dispatch('user/getUserData', null, { root: true });

          return resolve(true);
        })
        .catch((e) => {
          return reject(e);
        });
    });
  },

  logOut({ commit }, payload) {
    return new Promise((resolve) => {
      Auth.logOut(payload)
        .then(() => {
          CookieManager.removeValues(X_USER_TOKEN, ID_TOKEN, USER_NAME, REFRESH_TOKEN);

          Api.removeTokens();

          commit('setLoggedUser', false);
          commit('user/clearUserData', null, { root: true });

          return resolve(true);
        })
        .catch(console.log);
    });
  },
};
