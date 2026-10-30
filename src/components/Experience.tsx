import React from 'react';
import { Briefcase, CheckCircle2, Layers, FileText, BarChart3, Share2 } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const responsibilityIcons = [FileText, Share2, BarChart3];

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-emerald-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
            05. Pengalaman Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-emerald-300 font-sans">
            Dedikasi profesional dalam digital marketing, strategi konten, dan optimasi media sosial.
          </p>
        </div>

        {/* Kartu Utama Pengalaman Kerja */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0e271d] to-[#081812] border border-emerald-500/25 p-7 sm:p-9 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-emerald-900/40 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Pengalaman Profesional</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                {WORK_EXPERIENCE.role}
              </h3>
              <p className="text-base font-semibold text-[#52D6A4] mt-0.5">
                {WORK_EXPERIENCE.company}
              </p>
            </div>
          </div>

          {/* Ringkasan 7 Peran Utama */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Ringkasan Peran & Kontribusi Strategis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {WORK_EXPERIENCE.summaryRoles.map((role, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#091f16]/70 border border-emerald-900/40">
                  <CheckCircle2 className="w-4 h-4 text-[#52D6A4] mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 6: Tanggung Jawab Terstruktur (Responsibilities) */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#52D6A4] mb-4">
            Tanggung Jawab Kerja Terstruktur
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORK_EXPERIENCE.responsibilities.map((resp, idx) => {
              const Icon = responsibilityIcons[idx] || Layers;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0b2118] border border-emerald-500/20 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#52D6A4] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold font-serif text-white mb-4">
                      {resp.category}
                    </h4>
                    <ul className="space-y-3">
                      {resp.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#52D6A4] mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
