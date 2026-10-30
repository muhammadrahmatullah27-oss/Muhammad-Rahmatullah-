import React from 'react';
import { ArrowDown, BookOpen, Feather, Mail, MessageSquare, Instagram, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

interface HeroProps {
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Kolom Kiri: Tipografi Editorial & Identitas */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header Lencana Editorial */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-4">
              <span>Portfolio</span>
              <span className="text-emerald-800" aria-hidden="true">/</span>
              <span>Professional Writer</span>
              <span className="text-emerald-800" aria-hidden="true">/</span>
              <span className="text-amber-300 font-serif">Universitas Cakrawala</span>
            </div>

            {/* Nama Utama */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 font-serif">
              Muhammad{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52D6A4] via-emerald-200 to-amber-200">
                Rahmatullah
              </span>
            </h1>

            {/* Status & Sub-identitas */}
            <div className="text-base sm:text-lg font-medium text-emerald-300 mb-4 font-sans flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#52D6A4] inline-block"></span>
              <span>Prodi Bisnis Digital – Universitas Cakrawala</span>
            </div>

            {/* Tagline Lengkap */}
            <p className="text-sm sm:text-base font-mono text-slate-300 mb-6">
              Writer · Digital Business Student · Digital Content Enthusiast
            </p>

            {/* Narasi Pembuka Ringkas */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Penulis, mahasiswa Bisnis Digital, dan Santri Pondok CEO di lingkungan Masjid Muslim Billionaire. Mengolah pengalaman hidup, kepemimpinan, dan nilai-nilai sosial menjadi narasi yang bermakna dan menginspirasi kaum muda.
            </p>

            {/* Tombol Aksi Utama */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#portfolio"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-[#34D399] hover:bg-[#52D6A4] rounded-xl transition-all shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5"
              >
                <span>Jelajahi Karya Tulisan</span>
                <BookOpen className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] rounded-xl transition-all hover:-translate-y-0.5"
              >
                <span>Hubungi Saya</span>
                <Mail className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href="#about"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>Mengenal Lebih Dekat</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#52D6A4]" />
              </a>
            </div>

            {/* Jalur Kontak Langsung (Email, Instagram, WhatsApp - TANPA LinkedIn & Website) */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-5 border-t border-emerald-900/40">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">
                Kontak Langsung:
              </span>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 hover:text-[#52D6A4] transition-colors py-1"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <span className="text-emerald-900" aria-hidden="true">·</span>

              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 hover:text-rose-300 transition-colors py-1"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-400" />
                <span>@{PERSONAL_INFO.instagram}</span>
              </a>

              <span className="text-emerald-900" aria-hidden="true">·</span>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onOpenWhatsApp();
                }}
                className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-1 font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Ruang Foto Profil & Monogram Akademik */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#0f2d21] to-[#091a13] border border-emerald-500/25 p-7 shadow-2xl relative overflow-hidden group">
              {/* Bingkai Monogram Editorial */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-emerald-900/40">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#1B4D3E] via-[#0F3B2B] to-[#D4AF37] p-[1.5px] shadow-xl mb-4">
                  <div className="w-full h-full rounded-2xl bg-[#081510] flex flex-col items-center justify-center">
                    <Feather className="w-7 h-7 text-[#D4AF37] mb-1" />
                    <span className="text-2xl font-serif font-extrabold text-white tracking-wider">MR</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold font-serif text-white tracking-tight">
                  Muhammad Rahmatullah
                </h2>
                <p className="text-xs font-mono text-[#52D6A4] mt-0.5">
                  Penulis & Narator Inspiratif
                </p>
                <p className="text-xs text-slate-300 mt-1 max-w-xs leading-relaxed">
                  Santri Pondok CEO di lingkungan Masjid Muslim Billionaire
                </p>
              </div>

              {/* Kutipan Emas Utama */}
              <div className="my-5 p-4 rounded-xl bg-[#06120d]/80 border border-emerald-500/20 text-center">
                <p className="text-sm italic font-serif text-[#F3E5AB] leading-relaxed">
                  {PERSONAL_INFO.quotePrimary}
                </p>
              </div>

              {/* 5 Lencana Identitas Singkat */}
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {PERSONAL_INFO.highlights.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-mono text-emerald-200 bg-emerald-950/60 border border-emerald-800/40 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Nilai Utama */}
        <div className="mt-16 pt-10 border-t border-emerald-900/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERSONAL_INFO.coreValues.map((val, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/[0.02] border border-emerald-900/30 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#52D6A4] mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Nilai 0{i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white font-serif mb-1">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
