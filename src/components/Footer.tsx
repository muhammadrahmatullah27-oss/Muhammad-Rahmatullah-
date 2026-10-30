import React from 'react';
import { ArrowUp, Mail, MessageSquare, Instagram, Feather } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-emerald-900/30 bg-[#06120d] py-12 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-emerald-900/40">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-lg font-bold font-serif text-white hover:text-[#52D6A4] transition-colors inline-flex items-center gap-2"
            >
              <Feather className="w-4 h-4 text-[#D4AF37]" />
              <span>Muhammad Rahmatullah</span>
            </a>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Penulis, Mahasiswa Bisnis Digital Universitas Cakrawala, dan Santri Pondok CEO di lingkungan Masjid Muslim Billionaire.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => soundManager.playClick()}
                className="hover:text-[#52D6A4] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Kontak Sosial (Email, Instagram, WhatsApp - TANPA LinkedIn & Website) */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => soundManager.playClick()}
              className="p-2 rounded-lg hover:text-[#52D6A4] hover:bg-white/[0.06] transition-colors"
              aria-label="Email Muhammad"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="p-2 rounded-lg hover:text-rose-400 hover:bg-white/[0.06] transition-colors"
              aria-label="Instagram Muhammad"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                soundManager.playClick();
                onOpenWhatsApp();
              }}
              className="p-2 rounded-lg hover:text-emerald-400 hover:bg-white/[0.06] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Kembali ke atas"
              className="ml-2 p-2 rounded-xl bg-white/[0.04] border border-emerald-900/40 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 text-[#52D6A4]" />
            </button>
          </div>
        </div>

        {/* Hak Cipta & Kutipan Penutup */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Muhammad Rahmatullah. All rights reserved.
          </p>
          <p className="font-serif italic text-emerald-400/80">
            {PERSONAL_INFO.quoteClosing}
          </p>
        </div>
      </div>
    </footer>
  );
};
