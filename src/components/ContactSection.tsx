import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Send, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onOpenInquiry: (service?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Merhaba, AQUATÜRK su arıtma sistemleri hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905464041375?text=${text}`, '_blank');
  };

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-700 text-xs font-bold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Temiz Su İçin İlk Adımı Atın
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Su arıtma sistemleri, montaj, bakım veya filtre değişimi hakkında bilgi almak için bize ulaşın.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details & quick buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-sky-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
              
              <div>
                <span className="text-sky-400 text-xs font-bold uppercase tracking-wider block mb-1">AQUATÜRK İletişim Hattı</span>
                <h3 className="text-2xl font-bold">Bize Hemen Ulaşın</h3>
              </div>

              <div className="space-y-6">
                
                {/* Phone */}
                <a
                  href="tel:05464041375"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-sky-300 font-medium block">Telefon & WhatsApp</span>
                    <span className="text-lg font-bold text-white group-hover:text-sky-200">0546 404 13 75</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10">
                  <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-sky-300 font-medium block">İşletme Adresi</span>
                    <span className="text-sm font-medium text-white leading-relaxed block mt-0.5">
                      Halkalı Merkez Zeynebiye Caddesi, Karaağaç Sk. No:13/A, 34303 Küçükçekmece / İstanbul
                    </span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10">
                  <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-sky-300 font-medium block">Çalışma Saatleri</span>
                    <span className="text-sm font-semibold text-white">Her Gün / Hızlı Servis Desteği</span>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/aquaturksuaritma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-pink-300 font-medium block">Instagram</span>
                    <span className="text-base font-bold text-white group-hover:text-pink-200">@aquaturksuaritma</span>
                  </div>
                </a>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg transition-all text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>WhatsApp'tan Yazın</span>
                </button>
                <a
                  href="tel:05464041375"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Phone className="w-5 h-5 text-sky-700" />
                  <span>Şimdi Ara</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Inquiry Card / Map Simulation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Hızlı Mesaj Gönderin</h3>
              <p className="text-slate-600 text-sm mb-6">
                Bilgi almak istediğiniz konu veya cihaz modelini seçin, doğrudan WhatsApp üzerinden iletişime geçelim.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Adınız Soyadınız</label>
                    <input
                      type="text"
                      id="contactName"
                      placeholder="Örn. Ahmet Yılmaz"
                      className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-sky-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Telefon Numaranız</label>
                    <input
                      type="tel"
                      id="contactPhone"
                      placeholder="Örn. 0532 ..."
                      className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">İlgi Alanı / Hizmet</label>
                  <select
                    id="contactService"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-sky-600"
                  >
                    <option value="Evsel Su Arıtma Cihazı">Evsel Su Arıtma Cihazı</option>
                    <option value="Filtre Değişimi">Filtre Değişimi ve Bakım</option>
                    <option value="Montaj ve Kurulum">Montaj ve Kurulum</option>
                    <option value="Endüstriyel Sistemler">Endüstriyel Sistemler</option>
                    <option value="Genel Bilgi ve Fiyat">Genel Bilgi ve Fiyat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Mesajınız / Talebiniz</label>
                  <textarea
                    id="contactMsg"
                    rows={4}
                    placeholder="Evim için su arıtma cihazı baktırmak istiyorum..."
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-sky-600"
                  ></textarea>
                </div>

                <button
                  onClick={() => {
                    const name = (document.getElementById('contactName') as HTMLInputElement)?.value || '';
                    const phone = (document.getElementById('contactPhone') as HTMLInputElement)?.value || '';
                    const service = (document.getElementById('contactService') as HTMLSelectElement)?.value || '';
                    const msg = (document.getElementById('contactMsg') as HTMLTextAreaElement)?.value || '';
                    
                    const text = encodeURIComponent(`Merhaba, adım ${name}. Tel: ${phone}. İlgilendiğim hizmet: ${service}. Mesajım: ${msg}`);
                    window.open(`https://wa.me/905464041375?text=${text}`, '_blank');
                  }}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>WhatsApp ile Gönder ve Bilgi Al</span>
                </button>
              </div>
            </div>

            {/* Map Placeholder card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Küçükçekmece / Halkalı Ofis</h4>
                  <p className="text-xs text-slate-500">Zeynebiye Caddesi, Karaağaç Sk. No:13/A</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Halkalı+Merkez+Zeynebiye+Caddesi+Karaağaç+Sk+No:13/A+Küçükçekmece+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-all whitespace-nowrap"
              >
                Haritada Aç →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
