import Cookies from 'js-cookie';
import {SECONDS_IN_DAY} from "../api/constants";

export default {
    getValue(name) {
        return Cookies.get(name)
    },

    getValues(...names) {
        return names.map(name=> this.getValue(name))
    },

    setValue(name, value) {
        Cookies.set(name, value)
    },

    setValueWithExpires(name, value, expires) {
        Cookies.set(name, value, {expires: expires / SECONDS_IN_DAY})
    },

    removeValue(name) {
        Cookies.remove(name)
    }
}
