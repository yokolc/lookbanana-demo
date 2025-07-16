import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './CategoryTabsShowcase.css';

const CATEGORIES = [
  { key: 'DISNEY', label: 'DISNEY' },
  { key: 'NETFLIX', label: 'NETFLIX' },
  { key: 'YOUTUBE', label: 'YOUTUBE' },
];

const CategoryTabsShowcase = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key);

  const filtered = products.filter(p => p.category === activeCategory);

  return (
    <section className="category-tabs-showcase-section">
      <div className="category-tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            className={`category-tab${activeCategory === cat.key ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="category-tabs-list-wrapper">
        <div className="category-tabs-list">
          {filtered.map(product => (
            <div key={product.id} className="category-tabs-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabsShowcase; 