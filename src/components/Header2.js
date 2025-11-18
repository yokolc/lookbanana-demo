import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header2.css';

const UserIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 22 22" aria-hidden="true">
    <circle cx="11" cy="7.5" r="4" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M3.5 19c0-3.59 3.13-6.5 7.5-6.5s7.5 2.91 7.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 22 22" aria-hidden="true">
    <circle cx="8.5" cy="19" r="1.5" fill="currentColor"/>
    <circle cx="16.5" cy="19" r="1.5" fill="currentColor"/>
    <path d="M2 2h2l2.2 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6l1.2-6.2H6.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.2"/>
    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    {/* Logo */}
                    <div className="header-logo">
                        <Link to="/" className="logo-link">
                            <img 
                                src={require('../assets/images/logo.png')} 
                                alt="LookBanana Logo" 
                                className="logo-img" 
                                onError={e => {e.target.style.display='none';}} 
                            />
                            <span className="logo-text">LookBanana</span>
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
                    <Link to="/user" className="action-btn user-btn account-btn" aria-label="User Account">
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