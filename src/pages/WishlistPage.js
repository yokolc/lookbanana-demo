import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import './WishlistPage.css';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with API call
  useEffect(() => {
    const mockWishlist = [
      {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        salePrice: 24.99,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
        isOnSale: true,
        isSoldOut: false,
        category: 'DISNEY'
      },
      {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
        isOnSale: false,
        isSoldOut: false,
        category: 'NETFLIX'
      },
      {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
        isOnSale: false,
        isSoldOut: true,
        category: 'YOUTUBE'
      }
    ];

    setTimeout(() => {
      setWishlistItems(mockWishlist);
      setLoading(false);
    }, 1000);
  }, []);

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const moveAllToCart = () => {
    // This would typically add all items to cart and clear wishlist
    alert('All items moved to cart!');
    setWishlistItems([]);
  };

  if (loading) {
    return (
      <div className="wishlist-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading your wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1>My Wishlist</h1>
          {wishlistItems.length > 0 && (
            <button onClick={moveAllToCart} className="move-all-btn">
              Move All to Cart
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">💝</div>
            <h2>Your wishlist is empty</h2>
            <p>Start adding items you love to your wishlist!</p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="wishlist-stats">
              <span>{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}</span>
            </div>

            <div className="wishlist-grid">
              {wishlistItems.map(product => (
                <div key={product.id} className="wishlist-item">
                  <ProductCard product={product} />
                  <div className="wishlist-item-actions">
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="remove-wishlist-btn"
                    >
                      Remove
                    </button>
                    <button className="add-to-cart-btn">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage; 