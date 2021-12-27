import User from "../../../api/User";
import {Admin} from "../../../api/admin";

export default {
    getUserData({commit, dispatch}) {
        Admin.getProfile()
            .then(({data}) => {
                commit('setUserData', data)
                if (data.role === 'admin' || data.role === 'superadmin') {
                    dispatch('admin/getAllApplications', null, {root: true})
                    dispatch('admin/getAllUsers', null, {root: true})
                    dispatch('usagePlans/getUsagePlans', null, {root: true})
                }
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
