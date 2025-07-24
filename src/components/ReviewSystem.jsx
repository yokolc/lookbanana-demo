import React, { useState } from 'react';
import './ReviewSystem.css';

const ReviewSystem = ({ productId, reviews = [], onAddReview }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    comment: '',
    name: ''
  });

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.title || !newReview.comment || !newReview.name) {
      alert('Please fill in all fields');
      return;
    }

    const review = {
      id: Date.now(),
      productId,
      ...newReview,
      date: new Date().toISOString(),
      verified: true
    };

    onAddReview(review);
    setNewReview({ rating: 5, title: '', comment: '', name: '' });
    setShowReviewForm(false);
  };

  const StarRating = ({ rating, interactive = false, onRatingChange }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type={interactive ? 'button' : 'span'}
            className={`star ${star <= rating ? 'filled' : ''}`}
            onClick={interactive ? () => onRatingChange(star) : undefined}
            disabled={!interactive}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="review-system">
      <div className="review-header">
        <h3>Customer Reviews</h3>
        <button 
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="write-review-btn"
        >
          Write a Review
        </button>
      </div>

      {/* Review Summary */}
      <div className="review-summary">
        <div className="rating-overview">
          <div className="average-rating">
            <span className="rating-number">{averageRating.toFixed(1)}</span>
            <StarRating rating={Math.round(averageRating)} />
            <span className="total-reviews">({reviews.length} reviews)</span>
          </div>
        </div>

        <div className="rating-breakdown">
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className="rating-bar">
              <span className="rating-label">{rating} stars</span>
              <div className="rating-progress">
                <div 
                  className="rating-fill"
                  style={{ 
                    width: `${reviews.length > 0 ? (ratingCounts[rating] / reviews.length) * 100 : 0}%` 
                  }}
                ></div>
              </div>
              <span className="rating-count">{ratingCounts[rating]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="review-form-container">
          <form onSubmit={handleSubmitReview} className="review-form">
            <h4>Write Your Review</h4>
            
            <div className="form-group">
              <label>Rating</label>
              <StarRating 
                rating={newReview.rating} 
                interactive={true}
                onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
              />
            </div>

            <div className="form-group">
              <label htmlFor="review-title">Review Title</label>
              <input
                type="text"
                id="review-title"
                value={newReview.title}
                onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Summarize your experience"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="review-comment">Review</label>
              <textarea
                id="review-comment"
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Share your thoughts about this product"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="review-name">Your Name</label>
              <input
                type="text"
                id="review-name"
                value={newReview.name}
                onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => setShowReviewForm(false)} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="reviews-list">
        {reviews.length === 0 ? (
          <div className="no-reviews">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        ) : (
          reviews.map(review => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>{review.title}</h4>
                  <div className="reviewer-details">
                    <span className="reviewer-name">{review.name}</span>
                    <span className="review-date">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                    {review.verified && (
                      <span className="verified-badge">Verified Purchase</span>
                    )}
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSystem; 