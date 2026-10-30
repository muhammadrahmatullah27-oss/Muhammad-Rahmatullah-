import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateWhatsAppUrl } from '../utils/portfolioLogic';
import { soundManager } from '../utils/sound';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ isOpen, onToggle, onClose }) => {
  const [customMessage, setCustomMessage] = useState(
    'Halo Muhammad Rahmatullah, saya ingin berdiskusi mengenai proyek penulisan atau literasi.'
  );

  const quickTemplates = [
    'Diskusi Proyek Penulisan & Naskah',
    'Undangan Pemateri / Pembicara',
    'Konsultasi Strategi Konten Media Sosial',
  ];

  const handleSendWhatsApp = () => {
    soundManager.playClick();
    const url = generateWhatsAppUrl(PERSONAL_INFO.whatsappNumber, customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div 
          role="dialog"
          aria-labelledby="whatsapp-chat-title"
          className="mb-3 w-[calc(100vw-3rem)] max-w-sm rounded-2xl bg-[#0a1f17] border border-emerald-500/30 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-900/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1B4D3E] border border-emerald-500/30 flex items-center justify-center text-[#52D6A4] font-serif font-bold text-xs">
                MR
              </div>
              <div>
                <h4 id="whatsapp-chat-title" className="text-sm font-bold font-serif text-white tracking-tight">
                  Muhammad Rahmatullah
                </h4>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Santri Pondok CEO · Penulis</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              type="button"
              aria-label="Tutup jendela chat WhatsApp"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Message Bubbles */}
          <div className="space-y-1.5 mb-3">
            <span className="text-[11px] font-mono text-slate-400">Pilih Topik Cepat:</span>
            <div className="flex flex-col gap-1.5">
              {quickTemplates.map((template, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setCustomMessage(`Halo Muhammad Rahmatullah, saya ingin berdiskusi mengenai ${template.toLowerCase()}.`);
                  }}
                  className="text-left px-2.5 py-1.5 text-xs text-slate-200 bg-black/30 hover:bg-emerald-950/80 hover:text-[#52D6A4] rounded-lg transition-colors border border-emerald-900/40"
                >
                  {template}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Area */}
          <div className="mb-4">
            <label htmlFor="whatsapp-message-input" className="sr-only">
              Teks pesan WhatsApp
            </label>
            <textarea
              id="whatsapp-message-input"
              rows={3}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-black/40 border border-emerald-900/50 text-white focus:outline-none focus:border-[#52D6A4] transition-colors"
              placeholder="Tulis pesan Anda..."
            />
          </div>

          {/* Direct CTA */}
          <button
            onClick={handleSendWhatsApp}
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-950/40"
          >
            <span>Kirim via WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => {
          soundManager.playClick();
          onToggle();
        }}
        aria-label={isOpen ? 'Tutup WhatsApp' : 'Chat WhatsApp dengan Muhammad Rahmatullah'}
        aria-expanded={isOpen}
        className="w-13 h-13 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-900/50 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group relative"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 fill-slate-950" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-[#081510] animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-[#081510]" />
          </>
        )}
      </button>
    </div>
  );
};
