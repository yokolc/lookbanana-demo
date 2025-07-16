import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './CategoryShowcase.css';

const CategoryShowcase = ({ title, products, viewAllLink }) => {
  return (
    <section className="category-showcase-section">
      <div className="category-showcase-header">
        <h2 className="category-showcase-title">{title}</h2>
        <Link to={viewAllLink} className="category-showcase-viewall">View All →</Link>
      </div>
      <div className="category-showcase-list-wrapper">
        <div className="category-showcase-list">
          {products.map(product => (
            <div key={product.id} className="category-showcase-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase; 