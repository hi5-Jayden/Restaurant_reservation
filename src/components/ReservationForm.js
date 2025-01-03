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
      duration: '1:00',
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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <p className="lead-text text-[#495E57]">
        Please fill the form below to enable us to serve you better.
      </p>

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
          onChange={handleChange}
          placeholder="Phone"
          required
          pattern="[0-9]{10,}"
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

      <div>
        <h2 className="card-title mb-4">Reservation</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Calendar
              className="absolute left-4 top-4 text-gray-500"
              size={20}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none"
            />
          </div>

          <div className="flex gap-4">
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

          <div className="relative">
            <Clock className="absolute left-4 top-4 text-gray-500" size={20} />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              min="10:00"
              max="22:00"
              className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none"
            />
          </div>

          <div className="relative">
            <Clock className="absolute left-4 top-4 text-gray-500" size={20} />
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none appearance-none"
            >
              <option value="1:00">1:00</option>
              <option value="1:30">1:30</option>
              <option value="2:00">2:00</option>
              <option value="2:30">2:30</option>
              <option value="3:00">3:00</option>
            </select>
          </div>

          <div className="relative">
            <Users className="absolute left-4 top-4 text-gray-500" size={20} />
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="Number of guests"
              required
              min="1"
              max="20"
              className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none"
            />
          </div>

          <div className="relative">
            <Wine className="absolute left-4 top-4 text-gray-500" size={20} />
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none appearance-none"
            >
              <option value="">Select Occasion</option>
              <option value="Business">Business</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </div>

        <div className="relative mt-4">
          <MessageSquare
            className="absolute left-4 top-4 text-gray-500"
            size={20}
          />
          <textarea
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            placeholder="Add special request"
            maxLength="500"
            className="w-full p-4 pl-12 rounded-2xl bg-[#EDEFEE] border-none min-h-[100px]"
          ></textarea>
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn">
          SEND
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
