import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Mock data - replace with API call
  useEffect(() => {
    const mockOrders = [
      {
        id: 'ORD-001',
        date: '2024-01-15',
        status: 'delivered',
        total: 89.97,
        items: [
          { id: 1, name: 'Product 1', quantity: 2, price: 29.99, size: 'M' },
          { id: 2, name: 'Product 2', quantity: 1, price: 29.99, size: 'L' }
        ],
        shippingAddress: {
          name: 'John Doe',
          address: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001'
        },
        trackingNumber: 'TRK123456789'
      },
      {
        id: 'ORD-002',
        date: '2024-01-10',
        status: 'shipped',
        total: 39.99,
        items: [
          { id: 3, name: 'Product 3', quantity: 1, price: 39.99, size: 'S' }
        ],
        shippingAddress: {
          name: 'John Doe',
          address: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001'
        },
        trackingNumber: 'TRK987654321'
      },
      {
        id: 'ORD-003',
        date: '2024-01-05',
        status: 'processing',
        total: 59.98,
        items: [
          { id: 4, name: 'Product 4', quantity: 2, price: 29.99, size: 'M' }
        ],
        shippingAddress: {
          name: 'John Doe',
          address: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001'
        }
      }
    ];

    setTimeout(() => {
      setOrders(mockOrders);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return '#38a169';
      case 'shipped': return '#3182ce';
      case 'processing': return '#d69e2e';
      case 'cancelled': return '#e53e3e';
      default: return '#718096';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'delivered': return 'Delivered';
      case 'shipped': return 'Shipped';
      case 'processing': return 'Processing';
      case 'cancelled': return 'Cancelled';
      default: return 'Unknown';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    return order.status === filter;
  });

  if (loading) {
    return (
      <div className="order-history-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="order-history-page">
      <div className="order-history-container">
        <div className="order-history-header">
          <h1>Order History</h1>
          <div className="order-filters">
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="no-orders">
            <div className="no-orders-icon">📦</div>
            <h2>No orders found</h2>
            <p>You haven't placed any orders yet.</p>
            <Link to="/products" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            {filteredOrders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Order #{order.id}</h3>
                    <p className="order-date">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="order-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>

                <div className="order-items">
                  {order.items.map(item => (
                    <div key={`${order.id}-${item.id}-${item.size}`} className="order-item">
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>Size: {item.size} | Qty: {item.quantity}</p>
                      </div>
                      <div className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="order-total">
                    <span>Total:</span>
                    <span className="total-amount">${order.total.toFixed(2)}</span>
                  </div>
                  
                  <div className="order-actions">
                    {order.trackingNumber && (
                      <button className="track-order-btn">
                        Track Order
                      </button>
                    )}
                    <Link to={`/orders/${order.id}`} className="view-order-btn">
                      View Details
                    </Link>
                    {order.status === 'delivered' && (
                      <button className="review-order-btn">
                        Write Review
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage; 