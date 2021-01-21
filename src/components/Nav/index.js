import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Nav = ({ numberCart }) => (
  <>
    <a href="wwq" aria-label="Save" className="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i /></a>

    <nav className="fh5co-nav" role="navigation">

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-2">
            <div id="fh5co-logo"><Link to="/login/">Login</Link></div>
          </div>
          <div className="col-md-6 col-xs-6 text-center menu-1">
            <ul>
              <li className="has-dropdown">
                <Link to="/product/">Shop</Link>
                <ul className="dropdown">
                  <li><a href="single.html">Single Shop</a></li>
                </ul>
              </li>
              <li><a href="about.html">About</a></li>
              <li className="has-dropdown">
                <a href="services.html">Services</a>
                <ul className="dropdown">
                  <li><a href="#a">Web Design</a></li>
                  <li><a href="#b">eCommerce</a></li>
                  <li><a href="#c">Branding</a></li>
                  <li><a href="#d">API</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
            <ul>
              <li className="search">
                <div className="input-group">
                  <input type="text" placeholder="Search.." />
                  <span className="input-group-btn">
                    <button aria-label="Search" className="btn btn-primary" type="button"><i className="fas fa-search" /></button>
                  </span>
                </div>
              </li>
              <li className="shopping-cart">
                <Link to="/cart/" className="cart">
                  <span>
                    <small>{numberCart}</small>
                    <i className="fas fa-shopping-cart" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>
);

const mapStateToProps = (state) => ({
  numberCart: state.cartProduct.numberCart,
});
Nav.propTypes = {
  numberCart: PropTypes.number.isRequired,
};
export default connect(mapStateToProps)(Nav);
