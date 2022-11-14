import Portal from '../../components/Portal'
import GuestLayout from '../../layouts/guest'
import { useAuthContext } from '../../contexts/AuthContext'
import AuthenticatedLayout from '../../layouts/authenticated'
function Home () {
  const { isAuth } = useAuthContext()
  if (isAuth) {
    return <AuthenticatedLayout />
  }
  return (
    <GuestLayout>
      <Portal />
    </GuestLayout>
  )
}

export default Home
