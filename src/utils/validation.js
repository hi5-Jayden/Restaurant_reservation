export const validateForm = (formData) => {
  const errors = {};

  // Full Name validation
  if (!formData.fullName.trim()) {
    errors.fullName = 'Name is required';
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters long';
  }

  // Phone validation
  const phoneRegex = /^\d{10,}$/;
  if (!formData.phone) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number (minimum 10 digits)';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Date validation
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(formData.date);
  if (!formData.date) {
    errors.date = 'Date is required';
  } else if (selectedDate < today) {
    errors.date = 'Please select a future date';
  }

  // Time validation
  if (!formData.time) {
    errors.time = 'Time is required';
  } else {
    const [hours] = formData.time.split(':');
    if (hours < 10 || hours > 22) {
      errors.time = 'Please select a time between 10:00 and 22:00';
    }
  }

  // Number of guests validation
  const guests = parseInt(formData.guests);
  if (!formData.guests) {
    errors.guests = 'Number of guests is required';
  } else if (isNaN(guests) || guests < 1 || guests > 20) {
    errors.guests = 'Please enter a number between 1 and 20';
  }

  // Special request validation
  if (formData.specialRequest.length > 500) {
    errors.specialRequest = 'Special request must not exceed 500 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (time) => {
  return new Date(`2024-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};
