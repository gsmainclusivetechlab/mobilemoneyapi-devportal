import Plans from '../../../api/Plans';

export default {
  getUsagePlans({ commit }) {
    Plans.getPlans()
      .then(({ data }) => {
        commit('setUsagePlans', data);
      })
      .catch(console.log);
  }
};
