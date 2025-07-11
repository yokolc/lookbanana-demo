import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

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
                <Link to="/cart">Cart</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/user">User</Link>    
            </nav>
        </header>
    );
};

export default Header;