import React from 'react';
import { Award, CheckCircle, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface TechnicianSectionProps {
  onOpenInquiry: (service?: string) => void;
}

export const TechnicianSection: React.FC<TechnicianSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-20 bg-[#F0F5FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Highlight / Master Profile card */}
            <div className="lg:col-span-5">
              <div className="bg-[#1e3a8a] rounded-3xl p-8 text-white text-center relative overflow-hidden shadow-xl">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="w-20 h-20 rounded-2xl bg-white/10 text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                  Cİ
                </div>

                <h3 className="text-2xl font-black text-white mb-1">Cengiz İlhan</h3>
                <span className="text-[#60a5fa] text-xs font-bold tracking-wider uppercase bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
                  Uzman Teknik Servis & Kurulum
                </span>

                <p className="text-blue-100 text-sm leading-relaxed italic mb-6 opacity-90">
                  "Yaptığı işi bilgisi ve becerisiyle hakkını vererek yapan, tertemiz çalışan güvenilir esnaf."
                </p>

                <button
                  onClick={() => onOpenInquiry('Cengiz Bey Servis / Montaj Talebi')}
                  className="w-full py-3.5 bg-[#25D366] hover:bg-emerald-600 text-white font-bold rounded-2xl text-sm shadow-lg transition-all"
                >
                  Doğrudan Randevu Al
                </button>
              </div>
            </div>

            {/* Right: Copy & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#1e3a8a] text-xs font-bold">
                <UserCheck className="w-4 h-4 text-[#3b82f6]" />
                <span>Müşteri Yorumlarının Ortak Noktası</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#1e3a8a] tracking-tight">
                İşinin Ehli Bir Usta, Güvenilir Bir Hizmet
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Müşterilerimizin yıllardır yaptığı değerlendirmelerde Cengiz Bey'in bilgisi, titizliği, profesyonel yaklaşımı ve montaj kalitesi özellikle öne çıkmaktadır.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F0F5FA] border border-blue-50">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Titiz ve temiz işçilik</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F0F5FA] border border-blue-50">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Profesyonel montaj</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F0F5FA] border border-blue-50">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Doğru ürün yönlendirmesi</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F0F5FA] border border-blue-50">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Satış sonrası ilgi</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
