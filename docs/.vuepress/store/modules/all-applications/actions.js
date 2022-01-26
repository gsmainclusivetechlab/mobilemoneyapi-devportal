import AllApplications from '../../../api/admin/allApplications';
import ModalWindow from '../../../services/ModalWindow';
import { ALL_APPS, MY_APPS, PAGINATION } from '../module-types';
import { nameWithSlash } from '../../../helpers/vuexHelper';
import { GET_DATA, GET_DATA_WITH_SEARCH, REMOVE_ITEM } from '../action-types';
import { SET_DATA, ADD_TOKEN } from '../mutation-types';
import _ from 'lodash';

export default {
  async [GET_DATA]({ commit }) {
    try {
      const { data } = await AllApplications.get();
      commit(SET_DATA, data.appData);
      // commit(nameWithSlash(PAGINATION, ADD_TOKEN), { token: data.paginationToken, module: ALL_APPS }, { root: true });
    } catch (error) {
      console.log(error);
    }
  },

  async [GET_DATA_WITH_SEARCH]({ commit }, value) {
    try {
      const promises = [
        AllApplications.getWithSearch('appName', value),
        AllApplications.getWithSearch('userName', value),
        AllApplications.getWithSearch('companyName', value),
        AllApplications.getWithSearch('keyIssued', value)
      ];
      const apps = [];
      Promise.allSettled(promises)
        .then((results) => {
          results.forEach((result) => {
            if (result.status === 'fulfilled') {
              apps.push(...result.value.data);
            }
          })
          commit(SET_DATA, _.uniqBy(apps, 'appId'));
        });

      // commit(SET_DATA, data);
      // commit(nameWithSlash(PAGINATION, ADD_TOKEN), { token: data.paginationToken, module: ALL_PLANS }, { root: true });
    } catch (error) {
      console.log(error);
    }
  },

  async [REMOVE_ITEM]({ dispatch }, { userName, appId }) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllApplications.deleteById(userName, appId);
        await dispatch(GET_DATA);
        await dispatch(nameWithSlash(MY_APPS, GET_DATA), null, { root: true });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
