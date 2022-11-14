import React from 'react'
import Navbar from '../../components/Navbar'

function AuthenticatedLayout () {
  return (
    <div className='min-h-screen bg-neutral-500 w-full text-white relative'>
      <Navbar />
    </div>
  )
}

export default AuthenticatedLayout
