import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  filterWritingWorks,
  generateWhatsAppUrl,
  formatTimeInJakarta
} from './portfolioLogic';
import { WritingWork } from '../types/portfolio';

test('validateContactForm passes valid inputs', () => {
  const validData = {
    name: 'Budi Pratama',
    email: 'budi@example.com',
    subject: 'Kolaborasi Menulis',
    message: 'Halo Muhammad Rahmatullah, saya ingin berdiskusi mengenai naskah.'
  };

  const result = validateContactForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm rejects invalid inputs', () => {
  const invalidData = {
    name: '',
    email: 'bukan-email',
    subject: '',
    message: 'Pendek'
  };

  const result = validateContactForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('filterWritingWorks filters works accurately', () => {
  const sampleWorks: WritingWork[] = [
    {
      id: '1',
      number: '01',
      title: 'Senyum Ayah di Balik Pintu yang Tertutup',
      theme: 'Nilai-Nilai Keluarga & Perjuangan Ayah',
      format: 'Cerpen Naratif',
      summary: 'Kisah perjuangan seorang ayah',
      excerpt: 'Suara rantai kendor...',
      fullExcerpt: 'Naskah lengkap...',
      accentColor: '#34D399'
    },
    {
      id: '2',
      number: '02',
      title: 'BERPAMIT MENERJANG SAMUDRA LAUTAN ILMU',
      theme: 'Pengabdian & Santri',
      format: 'Naskah Buku',
      summary: 'Perjalanan santri',
      excerpt: 'Hawa dingin sepertiga malam...',
      fullExcerpt: 'Naskah lengkap...',
      accentColor: '#D4AF37'
    }
  ];

  const searchAyah = filterWritingWorks(sampleWorks, 'ayah');
  assert.equal(searchAyah.length, 1);
  assert.equal(searchAyah[0].title, 'Senyum Ayah di Balik Pintu yang Tertutup');
});

test('generateWhatsAppUrl creates valid wa.me link with phone and encoded message', () => {
  const url = generateWhatsAppUrl('+62 812-3456-7890', 'Halo Muhammad, salam kenal!');
  assert.equal(url.startsWith('https://wa.me/6281234567890?text='), true);
  assert.ok(url.includes('Halo%20Muhammad'));
});

test('formatTimeInJakarta produces valid time string', () => {
  const time = formatTimeInJakarta(new Date('2026-10-30T12:00:00Z'));
  assert.ok(time.length >= 5);
});
