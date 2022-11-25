import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './apolloClient'
import './assets/styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import router from './router'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import { ImageProvider } from './contexts/ImageContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ImageProvider>
          <RouterProvider router={router} />
          <ToastContainer
            theme='dark'
            closeButton
            closeOnClick
            autoClose={false}
          />
        </ImageProvider>
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>
)
