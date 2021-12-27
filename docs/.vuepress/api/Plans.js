import Api from "./Api";
import {PLANS} from "./constants";

export default class Plans {
    static getPlans() {
        return Api.get(PLANS);
    }
}
