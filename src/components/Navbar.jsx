import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
      </li>
      <li>
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Item<span className="text-blue-600">Flow</span>
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Login / Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
