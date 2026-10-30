import { WritingWork } from '../types/portfolio';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

/**
 * Validates the contact form inputs
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Nama lengkap wajib diisi (minimal 2 karakter)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Format alamat email tidak valid';
  }

  if (!data.message || data.message.trim().length < 8) {
    errors.message = 'Pesan wajib diisi (minimal 8 karakter)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filters writing works by title, theme, or keyword
 */
export function filterWritingWorks(works: WritingWork[], query: string): WritingWork[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return works;

  return works.filter((work) => {
    return (
      work.title.toLowerCase().includes(cleanQuery) ||
      work.theme.toLowerCase().includes(cleanQuery) ||
      work.summary.toLowerCase().includes(cleanQuery)
    );
  });
}

/**
 * Formats a WhatsApp click-to-chat URL with pre-filled message
 */
export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanedPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
}

/**
 * Formats current time for WIB (Asia/Jakarta)
 */
export function formatTimeInJakarta(date: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  } catch {
    return date.toLocaleTimeString();
  }
}
