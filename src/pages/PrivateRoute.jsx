import { Route, Navigate } from 'react-router-dom'
// import { useUserContext } from '../context/user_context'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ component, ...rest }) => {
  const { user } = useAuth0()
  const Component = withAuthenticationRequired(component, rest)
  return user ? <Component /> : <Navigate to="/" />
}

export default PrivateRoute
