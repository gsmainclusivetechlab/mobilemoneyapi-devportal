import Auth from "../../../api/Auth";
import CookieManager from "../../../helpers/CookieManager";

export default {
    signIn({commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.signIn(payload)
                .then((res) => {
                    const {x_user_token, id_token, expires_in} = res.data

                    CookieManager.setValueWithExpires('x_user_token', x_user_token, expires_in)
                    CookieManager.setValueWithExpires('id_token', id_token, expires_in)

                    return resolve(true);
                })
                .catch((e) => {
                    console.log(e)
                    return reject(e)
                })
        });
    },
};
