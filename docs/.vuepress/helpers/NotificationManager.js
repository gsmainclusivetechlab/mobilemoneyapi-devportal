import Vue from 'vue';

export const notification = (title, text) => {
    console.log('work')
    Vue.notify({
        title,
        text,
        position: 'bottom right'
    })
}
