"use client";

import { useEffect, useState } from "react";
import client from "../../utils/sanity";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  oldprice: number | string;
  newprice: number | string;
  imageUrl: string;
}

async function fetchProducts(): Promise<Product[]> {
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    description,
    oldprice,
    newprice,
    "imageUrl": mainImage.asset->url
  }`);
  return products;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
      console.log("Fetched Products:", products);
    };

    getProducts();
  }, []);

  const Loading = () => (
    <div className="flex items-center justify-center h-72">
      <div className="loader">Loading...</div>
    </div>
  );

  const NoProductsMessage = () => (
    <div className="flex flex-col items-center justify-center mt-8 text-center px-4">
      <Image
        src="/images/pic.jpeg"
        alt="Latte Image"
        width={500} 
        height={400}
        className="object-cover mb-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Almost here!</h2>
      <p className="text-lg sm:text-xl md:text-2xl text-primary">
        Our products will be available soon.
      </p>
    </div>
  );

  return (
    <section className="bg-white px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <div className="w-1 h-24 bg-primary mb-6"></div>
      
      <h1 className="text-3xl font-bold text-black text-center">
        Our Best Selling <span className="text-primary">Coffees</span>
      </h1>

      <div className="w-full flex justify-center">
        {loading ? (
          <Loading />
        ) : (
          products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
              {products.map((product) => (
                <div
                  key={product.id}
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
              ))}
            </div>
          ) : (
            <NoProductsMessage />
          )
        )}
      </div>
    </section>
  );
}
