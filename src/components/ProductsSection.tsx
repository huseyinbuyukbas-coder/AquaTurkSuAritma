import React from 'react';
import { Droplet, Sparkles, Wrench, Settings, ShieldCheck, Home, Factory, RefreshCw } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onOpenInquiry: (serviceTitle: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenInquiry }) => {
  const products: ProductItem[] = [
    {
      id: '1',
      title: 'Evsel Su Arıtma Sistemleri',
      description: 'Evinizin günlük kullanımına uygun kaliteli su arıtma çözümleri.',
      category: 'evsel',
      iconName: 'Home',
      badge: 'En Çok Tercih Edilen'
    },
    {
      id: '2',
      title: 'Premium Su Arıtma Sistemleri',
      description: 'Daha yüksek performans ve konfor arayanlar için gelişmiş çözümler.',
      category: 'evsel',
      iconName: 'Sparkles',
      badge: 'Yüksek Konfor'
    },
    {
      id: '3',
      title: 'Endüstriyel Su Arıtma',
      description: 'İşletmeler ve yüksek kapasiteli kullanım için profesyonel arıtma sistemleri.',
      category: 'endustriyel',
      iconName: 'Factory',
      badge: 'Kurumsal Çözüm'
    },
    {
      id: '4',
      title: 'Filtre Değişimi',
      description: 'Mevcut cihazınızın filtrelerinin zamanında ve profesyonel şekilde değiştirilmesi.',
      category: 'servis',
      iconName: 'RefreshCw',
      badge: 'Periyodik Bakım'
    },
    {
      id: '5',
      title: 'Bakım ve Servis',
      description: 'Su arıtma cihazlarınız için bakım, kontrol ve teknik servis.',
      category: 'servis',
      iconName: 'Wrench',
      badge: 'Uzman Destek'
    },
    {
      id: '6',
      title: 'Montaj ve Kurulum',
      description: 'Yeni cihazınızın temiz, güvenli ve profesyonel kurulumu.',
      category: 'servis',
      iconName: 'ShieldCheck',
      badge: 'Temiz İşçilik'
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6 text-[#3b82f6]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#3b82f6]" />;
      case 'Factory': return <Factory className="w-6 h-6 text-[#3b82f6]" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-[#3b82f6]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#3b82f6]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#3b82f6]" />;
      default: return <Droplet className="w-6 h-6 text-[#3b82f6]" />;
    }
  };

  return (
    <section id="urunler" className="py-20 md:py-28 bg-[#F0F5FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1e3a8a] text-xs font-bold uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-3">
            Ürün ve Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
            İhtiyacınıza Uygun Su Arıtma Sistemleri
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Evsel cihazlardan endüstriyel sistemlere, filtre değişiminden profesyonel montaja kadar tüm ihtiyaçlarınız için yanınızdayız.
          </p>
          <div className="w-16 h-1 bg-[#3b82f6] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid of 6 categories */}
        <div id="hizmetler" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-blue-50 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-blue-50 text-[#1e3a8a]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-[#1e3a8a] mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AQUATÜRK Kalitesi</span>
                <button
                  onClick={() => onOpenInquiry(item.title)}
                  className="px-5 py-2.5 bg-blue-50 hover:bg-[#1e3a8a] text-[#1e3a8a] hover:text-white font-bold text-xs rounded-2xl transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>Bilgi Al</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#1e3a8a] rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-black mb-2">Hangi sistemi seçeceğinizden emin misiniz?</h3>
            <p className="text-blue-100 text-sm sm:text-base opacity-90">
              İhtiyacınızı birlikte belirleyelim, size en uygun cihaz veya filtre değişim paketini önerelim.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Ürün Seçimi ve Danışmanlık')}
            className="px-8 py-4 bg-[#25D366] hover:bg-emerald-600 text-white font-bold rounded-2xl text-sm shadow-lg whitespace-nowrap transition-all relative z-10"
          >
            WhatsApp'tan Danışın
          </button>
        </div>

      </div>
    </section>
  );
};
