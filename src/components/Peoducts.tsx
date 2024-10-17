"use client";

import { useEffect, useState } from "react";
import client from "../../utils/sanity";
import Image from "next/image";

// Define the interface for a product
interface Product {
  id: string; // Assuming products have an id field, you can adjust this based on your data structure
  name: string;
  description: string;
  oldprice: number | string; // Assuming price can be a number or string
  newprice: number | string; // Assuming price can be a number or string
  imageUrl: string;
}

// Function to fetch products
async function fetchProducts(): Promise<Product[]> {
  const products = await client.fetch(`*[_type == "product"]{
    _id, // Fetching the _id field for use as a unique key
    name,
    description,
    oldprice,
    newprice,
    "imageUrl": mainImage.asset->url
  }`);
  return products;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product interface for the state
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false); // Set loading to false after fetching products
      console.log("Fetched Products:", products);
    };

    getProducts();
  }, []);

  // Loading component
  const Loading = () => (
    <div className="flex items-center justify-center h-72">
      <div className="loader">Loading...</div> {/* Add your loader styles here */}
    </div>
  );

  return (
    <section className="bg-white px-4 py-16 flex flex-col items-center">
      {/* Vertical Line */}
      <div className="w-1 h-24 bg-primary mb-6"></div>
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-8 text-center">
        Our Best Selling <span className="text-primary">Coffees</span>
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {loading ? ( // Show loading component while loading
          <Loading />
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id} // Use _id from the fetched product
                className="bg-gray-100 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto"
              >
                <Image
                  src={product.imageUrl || '/images/latte.jpg'} 
                  alt={product.name}
                  width={320} 
                  height={320} 
                  className="w-full h-72 object-cover rounded-t-lg lg:h-80" 
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-black mb-2 text-center">{product.name}</h2>
                  <p className="text-sm text-gray-600 text-center mb-2">{product.description}</p>
                  <div className="flex space-x-24">
                    <span className="text-gray-500 line-through">Birr {product.oldprice}</span>
                    <span className="text-xl font-bold text-primary">Birr {product.newprice}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No products found</div>
          )
        )}
      </div>
    </section>
  );
}
