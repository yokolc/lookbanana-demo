import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, salePrice, image, isSoldOut, isOnSale } = product;
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isSoldOut) return;
    
    setIsAdding(true);
    addToCart(product);
    
    // Reset button state after animation
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <div className="product-image-container">
          <img
            src={image}
            alt={name}
            className="product-image"
            onError={e => {e.target.style.display='none';}}
          />
          {isSoldOut ? (
            <div className="sold-out-badge">Sold Out</div>
          ) : isOnSale ? (
            <div className="sale-badge">Sale</div>
          ) : null}
        </div>
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <div className="product-price">
            {isOnSale ? (
              <>
                <span className="sale-price">${salePrice.toFixed(2)}</span>
                <span className="original-price">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${price.toFixed(2)}</span>
            )}
          </div>
          <div className="add-to-cart-container">
            <button 
              className={`add-to-cart-btn ${isAdding ? 'adding' : ''} ${isSoldOut ? 'sold-out' : ''}`}
              onClick={handleAddToCart}
              disabled={isSoldOut}
              aria-label={isSoldOut ? 'Out of stock' : 'Add to cart'}
            >
              {isAdding ? 'Added!' : isSoldOut ? 'Sold Out' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 