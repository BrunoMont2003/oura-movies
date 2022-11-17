import Portal from '../../components/Portal'
import GuestLayout from '../../layouts/guest'
import { useAuthContext } from '../../contexts/AuthContext'
import AuthenticatedLayout from '../../layouts/authenticated'
import MainMovieBanner from '../../components/MainMovieBanner'
import Popular from '../../components/Popular'
import TrendingNow from '../../components/TrendingNow'
import TopRated from '../../components/TopRated'
function Home () {
  const { isAuth } = useAuthContext()
  if (isAuth) {
    return (
      <AuthenticatedLayout withBg={false}>
        <MainMovieBanner />
        <div className='main-bg'>
          <Popular />
          <TrendingNow />
          <TopRated />
        </div>
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
