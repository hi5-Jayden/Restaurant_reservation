import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmationForm from '../components/ConfirmationForm';

describe('ConfirmationForm', () => {
  const mockModify = jest.fn();
  const bookingData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    date: '2025-01-04',
    time: '14:00',
    guests: '4',
  };

  beforeEach(() => {
    mockModify.mockClear();
    // Mock window.location.href
    delete window.location;
    window.location = { href: '' };
  });

  test('renders booking confirmation details', () => {
    render(
      <ConfirmationForm bookingData={bookingData} onModify={mockModify} />
    );

    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    expect(
      screen.getByText(/your reservation is confirmed/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
  });

  test('handles modify button click', () => {
    render(
      <ConfirmationForm bookingData={bookingData} onModify={mockModify} />
    );

    const modifyButton = screen.getByRole('button', { name: /modify/i });
    fireEvent.click(modifyButton);

    expect(mockModify).toHaveBeenCalledTimes(1);
  });

  test('handles share button click', () => {
    render(
      <ConfirmationForm bookingData={bookingData} onModify={mockModify} />
    );

    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);

    expect(window.location.href).toContain(
      'mailto:?subject=Little%20Lemon%20Restaurant%20Reservation'
    );
  });

  test('shows cancel confirmation dialog', () => {
    render(
      <ConfirmationForm bookingData={bookingData} onModify={mockModify} />
    );

    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(
      screen.getByText(/are you sure you want to cancel your reservation/i)
    ).toBeInTheDocument();
  });

  test('formats date correctly', () => {
    render(
      <ConfirmationForm bookingData={bookingData} onModify={mockModify} />
    );

    expect(screen.getByText(/saturday, january 4, 2025/i)).toBeInTheDocument();
  });
});
