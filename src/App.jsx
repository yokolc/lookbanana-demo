import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import checkoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div>
      <Header />
      <main>
        <BrowserRouter>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;