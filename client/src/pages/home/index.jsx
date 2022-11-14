import Portal from '../../components/Portal'
import GuestLayout from '../../layouts/guest'
import { useAuthContext } from '../../contexts/AuthContext'
import AuthenticatedLayout from '../../layouts/authenticated'
import MainMovieBanner from '../../components/MainMovieBanner'
import Popular from '../../components/Popular'
function Home () {
  const { isAuth } = useAuthContext()
  if (isAuth) {
    return (
      <AuthenticatedLayout>
        <MainMovieBanner />
        <Popular />
      </AuthenticatedLayout>
    )
  }
  return (
    <GuestLayout>
      <Portal />
    </GuestLayout>
  )
}

export default Home
