import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Calendar, Clock, MapPin, Phone, Instagram, 
  CheckCircle, ArrowRight, User, Menu, X, 
  Users, Sparkles, BookMarked, MessageCircle, ChevronRight,
  GraduationCap, Award, PlayCircle
} from 'lucide-react';
import Lightbox from './ui/Lightbox';

// --- Constants & Data ---
const WA_NUMBER = "6285697060001";
const WA_MESSAGE = encodeURIComponent("Assalamu'alaikum, saya ingin mendaftar Bimbingan Tahsin Al-Qur'an Al Kosasiyah YAPIDSA.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const schedules = [
  {
    age: "Usia Kelas 1-6 SD/MI",
    options: [
      { days: "Senin, Rabu, Jum'at", time: "15.30 - 17.30 WIB" },
      { days: "Selasa & Kamis", time: "15.30 - 17.30 WIB" }
    ],
    icon: <Users className="w-6 h-6 text-teal-600" />,
    color: "bg-teal-50"
  },
  {
    age: "SMP/MTS, SMA/MA & Dewasa",
    options: [
      { days: "Senin, Selasa, Rabu", time: "18.30 - 20.30 WIB" }
    ],
    icon: <BookOpen className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50"
  },
  {
    age: "Dewasa & Orang Tua",
    options: [
      { days: "Selasa", time: "13.00 - 15.00 WIB" }
    ],
    icon: <User className="w-6 h-6 text-teal-600" />,
    color: "bg-teal-50"
  },
  {
    age: "Khusus Mahasiswa/Dewasa",
    options: [
      { days: "Ahad", time: "14.00 - 16.00 WIB" }
    ],
    icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50"
  }
];

const networks = [
  { name: "Pusat Al Utsmani", handle: "@alutsmani" },
  { name: "Cabang Dukuh", handle: "@alutsmani_dukuh" }
];

const mainActivities = [
  {
    title: "Pembagian Raport Kenaikan Level",
    image: "/images/kegiatan/kegiatan-5.jpeg",
    icon: <BookMarked className="w-5 h-5" />
  },
  {
    title: "3 Besar Juara Kelas",
    image: "/images/kegiatan/kegiatan-6.jpeg",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "Ujian Kenaikan Level",
    image: "/images/kegiatan/kegiatan-9.jpeg",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    title: "Tahsin Harian",
    image: "/images/kegiatan/kegiatan-13.jpeg",
    icon: <PlayCircle className="w-5 h-5" />
  }
];

