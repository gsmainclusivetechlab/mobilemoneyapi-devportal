import Api from '../Api';
import { PLANS, PUBLISH_PLAN } from '../constants';

export default class AllPlans {
  static get({ sortValue, searchValue, paginationToken }, controller) {
    const route = PLANS.replace('{searchValue}', searchValue ? `=${searchValue}` : '').replace(
      '{sortType}',
      `=${sortValue}`
    );
    return Api.setHeadersForOneRequest({
      paginationToken: paginationToken !== 'first' ? paginationToken : ''
    }).get(route, {
      signal: controller?.signal
    });
  }

  static updateStateById(data) {
    return Api.post(PUBLISH_PLAN, data);
  }
}
