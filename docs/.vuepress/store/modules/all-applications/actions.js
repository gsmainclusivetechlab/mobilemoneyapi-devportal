import AllApplications from '../../../api/admin/allApplications';
import ModalWindow from '../../../services/ModalWindow';
import { ALL_APPS, MY_APPS, PAGINATION } from '../module-types';
import { nameWithSlash } from '../../../helpers/vuexHelper';
import { GET_DATA, REMOVE_ITEM } from '../action-types';
import { SET_DATA, ADD_TOKEN } from '../mutation-types';

export default {
  async [GET_DATA]({ commit }, paginationToken = null) {
    try {
      const { data } = await AllApplications.get(paginationToken);
      commit(SET_DATA, data.appData);
      commit(nameWithSlash(PAGINATION, ADD_TOKEN), { token: data.paginationToken, module: ALL_APPS }, { root: true });
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
