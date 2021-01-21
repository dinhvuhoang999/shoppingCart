import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  INCREASE, DECREASE,
  ADD_TO_CART,
  DELETE,
  UPDATE_CARD,
  TOTAL,
} from './contains';

export const fetchProductBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});
export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});
export const addToCart = (product, quantity = 1) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});
export const increase = (id, quantity) => ({
  type: INCREASE,
  payload: { id, quantity },
});
export const decrease = (id, quantity) => ({
  type: DECREASE,
  payload: { id, quantity },
});

export const remove = (id) => ({
  type: DELETE,
  payload: { id },
});

export const update = (id, quantity) => ({
  type: UPDATE_CARD,
  payload: { id, quantity },
});

export const total = (price) => ({
  type: TOTAL,
  payload: { price },
});
