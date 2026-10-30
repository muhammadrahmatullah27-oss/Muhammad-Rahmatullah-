import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Feather } from 'lucide-react';
import { soundManager } from '../utils/sound';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMuted, setIsMuted] = useState(soundManager.isMuted);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'experience', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const newMuted = soundManager.toggleMute();
    setIsMuted(newMuted);
    if (!newMuted) soundManager.playClick();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081510]/92 backdrop-blur-md border-b border-emerald-900/30 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-[#52D6A4] transition-colors whitespace-nowrap shrink-0 group flex items-center gap-2.5 font-serif"
          >
            <span className="w-8 h-8 rounded-lg bg-[#143628] border border-emerald-500/30 flex items-center justify-center text-[#52D6A4] group-hover:scale-105 transition-transform">
              <Feather className="w-4 h-4" />
            </span>
            <span className="font-serif">Muhammad Rahmatullah</span>
          </a>

          {/* Zone 2: 7 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 text-xs tracking-wide ${
                    isActive ? 'text-[#52D6A4] font-semibold' : 'hover:text-white text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#52D6A4] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action & audio toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleSound}
              type="button"
              aria-label={isMuted ? 'Bunyikan audio' : 'Bisukan audio'}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title={isMuted ? 'Audio mati' : 'Audio menyala'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#52D6A4]" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-950 bg-[#34D399] hover:bg-[#52D6A4] rounded-lg transition-all shadow-sm hover:shadow-emerald-900/30 whitespace-nowrap shrink-0"
            >
              Hubungi Saya
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1c15]/98 border-b border-emerald-900/40 backdrop-blur-xl px-4 pt-4 pb-6 transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-500/10 text-[#52D6A4] font-semibold'
                    : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-emerald-900/30">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center py-2.5 text-sm font-semibold text-slate-950 bg-[#34D399] rounded-lg hover:bg-[#52D6A4]"
              >
                Hubungi Saya
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
