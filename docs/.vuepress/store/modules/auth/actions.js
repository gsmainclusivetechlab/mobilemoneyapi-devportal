import Auth from "../../../api/Auth";
import {ADMIN_EMAIL, SUPERADMIN_EMAIL, USER_EMAIL} from "../../../api/constants";

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
        return new Promise((resolve, reject) => {
            Auth.signIn(payload)
                .then((res) => {
                    console.log(res);
                    return resolve(1);
                })
                .catch((e) => {
                    console.log(e)
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
