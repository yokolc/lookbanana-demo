import React, { useState } from 'react';
import './WishlistButton.css';

const WishlistButton = ({ product, isInWishlist, onToggleWishlist }) => {
  const [loading, setLoading] = useState(false);

  const handleToggleWishlist = async () => {
    setLoading(true);
    try {
      await onToggleWishlist(product);
    } catch (error) {
      console.error('Error toggling wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`wishlist-button ${isInWishlist ? 'in-wishlist' : ''}`}
      onClick={handleToggleWishlist}
      disabled={loading}
      aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <HeartIcon filled={isInWishlist} />
      {loading && <span className="loading-spinner"></span>}
    </button>
  );
};

const HeartIcon = ({ filled }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

export default WishlistButton; 