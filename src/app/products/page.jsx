"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://product-management-server-nine.vercel.app/products",
        { cache: "no-store" }
      );
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filtered = useMemo(() => {
    if (!searchText.trim()) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, products]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2 pt-10">
          All Products
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Browse all products in our Inventory
        </p>
      </div>

      <div className="flex items-center justify-center mb-10 px-4">
        <div className="relative w-full md:w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16l4.586-4.586a2 2 0 00.293-.293L16 8m-7 9a7 7 0 110-14 7 7 0 010 14z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full pl-5 py-3 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 pb-10">
        {filtered.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg hover:shadow-lg transition"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain rounded-lg"
              />
              <p className="text-white mt-1 text-sm absolute top-2 right-3 capitalize bg-gray-600 px-2 rounded">
                {product.condition}
              </p>
            </div>

            <div className="p-4 bg-gray-100 rounded-b-lg">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600 mt-1">৳{product.price}</p>

              <div className="mt-1 text-sm flex items-center gap-1">
                <IoLocationOutline />
                <span className="text-gray-500">{product.location}</span>
              </div>

              <Link href={`/products/${product._id}`}>
                <button className="mt-3 w-full text-white bg-blue-600 btn">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
