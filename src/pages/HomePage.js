import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import './HomePage.css';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import LookBananaLogo from '../components/LookBananaLogo';


// Sample featured collections data
const featuredCollections = [
  {
    id: 1,
    title: 'New Arrivals',
    description: 'Explore our new collection',
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

// Customer testimonials
const testimonials = [
  {
    id: 1,
    text: "Can't recommend enough. Bought several products now from LookBanana. All beautiful designs, very high quality and lovely packaging. 10/10 would recommend. Will be buying in future.",
    author: "Sarah M."
  },
  {
    id: 2,
    text: "This is my 6th, maybe 7th purchase from LookBanana and I just can't emphasize how amazing they are. The design, the quality and the care that goes into packing each piece is outstanding. Every. Single. Time!",
    author: "Emma L."
  },
  {
    id: 3,
    text: "I can't stop buying LookBanana products, they are so cool! I love how they feel so light yet instantly make me feel put together.",
    author: "Jessica K."
  }
];

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

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
          <div className="hero-logo">
            <LookBananaLogo size="large" />
          </div>
          <p className="hero-tagline">ANYTHING BUT ORDINARY</p>
          <p className="hero-subtitle">
            Playful products & accessories, designed to stand out.
            <br />
            <span className="hero-branding">Handcrafted with care, since 2024.</span>
          </p>
          <Link to="/products" className="shop-now-btn">
            Shop Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Quick Navigation Collections */}
      <section className="quick-collections">
        <div className="container">
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
                  <span className="collection-link">SHOP →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="most-popular-section">
        <div className="container">
          <div className="section-header">
            <h2>MOST POPULAR</h2>
            <Link to="/products" className="view-all">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {products.slice(0, 10).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">LOVED BY YOU</h2>
          <p className="testimonials-subtitle">Follow us on Instagram →</p>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#1a1a1a" />
                  ))}
                </div>
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                <p className="testimonial-author">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Club Section */}
      <section className="newsletter-club-section">
        <div className="container">
          <div className="newsletter-club-container">
            <h2 className="newsletter-club-title">JOIN LOOKBANANA CLUB</h2>
            <div className="newsletter-club-icon">✦</div>
            <p className="newsletter-club-subtitle">Sign up for free & you'll get…</p>
            <ul className="newsletter-club-benefits">
              <li>✦ Early access to new collections</li>
              <li>✦ Exclusive promotions</li>
              <li>✦ Entered into our monthly $100 gift card prize draw</li>
            </ul>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-club-form">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-club-input"
              />
              <button type="submit" className="newsletter-club-btn">
                Subscribe →
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
