import React from 'react';
import { Star, ShieldCheck, Clock, ThumbsUp, Wrench, Headphones } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const advantages = [
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: '5.0 Google Müşteri Puanı',
      description: 'Müşterilerimizin tam memnuniyeti ile onaylanmış 5 yıldızlı hizmet kalitesi.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
      title: '58 Google Yorumu',
      description: 'Yüzlerce mutlu ev ve iş yeri sahibinin gerçek ve bağımsız değerlendirmeleri.'
    },
    {
      icon: <Wrench className="w-6 h-6 text-emerald-600" />,
      title: 'Profesyonel ve Titiz İşçilik',
      description: 'Evini kendi evi gibi koruyan, tertemiz çalışan özenli kurulum.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Hızlı Servis ve Montaj',
      description: 'Söz verilen saatte gelen, zamanında ve pratik çözümler sunan ekip.'
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-sky-700" />,
      title: 'Kaliteli Ürün Seçenekleri',
      description: 'Sağlıklı, lezzetli ve yumuşak içme suyu sağlayan güvenilir cihazlar.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-indigo-600" />,
      title: 'Satış Sonrası Destek',
      description: 'Cihaz montajı sonrasında periyodik filtre değişimi ve her an ulaşılabilirlik.'
    },
  ];

  return (
    <section id="neden-aquaturk" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-700 text-xs font-bold uppercase tracking-widest bg-sky-100/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Farkımız
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Neden AQUATÜRK?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Müşteri yorumlarında sıkça vurgulanan gerçek avantajlarımızla tanışın.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 shadow-xs border border-slate-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
