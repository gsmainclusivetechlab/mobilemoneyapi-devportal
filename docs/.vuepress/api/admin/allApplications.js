import Api from '../Api';
import {ALL_APPLICATIONS, CREATE_APP} from "../constants";

export default class AllApplications {
    static get() {
        return Api.get(CREATE_APP);
    }

    static deleteById(appId) {
        return Api.delete(`${ALL_APPLICATIONS}/${appId}`);
    }
}
