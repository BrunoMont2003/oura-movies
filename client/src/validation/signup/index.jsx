import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('The name is required'),
  email: Yup.string()
    .email('That email is invalid')
    .required('The email is required'),
  password: Yup.string()
    .min(6, 'The password is too short')
    .required('The password is required'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
})

export default SignupSchema
