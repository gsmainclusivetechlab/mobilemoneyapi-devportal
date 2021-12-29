import {extend} from 'vee-validate';
import {required, email, alpha, min, confirmed} from 'vee-validate/dist/rules';

extend('email', {
    ...email,
    message: 'Email is not valid',
});
extend('confirmed', {
    ...confirmed,
    message: 'The password confirmation does not match',
});
extend('required', {
    ...required,
    message: 'This field is required',
});
extend('alpha', {
    ...alpha,
    message: 'This field may only contain alphabetic characters',
});
extend('min', {
    ...min,
    message: (val, params) => `This field must be at least ${params.length} characters`,
    params: ['length']
});
extend('verify_password', {
    message: 'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character',
    validate: value => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        return strongRegex.test(value);
    }
});
extend('without_space', {
    validate: value => {
        let reg = new RegExp("^[^\\s]+$")
        return reg.test(value)
    },
    message: 'The field cannot contain spaces'
});

