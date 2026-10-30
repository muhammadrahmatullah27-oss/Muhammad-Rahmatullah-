import React, { useState, useEffect } from 'react';
import { Compass, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { formatTimeInJakarta } from '../utils/portfolioLogic';

export const About: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => setLocalTime(formatTimeInJakarta());
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-emerald-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
            02. Profil & Identitas Diri
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-emerald-300 font-sans">
            Mengenal lebih dekat perjalanan, nilai hidup, dan komitmen literasi Muhammad Rahmatullah.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Kolom Kiri: Narasi Terpadu "Siapa Saya" */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="border-l-2 border-[#52D6A4] pl-4 text-white font-medium italic">
              {PERSONAL_INFO.bioParagraph1}
            </p>

            <p>
              {PERSONAL_INFO.bioParagraph2}
            </p>

            <p>
              {PERSONAL_INFO.bioParagraph3}
            </p>

            <p className="text-sm text-slate-400">
              {PERSONAL_INFO.bioParagraph4}
            </p>

            {/* Kutipan Nilai Utama */}
            <div className="pt-4 border-t border-emerald-900/30">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 block mb-2">
                Landasan Hidup & Berkarya:
              </span>
              <blockquote className="font-serif italic text-white text-lg sm:text-xl text-emerald-200">
                {PERSONAL_INFO.quotePrimary}
              </blockquote>
            </div>
          </div>

          {/* Kolom Kanan: Sorotan Identitas & Lingkungan Santri */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kartu Komitmen Santri Pondok CEO */}
            <div className="rounded-2xl bg-[#0b2118] border border-emerald-500/25 p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span>LINGKUNGAN PEMBELAJARAN</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>WIB (UTC+7)</span>
                </span>
              </div>

              <div className="mb-4">
                <div className="text-xs text-slate-300">Waktu Lokal (Masjid Muslim Billionaire):</div>
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums mt-1 text-[#52D6A4]">
                  {localTime || '14:00:00'}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Menempa ilmu agama, adab kepemimpinan, dan kecakapan bisnis digital di lingkungan Masjid Muslim Billionaire untuk melahirkan kemandirian dan kebermanfaatan bagi umat.
              </p>

              <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between text-xs">
                <span className="text-slate-400">Pendidikan Tinggi:</span>
                <span className="text-white font-medium">Universitas Cakrawala</span>
              </div>
            </div>

            {/* Highlight Peran Kunci */}
            <div className="rounded-2xl bg-white/[0.02] border border-emerald-900/30 p-6">
              <div className="text-xs font-mono uppercase tracking-wider text-[#52D6A4] mb-3">
                Sorotan Identitas Kunci
              </div>
              <div className="space-y-2.5">
                {PERSONAL_INFO.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <UserCheck className="w-4 h-4 text-[#52D6A4] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
