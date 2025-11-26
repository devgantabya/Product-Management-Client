import Link from "next/link";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2 pt-10">
          All Products
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Browse all products in our Inventory
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 py-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg hover:shadow-lg transition"
          >
            <div className="w-full h-48 relative mb-4 ">
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
                <IoLocationOutline />{" "}
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
