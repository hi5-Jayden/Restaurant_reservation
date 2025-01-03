import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="display-title text-[#495E57]">Little Lemon</h2>
          <p className="paragraph-text max-w-md mt-4">
            Little Lemon is a charming neighbourhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className="relative h-[600px]">
          <img
            src="/images/MarioAdrian_1.jpg"
            alt="Mario and Adrian 1"
            className="absolute right-16 top-0 w-4/5 h-80 object-cover rounded-2xl"
          />
          <img
            src="/images/MarioAdrian_2.jpg"
            alt="Mario and Adrian 2"
            className="absolute left-16 bottom-0 w-4/5 h-80 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;