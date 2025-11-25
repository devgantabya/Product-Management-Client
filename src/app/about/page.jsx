"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="/what-is-product-management.jpg"
              alt="About ItemFlow"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              About ItemFlow
            </h1>
            <p className="text-gray-700 mb-4">
              ItemFlow is your ultimate product management solution, designed to
              help businesses efficiently track, manage, and optimize their
              products across the entire lifecycle.
            </p>
            <p className="text-gray-700 mb-6">
              Our platform combines intuitive design, powerful analytics, and
              real-time collaboration tools to ensure your team stays on top of
              inventory, sales, and product performance.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/#features"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="p-8 md:p-12 bg-gray-50 mt-6 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 mb-4">
            Our mission is to empower businesses with smarter product management
            tools, enabling teams to make informed decisions and streamline
            operations.
          </p>
          <p className="text-gray-700">
            We envision a world where product management is simple, efficient,
            and accessible, helping businesses of all sizes grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
}
