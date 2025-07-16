import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      try {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found.');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load product.');
        setLoading(false);
      }
    }, 600);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      alert('Please select a size.');
      return;
    }
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="product-detail-page">
        <div className="loading-message">Loading product...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail-page">
        <div className="error-message">
          {error || 'Product not found.'}
          <Link to="/products" className="back-link">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-images">
          <img
            src={product.image}
            alt={product.name}
            className="product-main-image"
            onError={e => {e.target.style.display='none';}}
          />
        </div>
        
        <div className="product-info">
          <nav className="breadcrumb">
            <Link to="/products">Products</Link>
            <span className="separator">/</span>
            <span>{product.name}</span>
          </nav>
          
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-price">
            {product.isOnSale ? (
              <>
                <span className="sale-price">${product.salePrice.toFixed(2)}</span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          {product.description && (
            <div className="product-description">
              <p>{product.description}</p>
            </div>
          )}
          
          {product.sizes && product.sizes.length > 0 && (
            <div className="size-selection">
              <label className="size-label">Size:</label>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="quantity-selection">
            <label className="quantity-label">Quantity:</label>
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
          </div>
          
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.isSoldOut}
          >
            {product.isSoldOut ? 'Sold Out' : 'Add to Cart'}
          </button>
          
          {product.details && (
            <div className="product-details">
              <h3>Product Details</h3>
              <ul>
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage; 