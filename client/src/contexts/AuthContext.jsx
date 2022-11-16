import { createContext, useState, useEffect, useContext } from 'react'
import { useLazyQuery } from '@apollo/client'
import GET_ME from '../graphql/queries/users'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [getMe, { data }] = useLazyQuery(GET_ME)
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      fetchUser(token)
      setIsAuth(true)
    }
  }, [data])

  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    setIsAuth(true)
    fetchUser(token)
  }

  const logoutUser = () => {
    window.localStorage.removeItem('token')
    setUser(null)
    setIsAuth(false)
  }

  const fetchUser = (token) => {
    getMe({
      variables: {
        token
      }
    })
    if (data) {
      setUser(data.me)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuth, loginUser, logoutUser, setUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
