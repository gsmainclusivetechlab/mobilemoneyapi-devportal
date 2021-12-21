import Api from './Api';

export default class Application {
    static getData(userName) {
        return Api.get(`/${userName}`);
    }

    static updateData(userName, payload) {
        return Api.put(`/${userName}`, payload)
    }
}
