// src/components/ProductList.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, title = "Our Products" }) => {
  const [sortBy, setSortBy] = useState('featured');
  
  // Sort products based on the selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // featured
        return 0; // No sorting, keep original order
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-600">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-gray-300 rounded-md text-gray-700 py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
          </select>
        </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}         
        </div>
    </div>
  );
}       