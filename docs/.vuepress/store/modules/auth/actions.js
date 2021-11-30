import Auth from "../../../api/Auth";
import {ADMIN_EMAIL, SUPERADMIN_EMAIL, USER_EMAIL} from "../../../api/constants";

export default {
    signUp({commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.signUp(payload)
                .then(() => {
                    console.log('1');
                    return resolve(1);
                })
                .catch((e) => {
                    // console.log(e)
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
                    // localStorage.setItem('access_token', data.access_token);
                    // localStorage.setItem('token_type', data.token_type);
                    // localStorage.setItem('expires_in', data.expires_in);
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
};
