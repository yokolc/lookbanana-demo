import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './StripePayment.css';

const StripePayment = ({ amount, onSuccess, onError, loading, setLoading }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setLoading(false);
      return;
    }

    try {
      // Create payment method
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (paymentMethodError) {
        setError(paymentMethodError.message);
        setLoading(false);
        return;
      }

      // Send to your backend
      const response = await fetch('/api/payments/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'usd',
          items: [
            {
              id: 1,
              name: 'Test Product',
              quantity: 1,
              price: amount
            }
          ]
        }),
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
        setLoading(false);
        return;
      }

      // Confirm payment
      const { error: confirmError } = await stripe.confirmCardPayment(result.client_secret);

      if (confirmError) {
        setError(confirmError.message);
        setLoading(false);
        return;
      }

      onSuccess(result);
    } catch (err) {
      setError('An unexpected error occurred.');
      setLoading(false);
    }
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

  return (
    <div className="stripe-payment">
      <form onSubmit={handleSubmit}>
        <div className="payment-section">
          <h3>Payment Information</h3>
          <div className="card-element-container">
            <CardElement options={cardElementOptions} />
          </div>
          {error && <div className="payment-error">{error}</div>}
        </div>
        
        <button
          type="submit"
          disabled={!stripe || loading}
          className="payment-button"
        >
          {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
        </button>
      </form>
    </div>
  );
};

export default StripePayment; 