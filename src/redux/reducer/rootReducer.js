import { combineReducers } from 'redux';
import products from './productReducer';
import cartProduct from './cartReducer';

export default combineReducers({
  products,
  cartProduct,
});
