import React from 'react';
import { CheckCircle, Video, FileSpreadsheet, FileText, Cloud, Globe, BookOpen } from 'lucide-react';
import { SKILLS_CATEGORIES, TOOLS_LIST, WORKING_APPROACH } from '../data/portfolioData';

export const SkillsTools: React.FC = () => {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'CapCut':
        return Video;
      case 'Google Sheets':
        return FileSpreadsheet;
      case 'Google Docs':
        return FileText;
      case 'Google Drive':
        return Cloud;
      case 'WordPress (Wepres)':
        return Globe;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-emerald-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= SKILLS OVERVIEW & MAP ================= */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              10. Keahlian & Kompetensi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Skills & Core Competencies
            </h2>
            <p className="text-base sm:text-lg text-emerald-300 font-sans">
              Penguasaan lintas disiplin dalam kepenulisan kreatif, strategi konten digital, dan nilai profesional.
            </p>
          </div>

          {/* 3 Kategori Keahlian */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-[#0e271d] to-[#081812] border border-emerald-500/25 p-7 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] block mb-2">
                    Kategori 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-[#52D6A4] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TOOLS & SOFTWARE ================= */}
        <div className="pt-12 border-t border-emerald-900/40">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              11. Perangkat Kerja (Tools)
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Tools & Software
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans">
              Perangkat digital utama yang digunakan dalam produksi konten, penulisan naskah, dan analitik.
            </p>
          </div>

          {/* 6 Kartu Perangkat Kerja */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TOOLS_LIST.map((tool, idx) => {
              const Icon = getToolIcon(tool.name);
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0b2118] border border-emerald-500/20 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#52D6A4]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-black/40 px-2 py-0.5 rounded">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-serif text-white mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-xs font-mono text-[#52D6A4] mb-2">
                      {tool.category}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Working Approach (6 Siklus Kerja) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#113124] to-[#0a1e16] border border-emerald-500/30 p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-emerald-900/40">
              <div>
                <h3 className="text-2xl font-bold font-serif text-white">
                  Working Approach
                </h3>
                <p className="text-xs sm:text-sm text-emerald-300 mt-1">
                  Enam siklus kerja berulang untuk memastikan karya dan konten senantiasa relevan dan bermutu.
                </p>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-[#D4AF37]">
                Iterative Framework
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {WORKING_APPROACH.map((app, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/30 border border-emerald-500/20 text-center flex flex-col items-center justify-center"
                >
                  <span className="text-xs font-mono text-[#D4AF37] font-bold mb-1">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-bold font-serif text-white mb-1">
                    {app.name}
                  </span>
                  <span className="text-[11px] text-slate-300 leading-tight">
                    {app.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
