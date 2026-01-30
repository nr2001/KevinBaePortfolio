export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-900">
      <div className="relative max-w-7xl mx-auto pl-12 pr-20 py-6 flex items-center">
        
        {/* Name on the left */}
        <h1 className="text-sm tracking-widest uppercase font-medium">
          KB Collective | Studio
        </h1>

        {/* Centered Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-14 text-lg tracking-widest font-light text-gray-700 uppercase">
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

          <a href="/shop"
          className="relative opacity-70 hover:opacity-100 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
          >  
          Shop</a>

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
