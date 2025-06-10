import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer className="footter">
            <p className="footer-text">
            ©{new Date().getFullYear()} LookBanana. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;