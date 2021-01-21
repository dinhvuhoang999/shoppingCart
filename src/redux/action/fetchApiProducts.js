import { fetchProductBegin, fetchProductFailure, fetchProductSuccess } from './index';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductBegin());
    return fetch('https://qpd4m.sse.codesandbox.io/products')
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProductSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchProductFailure(error)));
  };
}
export default fetchProducts;
