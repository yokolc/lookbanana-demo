import React, { useState, useEffect } from 'react';
import products from '../data/products';
import './ProductPage.css';

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      try {
        setProductList(products);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    }, 800);
  }, []);

  const handleAddToCart = (product) => {
    // Placeholder for add to cart logic
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <main className="product-page">
      <h1 className="product-title">Our Products</h1>
      {loading && <div className="product-loading">Loading products...</div>}
      {error && <div className="product-error">{error}</div>}
      <div className="product-grid">
        {!loading && !error && productList.map(product => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
              onError={e => {e.target.style.display='none';}}
            />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price.toFixed(2)}</div>
            </div>
            <button
              className="product-add-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductPage; 