import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-900">
      <div
  className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-5 flex flex-col lg:grid lg:grid-cols-3 items-center gap-4 lg:gap-0"
>
  <h1 className="text-sm tracking-widest uppercase font-medium whitespace-nowrap lg:justify-self-start">
    KB Collective | Studio
  </h1>

  <div
      className="flex justify-center gap-6 sm:gap-8 lg:gap-12 text-sm lg:text-base tracking-widest font-light text-gray-700 uppercase lg:col-start-2
   "
  >
    <a
    href="/portfolio"
    className="
      relative opacity-70 hover:opacity-100 transition duration-300
      after:absolute after:left-0 after:-bottom-1
      after:h-[1px] after:w-full after:bg-black
      after:origin-left after:scale-x-0
      after:transition-transform after:duration-300
      hover:after:scale-x-100
    "
  >
    Portfolio
  </a>

  <a
    href="/about"
    className="
      relative opacity-70 hover:opacity-100 transition duration-300
      after:absolute after:left-0 after:-bottom-1
      after:h-[1px] after:w-full after:bg-black
      after:origin-left after:scale-x-0
      after:transition-transform after:duration-300
      hover:after:scale-x-100
    "
  >
    About
  </a>

  <a
    href="/shop"
    className="
      relative opacity-70 hover:opacity-100 transition duration-300
      after:absolute after:left-0 after:-bottom-1
      after:h-[1px] after:w-full after:bg-black
      after:origin-left after:scale-x-0
      after:transition-transform after:duration-300
      hover:after:scale-x-100
    "
  >
    Shop
  </a>

  <a
    href="/contact"
    className="
      relative opacity-70 hover:opacity-100 transition duration-300
      after:absolute after:left-0 after:-bottom-1
      after:h-[1px] after:w-full after:bg-black
      after:origin-left after:scale-x-0
      after:transition-transform after:duration-300
      hover:after:scale-x-100
    "
  >
    Contact
  </a>
</div>

  <div className="hidden lg:block" />
</div>
    </nav>
  );
}