import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CartContent from '../components/CartContent'

const CartPage = () => {
  const { cart } = useCartContext()

  if (cart.length < 1) {
    return (
      <CartPageWrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </CartPageWrapper>
    )
  }
  return (
    <main>
      <PageHero title="cart" />
      <CartPageWrapper className="page">
        <CartContent />
      </CartPageWrapper>
    </main>
  )
}

const CartPageWrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`
export default CartPage
