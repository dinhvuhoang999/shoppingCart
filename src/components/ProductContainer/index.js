import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import fetchProducts from '../../redux/action/fetchApiProducts';
import Productitems from '../Productitems';

const ProductContainer = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div id="fh5co-product">
        <div className="container">

          <div className="row">
            {products.map((product) => <Productitems key={product.id} {...product} />)}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products._products,
  loading: state.products.loading,
  error: state.products.error,

});
ProductContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps)(ProductContainer);
