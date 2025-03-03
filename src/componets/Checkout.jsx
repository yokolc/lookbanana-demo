import React, { useState } from 'react';

const Checkout = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  
  // State for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 2 },
  ]);
  
  // State for checkout steps
  const [step, setStep] = useState('information'); // 'information', 'shipping', 'payment', 'confirmation'
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle quantity changes
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };
  
  // Calculate order summary
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = 5.99;
  const total = subtotal + tax + shipping;
  
  // Handle form submission for each step
  const handleSubmit = (e) => {
    e.preventDefault();
    
    switch (step) {
      case 'information':
        setStep('shipping');
        break;
      case 'shipping':
        setStep('payment');
        break;
      case 'payment':
        // In a real app, this would process payment
        setStep('confirmation');
        break;
      default:
        break;
    }
  };
  
  // Render information step
  const renderInformationStep = () => (
    <div className="checkout-form">
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Continue to Shipping</button>
      </form>
    </div>
  );
  
  // Render shipping step
  const renderShippingStep = () => (
    <div className="checkout-form">
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="button" className="btn-secondary" onClick={() => setStep('information')}>
          Back
        </button>
        <button type="submit" className="btn-primary">Continue to Payment</button>
      </form>
    </div>
  );
  
  // Render payment step
  const renderPaymentStep = () => (
    <div className="checkout-form">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cardExpiry">Expiration Date</label>
            <input
              type="text"
              id="cardExpiry"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardCvc">CVC</label>
            <input
              type="text"
              id="cardCvc"
              name="cardCvc"
              value={formData.cardCvc}
              onChange={handleChange}
              placeholder="123"
              required
            />
          </div>
        </div>
        <button type="button" className="btn-secondary" onClick={() => setStep('shipping')}>
          Back
        </button>
        <button type="submit" className="btn-primary">Complete Order</button>
      </form>
    </div>
  );
  
  // Render confirmation step
  const renderConfirmationStep = () => (
    <div className="checkout-confirmation">
      <div className="success-icon">✓</div>
      <h2>Thank You for Your Order!</h2>
      <p>Your order has been placed successfully. We've sent a confirmation email to {formData.email}.</p>
      <p>Order Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
      <button className="btn-primary" onClick={() => window.location.href = '/'}>
        Continue Shopping
      </button>
    </div>
  );
  
  // Render order summary
  const renderOrderSummary = () => (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>
            <div className="item-quantity">
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="summary-details">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (8%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="checkout-container">
      {/* Progress indicator */}
      {step !== 'confirmation' && (
        <div className="checkout-progress">
          <div className={`progress-step ${step === 'information' || step === 'shipping' || step === 'payment' ? 'active' : ''}`}>
            Information
          </div>
          <div className={`progress-step ${step === 'shipping' || step === 'payment' ? 'active' : ''}`}>
            Shipping
          </div>
          <div className={`progress-step ${step === 'payment' ? 'active' : ''}`}>
            Payment
          </div>
        </div>
      )}
      
      <div className="checkout-content">
        <div className="checkout-main">
          {step === 'information' && renderInformationStep()}
          {step === 'shipping' && renderShippingStep()}
          {step === 'payment' && renderPaymentStep()}
          {step === 'confirmation' && renderConfirmationStep()}
        </div>
        
        {step !== 'confirmation' && (
          <div className="checkout-sidebar">
            {renderOrderSummary()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;