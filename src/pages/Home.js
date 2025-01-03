import React from 'react';
import Hero from '../components/Hero';
import Specials from '../components/Special'; // Changed from Specials to Special
import Reviews from '../components/Reviews';
import About from '../components/About';

const Home = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </main>
  );
};

export default Home;
