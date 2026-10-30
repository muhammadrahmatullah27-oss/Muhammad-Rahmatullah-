import React, { useState } from 'react';
import { Send, Mail, Copy, Check, MessageSquare, Instagram, ArrowUpRight, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData, validateContactForm, generateWhatsAppUrl } from '../utils/portfolioLogic';
import { soundManager } from '../utils/sound';

interface ContactProps {
  onOpenWhatsApp: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsApp }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedIg, setCopiedIg] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyInstagram = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.instagram);
    setCopiedIg(true);
    setTimeout(() => setCopiedIg(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundManager.playSuccess();

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#34D399', '#52D6A4', '#D4AF37'],
        });
      } catch {
        // Confetti fallback
      }
    }, 800);
  };

  const handleReset = () => {
    soundManager.playClick();
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Kolaborasi Menulis / Konten dengan Muhammad Rahmatullah'
  )}&body=${encodeURIComponent(
    `Halo Muhammad,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-emerald-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================= SLIDE 19: LET'S CONNECT ================= */}
        <div>
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-[#52D6A4] mb-2">
              12. Ruang Kolaborasi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Muhammad Rahmatullah adalah penulis dan mahasiswa Bisnis Digital yang tertarik pada literasi, komunikasi, konten digital, dan karya yang memberikan manfaat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Kolom Kiri: Saluran Kontak Resmi (Email, Instagram, WhatsApp) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Email Resmi */}
              <div className="rounded-2xl bg-gradient-to-b from-[#0e271d] to-[#081812] border border-emerald-500/25 p-6 shadow-xl">
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#D4AF37] mb-2 uppercase">
                  <Mail className="w-4 h-4" />
                  <span>Surat Elektronik (Email)</span>
                </div>
                <div className="text-base sm:text-lg font-bold font-serif text-white mb-4 break-all">
                  {PERSONAL_INFO.email}
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-emerald-900/40 rounded-lg transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Email Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Salin Email</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-[#34D399] hover:bg-[#52D6A4] rounded-lg transition-colors"
                  >
                    <span>Kirim Email</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Instagram Resmi */}
              <div className="rounded-2xl bg-[#0b2118] border border-emerald-500/20 p-6 shadow-xl">
                <div className="flex items-center gap-2.5 text-xs font-mono text-rose-300 mb-2 uppercase">
                  <Instagram className="w-4 h-4 text-rose-400" />
                  <span>Media Sosial (Instagram)</span>
                </div>
                <div className="text-lg font-bold font-serif text-white mb-4">
                  @{PERSONAL_INFO.instagram}
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyInstagram}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-emerald-900/40 rounded-lg transition-colors"
                  >
                    {copiedIg ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Username Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Salin Username</span>
                      </>
                    )}
                  </button>
                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-rose-900/40 hover:bg-rose-900/60 border border-rose-500/30 rounded-lg transition-colors"
                  >
                    <span>Kunjungi Profil</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Chat Cepat */}
              <div className="rounded-2xl bg-[#091a13] border border-emerald-500/25 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Langsung</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">
                    Respon Cepat
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Ingin berdiskusi santai mengenai tulisan, konsep naskah, atau undangan pembicara?
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      onOpenWhatsApp();
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Mulai Chat WhatsApp</span>
                  </button>
                  <span className="text-xs text-slate-400 font-mono">
                    {PERSONAL_INFO.phoneDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Formulir Pesan Kolaborasi */}
            <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-[#0c2219] to-[#081610] border border-emerald-500/25 p-7 sm:p-8 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#52D6A4] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white tracking-tight">
                    Pesan Berhasil Dikirimkan!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong className="text-white">{formData.name}</strong>. Pesan Anda telah diterima oleh Muhammad Rahmatullah dan akan segera dibalas melalui email <strong className="text-white">{formData.email}</strong>.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-4 py-2 text-xs font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] rounded-lg transition-colors"
                    >
                      Kirim Pesan Lainnya
                    </button>
                    <a
                      href={mailtoUrl}
                      className="px-4 py-2 text-xs font-semibold text-[#52D6A4] hover:underline"
                    >
                      Buka Draft Email
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <h3 className="text-xl font-bold font-serif text-white mb-1">
                    Kirimkan Pesan atau Undangan
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Silakan tinggalkan pesan untuk kebutuhan penulisan, kepenulisan buku, atau kegiatan literasi.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                        Nama Lengkap <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda..."
                        className={`w-full px-3 py-2 text-xs rounded-xl bg-black/30 border ${
                          errors.name ? 'border-rose-500' : 'border-emerald-900/50'
                        } text-white placeholder-slate-500 focus:outline-none focus:border-[#52D6A4] transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                        Alamat Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        className={`w-full px-3 py-2 text-xs rounded-xl bg-black/30 border ${
                          errors.email ? 'border-rose-500' : 'border-emerald-900/50'
                        } text-white placeholder-slate-500 focus:outline-none focus:border-[#52D6A4] transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Perihal / Subjek
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Kolaborasi Naskah Buku / Diskusi Literasi"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-black/30 border border-emerald-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-[#52D6A4] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                      Isi Pesan <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Sampaikan gagasan, kebutuhan penulisan, atau detail kegiatan Anda..."
                      className={`w-full px-3 py-2 text-xs rounded-xl bg-black/30 border ${
                        errors.message ? 'border-rose-500' : 'border-emerald-900/50'
                      } text-white placeholder-slate-500 focus:outline-none focus:border-[#52D6A4] transition-colors`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Respon dikirimkan langsung ke email Anda.
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-[#34D399] hover:bg-[#52D6A4] rounded-xl transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Pesan</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ================= SLIDE 20: CLOSING ================= */}
        <div className="pt-16 border-t border-emerald-900/40">
          <div className="rounded-3xl bg-gradient-to-b from-[#113124] via-[#0b2219] to-[#081812] border border-emerald-500/30 p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#071711] border border-emerald-500/30 flex items-center justify-center text-[#D4AF37] mx-auto shadow-md">
                <Feather className="w-8 h-8" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
                Thank You
              </h2>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#F3E5AB] leading-relaxed">
                {PERSONAL_INFO.quoteClosing}
              </blockquote>

              <div className="pt-4 border-t border-emerald-900/40">
                <h3 className="text-lg font-bold font-serif text-white">
                  Muhammad Rahmatullah
                </h3>
                <p className="text-xs font-mono text-[#52D6A4] mt-0.5">
                  Writer · Digital Business Student · Literacy Enthusiast
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 mt-3 font-mono">
                  <span>{PERSONAL_INFO.email}</span>
                  <span className="text-emerald-800" aria-hidden="true">·</span>
                  <span>Instagram: @{PERSONAL_INFO.instagram}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
