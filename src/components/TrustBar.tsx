import React from 'react';
import { Star, Award, Users, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1e3a8a] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <span className="text-[#60a5fa] text-xs font-bold uppercase tracking-widest block mb-2">Rakamlarla Kalite ve Güven</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">İstanbul ve Küçükçekmece'de Tercih Edilen Adres</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <div className="text-3xl font-black text-white mb-1">5.0 / 5</div>
              <div className="text-sm font-bold text-amber-300 mb-2">58 Google Yorumu</div>
              <p className="text-xs text-blue-100 opacity-90 leading-relaxed">
                Müşterilerimizin Google haritalar üzerindeki gerçek ve bağımsız değerlendirmeleri.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/20 text-sky-300 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white mb-1">5.0 / 5</div>
              <div className="text-sm font-bold text-sky-300 mb-2">35 Local Rehber Yorumu</div>
              <p className="text-xs text-blue-100 opacity-90 leading-relaxed">
                Yerel rehberlerin tecrübe ederek doğruladığı kusursuz hizmet kalitesi.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white mb-1">Yılların</div>
              <div className="text-sm font-bold text-emerald-300 mb-2">Deneyimi</div>
              <p className="text-xs text-blue-100 opacity-90 leading-relaxed">
                Evsel ve endüstriyel sistemlerde uzun yıllara dayanan müşteri memnuniyeti.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-400/20 text-blue-300 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-white mb-1">Titiz & Temiz</div>
              <div className="text-sm font-bold text-blue-300 mb-2">Profesyonel İşçilik</div>
              <p className="text-xs text-blue-100 opacity-90 leading-relaxed">
                Evini kendi evi gibi koruyan titiz kurulum ve zamanında servis anlayışı.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
