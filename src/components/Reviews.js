import React from 'react';
import { Star } from 'lucide-react';
import { getImagePath } from '../utils/imagePath';

const ReviewCard = ({ name, rating, review, image }) => (
  <article className="bg-white p-6 rounded-2xl shadow-md">
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#F4CE14] text-[#F4CE14]" />
      ))}
    </div>
    <div className="flex items-center gap-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <h3 className="card-title">{name}</h3>
    </div>
    <p className="paragraph-text text-gray-600">{review}</p>
  </article>
);

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Mitchell',
      rating: 5,
      review:
        'The Mediterranean flavors here are absolutely authentic! The grilled seafood platter was exceptional.',
      image: '/images/reviewer_1.jpg',
    },
    {
      name: 'John Anderson',
      rating: 5,
      review:
        'Best bruschetta in Chicago! The atmosphere is cozy and the service is always impeccable.',
      image: '/images/reviewer_2.jpg',
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      review:
        'Their lemon dessert is heavenly! Truly feels like a family recipe passed down through generations.',
      image: '/images/reviewer_3.jpg',
    },
    {
      name: 'David Chen',
      rating: 5,
      review:
        'Amazing food and excellent service. The Greek salad here is a must-try. Will definitely come back!',
      image: '/images/reviewer_4.jpg',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#FAF4EC]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-12">
          What our customers say!
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
