import { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product
  const [amount, setAmount] = useState(1)
  const [mainColor, setMainColor] = useState(colors[0])

  const increaseAmount = () => {
    setAmount(amount < stock ? amount + 1 : amount)
  }

  const decreaseAmount = () => {
    setAmount(amount <= 1 ? 1 : amount - 1)
  }

  return (
    <AddToCartWrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                } `}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <Link
          to="/cart"
          className="btn add-to-cart"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </AddToCartWrapper>
  )
}

const AddToCartWrapper = styled.div`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: #222;
    margin-right: 0.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }

  .add-to-cart {
    text-align: center;
  }
`
export default AddToCart
