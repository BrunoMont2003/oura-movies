import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('That email is invalid')
    .required('The email is required'),
  password: Yup.string().required('The password is required')
})

export default LoginSchema
