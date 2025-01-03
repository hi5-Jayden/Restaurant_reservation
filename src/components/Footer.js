import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#495E57] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="/images/footerLogo.png"
            alt="Little Lemon"
            className="h-16 mb-4"
          />
        </div>

        <div>
          <h3 className="font-bold mb-4">Doormat Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#F4CE14]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#F4CE14]">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-[#F4CE14]">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="hover:text-[#F4CE14]">
                Reservation
              </Link>
            </li>
            <li>
              <Link to="/order-online" className="hover:text-[#F4CE14]">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-[#F4CE14]">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Social Media Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#F4CE14]">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4CE14]">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F4CE14]">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
