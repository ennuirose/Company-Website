'use client'; // This component uses client-side features

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800 transition duration-300 hover:text-blue-600">
            The Company
          </Link>
          <div className="hidden space-x-6 md:flex">
            <Link href="/" className="text-gray-600 transition duration-300 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 transition duration-300 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="text-gray-600 transition duration-300 hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 transition duration-300 hover:text-blue-600">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button type="button" onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen
                  ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    )
                  : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white py-4 shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-gray-800 transition duration-300 hover:text-blue-600" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-gray-800 transition duration-300 hover:text-blue-600" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/services" className="text-gray-800 transition duration-300 hover:text-blue-600" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 transition duration-300 hover:text-blue-600" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
