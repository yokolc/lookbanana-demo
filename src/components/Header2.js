import React from 'react';
import { Link } from 'react-router-dom';
import LookBananaLogo from './LookBananaLogo';
import './Header2.css';

const UserIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 22 22" aria-hidden="true">
    <circle cx="11" cy="7.5" r="4" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M3.5 19c0-3.59 3.13-6.5 7.5-6.5s7.5 2.91 7.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.2"/>
    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = () => {

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    {/* Logo */}
                    <div className="header-logo">
                        <Link to="/" className="logo-link">
                            <LookBananaLogo size="medium" />
                        </Link>
                    </div>
                    
                    {/* Navigation Links */}
                    <nav className="main-nav">
                        <Link to="/products" className="nav-link">Products</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                    </nav>
                </div>

                {/* Header Actions */}
                <div className="header-actions">
                    <button className="action-btn search-btn" aria-label="Search">
                        <SearchIcon />
                    </button>
                    <Link to="/login" className="action-btn user-btn account-btn" aria-label="Login">
                        <UserIcon />
                    </Link>
                    <Link to="/cart" className="action-btn cart-btn" aria-label="Shopping Cart">
                        <CartIcon />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;