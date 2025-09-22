import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css';

const PaymentForm = ({ amount, onPaymentSuccess, onPaymentError, orderId, items }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentId, setPaymentIntentId] = useState('');

  // Create payment intent when component mounts
  useEffect(() => {
    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount]);

  const createPaymentIntent = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch('/api/payments/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'usd',
          orderId: orderId,
          items: items
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment intent');
      }

      setClientSecret(data.clientSecret);
      setPaymentIntentId(data.paymentIntentId);
    } catch (err) {
      setError(err.message);
      onPaymentError?.(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Customer Name', // You can get this from a form
          },
        }
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      if (paymentIntent.status === 'succeeded') {
        // Confirm payment with backend
        await confirmPayment(paymentIntent.id);
        onPaymentSuccess?.(paymentIntent);
      } else {
        throw new Error('Payment failed');
      }
    } catch (err) {
      setError(err.message);
      onPaymentError?.(err.message);
    } finally {
      setLoading(false);
    }
  };

  const confirmPayment = async (paymentIntentId) => {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/payments/confirm-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        paymentIntentId: paymentIntentId,
        orderId: orderId
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to confirm payment');
    }

    return data;
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  if (loading && !clientSecret) {
    return (
      <div className="payment-form-loading">
        <div className="spinner"></div>
        <p>Preparing payment...</p>
      </div>
    );
  }

  return (
    <div className="payment-form-container">
      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <div className="payment-amount">
          <span>Total Amount:</span>
          <span className="amount">${amount.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-section">
          <h3>Payment Information</h3>
          <div className="card-element-container">
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        {error && (
          <div className="payment-error">
            <p>{error}</p>
          </div>
        )}

        <button 
          type="submit" 
          disabled={!stripe || loading || !clientSecret}
          className="payment-button"
        >
          {loading ? (
            <>
              <div className="spinner-small"></div>
              Processing...
            </>
          ) : (
            `Pay $${amount.toFixed(2)}`
          )}
        </button>

        <div className="payment-security">
          <p>
            <span className="security-icon">🔒</span>
            Your payment information is secure and encrypted
          </p>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm; 