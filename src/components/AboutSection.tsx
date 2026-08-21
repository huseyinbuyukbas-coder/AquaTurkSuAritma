import React from 'react';
import { Shield, CheckCircle, Wrench, Sparkles, MapPin, Phone } from 'lucide-react';

interface AboutSectionProps {
  onOpenInquiry: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-[#F0F5FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1e3a8a] text-xs font-bold uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-3">
            Hakkımızda
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
            Su Arıtma Sistemlerinde Güvenilir Çözüm Ortağınız
          </h2>
          <div className="w-16 h-1 bg-[#3b82f6] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bento Card (Col 6) */}
          <div className="lg:col-span-6 bg-[#1e3a8a] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-semibold backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5" />
                <span>Halkalı Merkez, Küçükçekmece / İstanbul</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Kaliteli Su, Titiz İşçilik ve Güvenilir Esnaflık
              </h3>

              <p className="text-blue-100 text-base leading-relaxed opacity-90">
                AQUATÜRK SU ARITMA SİSTEMLERİ olarak evsel ve endüstriyel arıtma sistemlerinde kaliteli ürünler ve profesyonel hizmet anlayışıyla Halkalı ve tüm İstanbul'a hızlı çözümler sunmaktayız.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                <span className="text-3xl font-black text-amber-300">58+</span>
                <p className="text-xs text-blue-100 mt-1">Google Yorumu (5.0 Puan)</p>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                <span className="text-3xl font-black text-emerald-300">35+</span>
                <p className="text-xs text-blue-100 mt-1">Local Rehber Yorumu</p>
              </div>
            </div>
          </div>

          {/* Right Bento Grid Stack (Col 6) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-50">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                İşimizin merkezinde yalnızca cihaz satışı değil; doğru ürünü belirlemek, profesyonel montaj yapmak ve satış sonrasında müşterimizin yanında olmak vardır.
              </p>
              <div className="p-4 rounded-2xl bg-blue-50/80 border-l-4 border-[#1e3a8a] text-[#1e3a8a] font-bold text-sm sm:text-base italic">
                "Müşteri yorumlarımızda özellikle temiz işçilik, zamanında servis, ürün kalitesi ve Cengiz Bey'in uzmanlığı sıkça vurgulanmaktadır."
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm flex flex-col justify-between">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#3b82f6] flex items-center justify-center font-bold mb-4">✓</div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a] text-base mb-1">Doğru Ürün</h4>
                  <p className="text-xs text-slate-500">İhtiyacınıza en uygun evsel veya endüstriyel arıtma.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm flex flex-col justify-between">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#3b82f6] flex items-center justify-center font-bold mb-4">✓</div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a] text-base mb-1">Titiz İşçilik</h4>
                  <p className="text-xs text-slate-500">Evinizi kirletmeden özenli ve temiz montaj.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
