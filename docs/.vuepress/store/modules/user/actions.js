import Auth from "../../../api/Auth";
import {ADMIN_EMAIL, SUPERADMIN_EMAIL, USER_EMAIL} from "../../../api/constants";
import CookieManager from "../../../helpers/CookieManager";

export default {
    signUp({commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.signUp(payload)
                .then((res) => {
                    console.log(res);
                    return resolve(true);
                })
                .catch((e) => {
                    return reject(e);
                })
        });
    },
    signIn({commit}, payload) {
        let role = ''
        if(payload.userId === USER_EMAIL) {
            role = 'USER'
        }
        if(payload.userId === ADMIN_EMAIL) {
            role = 'ADMIN'
        }
        if(payload.userId === SUPERADMIN_EMAIL) {
            role = 'SUPERADMIN'
        }
        window.localStorage.setItem('token_access', role)

        commit('setTokenAccess', role);

        return new Promise((resolve, reject) => {
            Auth.signIn(payload)
                .then(() => {
                    console.log('1');
                    return resolve(1);
                })
                .catch((e) => {
                    // console.log(e)
                    return reject(e)
                })
        });
    },
    forgotPassword({commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.forgotPassword(payload)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    return reject(e)
                })
        });
    },

    getUserData({state}) {
        const [x_user_token, id_token] = CookieManager.getValues('x_user_token', 'id_token');
        const userName = state.userData.userName;


    },
    updateUserData(ctx, payload) {},
    logout() {}
};
