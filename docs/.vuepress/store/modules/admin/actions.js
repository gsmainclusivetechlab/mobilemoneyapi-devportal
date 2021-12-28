import AllApplications from "../../../api/admin/allApplications";
import AllUsers from "../../../api/admin/allUsers";
import AllPlans from "../../../api/admin/allPlans";

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
                commit('setAllUsers', data.users)
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

    changePublishedState({dispatch}, {planId, published}) {
        AllPlans.updateStateById({
            planId,
            published: !published
        })
            .then(() => {
                dispatch('usagePlans/getUsagePlans', null, {root: true})
            })
            .catch(console.log)
    }
};
