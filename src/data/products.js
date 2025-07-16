const products = [
  {
    id: 1,
    name: "Product1",
    price: 89.99,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: false,
    sales: 45,
    date: "2024-01-15",
    category: "DISNEY",
    description: "A beautifully crafted product with elegant details and comfortable fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
      "100% Cotton",
      "Made in Italy",
      "Machine washable",
      "Relaxed fit"
    ]
  },
  {
    id: 2,
    name: "Product2",
    price: 125.50,
    salePrice: 99.99,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: true,
    sales: 32,
    date: "2024-01-20",
    category: "NETFLIX",
    description: "A sophisticated product with a classic design and premium quality.",
    sizes: ["S", "M", "L"],
    details: [
      "100% Merino wool",
      "Made in France",
      "Dry clean only",
      "Classic fit"
    ]
  },
  {
    id: 3,
    name: "Product3",
    price: 248.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop",
    isSoldOut: true,
    isOnSale: false,
    sales: 28,
    date: "2024-01-10",
    category: "YOUTUBE",
    description: "A versatile product perfect for everyday use and special occasions.",
    sizes: ["XS", "S", "M", "L"],
    details: [
      "100% Linen",
      "Made in Portugal",
      "Hand wash cold",
      "Oversized fit"
    ]
  },
  {
    id: 4,
    name: "Product4",
    price: 198.00,
    salePrice: 159.99,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: true,
    sales: 67,
    date: "2024-01-05",
    category: "DISNEY",
    description: "A stunning product with sophisticated styling and modern design.",
    sizes: ["S", "M", "L"],
    details: [
      "Silk blend",
      "Made in France",
      "Dry clean only",
      "Fitted silhouette"
    ]
  },
  {
    id: 5,
    name: "Product5",
    price: 268.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: false,
    sales: 23,
    date: "2024-01-25",
    category: "NETFLIX",
    description: "Classic product in a beautiful color with timeless appeal.",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
      "100% Cotton twill",
      "Made in France",
      "Machine washable",
      "Straight leg fit"
    ]
  }
];

export default products;
  
  