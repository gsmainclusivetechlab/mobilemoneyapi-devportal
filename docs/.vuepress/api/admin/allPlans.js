import Api from '../Api';
import { PLANS_WITH_SEARCH, PUBLISH_PLAN } from '../constants';

export default class AllPlans {
  static updateStateById(data) {
    return Api.post(PUBLISH_PLAN, data);
  }

  static getPlansWithSearch(value) {
    return Api.get(PLANS_WITH_SEARCH.replace('{value}', value))
  }
}
