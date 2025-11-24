import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white rounded-xl shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Service {num}</h3>
                <p className="text-gray-600 text-sm">
                  High-quality service designed to improve your business.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
