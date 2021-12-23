import Api from '../Api';
import {ALL_DEVELOPERS} from "../constants";

export default class AllUsers {
    static get() {
        return Api.get(ALL_DEVELOPERS);
    }

    // static updateRoleById(userId, role) {
    //     return Api.put(`${ALL_USERS}/${userId}`, role);
    // }
    //
    // static updateBlockById(userId, value) {
    //     return Api.put(`${ALL_USERS}/${userId}`, value);
    // }
    //
    // static deleteById(userId) {
    //     return Api.delete(`${ALL_USERS}/${userId}`);
    // }
}
