import { useAuth0 } from '@auth0/auth0-react'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, error, logout, user } = useAuth0()

  const [myUser, setMyUser] = useState(null)
  useEffect(() => {
    setMyUser(user)
  }, [user])
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
