import Api from '../Api';
import {ALL_PLANS} from '../constants';

export default class AllPlans {
    static get() {
        return Api.get(ALL_PLANS);
    }

    static updateStateById(planId, state) {
        return Api.put(`${ALL_PLANS}/${planId}`, state);
    }

    static deleteById(planId) {
        return Api.delete(`${ALL_PLANS}/${planId}`);
    }
}
