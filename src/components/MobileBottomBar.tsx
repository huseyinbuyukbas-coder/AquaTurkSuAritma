import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Merhaba, AQUATÜRK su arıtma sistemleri hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905464041375?text=${text}`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center gap-3">
      <a
        href="tel:05464041375"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 text-white font-bold text-sm rounded-xl shadow-md active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-sky-400" />
        <span>ARA</span>
      </a>

      <button
        onClick={handleWhatsApp}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-md active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span>WHATSAPP</span>
      </button>
    </div>
  );
};
