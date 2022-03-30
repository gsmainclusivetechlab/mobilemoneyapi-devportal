import CookieManager from '@/helpers/CookieManager';
import { ID_TOKEN, REFRESH_TOKEN, UPDATE_REFRESH_TOKEN, X_USER_TOKEN } from './constants';
import Api from './Api';

export default class TokensManager {
  static updateRefreshToken() {
    return new Promise((resolve, reject) => {
      const refresh_token = CookieManager.getValue(REFRESH_TOKEN);
      CookieManager.removeValues(ID_TOKEN, X_USER_TOKEN);
      Api.removeTokens();
      this.updateTokens(refresh_token)
        .then(({ data }) => {
          const { AccessToken, ExpiresIn, IdToken, refreshToken } = data;
          CookieManager.setValueWithExpires(ID_TOKEN, IdToken, ExpiresIn);
          CookieManager.setValueWithExpires(X_USER_TOKEN, AccessToken, ExpiresIn);
          CookieManager.setValueWithExpires(REFRESH_TOKEN, refreshToken, 0, 30);
          Api.setTokens();
          return resolve();
        })
        .catch(e => {
          CookieManager.removeValues(REFRESH_TOKEN);
          return reject(e);
        });
    });
  }

  static updateTokens(refresh_token) {
    return Api.setHeadersForOneRequest({
      refresh_token
    }).post(UPDATE_REFRESH_TOKEN);
  }
}