const otherActivities = [1, 2, 3, 4, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(num => ({
  title: "Dokumentasi Kegiatan",
  image: `/images/kegiatan/kegiatan-${num}.jpeg`,
  icon: <Sparkles className="w-5 h-5" />
}));

const maulidActivities = [1, 2, 3, 4].map(num => ({
  title: "Maulid Nabi Muhammad SAW",
  image: `/images/kegiatan/maulid-nabi-${num}.jpeg`,
  icon: <Sparkles className="w-5 h-5" />
}));

const musolaActivities = [
  {
    title: "Musola Tempat Belajar Tahsin",
    image: "/images/kegiatan/musola-tahsin.jpeg",
    icon: <Sparkles className="w-5 h-5" />
  }
];

const ppdbActivities = [1, 2].map(num => ({
  title: "PPDB (Penerimaan Peserta Didik Baru)",
  image: `/images/kegiatan/ppdb-${num}.jpeg`,
  icon: <Sparkles className="w-5 h-5" />
}));

const posterPpdbActivities = [
  {
    title: "Poster PPDB Terbaru",
    image: "/images/kegiatan/poster-ppdb-terbaru.jpeg",
    icon: <Sparkles className="w-5 h-5" />
  }
];

const allActivities = [...mainActivities, ...otherActivities, ...maulidActivities, ...musolaActivities, ...ppdbActivities, ...posterPpdbActivities];

// --- Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// --- Main Component ---
export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [profilImageIndex, setProfilImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const displayedActivities = showAllActivities ? allActivities : mainActivities;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Interval for profile image slideshow
    const imageInterval = setInterval(() => {
      setProfilImageIndex(prev => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-teal-200 selection:text-teal-900">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-full p-1 shadow-sm flex items-center justify-center shrink-0">
              <img src="/images/logo/logo-tahsin.png" alt="Logo Tahsin YAPIDSA" className="w-full h-full object-contain rounded-full" />
            </div>
            
            <div className={`font-bold text-lg leading-tight text-center ${isScrolled ? 'text-teal-900' : 'text-white'}`}>
              <span className="block">Al Kosasiyah</span>
              <span className="block text-xs font-medium opacity-80">YAPIDSA</span>
            </div>

            <div className="w-14 h-14 bg-white rounded-full p-1 shadow-sm flex items-center justify-center shrink-0">
              <img src="/images/logo/logo-yayasan.jpeg" alt="Logo Yayasan YAPIDSA" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#program" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>Program</a>
            <a href="#jadwal" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>Jadwal</a>
            <a href="#kegiatan" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>Kegiatan</a>
            <a href="#profil" className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}>Profil</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="bg-amber-500 hover:bg-amber-400 text-teal-950 px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5">
              Daftar Sekarang
            </a>
          </div>

          <button id="mobile-menu-open" name="mobile-menu-open" type="button" aria-expanded={mobileMenuOpen} aria-label="Buka Menu Navigasi" className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-800' : 'text-white'}`} onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="p-5 flex justify-between items-center border-b border-slate-100">
              <div className="font-bold text-lg text-teal-900">Al Kosasiyah Yapidsa</div>
              <button id="mobile-menu-close" name="mobile-menu-close" type="button" aria-label="Tutup Menu Navigasi" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 text-slate-600 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-6 text-lg font-medium text-slate-800">
              <a href="#program" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3"><BookOpen className="w-5 h-5 text-teal-600"/> Program</a>
              <a href="#jadwal" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3"><Calendar className="w-5 h-5 text-teal-600"/> Jadwal</a>
              <a href="#kegiatan" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3"><Users className="w-5 h-5 text-teal-600"/> Kegiatan</a>
              <a href="#profil" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3"><User className="w-5 h-5 text-teal-600"/> Profil Pengajar</a>
            </div>
            <div className="mt-auto p-6">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-teal-600/20">
                <MessageCircle className="w-6 h-6" /> Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-teal-900 overflow-hidden text-white">
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-800 via-teal-900 to-teal-950"></div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full border-[40px] border-white/5 opacity-50" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] -left-[20%] w-[600px] h-[600px] rounded-full border-[20px] border-amber-500/10 opacity-50" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex flex-col sm:flex-row items-center gap-2 mb-6">
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
                Penerimaan Santri Baru Tahun Ajaran 2026-2027
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" /> Daftar Gratis 2026
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Yuk Daftar...! <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Bimbingan Tahsin Al-Qur&apos;an
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-teal-50/80 mb-10 leading-relaxed font-light">
              &quot;Tempat Ngaji Qur&apos;an Mudah, Cepat, dan Menyenangkan.&quot; <br className="hidden md:block"/>
              Diselenggarakan oleh Yayasan Persaudaraan Islam Darussalam (YAPIDSA).
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-teal-950 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                Daftar Sekarang <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#program" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                Pelajari Metode Utsmani
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlight/Pricing Banner */}
      <section className="relative -mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 lg:p-10 shadow-2xl shadow-teal-900/10 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Mulai Belajar</p>
              <p className="text-2xl font-extrabold text-slate-800">15 Juli 2026</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-slate-200"></div>
          <div className="flex items-center gap-5 w-full md:w-auto bg-amber-50 p-4 rounded-2xl border border-amber-100 md:border-none md:bg-transparent md:p-0">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
              <BookMarked className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-1">Infaq Sangat Terjangkau</p>
              <p className="text-3xl font-extrabold text-slate-800">Rp 25.000 <span className="text-lg font-medium text-slate-500">/ bulan</span></p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Program / Metode */}
      <section id="program" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute inset-0 bg-teal-200 rounded-[3rem] transform -rotate-3 scale-[1.02] -z-10"></div>
              <img 
                src="/images/kegiatan/kegiatan-5.jpeg" 
                alt="Metode Utsmani" 
                className="rounded-[3rem] shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-6 h-6 text-teal-500" />
                  <span className="font-bold text-slate-800">Terbukti Efektif</span>
                </div>
                <p className="text-sm text-slate-500">Ribuan santri telah berhasil membaca Al-Qur&apos;an dengan tartil.</p>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2"
            >
              <motion.span variants={fadeUp} className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                Keunggulan & Metode
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-teal-950 mb-6 leading-tight">
                Metode Pembelajaran <span className="text-teal-600">Al Utsmani</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                Metode Utsmani dirancang khusus agar proses belajar membaca Al-Qur&apos;an menjadi pengalaman yang menyenangkan, mudah dipahami, dan cepat dikuasai. Kami memiliki program spesifik yaitu <strong>Utsmani Anak</strong> dan <strong>Utsmani Dewasa</strong> yang disesuaikan dengan kebutuhan setiap usia.
              </motion.p>
              
              <div className="space-y-4 mb-8">
                {['Mudah dipelajari untuk pemula', 'Cepat menguasai tajwid dasar', 'Tersedia buku panduan khusus Anak dan Dewasa', 'Sistem berjenjang yang jelas (Mustawa)'].map((item, i) => (
                  <motion.div variants={fadeUp} key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Buku Panduan */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-teal-950 mb-4">Buku Panduan Metode Utsmani</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Kami menggunakan buku panduan resmi dari pusat Al Utsmani untuk kelas anak, dewasa, dan talaqqi.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-teal-900/5 border border-slate-100 flex flex-col items-center group hover:shadow-xl transition-all"
              >
                <div className="w-full h-80 rounded-2xl overflow-hidden mb-6 bg-slate-50 flex items-center justify-center p-4">
                  <img src="/images/buku/buku-utsmani-anak.jpeg" alt="Buku Utsmani Anak Jilid 1-3" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                </div>
                <h4 className="font-bold text-xl text-teal-900 mb-2">Buku Utsmani Anak</h4>
                <p className="text-slate-500 text-center">Jilid 1 - 3</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-teal-900/5 border border-slate-100 flex flex-col items-center group hover:shadow-xl transition-all"
              >
                <div className="w-full h-80 rounded-2xl overflow-hidden mb-6 bg-slate-50 flex items-center justify-center p-4">
                  <img src="/images/buku/buku-utsmani-dewasa.jpeg" alt="Buku Utsmani Dewasa Jilid 1-3" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                </div>
                <h4 className="font-bold text-xl text-teal-900 mb-2">Buku Utsmani Dewasa</h4>
                <p className="text-slate-500 text-center">Jilid 1 - 3</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-teal-900/5 border border-slate-100 flex flex-col items-center group hover:shadow-xl transition-all"
              >
                <div className="w-full h-80 rounded-2xl overflow-hidden mb-6 bg-slate-50 flex items-center justify-center p-4">
                  <img src="/images/buku/buku-utsmani-talaqqi.jpeg" alt="Buku Utsmani Talaqqi" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                </div>
                <h4 className="font-bold text-xl text-teal-900 mb-2">Buku Utsmani Talaqqi</h4>
                <p className="text-slate-500 text-center">Karya KH. Efendi Anwar, Lc., Al Hafizh</p>
              </motion.div>
            </div>
          </div>

          {/* Tahapan Kelas (Mustawa) */}
          <div className="mt-24 pt-16 border-t border-slate-200 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-6">
              <Award className="w-10 h-10 text-amber-500" />
            </div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-teal-950 mb-4">Tahapan Kelas (Mustawa)</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Sistem pembelajaran berjenjang untuk memastikan penguasaan materi yang optimal dari dasar hingga mahir.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {[
                { name: "Mustawa I'dad", color: "bg-teal-50 text-teal-700 border-teal-200" },
                { name: "Mustawa 1", color: "bg-white text-slate-700 border-slate-200" },
                { name: "Mustawa 2", color: "bg-white text-slate-700 border-slate-200" },
                { name: "Mustawa 3", color: "bg-white text-slate-700 border-slate-200" },
                { name: "Mustawa 4", color: "bg-white text-slate-700 border-slate-200" },
                { name: "Mustawa 5", color: "bg-white text-slate-700 border-slate-200" },
                { name: "Mustawa Talaqqi", color: "bg-amber-50 text-amber-700 border-amber-200" }
              ].map((mustawa, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`px-6 py-4 rounded-2xl border-2 font-bold shadow-sm ${mustawa.color} flex items-center gap-3`}
                >
                  <span className="w-6 h-6 rounded-full bg-white/50 flex items-center justify-center text-sm">{i+1}</span>
                  {mustawa.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedules */}
      <section id="jadwal" className="py-24 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-950 mb-4">Pilihan Waktu Belajar</h2>
            <p className="text-slate-600 text-lg">Sesuaikan jadwal belajar dengan rutinitas Anda. Kami menyediakan berbagai pilihan waktu untuk semua kelompok usia.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedules.map((schedule, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100 border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all group flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${schedule.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {schedule.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-4 h-14 flex items-center justify-center">{schedule.age}</h3>
                <div className="w-full h-px bg-slate-100 mb-5"></div>
                <div className="space-y-4 w-full">
                  {schedule.options.map((opt, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center gap-2 text-slate-700 font-semibold">
                        <Calendar className="w-4 h-4 text-amber-500" /> {opt.days}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" /> {opt.time}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Kegiatan */}
      <section id="kegiatan" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Dokumentasi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-950 mb-4">Kegiatan Al Kosasiyah</h2>
            <p className="text-slate-600 text-lg">Potret semangat belajar santri Bimbingan Tahsin Al-Qur&apos;an YAPIDSA.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {displayedActivities.map((item, index) => (
                <motion.div 
                  key={item.image}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: (index % 4) * 0.1 }}
                  onClick={() => setSelectedImage(item.image)}
                  className="group relative rounded-3xl overflow-hidden shadow-md cursor-pointer h-80"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button 
              id="toggle-activities"
              name="toggle-activities"
              type="button"
              aria-label="Toggle Dokumentasi Kegiatan"
              onClick={() => setShowAllActivities(!showAllActivities)}
              className="px-8 py-3 bg-white border border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 rounded-full font-semibold transition-all shadow-sm flex items-center gap-2 mx-auto"
            >
              <Sparkles className="w-5 h-5" />
              {showAllActivities ? "Tutup Galeri" : "Lihat Dokumentasi Lainnya"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Instructor Profile */}
      <section id="profil" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 lg:p-16 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <span className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-4 block">Tentang YAPIDSA</span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Yayasan Persaudaraan Islam Darussalam</h2>
                
                <div className="bg-white/10 border border-white/20 p-6 rounded-3xl mb-8 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                    <div className="w-48 md:w-56 rounded-2xl overflow-hidden shrink-0 border-4 border-teal-700 bg-white flex items-center justify-center p-2">
                      <img src="/images/profil/tahun-berdiri.jpeg" alt="Tahun Berdiri YAPIDSA" className="w-full h-auto object-contain rounded-xl" />
                    </div>
                    <div>
                      <p className="text-teal-50/90 text-lg leading-relaxed">
                        Yayasan Persaudaraan Islam Darussalam (YAPIDSA) telah mendedikasikan diri untuk membina generasi qur&apos;ani yang unggul. Di bawah naungan yayasan ini, Bimbingan Tahsin Al-Qur&apos;an Al Kosasiyah hadir untuk masyarakat luas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6 mt-6">
                  <span className="text-teal-300 font-bold uppercase text-sm mb-2 block">Profil Pengajar Utama</span>
                  <h3 className="text-2xl font-bold mb-2">Dida Nursida, S.Pd.I., M.Pd.</h3>
                  <p className="text-teal-50/80 mb-6">Berpengalaman dalam membimbing bacaan Al-Qur&apos;an dengan sabar dan metode yang terstruktur.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://instagram.com/dida_nursida" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full transition-colors backdrop-blur-sm">
                      <Instagram className="w-5 h-5 text-pink-400" />
                      <span className="font-semibold">@dida_nursida</span>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-end mt-10 md:mt-0"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  <div className="absolute inset-0 border-2 border-amber-400/50 rounded-full translate-x-4 translate-y-4"></div>
                  <div className="absolute inset-0 bg-teal-800 rounded-full border-4 border-teal-700 flex items-center justify-center overflow-hidden z-10 shadow-2xl">
                    <AnimatePresence>
                      <motion.img 
                        key={profilImageIndex}
                        src={profilImageIndex === 0 ? "/images/profil/dida-nursida-1.jpeg" : "/images/profil/dida-nursida-2.jpeg"}
                        alt="Dida Nursida, S.Pd.I., M.Pd." 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full object-cover" 
                      />
                    </AnimatePresence>
                  </div>
                  <div className="absolute top-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-xl z-20 flex items-center gap-2 border border-slate-100">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="font-bold text-slate-800 text-sm">Bersertifikasi</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Musyrif & Musyrifah */}
          <div className="mt-20 border-t border-slate-200 pt-16">
            <div className="text-center mb-12">
              <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2 block">Pembimbing Tahsin</span>
              <h3 className="text-2xl md:text-3xl font-bold text-teal-950 mb-4">Musyrif & Musyrifah</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Para pembimbing yang siap mendampingi dan membimbing santri dalam belajar membaca Al-Qur&apos;an.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-teal-50 rounded-[3rem] p-8 lg:p-12 border border-teal-100 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-teal-200 bg-white flex items-center justify-center p-1">
                      <img src="/images/profil/musyrif-musyrifah.jpeg" alt="Musyrif dan Musyrifah Tahsin Al Kosasiyah" className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-teal-900 mb-6">Tim Pembimbing Al Kosasiyah</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-teal-100">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                          <User className="w-5 h-5 text-teal-700" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Ustadz Dwi Wahyu, S.Pd.</p>
                          <p className="text-sm text-slate-500">Musyrif Tahsin</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-teal-100">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                          <User className="w-5 h-5 text-teal-700" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Ustadzah Fitria Nursa'ada</p>
                          <p className="text-sm text-slate-500">Musyrifah Tahsin</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-teal-100">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                          <User className="w-5 h-5 text-teal-700" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">Ustadzah Putri Ziya Mada Zilfa</p>
                          <p className="text-sm text-slate-500">Musyrifah Tahsin</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Perjalanan Belajar */}
          <div className="mt-20 border-t border-slate-200 pt-16">
            <div className="text-center mb-10">
              <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2 block">Dokumentasi Pengajar</span>
              <h3 className="text-2xl md:text-3xl font-bold text-teal-950 mb-4">Perjalanan Belajar Tahsin</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Dedikasi dan semangat belajar pengajar utama dalam memperdalam ilmu bacaan Al-Qur&apos;an secara offline maupun online.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { image: '/images/perjalanan/offline-1.jpeg', type: 'Offline' },
                { image: '/images/perjalanan/offline-2.jpeg', type: 'Offline' },
                { image: '/images/perjalanan/offline-3.jpeg', type: 'Offline' },
                { image: '/images/perjalanan/offline-4.jpeg', type: 'Offline' },
                { image: '/images/perjalanan/offline-5.jpeg', type: 'Offline' },
                { image: '/images/perjalanan/offline-6.jpeg', type: 'Offline' },
                { image: '/images/perjalanan/online-1.jpeg', type: 'Online' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedImage(item.image)}
                  className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all h-48 md:h-64 bg-slate-100 cursor-pointer"
                >
                  <img src={item.image} alt={`Perjalanan Belajar ${item.type}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-800 shadow-sm border border-slate-100">
                    {item.type}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-10">Terafiliasi dengan Jaringan Al Utsmani</h3>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {networks.map((net, i) => (
              <motion.a 
                href={`https://instagram.com/${net.handle.replace('@','')}`}
                target="_blank"
                rel="noreferrer"
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase">{net.name}</p>
                  <p className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">{net.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <footer className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-900/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8">
            <div className="md:col-span-5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full p-1.5 flex items-center justify-center shrink-0">
                  <img src="/images/logo/logo-tahsin.png" alt="Logo Tahsin YAPIDSA" className="w-full h-full object-contain rounded-full" />
                </div>
                
                <div className="font-bold text-xl text-white leading-tight text-center">
                  <span className="block">Al Kosasiyah</span>
                  <span className="block text-sm font-medium text-teal-400">YAPIDSA</span>
                </div>

                <div className="w-16 h-16 bg-white rounded-full p-1.5 flex items-center justify-center shrink-0">
                  <img src="/images/logo/logo-yayasan.jpeg" alt="Logo Yayasan YAPIDSA" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              <p className="text-slate-400 mb-8 max-w-sm mx-auto md:mx-0 leading-relaxed">
                Menyediakan bimbingan membaca Al-Qur&apos;an dengan metode Utsmani yang terbukti mudah, cepat, dan menyenangkan untuk segala usia.
              </p>
            </div>
            
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-white font-bold text-lg mb-6 flex items-center justify-center md:justify-start gap-2"><MapPin className="w-5 h-5 text-teal-500"/> Lokasi Belajar</h4>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Gang KUD, Kp. Batukembar<br/>
                  RT 06/07 Ds. Ciderum,<br/>
                  Kec. Caringin, Kab. Bogor.
                </p>
                <div className="w-full max-w-sm h-48 rounded-xl overflow-hidden border border-slate-700/50 mb-4 bg-slate-800">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.776633390885!2d106.8442357750868!3d-6.693984593301032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c9006a5f7031%3A0x7051673b406a4562!2sTAHSIN%20AL-QUR'AN%20AL%20KOSASIYAH%20YAPIDSA!5e0!3m2!1sen!2sid!4v1714479532185!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Tahsin Al Kosasiyah"
                  ></iframe>
                </div>
                <a href="https://www.google.com/maps/place/TAHSIN+AL-QUR'AN+AL+KOSASIYAH+YAPIDSA/@-6.6939899,106.8468107,726m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69c9006a5f7031:0x7051673b406a4562!8m2!3d-6.6939899!4d106.8468107!16s%2Fg%2F11n4v_nfrp?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center md:justify-start gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                  Buka di Google Maps <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-white font-bold text-lg mb-6 flex items-center justify-center md:justify-start gap-2"><Phone className="w-5 h-5 text-teal-500"/> Hubungi Kami</h4>
                <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                  <li>
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-slate-400 hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp: 0856-9706-0001
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/dida_nursida" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-slate-400 hover:text-white transition-colors">
                      <Instagram className="w-5 h-5 text-pink-500" /> IG: @dida_nursida
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="flex flex-col gap-1.5 items-center md:items-start">
              <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Bimbingan Tahsin Al Kosasiyah YAPIDSA. All rights reserved.</p>
              <p className="text-slate-600 text-xs">Website developed by <a href="https://wa.me/6283819802939" target="_blank" rel="noreferrer" className="hover:text-teal-500 transition-colors">Rizkiansyah Alfin</a></p>
            </div>
            <p className="text-slate-500 text-sm">Metode Pembelajaran oleh <span className="font-semibold text-teal-400">Al Utsmani</span></p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 1 }}
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
      {/* Lightbox for Images */}
      <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}