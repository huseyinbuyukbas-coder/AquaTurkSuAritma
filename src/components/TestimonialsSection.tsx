import React from 'react';
import { Star, MessageSquare, ExternalLink, Quote } from 'lucide-react';
import { ReviewItem } from '../types';

export const TestimonialsSection: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: '1',
      quote: "Güleryüzlü hizmet, profesyonel işçilik ve kaliteli ürün. Çok memnun kaldık.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '2',
      quote: "Ustanın eline sağlık. Eve girişinden konuşmasına, işçiliğine kadar çok titiz bir insan.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '3',
      quote: "Kendisiyle telefonla görüştük, fiyatta da yardımcı oldu. Geldi cihazımızı taktı, çok ilgili bir arkadaş.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '4',
      quote: "Yaptığı işi bilgisi ve becerisiyle hakkını vererek yapıyor. 4. filtre değişimini de standardı bozmadan yaptı.",
      author: 'Local Rehber',
      source: 'Local Rehberiniz',
      rating: 5
    },
    {
      id: '5',
      quote: "Yaklaşık 5 yıldır kullanıyorum. Gayet memnunum. Çevremde birkaç komşum ve arkadaşım da tavsiyem üzerine aynı ürünü taktırdılar.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '6',
      quote: "Çok ilgili ve işinin ehli biri. Ürünü bize kuran Cengiz İlhan'a teşekkür ederim.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '7',
      quote: "Cengiz Bey işinin ehli. Zamanında geldi. Tertemiz çalıştı. Gerekli açıklamaları yaptı.",
      author: 'Local Rehber',
      source: 'Local Rehberiniz',
      rating: 5
    },
    {
      id: '8',
      quote: "Cengiz Bey çok profesyonel ve işinin ehli.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '9',
      quote: "Profesyonel işçilik. Güleryüzlü hizmet.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '10',
      quote: "İstanbul için hızlı ve güvenilir servis.",
      author: 'Local Rehber',
      source: 'Local Rehberiniz',
      rating: 5
    },
    {
      id: '11',
      quote: "Son derece profesyonel çalışan, işini özenle yapan güçlü ekip.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
    {
      id: '12',
      quote: "İlgili ve işinin ehli bir esnaf. Uygun fiyatlı. Öneririm.",
      author: 'Google Müşterisi',
      source: 'Google Yorumu',
      rating: 5
    },
  ];

  const handleGoogleReviews = () => {
    window.open('https://www.google.com/search?q=AQUAT%C3%9CRK+SU+ARITMA+S%C4%B0STEMLER%C4%B0+K%C3%BC%C3%küççekmece', '_blank');
  };

  return (
    <section id="yorumlar" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-700 text-xs font-bold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Müşteri Deneyimleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Gerçek Google ve Local Rehberiniz yorumlarıyla hizmet kalitemizi keşfedin.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Rating summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 text-center shadow-xl">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {"★".repeat(5)}
            </div>
            <div className="text-3xl font-extrabold mb-1">5.0 / 5</div>
            <div className="text-sm font-semibold text-sky-300">58 Google Yorumu</div>
            <p className="text-xs text-slate-300 mt-1">Bağımsız Google Haritalar Değerlendirmesi</p>
          </div>

          <div className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-2xl p-6 text-center shadow-xl">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {"★".repeat(5)}
            </div>
            <div className="text-3xl font-extrabold mb-1">5.0 / 5</div>
            <div className="text-sm font-semibold text-sky-300">35 Local Rehberiniz Yorumu</div>
            <p className="text-xs text-slate-300 mt-1">Yerel Uzman Onaylı Kalite</p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-sky-200 group-hover:text-sky-300 transition-colors">
                <Quote className="w-8 h-8 opacity-40" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 text-sm block">{item.author}</span>
                  <span className="text-xs text-sky-700 font-semibold">{item.source}</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={handleGoogleReviews}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all hover:border-sky-400"
          >
            <span>Google'da Tüm Yorumları Görüntüle</span>
            <ExternalLink className="w-4 h-4 text-sky-600" />
          </button>
        </div>

      </div>
    </section>
  );
};
