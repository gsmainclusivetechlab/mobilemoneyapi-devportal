import Plans from '../../../api/Plans';
import { ALL_PLANS, PAGINATION } from '../module-types';
import ModalWindow from '../../../services/ModalWindow';
import AllPlans from '../../../api/admin/allPlans';
import { nameWithSlash } from '../../../helpers/vuexHelper';
import { CHANGE_PUBLISHED_STATE, GET_DATA } from '../action-types';
import { ADD_TOKEN, SET_DATA } from '../mutation-types';

export default {
  async [GET_DATA]({ commit }) {
    try {
      const { data } = await Plans.getPlans();
      commit(SET_DATA, data.planData);
      commit(nameWithSlash(PAGINATION, ADD_TOKEN), { token: data.paginationToken, module: ALL_PLANS }, { root: true });
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  async [CHANGE_PUBLISHED_STATE]({ dispatch }, { planId, published }) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllPlans.updateStateById({ planId, published: ! published });
        await dispatch(GET_DATA);
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  }
};
