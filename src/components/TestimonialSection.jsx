import React from "react";

const TestimonialSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Excellent work!", "Amazing experience!", "Highly recommended!"].map(
          (text, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all"
            >
              <p className="text-gray-700 italic mb-4">“{text}”</p>
              <h4 className="font-semibold">Client {i + 1}</h4>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
