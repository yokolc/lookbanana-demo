import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    home: 'Home',
    products: 'Products',
    about: 'About Us',
    contact: 'Contact',
    login: 'Login',
    cart: 'Cart',
    user: 'User',
    search: 'Search',
    checkout: 'Checkout',
    orders: 'Orders',
    wishlist: 'Wishlist',
    register: 'Register',
    forgotPassword: 'Forgot Password',
    logout: 'Logout',
    profile: 'Profile',
    settings: 'Settings',
    addToCart: 'Add to Cart',
    removeFromCart: 'Remove from Cart',
    viewDetails: 'View Details',
    continueShopping: 'Continue Shopping',
    proceedToCheckout: 'Proceed to Checkout',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    tax: 'Tax',
    total: 'Total',
    free: 'Free',
    quantity: 'Quantity',
    size: 'Size',
    color: 'Color',
    description: 'Description',
    reviews: 'Reviews',
    rating: 'Rating',
    writeReview: 'Write a Review',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    emptyCart: 'Your cart is empty',
    emptyWishlist: 'Your wishlist is empty',
    noOrders: 'No orders found',
    noProducts: 'No products found',
    filterBy: 'Filter by',
    sortBy: 'Sort by',
    price: 'Price',
    category: 'Category',
    brand: 'Brand',
    availability: 'Availability',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    onSale: 'On Sale',
    newArrival: 'New Arrival',
    bestSeller: 'Best Seller',
    featured: 'Featured',
    allCategories: 'All Categories',
    disney: 'DISNEY',
    netflix: 'NETFLIX',
    youtube: 'YOUTUBE'
  },
  zh: {
    home: '首页',
    products: '产品',
    about: '关于我们',
    contact: '联系我们',
    login: '登录',
    cart: '购物车',
    user: '用户',
    search: '搜索',
    checkout: '结账',
    orders: '订单',
    wishlist: '愿望清单',
    register: '注册',
    forgotPassword: '忘记密码',
    logout: '退出登录',
    profile: '个人资料',
    settings: '设置',
    addToCart: '加入购物车',
    removeFromCart: '从购物车移除',
    viewDetails: '查看详情',
    continueShopping: '继续购物',
    proceedToCheckout: '前往结账',
    orderSummary: '订单摘要',
    subtotal: '小计',
    shipping: '运费',
    tax: '税费',
    total: '总计',
    free: '免费',
    quantity: '数量',
    size: '尺寸',
    color: '颜色',
    description: '描述',
    reviews: '评价',
    rating: '评分',
    writeReview: '写评价',
    submit: '提交',
    cancel: '取消',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    confirm: '确认',
    loading: '加载中...',
    error: '错误',
    success: '成功',
    emptyCart: '购物车为空',
    emptyWishlist: '愿望清单为空',
    noOrders: '没有找到订单',
    noProducts: '没有找到产品',
    filterBy: '筛选',
    sortBy: '排序',
    price: '价格',
    category: '分类',
    brand: '品牌',
    availability: '库存状态',
    inStock: '有库存',
    outOfStock: '缺货',
    onSale: '促销中',
    newArrival: '新品',
    bestSeller: '热销',
    featured: '精选',
    allCategories: '所有分类',
    disney: '迪士尼',
    netflix: '网飞',
    youtube: '优酷'
  },
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 