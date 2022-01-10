import Plans from '../../../api/Plans';

export default {
  getUsagePlans({ commit }) {
    Plans.getPlans()
      .then(({ data: { planData } }) => {
        commit('setUsagePlans', planData);
      })
      .catch(console.log)
      .finally(() => {
        return Promise.resolve();
      });
  }
};
