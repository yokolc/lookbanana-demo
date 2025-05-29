/**
 * 
 * import React from 'react';

const HomaPage = () => {
    return(
        <div>
            <h1> Welcome to Our Store!</h1>
            <div className="text-3xl text-red-600">Home Page Loaded</div>

        </div>
        
    );
};

export default HomaPage;
*/
import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.5,
      category: "Electronics",
      inStock: true,
      discount: "31% OFF"
    },
    {
      id: 2,
      name: "Premium Coffee Beans - 1kg",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
      rating: 4.8,
      category: "Food & Beverage",
      inStock: true,
      discount: "29% OFF"
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      price: 199.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      rating: 4.3,
      category: "Furniture",
      inStock: true,
      discount: "33% OFF"
    },
    {
      id: 4,
      name: "Smartphone Case - Clear Design",
      price: 15.99,
      originalPrice: 25.99,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=300&h=300&fit=crop",
      rating: 4.2,
      category: "Accessories",
      inStock: false,
      discount: "38% OFF"
    },
    {
      id: 5,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      originalPrice: 45.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 4.6,
      category: "Clothing",
      inStock: true,
      discount: "35% OFF"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(sampleProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (!product.inStock) {
      alert('Sorry, this product is out of stock!');
      return;
    }
    // Add to cart logic here
    alert(`${product.name} added to cart!`);
  };

  const handleViewProduct = (productId) => {
    // Navigate to product detail page
    console.log(`Viewing product ${productId}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="homepage">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading amazing products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="brand-title">🍌 LookBanana</h1>
          <p className="hero-subtitle">Discover Amazing Products at Unbeatable Prices</p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Hand-picked items just for you</p>
          
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
                    }}
                  />
                  {product.discount && (
                    <span className="discount-badge">{product.discount}</span>
                  )}
                  {!product.inStock && (
                    <div className="out-of-stock-overlay">
                      <span>Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-rating">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-value">({product.rating})</span>
                  </div>
                  
                  <div className="product-pricing">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="product-actions">
                    <button 
                      className="btn-primary"
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button 
                      className="btn-secondary"
                      onClick={() => handleViewProduct(product.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose LookBanana?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>100% secure payment processing</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day hassle-free returns</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
