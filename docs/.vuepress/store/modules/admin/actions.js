import AllApplications from "../../../api/admin/allApplications";
import AllUsers from "../../../api/admin/allUsers";

export default {
    getAllApplications({commit}) {
        AllApplications.get()
            .then(({data}) => {
                commit('setAllApplications', data)
            })
            .catch((e) => {
                console.log(e)
            })
    },
    getAllUsers({commit}) {
        //ALL_DEVELOPERS
        AllUsers.get()
            .then(({data}) => {
                commit('setAllUsers', data)
            })
            .catch((e) => {
                console.log(e)
            })
    },

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
