import { CLEAR_SELECTED_APPLICATION, SET_DATA, SET_SELECTED_APPLICATION } from '../mutation-types';

export default {
  [SET_DATA](state, data) {
    state.data = data;
  },

  [SET_SELECTED_APPLICATION](state, id) {
    state.selectedApplication = state.data.find(el => el.appId === id);
  },

  [CLEAR_SELECTED_APPLICATION](state) {
    state.selectedApplication = null;
  }
};
