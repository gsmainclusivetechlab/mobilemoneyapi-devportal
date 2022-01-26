import Api from './Api';
import { PLANS, PLANS_WITH_SEARCH } from './constants';

export default class Plans {
  static getPlans() {
    return Api.get(PLANS);
  }
}
