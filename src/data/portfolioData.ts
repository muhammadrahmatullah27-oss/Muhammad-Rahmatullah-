import { WritingWork, WorkResponsibility, CaseStudyData, ToolItem, SkillCategoryGroup } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Muhammad Rahmatullah',
  role: 'Professional Writer',
  institution: 'Prodi Bisnis Digital – Universitas Cakrawala',
  residence: 'Santri Pondok CEO di lingkungan Masjid Muslim Billionaire',
  tagline: 'Writer · Digital Business Student · Digital Content Enthusiast',
  email: 'muhammadrahmatullah27@gmail.com',
  instagram: 'rahmat.dlg',
  instagramUrl: 'https://instagram.com/rahmat.dlg',
  phoneDisplay: '+62 812-3456-7890',
  whatsappNumber: '+6281234567890',
  quotePrimary: '“Menulis untuk menyampaikan makna dan menebar manfaat.”',
  quoteClosing: '“Terus belajar, terus berkarya, dan terus menebar manfaat.”',
  bioParagraph1: `Muhammad Rahmatullah adalah seorang penulis, mahasiswa Bisnis Digital, dan Santri Pondok CEO di lingkungan Masjid Muslim Billionaire. Ia aktif mengembangkan diri melalui dunia literasi, media sosial, komunikasi, dan pembuatan konten.`,
  bioParagraph2: `Sebagai penulis, ia tertarik mengolah pengalaman dan realitas kehidupan menjadi narasi yang bermakna. Karya-karyanya banyak mengangkat tema perjuangan hidup, kepemimpinan, nilai-nilai keluarga, pengabdian, dan kebermanfaatan bagi sesama.`,
  bioParagraph3: `Ia percaya bahwa tulisan bukan hanya rangkaian kata, tetapi juga cara untuk menyampaikan gagasan, membangun kesadaran, dan menginspirasi orang lain. Karena itu, ia memiliki komitmen untuk menjadi narator inspiratif bagi kaum muda melalui karya, komunikasi, dan aktivitas yang dijalani.`,
  bioParagraph4: `Saat ini, ia juga mempelajari Bisnis Digital dan mengembangkan kemampuan dalam bidang digital marketing, SEO, strategi media sosial, perencanaan konten, public speaking, penulisan kreatif, storytelling, dan komunikasi naratif.`,
  coreValues: [
    { title: 'Menulis untuk Menyampaikan Makna', desc: 'Merangkai kata yang menggugah nurani dan menyuarakan kejujuran realitas.' },
    { title: 'Berkarya untuk Memberi Manfaat', desc: 'Setiap karya diarahkan untuk memberi dampak positif nyata bagi umat dan sesama.' },
    { title: 'Belajar untuk Terus Bertumbuh', desc: 'Senantiasa membuka diri pada ilmu, pengalaman baru, dan perbaikan berkelanjutan.' },
  ],
  highlights: [
    'Writer',
    'Digital Business Student',
    'Literacy Enthusiast',
    'Social Media Enthusiast',
    'Inspirational Narrator',
  ],
};

export const EDUCATION_INFO = {
  program: 'Prodi Bisnis Digital',
  university: 'Universitas Cakrawala',
  description: 'Fokus pengembangan diri pada bisnis digital, digital marketing, media sosial, strategi konten, dan literasi digital.',
  focusPillars: [
    'Bisnis Digital & Kewirausahaan Modern',
    'Digital Marketing & Search Engine Optimization (SEO)',
    'Strategi Media Sosial & Manajemen Audiens',
    'Perencanaan & Kurasi Konten Kreatif',
    'Literasi Digital & Komunikasi Naratif',
  ],
};

