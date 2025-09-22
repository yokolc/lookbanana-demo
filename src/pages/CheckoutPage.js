import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/PaymentForm';
import './CheckoutPage.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleAddressChange = (field, value) => {
    setShippingAddress(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const createOrder = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const orderData = {
        userId: JSON.parse(localStorage.getItem('user'))?.id,
        items: cartItems.map(item => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount: calculateTotal(),
        shippingAddress: shippingAddress,
        paymentMethod: 'stripe'
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order');
      }

      setOrderId(data.order.id);
      return data.order;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntent) => {
    try {
      localStorage.removeItem('cartItems');
      alert('Payment successful! Your order has been placed.');
      navigate(`/order-confirmation/${orderId}`);
    } catch (err) {
      console.error('Error handling payment success:', err);
    }
  };

  const handlePaymentError = (error) => {
    setError(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const requiredFields = ['name', 'address', 'city', 'state', 'zipCode', 'phone'];
    const missingFields = requiredFields.filter(field => !shippingAddress[field]);
    
    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    try {
      await createOrder();
    } catch (err) {
      // Error already set in createOrder
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart before checkout.</p>
        <button onClick={() => navigate('/products')} className="btn-primary">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <p>Complete your purchase</p>
        </div>

        <div className="checkout-content">
          <div className="checkout-left">
            <div className="checkout-section">
              <h2>Shipping Address</h2>
              <form onSubmit={handleSubmit} className="address-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={shippingAddress.name}
                      onChange={(e) => handleAddressChange('name', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="address">Address *</label>
                    <input
                      type="text"
                      id="address"
                      value={shippingAddress.address}
                      onChange={(e) => handleAddressChange('address', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      value={shippingAddress.city}
                      onChange={(e) => handleAddressChange('city', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      value={shippingAddress.state}
                      onChange={(e) => handleAddressChange('state', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      value={shippingAddress.zipCode}
                      onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      value={shippingAddress.phone}
                      onChange={(e) => handleAddressChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Creating Order...' : 'Continue to Payment'}
                </button>
              </form>
            </div>

            {orderId && (
              <div className="checkout-section">
                <h2>Payment</h2>
                <Elements stripe={stripePromise}>
                  <PaymentForm
                    amount={calculateTotal()}
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                    orderId={orderId}
                    items={cartItems}
                  />
                </Elements>
              </div>
            )}
          </div>

          <div className="checkout-right">
            <div className="order-summary">
              <h2>Order Summary</h2>
              
              <div className="order-items">
                {cartItems.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className="item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-total">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="total-row total">
                  <span>Total:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="checkout-error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage; 