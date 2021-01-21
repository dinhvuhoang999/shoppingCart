import React from 'react';
import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import ProductContainer from './components/ProductContainer';
import CartContainer from './components/CartContainer';
import Login from './pages/Login';

function App() {
  return (
    <div id="page">
      <Switch>
        <Nav />
        <Route exact path="/cart/">
          <Hero />
          <CartContainer />
        </Route>
        <Route exact path="/product/">
          <Hero />
          <ProductContainer />
        </Route>
        <Route exact path="/login/" component={Login} />

      </Switch>
    </div>

  );
}
export default App;
