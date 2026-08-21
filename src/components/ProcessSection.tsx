import React from 'react';
import { MessageSquare, CheckCircle, Wrench, Smile } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'İletişime Geçin',
      description: 'WhatsApp veya telefon üzerinden ihtiyacınızı, cihaz veya filtre değişimi talebinizi bize iletin.'
    },
    {
      number: '02',
      title: 'İhtiyacınızı Belirleyelim',
      description: 'Kullanım alanınıza, su kalitenize ve bütçenize en uygun doğru çözümü birlikte değerlendirelim.'
    },
    {
      number: '03',
      title: 'Profesyonel Kurulum',
      description: 'Uzman ekibimiz söz verilen saatte gelerek cihazınızı evinizde veya iş yerinizde titizlikle monte etsin.'
    },
    {
      number: '04',
      title: 'Güvenle Kullanın',
      description: 'Temiz ve lezzetli suyun tadını çıkarın; periyodik filtre değişimlerinde her zaman yanınızda olalım.'
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-sky-50/50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-700 text-xs font-bold uppercase tracking-widest bg-sky-100/80 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Hizmet Süreci
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            İlk görüşmeden montaja ve satış sonrası desteğe kadar şeffaf ve profesyonel süreç.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 relative group hover:border-sky-300 transition-all"
            >
              <div className="text-4xl font-black text-sky-600/20 group-hover:text-sky-600/40 transition-colors mb-4">
                {item.number}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
