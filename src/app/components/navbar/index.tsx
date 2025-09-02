import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 glass border-b border-zinc-800 p-3 sm:p-6 text-white shadow-2xl z-50 min-h-[60px] sm:min-h-[80px]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-xl sm:text-3xl font-black cursor-pointer rustic-accent hover:text-white transition-all duration-300">
            Parker Precision Web
          </p>
        </Link>
        <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-lg font-bold">
          <li>
            <Link href="/about">
              <p className="hover:text-white cursor-pointer transition-all duration-200 text-gray-300 px-3 py-2 rounded-lg hover:bg-black/20 hover:shadow-lg">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="hover:text-white cursor-pointer transition-all duration-200 text-gray-300 px-3 py-2 rounded-lg hover:bg-black/20 hover:shadow-lg">
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
