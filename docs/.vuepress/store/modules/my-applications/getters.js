import { GET_ALL_MY_APPS } from '../getter-types';

export default {
  [GET_ALL_MY_APPS](state) {
    return state.data.map((el) => ({
      appName: el.appName,
      appId: el.appId,
      keyIssued: el.keyIssued
    }));
  },

  getNextPageToken(state) {
    return state.paginationTokens[state.currentPage + 1];
  },

  getPrevPageToken(state) {
    return state.paginationTokens[state.currentPage - 1];
  }
};
