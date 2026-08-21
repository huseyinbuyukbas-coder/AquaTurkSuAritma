import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const areas = [
    'Küçükçekmece (Merkez & Halkalı)',
    'Avcılar',
    'Bahçelievler',
    'Bakırköy',
    'Başakşehir',
    'Bağcılar',
    'Beylikdüzü',
    'Esenyurt',
    'Büyükçekmece',
    'Ve Çevre İstanbul İlçeleri'
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-700 text-xs font-bold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Hizmet Ağımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            İstanbul'da Su Arıtma Hizmeti
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Küçükçekmece merkezli ofisimizden İstanbul'un birçok bölgesine hızlı ve güvenilir servis ve montaj desteği sunuyoruz.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-300 rounded-2xl p-5 text-center transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-800 text-sm">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-sky-50/70 border border-sky-100 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-700 font-medium">
            📍 <strong>Adres:</strong> Halkalı Merkez Zeynebiye Caddesi, Karaağaç Sk. No:13/A, 34303 Küçükçekmece / İstanbul
          </p>
        </div>

      </div>
    </section>
  );
};
