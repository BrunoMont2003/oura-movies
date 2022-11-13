import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import EditMovie from '../pages/movies/edit'
import ErrorPage from '../pages/error'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movies/:id/edit',
    element: <EditMovie />
  }
])

export default router
