import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    const baseClasses = 'px-6 py-2 transition-all duration-300';
    const activeClasses =
      'border-2 border-[#333333] rounded-full text-[#333333] font-medium';
    const inactiveClasses = 'text-[#333333] hover:text-[#495E57]';

    return (
      <Link
        to={to}
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="px-4 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/Logo.svg"
            alt="Little Lemon Logo"
            className="h-16"
          />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order-online">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
