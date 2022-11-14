import Button from '../../../components/common/Button'
import Form from '../../../components/common/Form'
import GuestLayout from '../../../layouts/guest'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../../../graphql/mutations/users'
import { useAuthContext } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import SignupSchema from '../../../validation/signup'
function SignUp () {
  const [signup] = useMutation(SIGN_UP)
  const { loginUser } = useAuthContext()
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    const { password, password_confirmation: pc } = values
    if (password !== pc) {
      toast('Password must match')
    }

    await signup({
      variables: {
        name: values.name,
        email: values.email,
        password: values.password
      },
      onCompleted: (data) => {
        const token = data.signup.token
        loginUser(token)
        toast('Welcome to OURA movies!', {
          type: 'success'
        })
        navigate('/')
      },
      onError: (e) => {
        toast(e.message, {
          type: 'error'
        })
      }
    })
  }

  return (
    <GuestLayout>
      <section className='bg-neutral-900 py-56 min-h-screen w-full p-5 md:py-24 sm:p-10 flex items-center justify-center text-white flex-col gap-5 bg-opacity-60'>
        <h1 className='text-4xl font-bold mb-5'>Sign Up</h1>
        <Form
          initialValues={{
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
          }}
          inputs={[
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              placeholder: 'Name',
              required: true
            },
            {
              name: 'email',
              label: 'Email',
              type: 'email',
              placeholder: 'Email',
              required: true
            },
            {
              name: 'password',
              label: 'Password',
              type: 'password',
              placeholder: 'Password',
              required: true
            },
            {
              name: 'password_confirmation',
              label: 'Confirm Password',
              type: 'password',
              placeholder: 'Password Confirmation',
              required: true
            }
          ]}
          onSubmit={(e) => {
            handleSubmit(e)
          }}
          validationSchema={SignupSchema}
        />
        <p>
          Already have an account?{' '}
          <Button isLink to='/login' className='text-blue-500'>
            Login
          </Button>
        </p>
      </section>
    </GuestLayout>
  )
}

export default SignUp
