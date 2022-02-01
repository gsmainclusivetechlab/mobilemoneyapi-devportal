import { GET_PLANS_WITH_STATE, GET_PUBLISHED_USAGE_PLANS } from '../getter-types';

export default {
  [GET_PUBLISHED_USAGE_PLANS](state) {
    return state.usagePlans
      .filter(item => item.published)
      .map(item => ({ value: item.id, label: item.name }))
      .sort(function (a, b) {
        return a.label.localeCompare(b.label, [], {
          numeric: true,
          caseFirst: 'upper'
        });
      });
  },

  [GET_PLANS_WITH_STATE](state) {
    return state.usagePlans.map(plan => {
      const state = plan.published ? 'Publish' : 'Unpublish';
      return {
        ...plan,
        state
      };
    });
  },

  getNextPageToken(state) {
    return state.paginationTokens[state.currentPage + 1];
  },

  getPrevPageToken(state) {
    return state.paginationTokens[state.currentPage - 1];
  }
};
