import User from "../../../api/User";

export default {
    getUserData({commit}) {
        User.getData()
            .then(({data}) => {
                commit('setUserData', data)
            })
            .catch((e) => {
                console.log(e)
            })
    },
    updateUserData({commit}, payload) {
        return new Promise((resolve, reject) => {
            User.updateData(payload)
                .then(({data}) => {
                    commit('setUserData', data)
                    return resolve(true)
                })
                .catch(err => {
                    console.log(err);
                    return reject(false)
                })
        })
    }
};
