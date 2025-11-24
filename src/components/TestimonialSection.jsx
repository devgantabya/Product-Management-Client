import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Squire",
    position: "Product Manager at TechCorp",
    avatar: "/clients/sarah.jpg",
    feedback:
      "ItemFlow has completely transformed how we manage our products. Inventory tracking and reporting are now effortless.",
  },
  {
    name: "Michael Lee",
    position: "Operations Lead at Retailify",
    avatar: "/clients/michael.jpg",
    feedback:
      "The collaboration features in ItemFlow help our team stay aligned. It's easy to assign tasks and track product progress.",
  },
  {
    name: "Sofia Martinez",
    position: "CEO at SmartGoods",
    avatar: "/clients/sofia.jpg",
    feedback:
      "We now have complete visibility over our product lifecycle. ItemFlow is intuitive and has boosted our efficiency tremendously.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-blue-600"
                />
              </div>
              <FaQuoteLeft className="text-blue-600 mb-4 text-2xl" />
              <p className="text-gray-700 mb-4 text-sm">
                {testimonial.feedback}
              </p>
              <h3 className="font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <span className="text-gray-500 text-sm">
                {testimonial.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
