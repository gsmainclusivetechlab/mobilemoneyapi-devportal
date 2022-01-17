import Auth from '../../../api/Auth';
import CookieManager from '../../../helpers/CookieManager';
import Api from '../../../api/Api';
import { ID_TOKEN, REFRESH_TOKEN, X_USER_TOKEN } from '../../../api/constants';
import ModalWindow from '../../../services/ModalWindow';

export default {
  signIn({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      Auth.signIn(payload)
        .then((res) => {
          const { x_user_token, id_token, expires_in, refresh_token } = res.data;

          CookieManager.setValueWithExpires(X_USER_TOKEN, x_user_token, expires_in);
          CookieManager.setValueWithExpires(ID_TOKEN, id_token, expires_in);
          CookieManager.setValueWithExpires(REFRESH_TOKEN, refresh_token, 0, 30);

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

  async logOut({ commit }, payload) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await Auth.logOut(payload);

        CookieManager.removeValues(X_USER_TOKEN, ID_TOKEN, REFRESH_TOKEN);
        Api.removeTokens();

        commit('setLoggedUser', false);
        commit('user/clearUserData', null, { root: true });

        window.location.replace('/login/');
      }
    } catch (error) {
      console.log(error);
    }
  },
};
