import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';

const CartContainer = ({ cart }) => {
  let total = 0;
  cart.forEach((item) => {
    console.log('1', typeof (item.product.price));
    console.log('2', typeof (item.product.quantity));

    total += item.product.price * item.quantity;
    total.toFixed(2);
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">

          <h5 className="mb-4">
            <span>
              $
              {total}
            </span>
          </h5>
          {cart.map((item) => <CartItem key={item.product.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartProduct.cart,
});

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(CartContainer);
