import { GET_ALL_MY_APPS } from '../getter-types';

export default {
  [GET_ALL_MY_APPS](state) {
    return state.data.map((el) => ({
      appName: el.appName,
      appId: el.appId,
      keyIssued: el.keyIssued
    }));
  },

  getPaginationTokens(state) {
    return [state.paginationTokens[0], state.paginationTokens[1]];
  },

  getOldPageValue(state) {
    return state.oldPageValue;
  },

  getNextPageToken(state) {
    return state.paginationTokens[state.currentPage + 1];
  },

  getPrevPageToken(state) {
    return state.paginationTokens[state.currentPage - 1];
  }
};
