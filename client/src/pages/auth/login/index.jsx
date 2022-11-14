import Button from '../../../components/Button'
import Form from '../../../components/Form'
import GuestLayout from '../../../layouts/guest'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../../graphql/mutations/users'
import { useAuthContext } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoginSchema from '../../../validation/login'
function LogIn () {
  const [login] = useMutation(LOGIN)
  const { loginUser } = useAuthContext()
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    await login({
      variables: {
        email: values.email,
        password: values.password
      },
      onCompleted: (data) => {
        const token = data.login.token
        loginUser(token)
        toast('Welcome back to OURA movies!', {
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
        <h1 className='text-4xl font-bold mb-5'>Log In</h1>
        <Form
          initialValues={{
            email: '',
            password: ''
          }}
          inputs={[
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
            }
          ]}
          onSubmit={(e) => {
            handleSubmit(e)
          }}
          validationSchema={LoginSchema}
        />
        <p>
          Don't have an account yet?{' '}
          <Button isLink to='/signup' className='text-blue-500'>
            Sign Up
          </Button>
        </p>
      </section>
    </GuestLayout>
  )
}

export default LogIn
