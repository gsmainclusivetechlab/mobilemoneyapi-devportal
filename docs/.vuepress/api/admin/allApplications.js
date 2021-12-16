import Api from '../Api';
import {ALL_APPLICATIONS} from "../constants";

export default class Application {
    static get() {
        return Api.get(ALL_APPLICATIONS);
    }

    static deleteById(appId) {
        return Api.delete(`${ALL_APPLICATIONS}/${appId}`);
    }
}
