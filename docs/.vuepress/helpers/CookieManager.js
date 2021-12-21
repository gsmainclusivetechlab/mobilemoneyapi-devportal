import Cookies from 'js-cookie';

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
        Cookies.set(name, value, {expires})
    },

    removeValue(name) {
        Cookies.remove(name)
    }
}