export const CAREER_DIRECTION = {
  summary: `Muhammad Rahmatullah ingin mengembangkan karier di bidang penulisan, literasi, komunikasi naratif, pembuatan konten, dan digital marketing. Ia ingin menghasilkan karya yang tidak hanya informatif, tetapi juga memiliki makna dan memberikan inspirasi bagi kaum muda.`,
  pillars: [
    { title: 'Penulis', desc: 'Menghasilkan buku, artikel, dan esai naratif yang menggugah kesadaran.' },
    { title: 'Literasi', desc: 'Mendorong gerakan gemar membaca, berpikir kritis, dan menulis bagi generasi muda.' },
    { title: 'Digital Content', desc: 'Memproduksi konten digital bernilai edukasi, reflektif, dan bernas di media sosial.' },
    { title: 'Digital Marketing', desc: 'Menerapkan strategi pemasaran digital organik dan performa berbasis data terukur.' },
    { title: 'Social Media Strategy', desc: 'Merancang arsitektur konten, distribusi, dan engagement komunitas yang sehat.' },
    { title: 'Storytelling & Narrative', desc: 'Menghubungkan pesan nilai moral dan inspirasi melalui kekuatan seni bercerita.' },
  ],
};

export const WORK_EXPERIENCE = {
  role: 'Staff Digital Marketing – SEO',
  company: 'Yayasan Muslim Billionaire Indonesia',
  summaryRoles: [
    'Merancang konsep dan strategi konten pra-produksi',
    'Mendukung manajemen media sosial',
    'Menyusun laporan mingguan performa media sosial',
    'Menyusun laporan bulanan performa media sosial',
    'Melakukan dokumentasi dan optimasi media sosial',
    'Mendukung kebutuhan media sosial dalam training company',
    'Mendukung kebutuhan media sosial dalam kegiatan fundraising',
  ],
  responsibilities: [
    {
      category: 'Content Planning',
      items: [
        'Menyusun konsep konten yang selaras dengan pesan lembaga',
        'Mengembangkan strategi konten pra-produksi secara terencana',
        'Menyesuaikan ide kreatif dengan kebutuhan dan tren media sosial',
      ],
    },
    {
      category: 'Social Media Management',
      items: [
        'Mendukung pengelolaan operasional harian media sosial',
        'Melakukan dokumentasi konten secara rapi dan terarsip',
        'Membantu optimasi jangkauan dan performa media sosial',
      ],
    },
    {
      category: 'Reporting & Analytics',
      items: [
        'Menyusun laporan performa mingguan secara berkala',
        'Menyusun laporan performa bulanan sebagai acuan pertumbuhan',
        'Mendukung evaluasi dan pengembangan strategi konten berikutnya',
      ],
    },
  ],
};

export const CASE_STUDY_1: CaseStudyData = {
  id: 'case-study-1',
  number: '01',
  title: 'Content Strategy & Social Media Reporting',
  subtitle: 'Studi Kasus 1 · Yayasan Muslim Billionaire Indonesia',
  focus: 'Strategi konten dan pelaporan performa media sosial untuk mendukung komunikasi digital Yayasan Muslim Billionaire Indonesia.',
  brief: 'Mengembangkan konsep konten pra-produksi dan menyusun laporan performa media sosial untuk membantu proses evaluasi serta optimasi konten.',
  process: [
    'Memahami kebutuhan dan tujuan komunikasi lembaga',
    'Mengembangkan ide serta konsep konten yang relevan',
    'Menyusun strategi pra-produksi yang terstruktur',
    'Mendukung dokumentasi konten di lapangan dan media',
    'Mengumpulkan data performa media sosial secara kuantitatif',
    'Menyusun laporan mingguan dan bulanan yang komprehensif',
  ],
  results: [
    'Tersusunnya konsep konten yang lebih terarah dan konsisten',
    'Tersedianya dokumentasi strategi pra-produksi yang rapi',
    'Tersusunnya laporan performa mingguan dan bulanan secara berkala',
    'Tersedianya bahan evaluasi data untuk pengembangan konten berikutnya',
    'Mendukung optimasi aktivitas dan interaksi media sosial',
  ],
  learnings: [
    'Pentingnya perencanaan matang sebelum tahap produksi konten dilakukan.',
    'Pentingnya dokumentasi rapi dalam pengelolaan media sosial berkelanjutan.',
    'Pentingnya data terukur untuk mengevaluasi dan meningkatkan performa konten.',
  ],
  workflowSteps: [
    'Research',
    'Content Concept',
    'Pre-Production Strategy',
    'Content Documentation',
    'Performance Reporting',
    'Evaluation & Optimization',
  ],
};

