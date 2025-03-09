import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // State for products
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const fetchedProducts = [
        {
          id: 1,
          name: "Premium Wireless Headphones",
          price: 149.99,
          image: "/api/placeholder/300/300",
          category: "electronics",
          rating: 4.8,
          featured: true,
          description: "High-quality wireless headphones with noise cancellation and premium sound."
        },
        {
          id: 2,
          name: "Organic Cotton T-Shirt",
          price: 29.99,
          image: "/api/placeholder/300/300",
          category: "clothing",
          rating: 4.5,
          featured: true,
          description: "Soft, comfortable t-shirt made from 100% organic cotton."
        },
        {
          id: 3,
          name: "Smart Watch Series 5",
          price: 299.99,
          image: "/api/placeholder/300/300",
          category: "electronics",
          rating: 4.9,
          featured: true,
          description: "Track your fitness, receive notifications, and more with this advanced smartwatch."
        },
        {
          id: 4,
          name: "Designer Coffee Table",
          price: 199.99,
          image: "/api/placeholder/300/300",
          category: "furniture",
          rating: 4.7,
          featured: false,
          description: "Modern minimalist coffee table with tempered glass top and wooden legs."
        },
        {
          id: 5,
          name: "Professional Chef's Knife",
          price: 89.99,
          image: "/api/placeholder/300/300",
          category: "kitchen",
          rating: 4.6,
          featured: false,
          description: "Premium stainless steel chef's knife, perfect for professional and home cooking."
        },
        {
          id: 6,
          name: "Leather Crossbody Bag",
          price: 79.99,
          image: "/api/placeholder/300/300",
          category: "accessories",
          rating: 4.4,
          featured: false,
          description: "Stylish genuine leather crossbody bag with adjustable strap and multiple compartments."
        },
        {
          id: 7,
          name: "Bluetooth Portable Speaker",
          price: 69.99,
          image: "/api/placeholder/300/300",
          category: "electronics",
          rating: 4.3,
          featured: false,
          description: "Waterproof portable speaker with 20 hours of battery life and amazing sound quality."
        },
        {
          id: 8,
          name: "Natural Face Moisturizer",
          price: 24.99,
          image: "/api/placeholder/300/300",
          category: "beauty",
          rating: 4.7,
          featured: false,
          description: "Hydrating face moisturizer with natural ingredients suitable for all skin types."
        }
      ];
      
      // Extract unique categories
      const uniqueCategories = [...new Set(fetchedProducts.map(product => product.category))];
      
      setProducts(fetchedProducts);
      setFeaturedProducts(fetchedProducts.filter(product => product.featured));
      setCategories(uniqueCategories);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  // Add to cart functionality - in a real app, this would update a cart context or Redux store
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Show toast notification
    alert(`${product.name} added to cart!`); // In a real app, use a proper toast notification
  };
  
  // Calculate total items in cart for the badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Shop</h1>
            <p className="text-xl mb-8">Discover amazing products for every need.</p>
            <Link 
              to="/products" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-pulse text-center">
              <p className="text-gray-500">Loading featured products...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Categories and Products Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-pulse text-center">
              <p className="text-gray-500">Loading products...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Categories Showcase */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => (
              <div 
                key={category}
                onClick={() => setActiveCategory(category)}
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">
                    {category.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-lg font-medium capitalize">{category}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {filteredProducts.filter(p => p.category === category).length} products
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Newsletter Subscription */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Get the latest news, exclusive offers, and product updates straight to your inbox.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 mb-2 sm:mb-0 sm:mr-2 rounded text-gray-800" 
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Fixed Cart Button */}
      <div className="fixed bottom-4 right-4">
        <Link 
          to="/cart" 
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;