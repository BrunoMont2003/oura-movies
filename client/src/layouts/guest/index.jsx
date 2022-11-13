import GuestBg from '../../components/GuestBg'
import GuestNavbar from '../../components/GuestNavbar'

function GuestLayout ({ children }) {
  return (
    <div className='min-h-screen bg-neutral-800 bg-opacity-80'>
      <GuestNavbar />
      <GuestBg />
      <main className='min-h-screen w-screen flex items-center justify-center'>{children}</main>
    </div>
  )
}

export default GuestLayout
