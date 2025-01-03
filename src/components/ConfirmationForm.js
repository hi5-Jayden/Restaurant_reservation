import React, { useState } from 'react';

const ConfirmationForm = ({ bookingData, onModify }) => {
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareForm, setShareForm] = useState({
    email: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCancel = () => {
    setShowCancelDialog(true);
  };

  const handleShare = (e) => {
    e.preventDefault(); // Prevent any default behavior
    setShowShareModal(true);
  };

  const handleShareSubmit = (e) => {
    e.preventDefault();
    console.log('Sharing details:', {
      recipientEmail: shareForm.email,
      message: shareForm.message,
      bookingDetails: bookingData,
    });
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setShowShareModal(false);
      setShareForm({ email: '', message: '' });
    }, 2000);
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
    <div className="text-center relative">
      {' '}
      {/* Added relative positioning */}
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
      {/* Cancel Dialog */}
      {showCancelDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full mx-4">
            <h3 className="font-bold mb-4">Share Reservation Details</h3>

            {/* Booking Details Preview */}
            <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm">
              <p>
                <strong>Restaurant:</strong> Little Lemon
              </p>
              <p>
                <strong>Name:</strong> {bookingData.fullName}
              </p>
              <p>
                <strong>Date:</strong> {formatDate(bookingData.date)}
              </p>
              <p>
                <strong>Time:</strong> {bookingData.time}
              </p>
              <p>
                <strong>Guests:</strong> {bookingData.guests}
              </p>
            </div>

            <form onSubmit={handleShareSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Recipient's Email
                </label>
                <input
                  type="email"
                  value={shareForm.email}
                  onChange={(e) =>
                    setShareForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="w-full p-3 rounded-xl bg-[#EDEFEE] border-none"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (optional)
                </label>
                <textarea
                  value={shareForm.message}
                  onChange={(e) =>
                    setShareForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full p-3 rounded-xl bg-[#EDEFEE] border-none min-h-[100px] resize-none"
                  placeholder="Add a personal message"
                />
              </div>

              {showSuccessMessage ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-green-600">
                    Booking details shared successfully!
                  </p>
                </div>
              ) : (
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowShareModal(false)}
                    className="px-4 py-2 rounded-lg bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#F4CE14] font-medium"
                  >
                    Send
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationForm;
