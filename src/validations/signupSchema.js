import * as yup from 'yup';

const signupSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'username must be 3 characters long'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Username is required'),
    term: yup
        .boolean()
        .oneOf([true], 'Must Accept Terms and Conditions'),
})

export default signupSchema;