<template>
  <section class="contact-us-section section--m-gap">
    <div class="container container--narrow">
      <div class="section-intro section-intro--narrow text-center">
        <h1 class="h1 section-title">Contact us</h1>
        <div
            class="section-description">If you have any comments or you have found any issues please let us know by filling in the fields below.</div>
      </div>
      <div class="contact-form__wrapper  input-wrapper__with-error-mark">
        <form @submit.prevent="send" ref="contactForm" class="form contact-form">
          <div class="input-wrapper input-wrapper__with-error-mark">
            <label for="name">Full name</label>
            <input type="text"
                   name="full name"
                   id="name"
                   v-validate="'required'"
                   placeholder="Enter full name"
                   :class="[{ 'input-wrapper--error': errors.has('full name')}]">
            <span class="input-wrapper__error">{{ errors.first('full name') }}</span>
          </div>
          <div class="input-wrapper">
            <label for="contact_number">Contact Number</label>
            <input type="tel"
                   name="contact number"
                   id="contact_number"
                   placeholder="+ 3 (765) 56 67 485">
          </div>
          <div class="input-wrapper input-wrapper__with-error-mark">
            <label for="contact_number">E-mail</label>
            <input type="text"
                   name="email"
                   id="email"
                   v-validate="'required|email'"
                   placeholder="Enter e-mail"
                   :class="[{ 'input-wrapper--error': errors.has('email')}]">
            <span class="input-wrapper__error">{{ errors.first('email') }}</span>
          </div>
          <div class="input-wrapper input-wrapper__custom-select">
            <label for="country">Country</label>
            <v-select
                id="country"
                name="country"
                ref="mySelect"
                :clearable="false"
                rules="required|alpha"
                :placeholder="'Select country'"
                :options="options"
                v-model="country"></v-select>
          </div>
          <div class="input-wrapper input-wrapper__with-error-mark">
            <label for="company">Company</label>
            <input type="text"
                   name="company"
                   id="company"
                   v-validate="'required'"
                   placeholder="Enter company name"
                   :class="[{ 'input-wrapper--error': errors.has('company')}]">
            <span class="input-wrapper__error">{{ errors.first('company') }}</span>
          </div>
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
          <div class="input-wrapper input-wrapper__fullwidth input-wrapper__with-error-mark">
            <label for="comment">Comment</label>
            <textarea name="comment"
                      id="comment"
                      placeholder="Write down comment"
                      cols="20"
                      v-validate="'required'"
                      :class="[{ 'input-wrapper--error': errors.has('comment')}]"></textarea>
            <span class="input-wrapper__error">{{ errors.first('comment') }}</span>
          </div>
          <div class="input-wrapper__checkbox">
            <label for="conditions">
              <input type="checkbox"
                     name="conditions"
                     id="conditions"
                     v-validate="'required'">
              <span :class="[{ 'input-wrapper__checkbox__pseudo-checkbox--error': errors.has('T&C') }, 'input-wrapper__checkbox__pseudo-checkbox']">
                <span></span>
              </span>
              <span class="input-wrapper__checkbox-text">
                I agree with <a href="https://www.gsma.com/aboutus/legal" target="_blank">GSMA Terms and Conditions</a> and have read the <a href="https://www.gsma.com/aboutus/legal/privacy" target="_blank">GSMA Privacy Statement</a>.
              </span>
            </label>
            <span class="input-wrapper__error">{{ errors.first('conditions') }}</span>
          </div>
          <div class="form__btn-container">
            <button class="btn btn--accent"
                    type="submit"
                    :disabled="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <modal :show-modal="mailSend"
           @close="showSuccessModal">
      <template slot="header">
        <h2 class="h2 modal_title">Thank you!</h2>
      </template>
      <template slot="body">
        Your enquiry has been successfully sent to our administrators.
        We'll get back to you within the next 24 hours.
      </template>
    </modal>
  </section>
</template>

<script>
import {COUNTRIES} from '../constants.js';
import Modal from './modal.vue';

export default {
  name: 'contact-us-from',
  comments: {
    Modal,
  },
  data: function () {
    return {
      countries: COUNTRIES,
      options: [],
      mailSend: false,
      country: null,
      submit: false,
    }
  },
  methods: {
    send() {
      this.submit = true;
      this.$validator.validateAll().then((result) => {
        this.submit = false;
        if (result) {
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
        }
      });
    },
    showSuccessModal() {
      this.mailSend = !this.mailSend;
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
  // mounted: function() {
  //   this.$refs["mySelect"].open = true;
  // }
}
</script>
