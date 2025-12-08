const products = [
  {
    id: 1,
    name: "Gold Hoop Earrings",
    price: 42.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: false,
    sales: 45,
    date: "2024-01-15",
    category: "Earrings",
    description: "Elegant gold-plated hoop earrings, perfect for everyday wear or special occasions.",
    sizes: ["One Size"],
    details: [
      "18K gold plated",
      "Hypoallergenic",
      "Handcrafted",
      "Diameter: 30mm"
    ]
  },
  {
    id: 2,
    name: "Pearl Pendant Necklace",
    price: 68.00,
    salePrice: 52.00,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: true,
    sales: 32,
    date: "2024-01-20",
    category: "Necklaces",
    description: "Delicate pearl pendant on a fine chain, adds elegance to any outfit.",
    sizes: ["One Size"],
    details: [
      "Freshwater pearl",
      "Sterling silver chain",
      "Adjustable length",
      "Chain length: 16-18 inches"
    ]
  },
  {
    id: 3,
    name: "Diamond Stud Earrings",
    price: 156.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop",
    isSoldOut: true,
    isOnSale: false,
    sales: 28,
    date: "2024-01-10",
    category: "Earrings",
    description: "Classic diamond stud earrings that sparkle beautifully in any light.",
    sizes: ["One Size"],
    details: [
      "0.5 carat total weight",
      "14K white gold",
      "Conflict-free diamonds",
      "Push back closure"
    ]
  },
  {
    id: 4,
    name: "Rose Gold Ring Set",
    price: 88.00,
    salePrice: 72.00,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: true,
    sales: 67,
    date: "2024-01-05",
    category: "Rings",
    description: "Beautiful set of three stackable rose gold rings with delicate details.",
    sizes: ["5", "6", "7", "8", "9"],
    details: [
      "Rose gold plated",
      "Set of 3 rings",
      "Adjustable sizing",
      "Tarnish resistant"
    ]
  },
  {
    id: 5,
    name: "Silver Chain Bracelet",
    price: 54.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: false,
    sales: 23,
    date: "2024-01-25",
    category: "Bracelets",
    description: "Elegant silver chain bracelet with adjustable clasp for perfect fit.",
    sizes: ["One Size"],
    details: [
      "Sterling silver 925",
      "Lobster clasp",
      "Adjustable 7-8 inches",
      "Handmade in London"
    ]
  },
  {
    id: 6,
    name: "Crystal Drop Earrings",
    price: 38.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: false,
    sales: 56,
    date: "2024-01-18",
    category: "Earrings",
    description: "Stunning crystal drop earrings that catch the light beautifully.",
    sizes: ["One Size"],
    details: [
      "Swarovski crystals",
      "Gold plated hooks",
      "Hypoallergenic",
      "Length: 4cm"
    ]
  },
  {
    id: 7,
    name: "Layered Gold Necklace",
    price: 76.00,
    salePrice: 62.00,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: true,
    sales: 41,
    date: "2024-01-22",
    category: "Necklaces",
    description: "Trendy layered necklace with delicate gold chains in varying lengths.",
    sizes: ["One Size"],
    details: [
      "14K gold filled",
      "3 layered chains",
      "Tarnish resistant",
      "Lengths: 14, 16, 18 inches"
    ]
  },
  {
    id: 8,
    name: "Minimalist Ring Collection",
    price: 65.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: false,
    sales: 38,
    date: "2024-01-12",
    category: "Rings",
    description: "Set of minimalist rings perfect for everyday styling and stacking.",
    sizes: ["5", "6", "7", "8", "9"],
    details: [
      "Sterling silver 925",
      "Set of 5 rings",
      "Minimalist design",
      "Mix and match"
    ]
  },
  {
    id: 9,
    name: "Charm Bracelet",
    price: 92.00,
    salePrice: null,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: false,
    sales: 29,
    date: "2024-01-08",
    category: "Bracelets",
    description: "Beautiful charm bracelet with meaningful symbols and charms.",
    sizes: ["One Size"],
    details: [
      "Gold plated",
      "Includes 5 charms",
      "Adjustable size",
      "Gift boxed"
    ]
  },
  {
    id: 10,
    name: "Statement Hoop Earrings",
    price: 48.00,
    salePrice: 38.00,
    image: "https://images.unsplash.com/photo-1596944924591-4fc21565d254?w=400&h=500&fit=crop",
    isSoldOut: false,
    isOnSale: true,
    sales: 73,
    date: "2024-01-28",
    category: "Earrings",
    description: "Bold statement hoop earrings that add drama to any look.",
    sizes: ["One Size"],
    details: [
      "Brass with gold plating",
      "Lightweight design",
      "Diameter: 50mm",
      "Easy to wear"
    ]
  }
];

export default products;
  
  