import React, { useState } from 'react';
import { Calendar, Clock, Users, Wine, MessageSquare } from 'lucide-react';

const ReservationForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      fullName: '',
      phone: '',
      email: '',
      date: '',
      seating: 'Indoor',
      time: '',
      duration: '',
      guests: '',
      occasion: '',
      specialRequest: '',
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Select date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <p className="lead-text text-[#495E57]">
        Please fill the form below to enable us to serve you better.
      </p>

      {/* Personal Information Section */}
      <div className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full name"
          required
          minLength="2"
          className="w-full p-4 rounded-2xl bg-[#EDEFEE] border-none"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/[^\d\s.-]/g, '');
            setFormData((prev) => ({ ...prev, phone: value }));
          }}
          placeholder="Phone"
          required
          className="w-full p-4 rounded-2xl bg-[#EDEFEE] border-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-4 rounded-2xl bg-[#EDEFEE] border-none"
        />
      </div>

      {/* Reservation Details Section */}
      <div>
        <h2 className="card-title mb-4">Reservation</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Date Picker */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick a date
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  const dateInput =
                    document.querySelector('input[name="date"]');
                  if (dateInput) {
                    dateInput.showPicker();
                  }
                }}
                className="w-full text-left relative bg-[#EDEFEE] rounded-2xl p-4 pl-12 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <Calendar
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <span
                  className={formData.date ? 'text-black' : 'text-gray-500'}
                >
                  {formatDate(formData.date)}
                </span>
              </button>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="sr-only"
              />
            </div>
          </div>

          {/* Seating Options */}
          <div className="flex gap-4 items-end">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="seating"
                value="Indoor"
                checked={formData.seating === 'Indoor'}
                onChange={handleChange}
              />
              Indoor
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="seating"
                value="Outdoor"
                checked={formData.seating === 'Outdoor'}
                onChange={handleChange}
              />
              Outdoor
            </label>
          </div>

          {/* Time Picker */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick start time
            </label>
            <div className="relative">
              <Clock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none appearance-none cursor-pointer"
              >
                <option value="">Select time</option>
                {Array.from({ length: 21 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 10;
                  const minute = i % 2 === 0 ? '00' : '30';
                  const timeValue = `${hour}:${minute}`;
                  const displayTime = new Date(
                    `2024-01-01T${timeValue}`
                  ).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  });
                  return (
                    <option key={timeValue} value={timeValue}>
                      {displayTime}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Duration Picker */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pick duration time
            </label>
            <div className="relative">
              <Clock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none appearance-none cursor-pointer"
              >
                <option value="">Select duration</option>
                <option value="1:00">1 hour</option>
                <option value="1:30">1.5 hours</option>
                <option value="2:00">2 hours</option>
                <option value="2:30">2.5 hours</option>
                <option value="3:00">3 hours</option>
              </select>
            </div>
          </div>

          {/* Number of Guests */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of guests
            </label>
            <div className="relative">
              <Users
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Enter number of guests"
                required
                min="1"
                max="20"
                className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none"
              />
            </div>
          </div>

          {/* Occasion */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Occasion
            </label>
            <div className="relative">
              <Wine
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none appearance-none cursor-pointer"
              >
                <option value="">Select Occasion</option>
                <option value="Business">Business</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
          </div>
        </div>

        {/* Special Request */}
        <div className="relative mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Add special request
          </label>
          <div className="relative">
            <MessageSquare
              className="absolute left-4 top-4 text-gray-500"
              size={20}
            />
            <textarea
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              placeholder="Add any special requests or notes"
              maxLength="500"
              className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none min-h-[100px] resize-none"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="btn bg-[#F4CE14] px-8 py-3 rounded-2xl font-medium shadow-md hover:bg-[#E4BE04] transition-colors duration-300"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