export const CASE_STUDY_2: CaseStudyData = {
  id: 'case-study-2',
  number: '02',
  title: 'Public Speaking & Event Operations',
  subtitle: 'Studi Kasus 2 · Kepemimpinan & Operasional Lapangan',
  focus: 'Pengalaman dalam public speaking, pengelolaan acara, komunikasi dengan audiens, dan koordinasi operasional kegiatan.',
  brief: 'Mengemban amanah sebagai MC di hadapan ratusan jamaah bulanan serta memimpin divisi operasional perkemahan masjid dan kegiatan sosial.',
  process: [
    'Membuka dan menutup acara secara khidmat dan komunikatif',
    'Mengatur alur rundown dan transisi acara dengan tepat waktu',
    'Menyampaikan informasi kunci dan agenda kepada para jamaah',
    'Menjaga suasana acara tetap hidup, komunikatif, dan tertib',
    'Berinteraksi secara hangat dan persuasif dengan audiens',
  ],
  results: [
    'Kelancaran rangkaian acara Pasar Bahagia dengan 500+ jamaah rutin per bulan',
    'Keberhasilan operasional lapangan pada event akbar Masjid Camp 2 di Masjid Muslim Billionaire',
    'Koordinasi yang solid antarlini operasional, logistik, dan kepemanduan',
  ],
  learnings: [
    'Kepercayaan diri lahir dari persiapan mental dan penguasaan materi yang matang.',
    'Komunikasi yang tulus dari hati mampu merangkul jamaah dari berbagai kalangan.',
    'Kepemimpinan sejati adalah kemampuan melayani dan menjaga keharmonisan tim.',
  ],
};

export const LEADERSHIP_EXPERIENCES = [
  {
    role: 'Divisi Operasional',
    context: 'Event Masjid Camp 2 di Masjid Muslim Billionaire',
    description: 'Mengelola logistik lapangan, alur kegiatan peserta, dan koordinasi teknis operasional perkemahan.',
  },
  {
    role: 'Ketua Asrama',
    context: 'Kepemimpinan Santri & Mahasiswa',
    description: 'Mengayomi kehidupan santri, menegakkan kedisiplinan harian, dan membangun suasana kekeluargaan.',
  },
  {
    role: 'Pengajar Pengabdian',
    context: 'SMP 2 Ciomas',
    description: 'Mengajar dan mendampingi siswa, menumbuhkan semangat belajar, dan menyampaikan nilai moralitas.',
  },
  {
    role: 'Pengurus Aktif OSIS',
    context: 'Tingkat SMA',
    description: 'Menginisiasi berbagai program kesiswaan, kepemimpinan, dan kegiatan keagamaan di sekolah.',
  },
  {
    role: 'Anggota Aktif Gerakan Pramuka',
    context: 'Pendidikan Karakter & Ketangkasan',
    description: 'Mengasah ketahanan mental, kepanduan lapangan, kerja sama tim, dan kepemimpinan mandiri.',
  },
];

