import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import EditMovie from '../pages/movies/edit'
import ErrorPage from '../pages/error'
import Login from '../pages/auth/login'
import SignUp from '../pages/auth/signup'
import Favorites from '../pages/favorites'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/favorites',
    element: <Favorites />
  },
  {
    path: '/movies/:id/edit',
    element: <EditMovie />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export default router
