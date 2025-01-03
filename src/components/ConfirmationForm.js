import React, { useState } from 'react';

const ConfirmationForm = ({ bookingData, onModify }) => {
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const handleCancel = () => {
    setShowCancelDialog(true);
  };

  const handleShare = () => {
    const subject = 'Little Lemon Restaurant Reservation';
    const body = `
Reservation Details:
Restaurant: Little Lemon
Name: ${bookingData.fullName}
Date: ${new Date(bookingData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
Time: ${bookingData.time}
Guests: ${bookingData.guests}
    `;
    window.location.href = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="text-center">
      <h2 className="display-title text-[#495E57]">Thank you.</h2>
      <p className="sub-title mb-8">Your reservation is confirmed!</p>
      <p className="lead-text mb-12">
        Booking details as below has been sent to your email.
      </p>

      <div className="bg-[#EDEFEE] rounded-2xl p-8 mb-12 text-left">
        <h3 className="card-title mb-6">Little Lemon</h3>
        <div className="space-y-4">
          <p>
            <span className="font-medium">Full name:</span>{' '}
            {bookingData.fullName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {bookingData.email}
          </p>
          <p>
            <span className="font-medium">Date:</span>{' '}
            {formatDate(bookingData.date)}
          </p>
          <p>
            <span className="font-medium">Time:</span> {bookingData.time}
          </p>
          <p>
            <span className="font-medium">Guests:</span> {bookingData.guests}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleCancel}
          className="px-8 py-3 rounded-2xl bg-white border-2 border-[#495E57] text-[#495E57] font-medium"
        >
          CANCEL
        </button>
        <button
          onClick={onModify}
          className="px-8 py-3 rounded-2xl bg-[#F4CE14] font-medium"
        >
          MODIFY
        </button>
        <button
          onClick={handleShare}
          className="px-8 py-3 rounded-2xl bg-[#F4CE14] font-medium"
        >
          SHARE
        </button>
      </div>

      {showCancelDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full mx-4">
            <h3 className="font-bold mb-4">Cancel Reservation</h3>
            <p className="mb-6">
              Are you sure you want to cancel your reservation?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowCancelDialog(false)}
                className="px-4 py-2 rounded-lg bg-gray-200"
              >
                No, keep it
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="px-4 py-2 rounded-lg bg-red-600 text-white"
              >
                Yes, cancel it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationForm;
