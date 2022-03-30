import { CONFIRMED } from '@/api/constants';
import { GET_ALL_USERS, GET_COMPANY_BY_USERNAME } from '../getter-types';

export default {
  [GET_COMPANY_BY_USERNAME](state) {
    return (username) => {
      return state.data.find((el) => el.userName.toLowerCase() === username.toLowerCase())
        ?.companyName;
    };
  },

  [GET_ALL_USERS](state) {
    return state.data.map((user) => {
      const status = !user.userEnabled
        ? 'Blocked'
        : user.userStatus === CONFIRMED
        ? 'Active'
        : 'Inactive';
      return {
        ...user,
        status
      };
    });
  }
};
