import React, { useState } from 'react';
import ReservationForm from '../components/ReservationForm';
import ConfirmationForm from '../components/ConfirmationForm';

const Reservation = () => {
  const [bookingData, setBookingData] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (data) => {
    setBookingData(data);
    setShowConfirmation(true);
  };

  const handleModify = () => {
    setShowConfirmation(false);
  };

  return (
    <main>
      <section className="h-48 bg-[#495E57] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="display-title text-[#F4CE14]">Reserve a Table</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        {showConfirmation ? (
          <ConfirmationForm bookingData={bookingData} onModify={handleModify} />
        ) : (
          <ReservationForm onSubmit={handleSubmit} initialData={bookingData} />
        )}
      </section>
    </main>
  );
};

export default Reservation;
