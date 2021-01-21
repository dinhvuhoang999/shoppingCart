import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/index';

import { Content } from '../StyledHero';

const ProductItems = ({
  id, title, price, img,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 text-center animate-box">
      <div className="product">
        <Content className="product-grid" img={img}>
          <div className="inner">
            <p>
              <a
                href
                className="icon"
                onClick={() => dispatch(addToCart({
                  id, title, price, img,
                }))}
              >
                <i className="fas fa-shopping-cart" />
              </a>
              <a aria-label="eye" href="single.html" className="icon"><i className="far fa-eye" /></a>
            </p>
          </div>
        </Content>
        <div className="desc">
          <h3><a href="single.html">{title}</a></h3>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};
ProductItems.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
export default ProductItems;
