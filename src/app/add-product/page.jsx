"use client";

import { useState, useEffect, useContext } from "react";
import { useEffectEvent } from "react";
import { AuthContext } from "@/contexts/AuthContaxt";

export default function AddProductPage() {
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    location: "",
    condition: "",
    usage: "",
    description: "",
    seller_name: "",
    seller_image: "",
    seller_contact: "",
    email: "",
  });

  const updateEmail = useEffectEvent((email) => {
    setForm((prev) => ({ ...prev, email }));
  });

  useEffect(() => {
    if (user?.email) {
      updateEmail(user.email);
    }
  }, [user?.email]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://product-management-server-nine.vercel.app/products",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      alert("Product added successfully!");
      setForm({
        title: "",
        price: "",
        category: "",
        image: "",
        location: "",
        condition: "",
        usage: "",
        description: "",
        seller_name: "",
        seller_image: "",
        seller_contact: "",
        email: user.email,
      });
    } else {
      alert("Failed to add product!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {" "}
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Add New Product{" "}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white shadow-md rounded-lg p-6"
      >
        {[
          { name: "title", placeholder: "Product Title", type: "text" },
          { name: "price", placeholder: "Price", type: "number" },
          { name: "category", placeholder: "Category", type: "text" },
          { name: "image", placeholder: "Image URL", type: "text" },
          { name: "location", placeholder: "Location", type: "text" },
          {
            name: "condition",
            placeholder: "Condition (e.g., New, Used)",
            type: "text",
          },
          {
            name: "usage",
            placeholder: "Usage (e.g., 1 year, 6 months)",
            type: "text",
          },
          {
            name: "description",
            placeholder: "Product Description",
            type: "textarea",
          },
          { name: "seller_name", placeholder: "Seller Name", type: "text" },
          {
            name: "seller_image",
            placeholder: "Seller Image URL",
            type: "text",
          },
          {
            name: "seller_contact",
            placeholder: "Seller Contact",
            type: "text",
          },
        ].map((field) =>
          field.type === "textarea" ? (
            <textarea
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
              rows={4}
            />
          ) : (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          )
        )}

        <input
          type="email"
          name="email"
          placeholder="Seller Email"
          value={form.email}
          disabled
          className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
