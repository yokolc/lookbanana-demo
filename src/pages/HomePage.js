import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './HomePage.css';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryTabsShowcase from '../components/CategoryTabsShowcase';


// Sample featured collections data
const featuredCollections = [
  {
    id: 1,
    title: 'New Arrivals',
    description: 'Discover our latest collection',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
    link: '/shop/new-arrivals'
  },
  {
    id: 2,
    title: 'Best Sellers',
    description: 'Shop customer favorites',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1200&h=800&fit=crop',
    link: '/shop/bestsellers'
  },
  {
    id: 3,
    title: 'Gift Guide',
    description: 'Perfect gifts for every occasion',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=800&fit=crop',
    link: '/gifts'
  }
];

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const handleSearch = (searchParams) => {
    const queryParams = new URLSearchParams();
    if (searchParams.keyword) queryParams.set('q', searchParams.keyword);
    if (searchParams.minPrice) queryParams.set('minPrice', searchParams.minPrice);
    if (searchParams.maxPrice) queryParams.set('maxPrice', searchParams.maxPrice);
    if (searchParams.sort) queryParams.set('sort', searchParams.sort);
    
    navigate(`/products?${queryParams.toString()}`);
  };

  const handleFilterChange = (filters) => {
    // Handle filter changes if needed
    console.log('Filters changed:', filters);
  };

  if (loading) {
    return (
      <div className="homepage">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading our collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">LookBanana</h1>
          <p className="hero-subtitle">
            Curated collection of premium products, crafted with attention to detail
          </p>
          <Link to="/shop" className="shop-now-btn">
            Shop Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <Link to="/shop" className="view-all">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="collections-grid">
          {featuredCollections.map(collection => (
            <Link to={collection.link} key={collection.id} className="collection-card">
              <div className="collection-image">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="collection-info">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-all">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="products-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="newsletter-banner">
        <div className="container">
          <div className="newsletter-content">
            <span className="newsletter-text">
              Free shipping on orders over $200 — Subscribe to our newsletter and receive 10% off your first order
            </span>
          </div>
        </div>
      </section>

      {/* Category Tabs Showcase */}
      <div className="container">
        <CategoryTabsShowcase products={products} />
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-form-container">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers and new arrivals</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $200</p>
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
              <p>Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
