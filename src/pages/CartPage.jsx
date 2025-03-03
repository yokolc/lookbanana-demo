import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);
  // State for loading
  const [isLoading, setIsLoading] = useState(true);
  // State for cart summary
  const [summary, setSummary] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 5.99,
    total: 0,
  });
  // State for promo code
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  // Fetch cart items (simulated)
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCartItems([
        { id: 1, name: 'Wireless Headphones', price: 79.99, quantity: 1, image: '/api/placeholder/80/80' },
        { id: 2, name: 'Smartphone Case', price: 24.99, quantity: 2, image: '/api/placeholder/80/80' },
        { id: 3, name: 'USB-C Charging Cable', price: 12.99, quantity: 1, image: '/api/placeholder/80/80' },
      ]);
      setIsLoading(false);
    }, 800);
  }, []);
  
  // Calculate summary whenever cart items change
  useEffect(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax + summary.shipping - discount;
    
    setSummary({
      ...summary,
      subtotal,
      tax,
      total,
    });
  }, [cartItems, discount]);
  
  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 0) {
      if (newQuantity === 0) {
        // Remove item if quantity is zero
        handleRemoveItem(id);
      } else {
        // Update quantity
        setCartItems(cartItems.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        ));
      }
    }
  };
  
  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Apply promo code
  const handleApplyPromo = () => {
    // Reset previous promo messages
    setPromoError('');
    setPromoSuccess('');
    
    // Mock promo code logic
    if (!promoCode) {
      setPromoError('Please enter a promo code');
      return;
    }
    
    if (promoCode.toLowerCase() === 'discount10') {
      const discountAmount = summary.subtotal * 0.1;
      setDiscount(discountAmount);
      setPromoSuccess('10% discount applied successfully!');
    } else if (promoCode.toLowerCase() === 'freeshipping') {
      setDiscount(summary.shipping);
      setPromoSuccess('Free shipping applied!');
      setSummary({
        ...summary,
        shipping: 0
      });
    } else {
      setPromoError('Invalid promo code');
      setDiscount(0);
    }
  };
  
  // Clear cart
  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to remove all items from your cart?')) {
      setCartItems([]);
      setDiscount(0);
      setPromoCode('');
      setPromoError('');
      setPromoSuccess('');
    }
  };
  
  // Save for later functionality (simulated)
  const handleSaveForLater = (id) => {
    alert(`Item ${id} saved for later!`);
    handleRemoveItem(id);
  };
  
  if (isLoading) {
    return (
      <div className="cart-loading">
        <div className="loading-spinner"></div>
        <p>Loading your cart...</p>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button onClick={handleClearCart} className="btn-text">Clear Cart</button>
        )}
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="btn-primary">Browse Products</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-container">
            <div className="cart-items-header">
              <span className="col-product">Product</span>
              <span className="col-price">Price</span>
              <span className="col-quantity">Quantity</span>
              <span className="col-total">Total</span>
              <span className="col-actions"></span>
            </div>
            
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-product">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-sku">SKU: {item.id}000{item.id}</p>
                    </div>
                  </div>
                  
                  <div className="item-price">${item.price.toFixed(2)}</div>
                  
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                      className="quantity-input"
                    />
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <div className="item-actions">
                    <button 
                      className="btn-icon"
                      onClick={() => handleSaveForLater(item.id)}
                      aria-label="Save for later"
                    >
                      ❤️
                    </button>
                    <button 
                      className="btn-icon"
                      onClick={() => handleRemoveItem(item.id)}
                      aria-label="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-items-footer">
              <Link to="/products" className="btn-secondary">Continue Shopping</Link>
              <div className="estimated-delivery">
                <span>Estimated Delivery:</span>
                <span className="delivery-date">
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
          
          <div className="cart-sidebar">
            <div className="promo-code-section">
              <h3>Promo Code</h3>
              <div className="promo-input">
                <input 
                  type="text" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                />
                <button 
                  onClick={handleApplyPromo}
                  className="btn-secondary"
                >
                  Apply
                </button>
              </div>
              {promoError && <p className="promo-error">{promoError}</p>}
              {promoSuccess && <p className="promo-success">{promoSuccess}</p>}
              <div className="available-promos">
                <h4>Available Promo Codes:</h4>
                <ul>
                  <li>DISCOUNT10 - 10% off your order</li>
                  <li>FREESHIPPING - Free shipping on your order</li>
                </ul>
              </div>
            </div>
            
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                <span>${summary.subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="summary-row discount">
                  <span>Discount:</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Estimated Tax:</span>
                <span>${summary.tax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>${summary.shipping.toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Order Total:</span>
                <span>${Math.max(0, summary.total).toFixed(2)}</span>
              </div>
              
              <Link to="/checkout" className="btn-primary checkout-btn">
                Proceed to Checkout
              </Link>
              
              <div className="payment-methods">
                <p>We Accept:</p>
                <div className="payment-icons">
                  <span className="payment-icon">💳</span>
                  <span className="payment-icon">💰</span>
                  <span className="payment-icon">🏦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;