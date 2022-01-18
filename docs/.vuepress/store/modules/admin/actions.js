import AllApplications from '../../../api/admin/allApplications';
import AllUsers from '../../../api/admin/allUsers';
import AllPlans from '../../../api/admin/allPlans';
import ModalWindow from '../../../services/ModalWindow';

export default {
  getAllApplications({ commit }, paginationToken = null) {
    AllApplications.get(paginationToken)
      .then(({ data }) => {
        commit('setAllApplications', data.appData);
        commit('setPaginationTokenAllApplications', data.paginationToken)
      })
      .catch(console.log);
  },

  async deleteApplicationByUser({ dispatch }, { userName, appId }) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllApplications.deleteById(userName, appId);
        await dispatch('getAllApplications');
        await dispatch('application/getApps', null, { root: true });
      }
    } catch (error) {
      console.log(error);
    }
  },

  getAllUsers({ commit }, paginationToken = null) {
    AllUsers.get(paginationToken)
      .then(({ data }) => {
        commit('setAllUsers', data.users);
        commit('setPaginationTokenAllUsers', data.PaginationToken)
      })
      .catch(console.log)
      .finally(() => {
        return Promise.resolve();
      });
  },

  async updateRole({ dispatch, state }, userId) {
    const { role, userName } = state.allUsers.find(user => user.userId === userId);

    const roles = [
      'user', 'admin'
    ];

    const roleIndex = roles.indexOf(role) + 1;

    const data = {
      role: roles[roleIndex] ? roles[roleIndex] : roles[0]
    };

    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllUsers.updateRole(userName, data);
        await dispatch('getAllUsers');
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  async setUserStatus({ dispatch, state }, userName) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        const { userEnabled } = state.allUsers.find(user => user.userName === userName);

        await AllUsers.setUserStatus(userName, userEnabled);
        await dispatch('getAllUsers');
      }
    } catch (error) {
      console.log(error);
    }
  },

  async deleteUserByUsername({ dispatch }, userName) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllUsers.deleteByUsername(userName);
        await dispatch('getAllUsers');
      }
    } catch (error) {
      console.log(error);
    }
  },

  async changePublishedState({ dispatch }, { planId, published }) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllPlans.updateStateById({ planId, published: ! published });
        await dispatch('usagePlans/getUsagePlans', null, { root: true });
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  }
};
