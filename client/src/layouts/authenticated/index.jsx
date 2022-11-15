import React from 'react'
import Navbar from '../../components/Navbar'

function AuthenticatedLayout ({ children }) {
  return (
    <div className='min-h-screen w-full text-white relative'>
      <Navbar />
      {children}
    </div>
  )
}

export default AuthenticatedLayout
