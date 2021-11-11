<template>
  <ValidationProvider class="form-row"
                      :class="[addClasses]"
                      :vid="nameValue"
                      :rules="{
                          required: { allowFalse: false },
                          email: this.nameValue === 'email'
                        }"
                      v-slot="{ errors }"
                      tag="div">
    <label :for="nameValue">{{ labelValue }}
      <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
    </label>
    <slot></slot>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'FormElement',
  props: {
    nameValue: {
      type: String,
      default: '',
      required: true,
    },
    labelValue: {
      type: String,
      default: '',
    },
    addClasses: {
      type: String,
      default: '',
    },
    isCheckbox: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style>

</style>
