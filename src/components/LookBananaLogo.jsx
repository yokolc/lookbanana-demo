import React from 'react';
import './LookBananaLogo.css';

const LookBananaLogo = ({ className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium',
    large: 'logo-large'
  };

  return (
    <svg 
      className={`lookbanana-logo ${sizeClasses[size]} ${className}`}
      viewBox="0 0 500 100" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LookBanana Logo"
    >
      {/* Handwritten style "LookBanana" text - elegant, flowing, connected like wolf & moon */}
      <text 
        x="20" 
        y="65" 
        className="logo-text"
        fontSize="58"
        fill="#1a1a1a"
        fontFamily="'Great Vibes', 'Allura', 'Dancing Script', cursive"
      >
        LookBanana
      </text>
    </svg>
  );
};

export default LookBananaLogo;

