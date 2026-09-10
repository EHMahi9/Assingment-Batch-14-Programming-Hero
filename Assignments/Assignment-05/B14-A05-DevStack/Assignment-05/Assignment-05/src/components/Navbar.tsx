import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Mobile Hamburger (Hidden on desktop) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-gray-600 text-2xl focus:outline-none"
          >
            ☰
          </button>

          {/* Center/Left: Brand Logo + Name */}
          <div className="flex items-center gap-2 cursor-pointer mx-auto md:mx-0">
            <div className="bg-brand-gradient text-white font-bold w-8 h-8 flex items-center justify-center rounded-md text-sm">
              DS
            </div>
            {/* Name hidden on very small screens to make room for buttons, visible on sm and up */}
            <span className="font-bold text-xl text-[#0f172a] hidden sm:block">
              Dev<span className="text-pink-500 font-normal">Stack</span>
            </span>
          </div>

          {/* Center: Nav Links (Desktop only) */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            <li className="text-pink-500 cursor-pointer">Home</li>
            <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Technologies</li>
            <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Projects</li>
            <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">About</li>
            <li className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Contact</li>
          </ul>

          {/* Right: Buttons (Visible on both Mobile and Desktop) */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button className="text-xs sm:text-sm text-gray-700 font-medium hover:text-pink-500 transition-colors">
              Sign In
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-pink-600 transition-colors">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-3 shadow-lg absolute w-full">
          <p className="text-pink-500 font-medium cursor-pointer">Home</p>
          <p className="text-gray-600 cursor-pointer">Technologies</p>
          <p className="text-gray-600 cursor-pointer">Projects</p>
          <p className="text-gray-600 cursor-pointer">About</p>
          <p className="text-gray-600 cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;