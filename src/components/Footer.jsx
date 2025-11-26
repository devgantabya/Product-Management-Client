import React from "react";
import { Facebook, Youtube, Instagram, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">ItemFlow</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building modern, reliable, and scalable web solutions for growing
            businesses.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/devgantabya"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/@gprottoy"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <Youtube size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://github.com/devgantabya"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ItemFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
