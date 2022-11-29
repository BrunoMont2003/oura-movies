import GuestBg from '../../components/GuestBg'
import GuestNavbar from '../../components/GuestNavbar'
import { useAuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
function GuestLayout ({ children }) {
  const { isAuth } = useAuthContext()
  const navigate = useNavigate()
  if (isAuth) {
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-neutral-800 bg-opacity-80'>
      <GuestNavbar />
      <GuestBg />
      <main className='min-h-screen w-100 flex items-center justify-center'>
        {children}
      </main>
    </div>
  )
}

export default GuestLayout
