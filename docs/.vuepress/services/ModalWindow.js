import confirmationModal from '../components/confirmation-modal';
import Vue from 'vue'

export default class ModalWindow {
  static openDialog() {
    return new Promise((resolve) => {
      const ModalWindow = Vue.extend(confirmationModal)

      const dialog = new ModalWindow().$mount()

      document.body.appendChild(dialog.$el);

      dialog.$on('close', function (value) {
        dialog.$destroy();
        dialog.$el.remove();
        resolve(value)
      })
    });
  }
}
