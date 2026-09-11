import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 py-2 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-600 focus:outline-none md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>

          <a
            href="#"
            className="mx-auto flex cursor-pointer items-center gap-2 md:mx-0"
          >
            <div className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-white">
              DS
            </div>

            <span className="hidden text-xl font-bold text-brand-gradient sm:block">
              DevStack
            </span>
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 space-x-8 text-sm font-medium md:flex">
            <li>
              <a
                href="#"
                className="text-pink-500 transition-colors hover:text-pink-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="text-gray-600 transition-colors hover:text-pink-500"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-gray-600 transition-colors hover:text-pink-500"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-gray-600 transition-colors hover:text-pink-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-600 transition-colors hover:text-pink-500"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3 sm:gap-6">
            <button className="text-xs font-medium text-gray-700 transition-colors hover:text-pink-500 sm:text-sm">
              Sign In
            </button>

            <button className="bg-brand-gradient rounded-full px-4 py-2 text-xs font-medium text-white transition-all hover:shadow-lg sm:px-6 sm:py-2.5 sm:text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute w-full border-t border-gray-100 bg-white p-4 shadow-lg md:hidden">
          <div className="space-y-3">
            <a
              href="#"
              className="block font-medium text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#technologies"
              className="block text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="block text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#about"
              className="block text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              className="block text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;