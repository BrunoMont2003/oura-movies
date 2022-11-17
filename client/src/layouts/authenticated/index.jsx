import React from 'react'
import Navbar from '../../components/Navbar'

function AuthenticatedLayout ({ children, withBg = true }) {
  return (
    <div
      className={`min-h-screen w-full text-white relative ${
        withBg && 'main-bg flex items-center justify-center pt-36 pb-12 '
      }`}
    >
      <Navbar />
      {children}
    </div>
  )
}

export default AuthenticatedLayout
