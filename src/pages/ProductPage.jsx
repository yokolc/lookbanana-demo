import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Product state
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // UI states
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tab, setTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  // Fetch product data
  useEffect(() => {
    // Reset states when product ID changes
    setIsLoading(true);
    setError(null);
    setQuantity(1);
    setSelectedImage(0);
    setTab('description');
    
    // Simulate API fetch
    setTimeout(() => {
      try {
        // Mock data - in a real app, you would fetch this from an API using productId
        const fetchedProduct = {
          id: parseInt(productId),
          name: "Premium Wireless Headphones",
          price: 149.99,
          originalPrice: 199.99,
          discount: 25,
          rating: 4.8,
          reviewCount: 124,
          category: "electronics",
          brand: "SoundMaster",
          stock: 15,
          description: "Experience premium sound quality with these wireless headphones. Featuring active noise cancellation, high-fidelity audio, and up to 30 hours of battery life.",
          features: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Bluetooth 5.0",
            "Built-in microphone",
            "Comfortable over-ear design",
            "Fast charging (3 hours playback from 10 minutes charge)"
          ],
          specifications: {
            "Connectivity": "Bluetooth 5.0, 3.5mm jack",
            "Battery": "500mAh rechargeable lithium-ion",
            "Charging": "USB-C",
            "Driver Size": "40mm",
            "Frequency Response": "20Hz - 20kHz",
            "Weight": "280g",
            "Dimensions": "18 x 16 x 8 cm"
          },
          images: [
            "/api/placeholder/500/500",
            "/api/placeholder/500/500",
            "/api/placeholder/500/500",
            "/api/placeholder/500/500"
          ],
          colors: ["Black", "White", "Blue"],
          sizes: [],
          tags: ["wireless", "headphones", "audio", "noise-cancellation"],
          warranty: "2 years manufacturer warranty"
        };
        
        // Mock related products
        const fetchedRelatedProducts = [
          {
            id: 101,
            name: "Wireless Earbuds Pro",
            price: 89.99,
            image: "/api/placeholder/200/200",
            rating: 4.6
          },
          {
            id: 102,
            name: "Bluetooth Speaker",
            price: 69.99,
            image: "/api/placeholder/200/200",
            rating: 4.4
          },
          {
            id: 103,
            name: "Headphone Stand",
            price: 24.99,
            image: "/api/placeholder/200/200",
            rating: 4.3
          },
          {
            id: 104,
            name: "Audio Adapter",
            price: 19.99,
            image: "/api/placeholder/200/200",
            rating: 4.2
          }
        ];
        
        setProduct(fetchedProduct);
        setRelatedProducts(fetchedRelatedProducts);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load product. Please try again later.");
        setIsLoading(false);
      }
    }, 1000);
  }, [productId]);
  
  // Quantity handlers
  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  // Add to cart functionality - in a real app, this would update a cart context or Redux store
  const addToCart = () => {
    if (product) {
      // Here you would update your cart state/context/store
      alert(`Added ${quantity} ${product.name} to cart!`); // Replace with proper cart notification
      
      // Optional: Navigate to cart page
      // navigate('/cart');
    }
  };
  
  // Buy now functionality
  const buyNow = () => {
    addToCart();
    navigate('/checkout');
  };
  
  // Back button handler
  const goBack = () => {
    navigate(-1);
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg h-96"></div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
        <button 
          onClick={goBack}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }
  
  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-4">Sorry, we couldn't find the product you're looking for.</p>
        <Link 
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/category/${product.category}`} className="hover:text-blue-600 capitalize">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-96 object-contain"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`cursor-pointer bg-gray-100 rounded border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-24 object-contain" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            {/* Basic Info */}
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Brand */}
            <p className="text-gray-600 mb-4">Brand: <span className="font-medium">{product.brand}</span></p>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
                {product.discount && (
                  <span className="ml-2 bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
              {product.stock <= 5 && (
                <p className="text-red-600 text-sm mt-1">Only {product.stock} left in stock - order soon</p>
              )}
            </div>
            
            {/* Short Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color, index) => (
                    <button 
                      key={index}
                      className="px-3 py-1 border rounded-full text-sm hover:border-blue-600"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                <div className="flex space-x-2">
                  {product.sizes.map((size, index) => (
                    <button 
                      key={index}
                      className="px-3 py-1 border rounded-full text-sm hover:border-blue-600"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
              <div className="flex">
                <button 
                  onClick={decreaseQuantity}
                  className="bg-gray-200 px-3 py-1 rounded-l-md"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                  className="w-16 text-center border-t border-b"
                  min="1"
                  max={product.stock}
                />
                <button 
                  onClick={increaseQuantity}
                  className="bg-gray-200 px-3 py-1 rounded-r-md"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={addToCart}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
              <button 
                onClick={buyNow}
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              >
                Buy Now
              </button>
            </div>
            
            {/* Additional Info */}
            <div className="border rounded-md overflow-hidden mb-6">
              <div className="flex border-b">
                <button 
                  onClick={() => setTab('description')}
                  className={`flex-1 py-2 px-4 text-center font-medium ${
                    tab === 'description' ? 'bg-gray-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setTab('features')}
                  className={`flex-1 py-2 px-4 text-center font-medium ${
                    tab === 'features' ? 'bg-gray-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Features
                </button>
                <button 
                  onClick={() => setTab('specifications')}
                  className={`flex-1 py-2 px-4 text-center font-medium ${
                    tab === 'specifications' ? 'bg-gray-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Specifications
                </button>
              </div>
              
              <div className="p-4">
                {tab === 'description' && (
                  <p className="text-gray-700">{product.description}</p>
                )}
                
                {tab === 'features' && (
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                )}
                
                {tab === 'specifications' && (
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className="grid grid-cols-3 text-sm border-b pb-2">
                        <div className="font-medium text-gray-600">{key}</div>
                        <div className="col-span-2 text-gray-800">{value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/search?tag=${tag}`}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Warranty */}
            {product.warranty && (
              <div className="mb-6 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">{product.warranty}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(product => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center mb-1">
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
                    <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
                  </div>
                  <div className="font-bold text-gray-900">${product.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


