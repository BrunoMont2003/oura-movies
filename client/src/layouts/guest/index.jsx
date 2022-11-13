import GuestNavbar from '../../components/GuestNavbar'

function GuestLayout ({ children }) {
  return (
    <div className='min-h-screen bg-neutral-800'>
      <GuestNavbar />
      <main className='min-h-[calc(100vh-80px)] w-screen bg-red-500'>
        {children}
      </main>
    </div>
  )
}

export default GuestLayout
