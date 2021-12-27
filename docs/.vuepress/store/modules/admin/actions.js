import AllApplications from "../../../api/admin/allApplications";
import AllUsers from "../../../api/admin/allUsers";

export default {
    getAllApplications({commit}) {
        AllApplications.get()
            .then(({data}) => {
                commit('setAllApplications', data)
            })
            .catch(console.log)
    },

    deleteApplicationByUser({dispatch}, {userName, appId}) {
        AllApplications.deleteById(userName, appId)
            .then(() => {
                dispatch('getAllApplications')
            })
            .catch(console.log)
    },

    getAllUsers({commit}) {
        AllUsers.get()
            .then(({data}) => {
                commit('setAllUsers', data)
            })
            .catch(console.log)
    },

    updateRole({dispatch, state}, userId) {
        const {role, userName} = state.allUsers.find(user => user.userId === userId)
        const roles = [
            'user', 'admin', 'superadmin'
        ]
        const roleIndex = roles.indexOf(role) + 1
        const data = {
            role: roles[roleIndex] ? roles[roleIndex] : roles[0]
        }

        AllUsers.updateRole(userName, data)
            .then(() => {
                dispatch('getAllUsers')
            })
            .catch(console.log)
    },

    deleteUserByUsername({dispatch}, userName) {
        AllUsers.deleteByUsername(userName)
            .then(() => {
                dispatch('getAllUsers')
            })
            .catch(console.log)
    },

    publishUsagePlan({dispatch}, {planId, published}) {

    }


    // updateUserData({commit}, payload) {
    //     return new Promise((resolve, reject) => {
    //         User.updateData(payload)
    //             .then(({data}) => {
    //                 commit('setUserData', data)
    //                 return resolve(true)
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //                 return reject(false)
    //             })
    //     })
    // }
};
