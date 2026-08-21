import React from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Merhaba, AQUATÜRK su arıtma sistemleri hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905464041375?text=${text}`, '_blank');
  };

  return (
    <section id="anasayfa" className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Top Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          
          {/* Main Hero Bento Card (Col 8) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden shadow-sm border border-blue-50">
            <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {"★".repeat(5)}
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">
                  5.0 Google Puanı • 58 Yorum • Küçükçekmece
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] leading-[1.15]">
                Eviniz ve İş Yeriniz İçin <br className="hidden sm:inline" />
                <span className="text-[#3b82f6] underline decoration-blue-200 underline-offset-4">Güvenilir Su</span> Çözümleri
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                AQUATÜRK SU ARITMA SİSTEMLERİ olarak kaliteli su arıtma sistemlerini profesyonel montaj, titiz işçilik ve satış sonrası hızlı servis anlayışıyla sunuyoruz. Temiz su, sağlıklı gelecek.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="tel:05464041375"
                  className="bg-[#1e3a8a] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-blue-200 hover:scale-105 transition-transform text-center"
                >
                  Hemen Ara: 0546 404 13 75
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>WhatsApp'tan Bilgi Al</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column Bento Cards (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* Rating Bento Card */}
            <div className="flex-1 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex justify-between items-start relative z-10">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                  <div className="w-7 h-7 border-2 border-white rounded-md flex items-center justify-center font-bold text-xs">5.0</div>
                </div>
                <span className="text-[11px] font-bold bg-white/25 px-3 py-1 rounded-full uppercase tracking-wider">
                  Tam Memnuniyet
                </span>
              </div>
              <div className="relative z-10 mt-6">
                <div className="text-4xl font-black mb-1">5.0 / 5</div>
                <p className="text-sm text-blue-100 opacity-90">Google (58 Yorum) & Local Rehber (35 Yorum) Onaylı</p>
              </div>
            </div>

            {/* Technician Review Bento Card */}
            <div className="flex-1 bg-white rounded-3xl p-6 flex flex-col justify-between border border-blue-50 shadow-sm relative overflow-hidden">
              <div className="flex flex-col mb-4">
                <span className="text-[10px] font-bold text-[#3b82f6] uppercase tracking-widest mb-1">Uzman Görüşü</span>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "Usta ellerde titiz çalışma, zamanında servis ve güvenilir esnaflık anlayışı."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-[#1e3a8a] text-sm">
                  Cİ
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1e3a8a]">Cengiz İlhan</span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Teknik Uzman & Kurucu</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bento Grid Features / Quick Highlights Bar (Col 12 row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm group hover:border-blue-200 transition-colors flex flex-col justify-between">
            <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b82f6] group-hover:bg-[#1e3a8a] group-hover:text-white transition-all font-bold">01</div>
            <div className="mt-4">
              <h4 className="font-bold text-[#1e3a8a] text-base">Evsel Arıtma</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase font-semibold">Mutfak & İçme Suyu</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm group hover:border-blue-200 transition-colors flex flex-col justify-between">
            <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b82f6] group-hover:bg-[#1e3a8a] group-hover:text-white transition-all font-bold">02</div>
            <div className="mt-4">
              <h4 className="font-bold text-[#1e3a8a] text-base">Endüstriyel</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase font-semibold">İşletmeler İçin Çözüm</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm group hover:border-blue-200 transition-colors flex flex-col justify-between">
            <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#3b82f6] group-hover:bg-[#1e3a8a] group-hover:text-white transition-all font-bold">03</div>
            <div className="mt-4">
              <h4 className="font-bold text-[#1e3a8a] text-base">Filtre Değişimi</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase font-semibold">Düzenli Bakım & Servis</p>
            </div>
          </div>

          <div className="bg-[#1e3a8a] p-6 rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden text-white">
            <div className="absolute right-[-10%] bottom-[-10%] w-24 h-24 bg-white/5 rounded-full"></div>
            <div>
              <h4 className="font-bold text-base">Servis Bölgesi</h4>
              <p className="text-xs text-blue-200 mt-1 leading-relaxed">Küçükçekmece, Halkalı ve Tüm İstanbul.</p>
            </div>
            <div className="flex items-center text-white text-[11px] font-bold mt-4 pt-3 border-t border-white/10">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              HIZLI TEKNİK SERVİS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
