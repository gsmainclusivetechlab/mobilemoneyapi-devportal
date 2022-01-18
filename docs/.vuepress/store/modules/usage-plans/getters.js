export default {
  getPublishedUsagePlans(state) {
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

  getUsagePlans(state) {
    return state.usagePlans.map(plan => {
      const state = plan.published ? 'Publish' : 'Unpublish';
      return {
        ...plan,
        state
      };
    });
  }
};
