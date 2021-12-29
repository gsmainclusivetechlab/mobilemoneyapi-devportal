import Api from '../Api';
import { PUBLISH_PLAN } from '../constants';

export default class AllPlans {
  static updateStateById(data) {
    return Api.post(PUBLISH_PLAN, data);
  }
}
