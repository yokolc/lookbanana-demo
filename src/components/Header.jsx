import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Search, User, ShoppingBag, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if announcement was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('announcementDismissed') === 'true';
    setIsAnnouncementVisible(!dismissed);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnnouncementClose = () => {
    setIsAnnouncementVisible(false);
    localStorage.setItem('announcementDismissed', 'true');
  };

  // Navigation data
  const navItems = [
    { title: 'Shop', href: '/shop' },
    { title: 'Collections', href: '/collections' },
    { title: 'Weddings', href: '/weddings' },
    { title: 'Our Story', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
      {/* Announcement Bar */}
      {isAnnouncementVisible && (
        <div className="bg-black text-white text-center py-2 px-4 text-sm relative">
          <span>✿ Free UK shipping over £75 ✿</span>
          <button 
            onClick={handleAnnouncementClose}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <div className="flex items-center">
              <img 
                src={require('../assets/images/logo.png')} 
                alt="LookBanana Logo" 
                className="h-8 w-auto mr-2" 
                onError={e => {e.target.style.display='none';}} 
              />
              <span className="logo-text">LookBanana</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/account" className="p-2" aria-label="Account">
              <User size={20} />
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold">Menu</div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="space-y-4">
            {navItems.map((item) => (
              <div key={item.href} className="border-b py-3">
                <Link 
                  to={item.href}
                  className="block text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="container mx-auto max-w-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Search</h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2"
                aria-label="Close search"
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border-b-2 border-black py-3 px-4 text-lg focus:outline-none"
                autoFocus
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-xl p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="border-t border-gray-200 py-4">
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-auto">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>£0.00</span>
            </div>
            <button className="w-full bg-black text-white py-3 px-6 text-sm font-medium">
              Checkout
            </button>
          </div>
        </div>
      )}
    </header>
  );

export default Header;