export default {
    getCompanyByUsername(state) {
        return (username) => {
            return state.allUsers.find(el=> el.userName.toLowerCase() === username.toLowerCase())?.companyName
        }
    }
}
