import React from 'react';
import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { EDUCATION_INFO, CAREER_DIRECTION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-emerald-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 03: Education */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              03. Latar Pendidikan
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Education
            </h2>
            <p className="text-base sm:text-lg text-emerald-300 font-sans">
              Pengembangan kapasitas akademik dalam lanskap ekonomi digital modern.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Kartu Institusi Pendidikan */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#0e271d] to-[#081812] border border-emerald-500/25 p-7 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#52D6A4] mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
                Pendidikan Tinggi
              </span>
              <h3 className="text-2xl font-bold font-serif text-white mb-1">
                {EDUCATION_INFO.program}
              </h3>
              <p className="text-base font-medium text-[#52D6A4] mb-4">
                {EDUCATION_INFO.university}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-emerald-900/40">
                {EDUCATION_INFO.description}
              </p>
            </div>

            {/* 5 Pilar Fokus Pengembangan Diri */}
            <div className="lg:col-span-7 rounded-2xl bg-white/[0.02] border border-emerald-900/30 p-7">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5">
                Fokus Pengembangan Diri & Bidang Studi
              </h4>
              <div className="space-y-3">
                {EDUCATION_INFO.focusPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#091e16]/80 border border-emerald-900/40 hover:border-emerald-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#52D6A4] shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 04: Career Direction */}
        <div id="career-direction" className="pt-8 border-t border-emerald-900/30">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              04. Arah Karier Masa Depan
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Career Direction
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {CAREER_DIRECTION.summary}
            </p>
          </div>

          {/* 6 Pilar Arah Karier */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_DIRECTION.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-gradient-to-b from-[#0c2219] to-[#081610] border border-emerald-500/20 p-6 hover:border-emerald-500/40 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#D4AF37]">
                    0{idx + 1}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#52D6A4]" />
                </div>
                <h3 className="text-lg font-bold font-serif text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
