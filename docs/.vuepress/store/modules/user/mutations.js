export default {
    setUserData(state, data) {
        state.userData = {...state.userData, ...data}
    },
    clearUserData(state) {
        state.userData = {
            "userName": "",
            "timeZone": "",
            "firstName": "",
            "lastName": "",
            "email": "",
            "userId": "",
            "companyName": ""
        }
    }
};
