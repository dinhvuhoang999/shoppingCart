import {
  ADD_TO_CART, INCREASE, DECREASE, DELETE, UPDATE_CARD,
} from '../action/contains';

const initialState = {
  cart: [],
  numberCart: 0,
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  const cartDemo = [...state.cart];

  switch (action.type) {
    case ADD_TO_CART: {
      const cartItem = cartDemo.find((item) => item.product.id === action.payload.product.id);
      console.log('cartItem', cartItem);

      if (!cartItem) {
        return {
          ...state,
          cart: [...cartDemo, action.payload],
          numberCart: state.numberCart + 1,

        };
      }
      cartItem.quantity += 1;
      return {
        ...state,
        cart: cartDemo,
        numberCart: state.numberCart + 1,
      };
    }
    case INCREASE: {
      const cart = cartDemo.map((item) => {
        if (item.product.id === action.payload.id) {
          const itemTamp = { ...item };

          itemTamp.quantity += 1;

          return itemTamp;
        }

        return item;
      });

      return {
        ...state,
        cart,
        numberCart: state.numberCart + 1,
      };
    }

    case DECREASE: {
      const cartItem = cartDemo.find((item) => item.product.id === action.payload.id);
      cartItem.quantity -= 1;
      return {
        ...state,
        cart: cartDemo,
        numberCart: state.numberCart - 1,
      };
    }
    case UPDATE_CARD: {
      const cartItem = cartDemo.find((item) => item.product.id === action.payload.id);
      cartItem.quantity = action.payload.quantity;
      const updateNumber = state.numberCart + action.payload.quantity - cartItem.quantity;
      return {
        ...state,
        cart: cartDemo,
        numberCart: updateNumber,
      };
    }
    case DELETE: {
      console.log('Delete', action.payload.id);
      const cartDelete = cartDemo.find((item) => item.product.id === action.payload.id);
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.product.id !== action.payload.id),
        numberCart: state.numberCart - cartDelete.quantity,
      };
    }
    default:
      return state;
  }
}
