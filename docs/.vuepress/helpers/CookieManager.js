import Cookies from 'js-cookie';
import { SECONDS_IN_DAY } from '../api/constants';

export default {
  getValue(name) {
    return Cookies.get(name);
  },

  getValues(...names) {
    return names.map(name => this.getValue(name));
  },

  setValue(name, value) {
    Cookies.set(name, value, { sameSite: 'strict' });
  },

  setValueWithExpires(name, value, expires, days = 0) {
    Cookies.set(name, value, {
      expires: days ? days : expires / SECONDS_IN_DAY,
      sameSite: 'strict'
    });
  },

  removeValues(...names) {
    names.forEach((name) => {
      Cookies.remove(name);
    });
  }
};
