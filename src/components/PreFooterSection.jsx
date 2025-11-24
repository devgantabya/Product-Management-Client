import Link from "next/link";
import React from "react";

const PreFooterSection = () => {
  return (
    <section className="bg-indigo-600 text-white py-16 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to launch your next project?
      </h2>
      <p className="text-lg mb-6 opacity-90">
        Let's work together and build something amazing.
      </p>
      <Link
        href="/contact"
        className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default PreFooterSection;
