import { FaBoxOpen, FaChartLine, FaUsers, FaCogs } from "react-icons/fa";

const features = [
  {
    icon: <FaBoxOpen size={28} className="text-blue-600" />,
    title: "Inventory Management",
    description:
      "Track all your products in real-time, manage stock levels, and avoid overstock or stockouts effortlessly.",
  },
  {
    icon: <FaChartLine size={28} className="text-blue-600" />,
    title: "Analytics & Reporting",
    description:
      "Get actionable insights on product performance, sales trends, and team efficiency with easy-to-read reports.",
  },
  {
    icon: <FaUsers size={28} className="text-blue-600" />,
    title: "Collaboration Tools",
    description:
      "Work together seamlessly with your team, assign tasks, and keep everyone updated on product changes.",
  },
  {
    icon: <FaCogs size={28} className="text-blue-600" />,
    title: "Automation & Workflows",
    description:
      "Automate repetitive tasks, set alerts, and streamline your product lifecycle management for better efficiency.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Key Features of ItemFlow
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            ItemFlow is designed to simplify product management, giving you the
            tools to track, analyze, and optimize your products efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
