import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      name: "iPhone 15 Pro Max Replica",
      price: 25000,
      originalPrice: 135000,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      rating: 5,
      isNew: true,
      discount: 81,
    },
    {
      name: "Samsung Galaxy S24 Ultra Copy",
      price: 22000,
      originalPrice: 120000,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
      rating: 4,
      discount: 82,
    },
    {
      name: "MacBook Pro 16 Replica",
      price: 65000,
      originalPrice: 350000,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      rating: 5,
      discount: 81,
    },
    {
      name: "iPad Pro 12.9 Copy",
      price: 35000,
      originalPrice: 150000,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
      rating: 4,
      discount: 77,
    },
    {
      name: "AirPods Pro 2 Replica",
      price: 3500,
      originalPrice: 25000,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
      rating: 5,
      discount: 86,
    },
    {
      name: "Apple Watch Ultra Copy",
      price: 8500,
      originalPrice: 85000,
      image:
        "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=400&h=300&fit=crop",
      rating: 4,
      discount: 90,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Качественные копии самых востребованных устройств с гарантией
            качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
