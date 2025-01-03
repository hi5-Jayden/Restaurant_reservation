import { validateForm, formatDate, formatTime } from '../utils/validation';

describe('Form Validation', () => {
  const validFormData = {
    fullName: 'John Doe',
    phone: '1234567890',
    email: 'john@example.com',
    date: '2025-01-04',
    time: '14:00',
    guests: '4',
    specialRequest: 'No nuts please',
    seating: 'Indoor',
    duration: '1:00',
    occasion: 'Birthday',
  };

  test('validates a correct form submission', () => {
    const { isValid, errors } = validateForm(validFormData);
    expect(isValid).toBe(true);
    expect(errors).toEqual({});
  });

  test('validates full name', () => {
    const data = { ...validFormData, fullName: 'J' };
    const { isValid, errors } = validateForm(data);
    expect(isValid).toBe(false);
    expect(errors.fullName).toBeDefined();
  });

  test('validates phone number', () => {
    const data = { ...validFormData, phone: '123' };
    const { isValid, errors } = validateForm(data);
    expect(isValid).toBe(false);
    expect(errors.phone).toBeDefined();
  });

  test('validates email format', () => {
    const data = { ...validFormData, email: 'invalid-email' };
    const { isValid, errors } = validateForm(data);
    expect(isValid).toBe(false);
    expect(errors.email).toBeDefined();
  });

  test('validates future date', () => {
    const data = { ...validFormData, date: '2020-01-01' };
    const { isValid, errors } = validateForm(data);
    expect(isValid).toBe(false);
    expect(errors.date).toBeDefined();
  });

  test('validates restaurant hours', () => {
    const data = { ...validFormData, time: '23:00' };
    const { isValid, errors } = validateForm(data);
    expect(isValid).toBe(false);
    expect(errors.time).toBeDefined();
  });

  test('validates number of guests', () => {
    const data = { ...validFormData, guests: '25' };
    const { isValid, errors } = validateForm(data);
    expect(isValid).toBe(false);
    expect(errors.guests).toBeDefined();
  });

  test('validates special request length', () => {
    const data = { ...validFormData, specialRequest: 'a'.repeat(501) };
    const { isValid, errors } = validateForm(data);
    expect(isValid).toBe(false);
    expect(errors.specialRequest).toBeDefined();
  });
});

describe('Date and Time Formatting', () => {
  test('formats date correctly', () => {
    const date = '2025-01-04';
    const formatted = formatDate(date);
    expect(formatted).toMatch(/Saturday, January 4, 2025/);
  });

  test('formats time correctly', () => {
    const time = '14:30';
    const formatted = formatTime(time);
    expect(formatted).toMatch(/2:30 PM/);
  });
});
