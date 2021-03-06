<template>
  <section class="contact-us-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">
        <h1 class="h1 section-title">
          <slot name="title"></slot>
        </h1>
        <div class="section-description">
          <slot name="description"></slot>
        </div>
      </div>
      <div class="contact-form__wrapper  input-wrapper__with-error-mark">
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="form-contact-us">

          <form @submit.prevent="handleSubmit(send)" ref="contactForm" class="form contact-form">
            <ValidationProvider class="input-wrapper input-wrapper__with-error-mark"
                                vid="name"
                                :rules="{ required: { allowFalse: false }}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="name">Full name</label>
              <input type="text"
                     name="full name"
                     id="name"
                     placeholder="Enter full name"
                     :class="[{ 'input-wrapper--error': errors[0]}]">
              <span class="input-wrapper__error">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="input-wrapper">
              <label for="contact_number">Contact Number</label>
              <input type="tel"
                     name="contact number"
                     id="contact_number"
                     placeholder="+ 3 (765) 56 67 485">
            </div>
            <ValidationProvider class="input-wrapper input-wrapper__with-error-mark"
                                vid="email"
                                :rules="{ required: { allowFalse: false }, email: true}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="contact_number">E-mail</label>
              <input type="text"
                     name="email"
                     id="email"
                     placeholder="Enter e-mail"
                     :class="[{ 'input-wrapper--error': errors[0]}]">
              <span class="input-wrapper__error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider class="input-wrapper input-wrapper__custom-select"
                                vid="country"
                                :rules="{ required: { allowFalse: false }, alpha: true}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="country">Country</label>
              <v-select
                  id="country"
                  name="country"
                  ref="mySelect"
                  :clearable="false"
                  :placeholder="'Select country'"
                  :options="options"
                  v-model="country"></v-select>
            </ValidationProvider>
            <ValidationProvider class="input-wrapper input-wrapper__with-error-mark"
                                vid="company"
                                :rules="{ required: { allowFalse: false }}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="company">Company</label>
              <input type="text"
                     name="company"
                     id="company"
                     placeholder="Enter company name"
                     :class="[{ 'input-wrapper--error': errors[0]}]">
              <span class="input-wrapper__error">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="input-wrapper">
              <label for="job_title">Job Title</label>
              <input type="text"
                     name="job_title"
                     id="job_title"
                     placeholder="Enter job title">
            </div>
            <div class="input-wrapper input-wrapper__fullwidth">
              <label for="subject">Subject</label>
              <input type="text"
                     name="subject"
                     id="subject"
                     placeholder="Emphasize the subject of request">
            </div>
            <ValidationProvider class="input-wrapper input-wrapper__fullwidth input-wrapper__with-error-mark"
                                vid="comment"
                                :rules="{ required: { allowFalse: false }}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="comment">Comment</label>
              <textarea name="comment"
                        id="comment"
                        placeholder="Write down comment"
                        cols="20"
                        :class="[{ 'input-wrapper--error': errors[0]}]"></textarea>
              <span class="input-wrapper__error">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider class="input-wrapper__checkbox"
                                vid="conditions"
                                :rules="{ required: { allowFalse: false }}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="conditions">
                <input type="checkbox"
                       name="conditions"
                       id="conditions">
                <span :class="[{ 'input-wrapper__checkbox__pseudo-checkbox--error': errors[0] }, 'input-wrapper__checkbox__pseudo-checkbox']">
                <span></span>
              </span>
                <span class="input-wrapper__checkbox-text">
                I agree with <a href="https://www.gsma.com/aboutus/legal" target="_blank">GSMA Terms and Conditions</a> and have read the <a href="https://www.gsma.com/aboutus/legal/privacy"
                                                                                                                                             target="_blank">GSMA Privacy Statement</a>.
              </span>
              </label>
              <span class="input-wrapper__error">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="form__btn-container">
              <button class="btn btn--accent"
                      type="submit"
                      :disabled="submit">Submit
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
    <contact-us-modal
        :show-modal="mailSend"
        @close="showSuccessModal">
      <template slot="header">
        <h2 class="h2 modal_title">Thank you!</h2>
      </template>
      <template slot="body">
        Your enquiry has been successfully sent to our administrators.
        We'll get back to you within the next 24 hours.
      </template>
    </contact-us-modal>
  </section>
</template>

<script>
import { COUNTRIES } from '@/constants';
import ContactUsModal from './contact-us-modal.vue';

export default {
  name: 'contact-us-from',
  comments: {
    ContactUsModal,
  },
  data: function () {
    return {
      countries: COUNTRIES,
      options: [],
      mailSend: false,
      country: null,
      submit: false,
    };
  },
  methods: {
    send() {
      const formData = new FormData(this.$refs['contactForm']);

      if (this.country) {
        formData.append('country', this.country.label);
      }

      fetch('/form/sendmail.php', {
        method: 'POST',
        body: formData,
      })
          .then((response) => {
            if (response) {
              this.submit = false;
              this.$refs.contactForm.reset();
              this.mailSend = true;
            }
          })
          .catch((error) => {
            throw new Error(error);
          });
    },
    showSuccessModal() {
      this.mailSend = ! this.mailSend;
    },
  },
  created() {
    this.options = this.countries.map((country) => {
      return {
        label: country.name,
        value: country.code,
      };
    });
  },
};
</script>
