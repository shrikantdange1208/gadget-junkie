import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

export const cart_reducer = (state, action) => {
  let tempCart = []
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload
      const tempItem = state.cart.find((item) => item.id === id + color)

      if (tempItem) {
        tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount }
          }
          return cartItem
        })
        return { ...state, cart: tempCart }
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        }

        return { ...state, cart: [...state.cart, newItem] }
      }

    case REMOVE_CART_ITEM:
      tempCart = state.cart.filter((item) => item.id !== action.payload.id)
      return { ...state, cart: tempCart }

    case CLEAR_CART:
      return { ...state, cart: [] }

    case TOGGLE_CART_ITEM_AMOUNT:
      const toggleId = action.payload.id
      const operation = action.payload.value

      tempCart = state.cart.map((item) => {
        if (item.id === toggleId) {
          if (operation === 'inc') {
            if (item.amount < item.max) {
              item.amount = item.amount + 1
            }
          } else {
            if (item.amount > 1) {
              item.amount = item.amount - 1
            }
          }
        }
        return item
      })

      return { ...state, cart: tempCart }

    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem
          total.total_items += amount
          total.total_amount += price * amount
          return total
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      )
      return { ...state, total_items: total_items, total_amount: total_amount }
    default:
      throw new Error(`No matching "${action.type}" - action type`)
  }
}
