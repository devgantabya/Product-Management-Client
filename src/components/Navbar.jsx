"use client";

import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AuthContext } from "@/contexts/AuthContaxt";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, signOutUser } = useContext(AuthContext);
  const router = useRouter();

  const menuRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    await signOutUser();
    router.push("/login");
  };

  const links = (
    <>
      <li onClick={() => setMenuOpen(false)}>
        <Link
          href="/"
          className="px-3 py-2 font-medium hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
      </li>

      <li onClick={() => setMenuOpen(false)}>
        <Link
          href="/products"
          className="px-3 py-2 font-medium hover:text-blue-600 transition-colors"
        >
          Products
        </Link>
      </li>

      <li onClick={() => setMenuOpen(false)}>
        <Link
          href="/about"
          className="px-3 py-2 font-medium hover:text-blue-600 transition-colors"
        >
          About
        </Link>
      </li>

      <li onClick={() => setMenuOpen(false)}>
        <Link
          href="/contact"
          className="px-3 py-2 font-medium hover:text-blue-600 transition-colors"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto navbar px-0">
        <div className="navbar-start">
          <button
            className="lg:hidden btn bg-white border-0 shadow-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="h-6 w-6 text-black" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </button>

          <Link href="/" className="text-3xl font-extrabold tracking-wide">
            Item<span className="text-blue-600">Flow</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">{links}</ul>
        </div>

        <div className="navbar-end space-x-3">
          {user ? (
            <div className="dropdown dropdown-end relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border">
                  <Image
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/fGMNLM9/Sample-User-Icon.png"
                    }
                    alt={user?.displayName || "User"}
                    width={40}
                    height={40}
                    className="object-cover rounded-full"
                  />
                </div>
              </button>

              {dropdownOpen && (
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box absolute right-0 mt-3 w-52 p-2 shadow z-50">
                  <li className="font-semibold text-gray-700 px-3 py-2 border-b">
                    {user.displayName || "User"}
                  </li>

                  <li>
                    <Link
                      href="/add-product"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 rounded hover:bg-blue-100 transition"
                    >
                      Add Product
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/my-products"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 rounded hover:bg-blue-100 transition"
                    >
                      Manage Products
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="text-red-600 w-full text-left px-3 py-2 rounded hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="btn border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white btn-sm"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn bg-blue-600 text-white btn-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <ul
          ref={menuRef}
          className="menu bg-white rounded-box shadow p-3 absolute top-full left-0 w-full lg:hidden z-40"
        >
          {links}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