export const CASE_STUDY_3: CaseStudyData = {
  id: 'case-study-3',
  number: '03',
  title: 'Writing, Literacy & Narrative Communication',
  subtitle: 'Studi Kasus 3 · Seni Bertutur & Literasi Bermakna',
  focus: 'Pengembangan identitas sebagai penulis dan penggiat literasi yang menyampaikan pesan inspiratif melalui tulisan dan komunikasi naratif.',
  brief: 'Mengangkat realitas kehidupan sehari-hari, perjuangan kaum muda, dan bakti keluarga menjadi tulisan reflektif yang menggetarkan pembaca.',
  process: [
    'Mengamati realitas kehidupan dan dinamika sosial secara mendalam',
    'Menggali hikmah dan nilai makna dari setiap pengalaman pribadi dan lingkungan',
    'Mengembangkan ide dasar menjadi struktur narasi yang memikat',
    'Menggunakan bahasa yang santun, indah, dan mudah dipahami',
    'Menyampaikan pesan yang relevan dan menyemangati kaum muda',
    'Menghubungkan cerita dengan nilai ketuhanan, keluarga, dan pengabdian',
  ],
  results: [
    'Lahirnya berbagai naskah cerpen, esai reflektif, dan bab naskah buku inspiratif',
    'Terbentuknya suara kepenulisan (writer voice) yang khas, hangat, dan kontemplatif',
    'Menjadi sarana dakwah bil qalam dan motivasi bagi komunitas pemuda santri',
  ],
  learnings: [
    'Tulisan yang ditulis dari hati akan sampai ke hati para pembaca.',
    'Menulis bukan sekadar menyusun kalimat indah, melainkan menabur benih kebaikan.',
  ],
};

export const WRITING_THEMES = [
  'Perjuangan hidup',
  'Kepemimpinan',
  'Nilai-nilai keluarga',
  'Pengabdian',
  'Keikhlasan',
  'Kebermanfaatan',
  'Perjalanan kaum muda',
];

export const WRITING_APPROACH_STEPS = [
  { step: '01', title: 'Mengamati Realitas', desc: 'Melihat kehidupan sehari-hari dengan empati dan kepekaan sosial.' },
  { step: '02', title: 'Menggali Makna', desc: 'Menemukan hikmah mendalam di balik setiap peristiwa dan ujian.' },
  { step: '03', title: 'Mengembangkan Narasi', desc: 'Menyusun alur cerita yang hidup dengan tokoh dan latar menyentuh.' },
  { step: '04', title: 'Bahasa Bersahabat', desc: 'Menggunakan pilihan kata yang elegan, santun, dan mudah diresapi.' },
  { step: '05', title: 'Relevansi Kaum Muda', desc: 'Menghubungkan pesan dengan kegelisahan dan mimpi generasi muda.' },
  { step: '06', title: 'Koneksi Nilai Luhur', desc: 'Menautkan cerita dengan cinta keluarga, keikhlasan, dan kebermanfaatan.' },
];

