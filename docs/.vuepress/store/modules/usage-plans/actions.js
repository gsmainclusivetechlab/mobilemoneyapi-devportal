import Plans from '../../../api/Plans';

export default {
  getUsagePlans({ commit }) {
    Plans.getPlans()
      .then(({ data }) => {
        commit('setUsagePlans', data.planData);
        commit('setPaginationToken', data.paginationToken);
      })
      .catch(console.log)
      .finally(() => {
        return Promise.resolve();
      });
  }
};
