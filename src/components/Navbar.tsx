'use client'; // This component uses client-side features

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
            The Company
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
