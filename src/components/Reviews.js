import React from 'react';
import { Star } from 'lucide-react';

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
      name: 'Reviewer name',
      rating: 5,
      review:
        'Add 1-2 lines of mock text for this review. Add 1-2 lines of mock text for this review.',
      image: '/images/reviewer_1.jpg',
    },
    {
      name: 'Reviewer name',
      rating: 5,
      review:
        'Add 1-2 lines of mock text for this review. Add 1-2 lines of mock text for this review.',
      image: '/images/reviewer_2.jpg',
    },
    {
      name: 'Reviewer name',
      rating: 5,
      review:
        'Add 1-2 lines of mock text for this review. Add 1-2 lines of mock text for this review.',
      image: '/images/reviewer_3.jpg',
    },
    {
      name: 'Reviewer name',
      rating: 5,
      review:
        'Add 1-2 lines of mock text for this review. Add 1-2 lines of mock text for this review.',
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
