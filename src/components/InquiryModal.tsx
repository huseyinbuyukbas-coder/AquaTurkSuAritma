import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Droplet, Send } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
      setPhone('');
      setNotes('');
    }
  }, [isOpen, serviceTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Merhaba, AQUATÜRK su arıtma sistemleri üzerinden bilgi almak istiyorum.\n\nİlgilendiğim Konu: *${serviceTitle}*\nAd Soyad: ${name || 'Belirtilmedi'}\nTelefon: ${phone || 'Belirtilmedi'}\nNotlar: ${notes || 'Yok'}`
    );
    window.open(`https://wa.me/905464041375?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
            <Droplet className="w-6 h-6 fill-sky-500/20" />
          </div>
          <div>
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">Hızlı Bilgi & Talep</span>
            <h3 className="text-xl font-extrabold text-slate-900">{serviceTitle}</h3>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-6">
          Bilgilerinizi bırakarak WhatsApp üzerinden doğrudan Cengiz Bey ve uzman ekibimize ulaşabilir, hızlı teklif alabilirsiniz.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Adınız Soyadınız</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Örn. Ayşe Demir"
              required
              className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-sky-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Telefon Numaranız</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Örn. 0532 ..."
              required
              className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-sky-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Ek Notlar / Soru (İsteğe Bağlı)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Mutfak tezgahım dar, uygun cihaz hangisi?"
              className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-sky-600"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>WhatsApp ile Gönder ve Bilgi Al</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <a
              href="tel:05464041375"
              className="text-xs font-bold text-slate-600 hover:text-sky-700 inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-700" />
              <span>Hemen aramak için tıklayın: 0546 404 13 75</span>
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};
