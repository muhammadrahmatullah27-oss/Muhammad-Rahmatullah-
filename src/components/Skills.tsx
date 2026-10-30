import React, { useState } from 'react';
import { Check, Code2, Cpu, Cloud, Database, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  const categoryIcons = [Code2, Cpu, Cloud, Database];

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            04. Core Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mastery Across Modern Engineering Paradigms.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A comprehensive matrix of technical capabilities honed through seven years of building high-concurrency cloud systems and intuitive web applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Code2;
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setActiveCategoryIndex(idx);
                }}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#121829] to-[#0c111e] border-cyan-500/50 shadow-lg shadow-cyan-950/20 translate-y-[-2px]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {isActive && <Check className="w-4 h-4 text-cyan-400" />}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {cat.skills.length} core technologies
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Skills Display Box */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0f1422] to-[#0a0d18] border border-white/[0.12] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/[0.08] gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeCategory.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {activeCategory.description}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Ready Proficiency</span>
            </div>
          </div>

          {/* Skills Grid with Meters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {activeCategory.skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{skill.name}</span>
                    {skill.categoryBadge && (
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-1.5 py-0.5 rounded">
                        {skill.categoryBadge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-slate-400">{skill.experience}</span>
                    <span className="text-cyan-400 font-bold tabular-nums">{skill.level}%</span>
                  </div>
                </div>

                {/* Progress Meter Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Strengths Strip */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <span>Deep expertise in type-driven domain architecture and strict compiler rules.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
              <span>Continuous profiling, CPU flamegraphs, and memory optimization.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span>Automated test-driven pipelines and zero-regression deployment cycles.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
