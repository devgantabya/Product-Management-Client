import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Build Modern Web Experiences Effortlessly
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Scalable, fast, and user-friendly web solutions tailored for your
          business.
        </p>
        <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
