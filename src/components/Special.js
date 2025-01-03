import React from 'react';

const SpecialCard = ({ title, price, description, image }) => (
  <article className="bg-[#EDEFEE] rounded-2xl overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="card-title">{title}</h3>
        <span className="highlight-text text-[#EE9972]">${price}</span>
      </div>
      <p className="paragraph-text mb-4">{description}</p>
      <button className="flex items-center font-bold hover:text-[#495E57] transition-colors duration-300">
        Order a delivery
        <img
          src="/images/delivery.png"
          alt="Delivery"
          className="ml-2 w-6 h-6"
        />
      </button>
    </div>
  </article>
);

const Specials = () => {
  const specialItems = [
    {
      title: 'Greek salad',
      price: '12.99',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: '/images/greeksalad.jpg',
    },
    {
      title: 'Bruchetta',
      price: '5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: '/images/bruchetta.png',
    },
    {
      title: 'Lemon Dessert',
      price: '5.00',
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: '/images/lemondessert.jpg',
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="section-title">This Weeks Specials!</h2>
        <button className="btn">Online Menu</button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {specialItems.map((item, index) => (
          <SpecialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
