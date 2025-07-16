import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, salePrice, image, isSoldOut, isOnSale } = product;

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
          {isSoldOut && (
            <div className="sold-out-badge">Sold out</div>
          )}
          {isOnSale && !isSoldOut && (
            <div className="sale-badge">On sale</div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <div className="product-price">
            {isOnSale && !isSoldOut ? (
              <>
                <span className="sale-price">${salePrice.toFixed(2)}</span>
                <span className="original-price">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 