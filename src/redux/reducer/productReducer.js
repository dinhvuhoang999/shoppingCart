import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../action/contains';

const initialState = {
  _products: [],
  error: null,
  loading: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: true,
        _products: action.payload.products,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {

        ...state,
        loading: false,
        error: action.payload.error,
        _products: [],
      };
    default:
      return state;
  }
}
