import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-3 sm:p-6 text-black shadow-sm z-50 min-h-[60px] sm:min-h-[80px]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-xl sm:text-3xl font-black cursor-pointer text-black">
            Parker Precision Web
          </p>
        </Link>
        <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-lg font-bold">
          <li>
            <Link href="/about">
              <p className="hover:text-gray-600 cursor-pointer transition-colors duration-200 text-black px-3 py-2 rounded-lg hover:bg-gray-50">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="hover:text-gray-600 cursor-pointer transition-colors duration-200 text-black px-3 py-2 rounded-lg hover:bg-gray-50">
                Services
              </p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="hover:text-gray-600 cursor-pointer transition-colors duration-200 text-black px-3 py-2 rounded-lg hover:bg-gray-50">
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
