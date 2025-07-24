import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const UserIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 22 22" aria-hidden="true">
    <circle cx="11" cy="7.5" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3.5 19c0-3.59 3.13-6.5 7.5-6.5s7.5 2.91 7.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CartIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 22 22" aria-hidden="true">
    <circle cx="8.5" cy="19" r="1.5" fill="currentColor"/>
    <circle cx="16.5" cy="19" r="1.5" fill="currentColor"/>
    <path d="M2 2h2l2.2 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6l1.2-6.2H6.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={require('../assets/images/logo.png')} alt="LookBanana Logo" className="logo-img" onError={e => {e.target.style.display='none';}} />
                <span className="logo-text">LookBanana</span>
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }} aria-label="Cart">
                  <CartIcon />
                </Link>
                <Link to="/user" style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }} aria-label="User">
                  <UserIcon />
                </Link>
            </nav>
        </header>
    );
};

export default Header;