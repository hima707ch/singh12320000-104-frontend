import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/properties/search?query=${searchQuery}`);
      const data = await response.json();
      // Handle search results
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
              <span className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300">RealEstate</span>
            </Link>
          </div>

          <div id="Header_3" className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-600 hover:text-blue-600">
                🔍
              </button>
            </form>

            <Link to="/" className="text-white hover:text-blue-200 transition duration-300 font-semibold">Home</Link>
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300 font-semibold">Login</Link>
            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-400 transition duration-300 font-semibold">Register</Link>
          </div>

          <button
            id="Header_4"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="Header_5" className="md:hidden mt-4 pb-4">
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </form>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-blue-200 transition duration-300">Home</Link>
              <Link to="/login" className="text-white hover:text-blue-200 transition duration-300">Login</Link>
              <Link to="/register" className="text-white hover:text-blue-200 transition duration-300">Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;