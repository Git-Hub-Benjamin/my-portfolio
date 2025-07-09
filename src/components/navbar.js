import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navWhite shadow-xl fixed top-0 z-50 nav99 mt-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and name */}
          <div className="flex items-center gap-3 group">
            <img 
              className="w-8 h-8 transition-transform duration-300 group-hover:rotate-180" 
              src="/my-portfolio/chip-microchip.svg" 
              alt="chip" 
            />
            <span className="text-gray-800 font-bold text-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full">
              Benjamin Funk
            </span>
            <div className="flex items-center gap-1.5 ml-2">
            <span className="text-xs text-gray-600">Fairfield County, CT</span>
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping opacity-40"></div>
              </div>
              <span className="text-xs text-gray-600">Available</span>
            </div>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#aboutme" className="font-semibold text-black-600 hover:text-blue-600 transition-colors">About me</a>
            <a href="#projects" className="font-semibold text-black-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="font-semibold text-black-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#aboutme" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors text-center text-lg"
            >
              About me
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors text-center text-lg"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors text-center text-lg"
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