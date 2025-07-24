import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid.jsx';
import SortDropdown from '../components/SortDropdown.jsx';
import Pagination from '../components/Pagination.jsx';
import products from '../data/products';
import './ProductListPage.css';

const ProductListPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      try {
        setAllProducts(products);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    }, 800);
  }, []);

  useEffect(() => {
    if (allProducts.length === 0) return;

    let sortedProducts = [...allProducts];

    // Sort products based on selected option
    switch (sortBy) {
      case 'best-selling':
        sortedProducts.sort((a, b) => (b.sales || 0) - (a.sales || 0));
        break;
      case 'a-z':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'date-old-new':
        sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'date-new-old':
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default: // featured - keep original order
        break;
    }

    setDisplayedProducts(sortedProducts);
    setCurrentPage(1); // Reset to first page when sorting changes
  }, [allProducts, sortBy]);

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate pagination
  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = displayedProducts.slice(startIndex, endIndex);

  return (
    <main className="product-list-page">
      <div className="product-list-header">
        <h1 className="page-title">Products</h1>
        <SortDropdown sortBy={sortBy} onSortChange={handleSortChange} />
      </div>
      
      <ProductGrid 
        products={currentProducts} 
        loading={loading} 
        error={error} 
      />
      
      {!loading && !error && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
};

export default ProductListPage; 