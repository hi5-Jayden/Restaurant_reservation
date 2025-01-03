import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationForm from '../components/ReservationForm';

describe('ReservationForm', () => {
  const mockSubmit = jest.fn();
  const defaultProps = {
    onSubmit: mockSubmit,
    initialData: null,
  };

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  test('renders all form fields', () => {
    render(<ReservationForm {...defaultProps} />);

    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/phone/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /number of guests/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/indoor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/outdoor/i)).toBeInTheDocument();
  });

  test('validates required fields on submission', async () => {
    render(<ReservationForm {...defaultProps} />);

    const submitButton = screen.getByRole('button', { name: /send/i });
    fireEvent.click(submitButton);

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('submits form with valid data', async () => {
    render(<ReservationForm {...defaultProps} />);

    await userEvent.type(screen.getByPlaceholderText(/full name/i), 'John Doe');
    await userEvent.type(screen.getByPlaceholderText(/phone/i), '1234567890');
    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'john@example.com'
    );

    // Set date (current implementation might need adjustment based on your date picker)
    const dateInput = screen.getByRole('textbox', { name: /date/i });
    fireEvent.change(dateInput, { target: { value: '2025-01-04' } });

    // Set time
    const timeInput = screen.getByRole('textbox', { name: /time/i });
    fireEvent.change(timeInput, { target: { value: '14:00' } });

    // Set number of guests
    await userEvent.type(
      screen.getByRole('spinbutton', { name: /number of guests/i }),
      '4'
    );

    const submitButton = screen.getByRole('button', { name: /send/i });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: 'John Doe',
        phone: '1234567890',
        email: 'john@example.com',
        guests: '4',
      })
    );
  });

  test('loads initial data correctly', () => {
    const initialData = {
      fullName: 'John Doe',
      phone: '1234567890',
      email: 'john@example.com',
      date: '2025-01-04',
      time: '14:00',
      guests: '4',
      seating: 'Indoor',
      occasion: 'Birthday',
    };

    render(<ReservationForm {...defaultProps} initialData={initialData} />);

    expect(screen.getByPlaceholderText(/full name/i)).toHaveValue('John Doe');
    expect(screen.getByPlaceholderText(/phone/i)).toHaveValue('1234567890');
    expect(screen.getByPlaceholderText(/email/i)).toHaveValue(
      'john@example.com'
    );
    expect(
      screen.getByRole('spinbutton', { name: /number of guests/i })
    ).toHaveValue(4);
  });

  test('updates form fields on user input', async () => {
    render(<ReservationForm {...defaultProps} />);

    const nameInput = screen.getByPlaceholderText(/full name/i);
    await userEvent.type(nameInput, 'Jane Doe');
    expect(nameInput).toHaveValue('Jane Doe');

    const phoneInput = screen.getByPlaceholderText(/phone/i);
    await userEvent.type(phoneInput, '9876543210');
    expect(phoneInput).toHaveValue('9876543210');
  });
});
