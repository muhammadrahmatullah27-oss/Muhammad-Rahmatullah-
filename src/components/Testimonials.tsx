import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    soundManager.playClick();
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    soundManager.playClick();
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              06. Client Endorsements & Peer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Validated by Technical Leadership.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              What founders, CTOs, and engineering directors say about working with Muhammad Rahmatullah.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              type="button"
              aria-label="Previous testimonial"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              type="button"
              aria-label="Next testimonial"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Highlighted Featured Testimonial Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#111728] to-[#0a0d18] border border-white/[0.12] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-6 right-8 text-white/[0.04] pointer-events-none">
            <Quote className="w-24 h-24 sm:w-36 sm:h-36" />
          </div>

          <div className="max-w-3xl relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed mb-8">
              "{current.content}"
            </p>

            {/* Author Attribution */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-md shrink-0">
                {current.avatarText}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {current.name}
                  </h3>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  {current.role} · <span className="text-slate-300 font-medium">{current.company}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Scope: {current.projectWorkedOn}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundManager.playClick();
                setCurrentIndex(idx);
              }}
              type="button"
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx
                  ? 'w-8 bg-cyan-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
