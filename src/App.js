import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import ForgotPasswordPage from './pages/ForgotPasswordPage.js';
import UserPage from './pages/UserPage.js';
import ProductListPage from './pages/ProductListPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import CartPage from './pages/CartPage.js';
import CheckoutPage from './pages/CheckoutPage.js';
import OrderHistoryPage from './pages/OrderHistoryPage.js';
import WishlistPage from './pages/WishlistPage.js';
import PaymentHistory from './components/PaymentHistory.js';
import Header from './components/Header2.js';
import { CartProvider } from './context/CartContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {
    return (
      <div className='App'>
        <LanguageProvider>
          <CartProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/login" element={<LoginPage/>} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="/user" element={<UserPage />} />
                  <Route path="/products" element={<ProductListPage />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/orders" element={<OrderHistoryPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/payment-history" element={<PaymentHistory />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </LanguageProvider>
      </div> 
    );
  }

export default App;