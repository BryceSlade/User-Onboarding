import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required.'),
    email: yup
        .string()
        .email('Must be a valid email address.')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password is too short - please enter 8 or more characters')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
    terms: yup.boolean(),
})

export default formSchema;