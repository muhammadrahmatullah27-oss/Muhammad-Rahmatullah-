import React from 'react';
import { CheckCircle, Lightbulb, Mic } from 'lucide-react';
import { CASE_STUDY_1, CASE_STUDY_2, LEADERSHIP_EXPERIENCES } from '../data/portfolioData';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-28 border-t border-emerald-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ================= CASE STUDY 1 ================= */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              06. Studi Kasus 01 · Komunikasi Digital
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Content Strategy & Social Media Reporting
            </h2>
            <p className="text-base sm:text-lg text-emerald-300 font-sans">
              Yayasan Muslim Billionaire Indonesia
            </p>
          </div>

          {/* Fokus & Brief */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-6 rounded-2xl bg-[#0e271d] border border-emerald-500/25 p-7">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-2">
                Fokus Studi Kasus
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {CASE_STUDY_1.focus}
              </p>
            </div>
            <div className="lg:col-span-6 rounded-2xl bg-white/[0.02] border border-emerald-900/30 p-7">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Project Brief
              </span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {CASE_STUDY_1.brief}
              </p>
            </div>
          </div>

          {/* Process & Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Tahapan Proses */}
            <div className="lg:col-span-6 rounded-2xl bg-[#091e16] border border-emerald-900/40 p-7">
              <h3 className="text-lg font-bold font-serif text-white mb-4">
                Tahapan Proses (Process)
              </h3>
              <div className="space-y-3">
                {CASE_STUDY_1.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <span className="text-xs font-mono text-[#52D6A4] mt-0.5 font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hasil & Kontribusi */}
            <div className="lg:col-span-6 rounded-2xl bg-[#091e16] border border-emerald-900/40 p-7">
              <h3 className="text-lg font-bold font-serif text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#52D6A4]" />
                <span>Hasil & Kontribusi (Result)</span>
              </h3>
              <div className="space-y-3">
                {CASE_STUDY_1.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52D6A4] mt-2 shrink-0"></span>
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pembelajaran Utama (Learnings) */}
          <div className="p-6 rounded-2xl bg-[#0d2a1f] border border-emerald-500/25 mb-10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4" />
              <span>Pembelajaran Utama (Key Learnings)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CASE_STUDY_1.learnings.map((learn, idx) => (
                <div key={idx} className="text-xs text-slate-200 leading-relaxed">
                  {learn}
                </div>
              ))}
            </div>
          </div>

          {/* Diagram Alur Kerja Visual (Content Workflow) */}
          <div className="rounded-2xl bg-[#06140e] border border-emerald-900/40 p-7">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold font-serif text-white">
                Content Workflow
              </h3>
              <span className="text-xs font-mono text-[#52D6A4]">Siklus Kerja Terstruktur</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {CASE_STUDY_1.workflowSteps?.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0a1e16] border border-emerald-500/20 text-center flex flex-col items-center justify-center relative group"
                >
                  <span className="text-[11px] font-mono text-[#D4AF37] mb-1">Step 0{idx + 1}</span>
                  <span className="text-xs font-semibold text-white">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CASE STUDY 2 ================= */}
        <div className="pt-16 border-t border-emerald-900/40">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              07. Studi Kasus 02 · Kepemimpinan & Komunikasi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Public Speaking & Event Operations
            </h2>
            <p className="text-base sm:text-lg text-emerald-300 font-sans">
              Pengalaman Membawakan Acara, Interaksi Audiens & Koordinasi Operasional Lapangan
            </p>
          </div>

          {/* Highlight MC Pasar Bahagia */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#113124] to-[#0a1e16] border border-emerald-500/30 p-7 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#52D6A4] mb-5">
                <Mic className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] block mb-1">
                Pembawa Acara Utama
              </span>
              <h3 className="text-2xl font-bold font-serif text-white mb-2">
                MC Pasar Bahagia
              </h3>
              <p className="text-sm font-semibold text-[#52D6A4] mb-4">
                Menjangkau ~500+ Jamaah per Bulan
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Muhammad Rahmatullah berperan sebagai MC dalam kegiatan Pasar Bahagia rutin yang menghimpun ratusan jamaah, menjaga suasana khidmat, tertib, dan komunikatif.
              </p>
              <div className="pt-4 border-t border-emerald-900/40 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-black/30">
                  <span className="text-white font-bold block">500+</span>
                  <span className="text-[10px] text-slate-400">Jamaah / Bulan</span>
                </div>
                <div className="p-2 rounded-lg bg-black/30">
                  <span className="text-[#52D6A4] font-bold block">Rutin</span>
                  <span className="text-[10px] text-slate-400">Tiap Periode</span>
                </div>
              </div>
            </div>

            {/* Tanggung Jawab & Kemampuan MC */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl bg-white/[0.02] border border-emerald-900/30 p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Tanggung Jawab MC Pasar Bahagia:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52D6A4]"></span>
                    <span>Membuka dan menutup acara</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52D6A4]"></span>
                    <span>Mengatur alur rundown kegiatan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52D6A4]"></span>
                    <span>Menyampaikan informasi kepada jamaah</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52D6A4]"></span>
                    <span>Menjaga suasana komunikatif</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52D6A4]"></span>
                    <span>Berinteraksi hangat dengan audiens</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#091e16] border border-emerald-500/20 p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-3">
                  Kemampuan yang Dikembangkan:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Kepercayaan Diri', 'Artikulasi & Komunikasi', 'Penguasaan Panggung', 'Improvisasi', 'Audience Engagement'].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-emerald-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide 12: Event Operations & Leadership */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-serif text-white">
                Event Operations & Rekam Jejak Kepemimpinan
              </h3>
              <span className="text-xs font-mono text-[#52D6A4]">Kapasitas Lapangan</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEADERSHIP_EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0b2118] border border-emerald-900/30 p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-colors"
                >
                  <div>
                    <span className="text-xs font-mono text-[#D4AF37] block mb-1">
                      {exp.context}
                    </span>
                    <h4 className="text-base font-bold font-serif text-white mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
