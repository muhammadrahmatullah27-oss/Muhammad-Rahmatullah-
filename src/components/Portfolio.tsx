import React, { useState } from 'react';
import { Quote, Search, ArrowRight } from 'lucide-react';
import { CASE_STUDY_3, WRITING_THEMES, WRITING_APPROACH_STEPS, WRITING_WORKS, PERSONAL_INFO } from '../data/portfolioData';
import { WritingWork } from '../types/portfolio';
import { filterWritingWorks } from '../utils/portfolioLogic';
import { soundManager } from '../utils/sound';

interface PortfolioProps {
  onSelectWork: (work: WritingWork) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectWork }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorks = filterWritingWorks(WRITING_WORKS, searchQuery);

  return (
    <section id="portfolio" className="py-20 sm:py-28 border-t border-emerald-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= CASE STUDY 3: WRITING & LITERACY ================= */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              08. Studi Kasus 03 · Literasi & Penulisan Naratif
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Writing, Literacy & Narrative Communication
            </h2>
            <p className="text-base sm:text-lg text-emerald-300 font-sans">
              Menghidupkan nilai-nilai keteladanan, pengabdian, dan perjuangan hidup melalui untaian kata.
            </p>
          </div>

          {/* Fokus & 7 Tema yang Sering Diangkat */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5 rounded-2xl bg-[#0e271d] border border-emerald-500/25 p-7">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-2">
                Fokus Studi Kasus
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {CASE_STUDY_3.focus}
              </p>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-white/[0.02] border border-emerald-900/30 p-7">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                7 Tema Utama yang Sering Diangkat:
              </span>
              <div className="flex flex-wrap gap-2">
                {WRITING_THEMES.map((theme, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-emerald-200 text-xs font-medium"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Slide 14: Writing Approach & Golden Quote */}
          <div className="rounded-2xl bg-gradient-to-b from-[#113124] to-[#0a1e16] border border-emerald-500/30 p-8 sm:p-10 shadow-2xl mb-12">
            {/* Kutipan Utama */}
            <div className="text-center max-w-3xl mx-auto mb-10 pb-8 border-b border-emerald-900/40">
              <Quote className="w-10 h-10 text-[#D4AF37] mx-auto mb-3 opacity-80" />
              <blockquote className="text-2xl sm:text-3xl font-serif italic text-[#F3E5AB] leading-relaxed">
                {PERSONAL_INFO.quotePrimary}
              </blockquote>
              <span className="text-xs font-mono text-emerald-300 mt-2 block tracking-wider">
                — Prinsip Kepenulisan Muhammad Rahmatullah
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-serif text-white mb-2">
                Writing Approach
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Enam langkah metodologi dalam merajut fakta dan pengalaman menjadi narasi yang menggetarkan pembaca:
              </p>
            </div>

            {/* 6 Langkah Metodologi Menulis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WRITING_APPROACH_STEPS.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/30 border border-emerald-500/20">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold block mb-1">
                    Langkah {step.step}
                  </span>
                  <h4 className="text-sm font-bold font-serif text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SLIDE 15: WRITING PORTFOLIO ================= */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
                09. Portofolio Karya Naskah
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-2">
                Writing Portfolio
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans">
                Tiga naskah tulisan reflektif karya Muhammad Rahmatullah.
              </p>
            </div>

            {/* Search filter */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari tema atau judul..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-white/[0.04] border border-emerald-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-[#52D6A4] transition-colors"
              />
            </div>
          </div>

          {/* 3 Kartu Karya Tulisan */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="rounded-2xl bg-gradient-to-b from-[#0f2d21] to-[#091a13] border border-emerald-500/25 hover:border-emerald-500/50 p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-900/40">
                    <span className="text-xs font-mono text-[#D4AF37] font-bold">
                      KARYA {work.number}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-800/40 px-2 py-0.5 rounded">
                      {work.format}
                    </span>
                  </div>

                  {/* Judul & Tema */}
                  <div className="text-xs font-mono text-[#52D6A4] uppercase tracking-wider mb-2">
                    {work.theme}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white tracking-tight mb-3 group-hover:text-[#52D6A4] transition-colors">
                    {work.title}
                  </h3>

                  {/* Ringkasan Singkat */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {work.summary}
                  </p>

                  {/* Kutipan Cuplikan Naskah */}
                  <div className="p-4 rounded-xl bg-black/40 border border-emerald-900/50 mb-6 font-serif italic text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {work.excerpt}
                  </div>
                </div>

                {/* Tombol Aksi Buka Naskah */}
                <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Naskah Orisinal
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectWork(work);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52D6A4] hover:text-white transition-colors"
                  >
                    <span>Baca Naskah Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
