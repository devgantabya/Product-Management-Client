import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-25 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Streamline Your Products, Simplify Your Workflow
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          ItemFlow helps you effortlessly manage your entire product catalog in
          one place. Track inventory, organize categories, monitor performance,
          and collaborate with your team—all with a clean, intuitive interface
          designed for efficiency and growth.
        </p>
        <Link href="/products">
          <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
