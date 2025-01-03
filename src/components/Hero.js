import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-[#495E57] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="display-title text-[#F4CE14]">Little Lemon</h1>
          <h2 className="sub-title mb-4">Chicago</h2>
          <p className="lead-text mb-8 max-w-md">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <button className="btn text-black hover:bg-[#E4BE04] transition-colors duration-300">
              Reserve a Table
            </button>
          </Link>
        </div>
        <div className="relative h-[400px]">
          <img
            src="/images/Hero_img.jpg"
            alt="Featured Dish"
            className="absolute right-0 w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
