import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-4 py-4 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <img
            src="/images/Logo.svg"
            alt="Little Lemon Logo"
            className="h-12"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-gray-700 hover:text-gray-900">
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/reservations"
              className="text-gray-700 hover:text-gray-900"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/order-online"
              className="text-gray-700 hover:text-gray-900"
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
