import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  let product;
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Product not found");

    product = await res.json();
  } catch (err) {
    console.error(err);
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl">
        Failed to load product.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain rounded-lg border border-gray-200"
          />
          <p className="absolute left-3 top-3  text-white mt-1 text-base capitalize bg-gray-600 px-2 rounded font-medium">
            {product.category}
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-blue-600">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-800">
            ৳{product.price}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Condition:</span>{" "}
            {product.condition}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Usage:</span> {product.usage}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Location:</span> {product.location}
          </p>

          <hr className="my-4" />
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <Image
                src={product.seller_image}
                alt={product.seller_name}
                fill
                className="rounded-full border-2 border-blue-600 object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                {product.seller_name}
              </p>
              <p className="text-gray-600">Contact: {product.seller_contact}</p>
              <p className="text-gray-500 text-sm">Email: {product.email}</p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
