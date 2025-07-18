import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md border-b border-gray-700 p-2 text-black shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-base sm:text-lg md:text-xl font-semibold cursor-pointer">
            Parker Precision Web
          </p>
        </Link>
        <ul className="flex space-x-4 text-xs sm:text-sm md:text-base">
          <li>
            <Link href="/about">
              <p className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Services
              </p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
