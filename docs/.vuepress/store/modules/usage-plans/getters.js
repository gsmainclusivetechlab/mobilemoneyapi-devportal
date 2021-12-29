export default {
  getPublishedUsagePlans(state) {
    return state.usagePlans.filter(item => item.published).map(item => ({ value: item.id, label: item.name }));
  }
};
