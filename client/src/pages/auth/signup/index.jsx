import React from 'react'
import Form from '../../../components/Form'
import GuestLayout from '../../../layouts/guest'

function SignUp () {
  return (
    <GuestLayout>
      <section className='bg-neutral-900 min-h-screen w-full p-5 sm:p-10 flex items-center justify-center text-white flex-col gap-5 bg-opacity-60'>
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
        />
      </section>
    </GuestLayout>
  )
}

export default SignUp
