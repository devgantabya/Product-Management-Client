"use client";

import { useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { AuthContext } from "@/contexts/AuthContaxt";
import Loader from "@/components/Loader";

export default function MyProducts() {
  const { user } = useContext(AuthContext);
  const [myProductsList, setMyProductsList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchMyProducts = async () => {
    if (!user?.email) return;

    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/my-products?email=${user.email}`,
        {
          headers: { authorization: `Bearer ${user.accessToken}` },
        }
      );
      const data = await res.json();
      setMyProductsList(data);
    } catch (err) {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyProducts();
  }, [user?.email]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this?")) return;

    try {
      const res = await fetch(`http://localhost:5000/my-products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Deleted successfully");
        setMyProductsList((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (err) {
      toast.error("Failed to delete product");
    }
  };

  const handleEdit = (item) => {
    setSelectedProduct(item);
    modalRef.current.showModal();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const updated = {
      title: form.title.value,
      price: Number(form.price.value),
      category: form.category.value,
      image: form.image.value,
      location: form.location.value,
      condition: form.condition.value,
      usage: form.usage.value,
      description: form.description.value,
      seller_name: form.seller_name.value,
      seller_image: form.seller_image.value,
      seller_contact: form.seller_contact.value,
      email: form.email.value,
    };

    try {
      const res = await fetch(
        `http://localhost:5000/my-products/${selectedProduct._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated),
        }
      );
      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Product updated successfully");
        setMyProductsList((prev) =>
          prev.map((p) =>
            p._id === selectedProduct._id ? { ...p, ...updated } : p
          )
        );
        modalRef.current.close();
      } else {
        toast.info("No changes detected");
      }
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  if (!myProductsList.length)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h2 className="text-3xl text-gray-500 mb-5">
          You have not added any products yet.
        </h2>
        <Link
          href="/add-product"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Product
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto px-4 min-h-screen">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-600">My Products</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-sm">
              <th>SL</th>
              <th>Product</th>
              <th className="hidden sm:table-cell">Location</th>
              <th className="hidden md:table-cell">Condition</th>
              <th className="hidden md:table-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myProductsList.map((item, i) => (
              <tr key={item._id} className="border-b">
                <td>{i + 1}</td>
                <td className="flex items-center gap-3">
                  <div className="h-12 w-12 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      ৳{item.price} | {item.category}
                    </p>
                  </div>
                </td>
                <td className="hidden sm:table-cell">{item.location}</td>
                <td className="hidden md:table-cell">{item.condition}</td>
                <td className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">
            Update Product - {selectedProduct?.title}
          </h3>

          {selectedProduct && (
            <form onSubmit={handleUpdate} className="space-y-3">
              {[
                "title",
                "price",
                "category",
                "image",
                "location",
                "condition",
                "usage",
                "description",
                "seller_name",
                "seller_image",
                "seller_contact",
                "email",
              ].map((field) => (
                <input
                  key={field}
                  type={
                    field === "price"
                      ? "number"
                      : field === "email"
                      ? "email"
                      : "text"
                  }
                  name={field}
                  defaultValue={selectedProduct[field]}
                  className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded w-full p-2"
                  required
                  disabled={field === "email"}
                />
              ))}

              <button
                type="submit"
                className="bg-blue-600 w-full text-white py-3 rounded hover:bg-blue-700"
              >
                Update
              </button>
            </form>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
