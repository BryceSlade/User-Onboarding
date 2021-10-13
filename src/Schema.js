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
        .matches(/[a-zA-Z]/, 'Password can only contain letters.'),
    terms: yup.boolean(),
})

export default formSchema;