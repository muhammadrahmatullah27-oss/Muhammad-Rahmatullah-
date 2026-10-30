import React, { useEffect, useState } from 'react';
import { X, Copy, Check, BookOpen, Quote } from 'lucide-react';
import { WritingWork } from '../types/portfolio';
import { soundManager } from '../utils/sound';

interface WorkReaderModalProps {
  work: WritingWork | null;
  onClose: () => void;
}

export const WorkReaderModal: React.FC<WorkReaderModalProps> = ({ work, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (work) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  const handleCopyExcerpt = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(`${work.title}\nKarya: Muhammad Rahmatullah\n\n${work.fullExcerpt}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundManager.playClick();
          onClose();
        }}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reader-work-title"
        className="relative w-full max-w-3xl bg-[#0a1b14] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col"
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/40 bg-[#0a1b14]/95 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#52D6A4]">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>Karya Naskah {work.number} · {work.format}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyExcerpt}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-emerald-900/40 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Salin Naskah</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              type="button"
              aria-label="Tutup jendela baca naskah"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reader Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
              Tema: {work.theme}
            </span>
            <h2 id="reader-work-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif mb-2">
              {work.title}
            </h2>
            <p className="text-xs text-slate-400 font-sans">
              Penulis: <span className="text-white font-medium">Muhammad Rahmatullah</span> · Mahasiswa Bisnis Digital & Santri Pondok CEO
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#06140e] border border-emerald-900/40 text-xs text-slate-300 leading-relaxed italic">
            <span className="font-semibold text-emerald-400 block mb-1 not-italic">Ringkasan Narasi:</span>
            {work.summary}
          </div>

          {/* Full Reading Text with Editorial Serif Typography */}
          <div className="pt-4 border-t border-emerald-900/40">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-[#52D6A4]" />
              <span>Teks Naskah Reflektif:</span>
            </h3>

            <div className="font-serif text-base sm:text-lg text-slate-100 leading-loose space-y-4 whitespace-pre-line pl-4 border-l-2 border-emerald-500/30">
              {work.fullExcerpt}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-emerald-900/40 bg-[#071510] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Koleksi Naskah Personal Muhammad Rahmatullah</span>
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="text-[#52D6A4] hover:underline"
          >
            Tutup Naskah
          </button>
        </div>
      </div>
    </div>
  );
};
