import React from "react";

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          "Fast Performance",
          "Secure Systems",
          "Modern UI",
          "SEO Friendly",
          "Cloud Ready",
          "Fully Responsive",
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
