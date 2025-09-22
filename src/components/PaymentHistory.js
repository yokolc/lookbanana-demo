import React, { useState, useEffect } from 'react';
import './PaymentHistory.css';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch('/api/payments/history', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch payment history');
      }

      setPayments(data.payments || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatAmount = (amount) => {
    return `$${parseFloat(amount).toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="payment-history-loading">
        <div className="spinner"></div>
        <p>Loading payment history...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="payment-history-error">
        <p>Error: {error}</p>
        <button onClick={fetchPaymentHistory} className="btn-retry">
          Try Again
        </button>
      </div>
    );
  }

  if (payments.length === 0) {
    return (
      <div className="payment-history-empty">
        <h3>No Payment History</h3>
        <p>You haven't made any payments yet.</p>
      </div>
    );
  }

  return (
    <div className="payment-history">
      <div className="payment-history-header">
        <h2>Payment History</h2>
        <button onClick={fetchPaymentHistory} className="btn-refresh">
          Refresh
        </button>
      </div>

      <div className="payment-list">
        {payments.map((payment) => (
          <div key={payment.id} className="payment-item">
            <div className="payment-info">
              <div className="payment-main">
                <h4>Payment #{payment.payment_intent_id.slice(-8)}</h4>
                <p className="payment-date">
                  {formatDate(payment.created_at)}
                </p>
              </div>
              
              <div className="payment-details">
                <div className="payment-amount">
                  {formatAmount(payment.amount)}
                </div>
                <div className={`payment-status status-${payment.status}`}>
                  {payment.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory; 