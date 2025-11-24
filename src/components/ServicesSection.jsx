import {
  FaBoxOpen,
  FaClipboardList,
  FaChartLine,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBoxOpen size={40} className="text-blue-600" />,
    title: "Product Tracking",
    description:
      "Track every product from creation to delivery with real-time updates and full visibility.",
  },
  {
    icon: <FaClipboardList size={40} className="text-blue-600" />,
    title: "Inventory Management",
    description:
      "Monitor stock levels, reduce errors, and optimize your inventory flow with automation.",
  },
  {
    icon: <FaChartLine size={40} className="text-blue-600" />,
    title: "Insightful Analytics",
    description:
      "Get clear analytics and performance insights to make smarter business decisions.",
  },
  {
    icon: <FaUsersCog size={40} className="text-blue-600" />,
    title: "Team Collaboration",
    description:
      "Empower your team with shared access, role-based permissions, and seamless communication.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          ItemFlow provides a complete suite of tools designed to help
          businesses manage their products efficiently and grow faster.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
