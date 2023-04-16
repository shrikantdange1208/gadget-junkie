import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './context/user_context'
// Auth0 Domain - dev-507sjovwsn6rdunr.us.auth0.com
// Auth0 Client ID - LzY3FMtHkh5fsm1MXXQO22dJnXT5GjoV
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
    authorizationParams={{ redirect_uri: window.location.origin }}
    //redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)