export const WRITING_WORKS: WritingWork[] = [
  {
    id: 'work-1',
    number: '01',
    title: 'Senyum Ayah di Balik Pintu yang Tertutup',
    theme: 'Nilai-Nilai Keluarga & Perjuangan Ayah',
    format: 'Cerpen Naratif Reflektif',
    summary: 'Kisah haru tentang ketabahan seorang ayah yang senantiasa menyembunyikan lelah di hadapan anak-anaknya demi masa depan keluarga.',
    excerpt: '“Suara rantai kendor dan deru knalpot motor bebek tua itu selalu berhenti di titik yang sama, tepat di samping pohon mangga depan rumah...”',
    fullExcerpt: `Suara rantai kendor dan deru knalpot motor bebek tua itu selalu berhenti di titik yang sama, tepat di samping pohon mangga depan rumah. Bunyi standar samping yang beradu dengan semen teras adalah aba-aba bagi kami anak-anaknya untuk berlari menyambutnya di depan pintu.

Wajahnya legam terpapar terik aspal ibu kota, peluhnya membasahi kerah kemeja lusuh yang kancing atasnya telah tanggal. Namun ajaibnya, begitu pandangan matanya bertemu dengan kami, tak pernah sedetik pun kerutan letih itu tampak. Yang selalu hadir adalah senyum simpul yang lebar—senyum yang menenangkan badai di dalam dada kami.

Di balik pintu kamarnya yang tertutup rapat seusai magrib, barulah suara rintihan tertahan itu terdengar lamat-lamat. Punggungnya yang kian membungkuk menanggung beban seisi rumah tanpa pernah sekalipun meminta iba. Dari beliau aku belajar: kasih sayang terbesar seorang ayah bukanlah pada kata-kata manis, melainkan pada tetes keringat yang diikhlaskan tanpa pernah dihitung kembali.`,
    accentColor: '#34D399',
  },
  {
    id: 'work-2',
    number: '02',
    title: 'BERPAMIT MENERJANG SAMUDRA LAUTAN ILMU',
    theme: 'Pengabdian, Santri & Perjalanan Kaum Muda',
    format: 'Naskah Buku & Cerita Inspiratif (BAB 1)',
    summary: 'Catatan perjalanan santri Pondok CEO di lingkungan Masjid Muslim Billionaire, menapaki jalan penempaan diri, doa orang tua, dan tekad menebar manfaat.',
    excerpt: '“BAB 1: Di Ujung Dermaga, Merawat Api yang Tersisa — Hawa dingin sepertiga malam itu menusuk sampai ke tulang...”',
    fullExcerpt: `BAB 1: Di Ujung Dermaga, Merawat Api yang Tersisa

Hawa dingin sepertiga malam itu menusuk sampai ke tulang, tetapi di serambi masjid ini, puluhan pemuda masih bersujud dengan derai air mata yang tak sanggup dibendung. Di sinilah kami—para santri yang memilih meninggalkan kenyamanan kamar masa kecil demi menempa diri di lingkungan Masjid Muslim Billionaire.

Berpamitan dengan ibunda di stasiun kala itu bukanlah perpisahan yang mudah. Tangan renta itu menggenggam jemariku begitu erat, seakan takut melepaskan anak lelakinya ke rimba raya. Namun doa yang dibisikkannya di telingaku menjadi jimat yang abadi: "Pergilah anakku, tuntutlah ilmu setinggi langit, jadilah manusia yang berguna bagi orang banyak, dan jangan pernah lupa bersujud."

Kini, setiap bait Al-Qur'an yang dilantunkan, setiap baris kode dan strategi bisnis digital yang dipelajari, bukan lagi sekadar demi mengejar titel duniawi. Ini adalah ikhtiar melunasi air mata ibu, menjadi benteng kebaikan bagi kaum muda, dan membuktikan bahwa anak santri mampu berdiri tegak memimpin peradaban.`,
    accentColor: '#D4AF37',
  },
  {
    id: 'work-3',
    number: '03',
    title: '100 HARI BAPAK',
    theme: 'Perjuangan Hidup, Ketabahan & Kerinduan',
    format: 'Catatan Naratif Reflektif',
    summary: 'Refleksi mendalam tentang kepergian sosok panutan, bagaimana kerinduan diolah menjadi doa yang mengalir dan karya yang tidak pernah padam.',
    excerpt: '“Ada tulisan yang baru berani saya tulis setelah sekian lama. Bukan karena saya lupa, justru karena terlalu banyak yang masih saya ingat...”',
    fullExcerpt: `Ada tulisan yang baru berani saya tulis setelah sekian lama. Bukan karena saya lupa, justru karena terlalu banyak yang masih saya ingat—begitu tajam, begitu nyata, hingga setiap kali jemari ini menyentuh tuts kibor, dada ini mendadak sesak.

Seratus hari telah berlalu sejak tanah merah itu merangkul raga Bapak untuk selama-lamanya. Rumah terasa lebih lengang, suara dehaman khasnya di pagi hari telah berganti sunyi, dan sajadah di sudut kamar masih menyimpan wangi minyak wangi kesukaannya.

Kehilangan sosok Bapak mengajarkanku satu hakikat penting tentang kehidupan: bahwa umur biologis manusia boleh saja terputus, namun nilai kebaikan, kejujuran, dan kehormatan yang ia tanamkan akan tetap hidup di dalam denyut nadi anak-anaknya. Kini aku menulis bukan lagi untuk meratapi kehilangan, melainkan untuk menjaga api keteladanannya tetap menyala. Semoga setiap kata yang tertulis, setiap manfaat yang ditebarkan, menjadi aliran pahala yang menerangi peristirahatan Bapak di sisi-Nya.`,
    accentColor: '#52D6A4',
  },
];

