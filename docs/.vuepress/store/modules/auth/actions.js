import Auth from "../../../api/Auth";

export default {
    signUp({commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.signUp(payload)
                .then(() => {
                    console.log('1')
                    return resolve(1);
                })
                .catch((e) => {
                    // console.log(e)
                    return reject(e)
                })
        });
    },
    signIn({commit}, payload) {
        return new Promise((resolve, reject) => {
            Auth.signIn(payload)
                .then(() => {
                    console.log('1')
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
};
