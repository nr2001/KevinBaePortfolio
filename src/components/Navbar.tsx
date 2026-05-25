import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-900">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-4 sm:py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-0">

        {/* Name on the left */}
        <h1 className="text-[10px] sm:text-sm tracking-widest uppercase font-medium whitespace-nowrap">
          KB Collective | Studio
        </h1>

        {/* Navigation */}
        <div className="  sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex gap-4 sm:gap-8 lg:gap-14 text-[10px] sm:text-xs lg:text-lg tracking-widest font-light text-gray-700 uppercase">
          <a
            href="/portfolio"
            className="relative opacity-70 hover:opacity-100 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
          >
            Portfolio
          </a>

          <a
            href="/about"
            className="relative opacity-70 hover:opacity-100 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
          >
            About
          </a>

          <a
            href="/shop"
            className="relative opacity-70 hover:opacity-100 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
          >
            Shop
          </a>

          <a
            href="/contact"
            className="relative opacity-70 hover:opacity-100 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}