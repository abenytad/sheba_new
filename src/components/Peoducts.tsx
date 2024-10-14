// components/Products.tsx

export default function Products() {
    // Sample product data
    const products = [
      {
        id: 1,
        name: 'Ethiopian Yirgacheffe',
        description: 'A light roast coffee with floral and citrus notes.',
        oldPrice: '$20.00',
        newPrice: '$15.00',
        imageUrl: '/images/latte.jpg', // Adjust the image path as needed
      },
      {
        id: 2,
        name: 'Sumatra Mandheling',
        description: 'A full-bodied coffee with earthy and herbal flavors.',
        oldPrice: '$22.00',
        newPrice: '$18.00',
        imageUrl: '/images/latte.jpg', // Adjust the image path as needed
      },
      {
        id: 3,
        name: 'Colombian Supremo',
        description: 'A balanced coffee with rich flavor and a smooth finish.',
        oldPrice: '$21.00',
        newPrice: '$17.00',
        imageUrl: '/images/latte.jpg', // Adjust the image path as needed
      },
    ];
  
    return (
      <section className="bg-white px-4 py-16 flex flex-col items-center">
        {/* Vertical Line */}
        <div className="w-1 h-24 bg-primary mb-6"></div>
  
        {/* Title */}
        <h1 className="text-3xl font-bold text-black mb-8 text-center">
          Our Best Selling <span className="text-primary">Coffees</span>
        </h1>
  
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-72 object-cover rounded-t-lg lg:h-80" // Increased height for larger screens
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-black mb-2 text-center">{product.name}</h2>
                <p className="text-sm text-gray-600 text-center mb-2">{product.description}</p>
                <div className="flex space-x-2">
                  <span className="text-gray-500 line-through">{product.oldPrice}</span>
                  <span className="text-xl font-bold text-primary">{product.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  