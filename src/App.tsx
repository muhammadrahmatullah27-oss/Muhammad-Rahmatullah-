import React, { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { CaseStudies } from './components/CaseStudies';
import { Portfolio } from './components/Portfolio';
import { SkillsTools } from './components/SkillsTools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { WorkReaderModal } from './components/WorkReaderModal';
import { WritingWork } from './types/portfolio';

export default function App() {
  const [selectedWork, setSelectedWork] = useState<WritingWork | null>(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#081510] text-[#E8ECE9] flex flex-col relative selection:bg-[#1B4D3E] selection:text-[#52D6A4]">
      {/* Latar Belakang Nuansa Hijau Hutan & Emas */}
      <AmbientBackground />

      {/* Navigasi Utama Sticky */}
      <Navbar />

      {/* Konten Halaman Tunggal (Single-Page Scroll) */}
      <main className="flex-grow">
        {/* Bagian 01: Home (Slide 1) */}
        <Hero onOpenWhatsApp={() => setIsWhatsAppOpen(true)} />

        {/* Bagian 02: About Me (Slide 2) */}
        <About />

        {/* Bagian 03 & 04: Education & Career Direction (Slide 3 & 4) */}
        <Education />

        {/* Bagian 05: Work Experience & Responsibilities (Slide 5 & 6) */}
        <Experience />

        {/* Bagian 06 & 07: Case Study 1 & Case Study 2 (Slide 7 s/d 12) */}
        <CaseStudies />

        {/* Bagian 08 & 09: Writing Approach & Writing Portfolio (Slide 13 s/d 15) */}
        <Portfolio onSelectWork={(work) => setSelectedWork(work)} />

        {/* Bagian 10 & 11: Skills, Tools & Working Approach (Slide 16 s/d 18) */}
        <SkillsTools />

        {/* Bagian 12: Let's Connect & Closing (Slide 19 & 20) */}
        <Contact onOpenWhatsApp={() => setIsWhatsAppOpen(true)} />
      </main>

      {/* Footer Navigasi & Hak Cipta */}
      <Footer onOpenWhatsApp={() => setIsWhatsAppOpen(true)} />

      {/* Tombol Melayang WhatsApp Quick Action */}
      <WhatsAppWidget
        isOpen={isWhatsAppOpen}
        onToggle={() => setIsWhatsAppOpen((prev) => !prev)}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      {/* Modal Dialog Baca Naskah Karya Tulisan */}
      <WorkReaderModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </div>
  );
}
