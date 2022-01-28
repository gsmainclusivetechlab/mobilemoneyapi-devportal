import Plans from '@/api/Plans';
import ModalWindow from '@/services/ModalWindow';
import AllPlans from '@/api/admin/allPlans';
import { CHANGE_PUBLISHED_STATE, GET_DATA, GET_DATA_WITH_SEARCH } from '../action-types';
import { SET_DATA } from '../mutation-types';

export default {
  async [GET_DATA]({ commit }) {
    try {
      const { data } = await Plans.getPlans();
      commit(SET_DATA, data.planData);
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  async [GET_DATA_WITH_SEARCH] ({commit}, value) {
    try {
      const { data } = await AllPlans.getPlansWithSearch(value);
      commit(SET_DATA, data);
    } catch (error) {
      console.log(error);
    }
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
