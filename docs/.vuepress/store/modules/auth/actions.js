import Auth from "../../../api/Auth";
import CookieManager from "../../../helpers/CookieManager";
import Api from "../../../api/Api";

export default {
    signIn({dispatch, commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.signIn(payload)
                .then((res) => {
                    const {x_user_token, id_token, expires_in} = res.data

                    CookieManager.setValueWithExpires('x_user_token', x_user_token, expires_in)
                    CookieManager.setValueWithExpires('id_token', id_token, expires_in)
                    CookieManager.setValueWithExpires('userName', payload.userName, expires_in)

                    Api.setTokens()

                    commit('setLoggedUser', true)
                    dispatch('user/getUserData', null, {root: true})

                    return resolve(true);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },
    logOut({commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.logOut(payload)
                .then(() => {
                    CookieManager.removeValues('x_user_token', 'id_token', 'userName')

                    Api.removeTokens()

                    commit('setLoggedUser', false)
                    commit('user/clearUserData', null, {root: true})

                    return resolve(true);
                })
                .catch((e) => {
                    console.log(e)
                    return reject(e)
                })
        });
    },
};