export const SKILLS_CATEGORIES: SkillCategoryGroup[] = [
  {
    title: 'Creative & Communication',
    description: 'Seni bertutur, komunikasi naratif, dan penguasaan panggung yang menginspirasi audiens.',
    skills: [
      'Creative Writing',
      'Storytelling',
      'Narrative Communication',
      'Public Speaking',
      'Literacy Content',
      'Audience Engagement',
      'Presentation & Moderating',
    ],
  },
  {
    title: 'Digital & Content',
    description: 'Perencanaan konten strategis, optimasi mesin pencari, dan analitik media sosial.',
    skills: [
      'Content Planning',
      'Digital Marketing',
      'Search Engine Optimization (SEO)',
      'Social Media Strategy',
      'Social Media Analytics & Reporting',
      'Basic Editing & Visual Curation',
    ],
  },
  {
    title: 'Professional & Values',
    description: 'Integritas kerja, kepemimpinan tim, serta etika tanggung jawab dan pembelajar sejati.',
    skills: [
      'Research & Data Entry',
      'Documentation',
      'Event Operations',
      'Time Management',
      'Team Collaboration',
      'Responsibility & Discipline',
      'Continuous Learning',
    ],
  },
];

export const TOOLS_LIST: ToolItem[] = [
  {
    name: 'CapCut',
    category: 'Video Editing',
    description: 'Editing video kreatif, penataan transisi, dan produksi konten reels/shorts media sosial.',
    badge: 'Video Production',
  },
  {
    name: 'Google Sheets',
    category: 'Analytics & Data',
    description: 'Penyusunan spreadsheet data, pelaporan performa mingguan/bulanan, dan matriks pertumbuhan.',
    badge: 'Data & Reporting',
  },
  {
    name: 'Google Docs',
    category: 'Writing & Concept',
    description: 'Penulisan naskah cerpen, perumusan ide cerita inspiratif, dan penyusunan draf konten.',
    badge: 'Manuscript & Notes',
  },
  {
    name: 'Google Drive',
    category: 'Cloud Storage',
    description: 'Arsip cloud kolaboratif, pengorganisasian folder dokumentasi kegiatan, dan materi publikasi.',
    badge: 'Cloud Archiving',
  },
  {
    name: 'WordPress (Wepres)',
    category: 'CMS & Website',
    description: 'Publikasi artikel daring, manajemen konten website, dan optimasi tata letak blog.',
    badge: 'Web Publishing',
  },
  {
    name: 'Blog / Blogger',
    category: 'Literacy Platform',
    description: 'Media penerbitan opini, tulisan reflektif berkala, dan esai literasi digital.',
    badge: 'Article Publishing',
  },
];

export const WORKING_APPROACH = [
  { step: '01', name: 'Research', desc: 'Riset tren, audiens, dan penggalian tema naratif yang berbobot.' },
  { step: '02', name: 'Planning', desc: 'Perencanaan konsep, outline naskah, dan strategi pra-produksi.' },
  { step: '03', name: 'Creating', desc: 'Proses penulisan kreatif dan pembuatan konten yang otentik.' },
  { step: '04', name: 'Documenting', desc: 'Dokumentasi arsip terstruktur dan penataan materi terorganisir.' },
  { step: '05', name: 'Evaluating', desc: 'Analisis performa data, keterbacaan, dan respon dari audiens.' },
  { step: '06', name: 'Improving', desc: 'Iterasi penyempurnaan karya dan pembaruan strategi secara berkelanjutan.' },
];
