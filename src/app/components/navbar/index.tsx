import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 glass border-b border-zinc-800 p-3 sm:p-4 md:p-6 text-white shadow-2xl z-50 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <p className="navbar-logo text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black cursor-pointer rustic-accent hover:text-white transition-all duration-300 leading-tight">
            Parker Precision Web
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
