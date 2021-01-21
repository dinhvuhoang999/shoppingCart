import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  increase, decrease, remove, update,
} from '../../redux/action';

const CartItem = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const [amount, setQuantity] = useState(quantity);

  // console.log('> quantity', quantity);
  useEffect(() => {
    console.log('> quantity1', amount);
    setQuantity(quantity);
  }, [quantity]);

  const onChangeInput = (e) => setQuantity(parseInt(e.target.value, 10));

  const onBlurInput = () => dispatch(update(product.id, amount));

  const onIncreaseButton = () => dispatch(increase(product.id));

  const onRemoveButton = () => dispatch(remove(product.id));

  const onDecreaseButton = () => dispatch(decrease(product.id));

  return (

    <div className="mb-3">
      <div className="pt-4 wish-list">
        <div className="row mb-4">
          <div className="col-md-5 col-lg-3 col-xl-3">
            <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
              <img
                className="img-fluid w-100"
                src={product.img}
                alt="Sample"
              />
              <div className="mask">
                <div className="mask rgba-black-slight" />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-9 col-xl-9">
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{product.title}</h5>
                </div>
                <div>

                  <div className="def-number-input number-input safari_only mb-0 w-100">
                    <button
                      type="button"
                      className="minus decrease"
                      onClick={() => {
                        if (quantity === 1) {
                          return onRemoveButton();
                        }
                        return onDecreaseButton();
                      }}
                    >
                      -
                    </button>
                    <input
                      onChange={onChangeInput}
                      onBlur={onBlurInput}
                      type="number"
                      value={amount}
                    />
                    <button type="button" className="plus increase" onClick={onIncreaseButton}>+</button>
                  </div>
                  <small id="passwordHelpBlock" className="form-text text-muted text-center">
                    (Note, 1 piece)
                  </small>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <a onClick={() => dispatch(remove(product.id))} href="#!" type="button" className="card-link-secondary small text-uppercase mr-3">
                    <i
                      className="fas fa-trash-alt mr-1"
                    />
                    Remove item
                  </a>
                  <a href="!" type="button" className="card-link-secondary small text-uppercase">
                    <i
                      className="fas fa-heart mr-1"
                    />
                    Move to wish list
                  </a>
                </div>
                <p className="mb-0">
                  <span>
                    <strong id="summary">
                      $
                      {product.price}
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.objectOf(PropTypes.object).isRequired,
  quantity: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default CartItem;
