import React from 'react';
import { Droplet, Phone, Instagram, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#anasayfa" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md">
                <Droplet className="w-6 h-6 fill-white/20" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-none">
                  AQUATÜRK
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-sky-400 uppercase mt-0.5 block">
                  SU ARITMA SİSTEMLERİ
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Evsel ve endüstriyel su arıtma sistemlerinde kaliteli hizmet anlayışı ile hızlı çözümler sunulmaktadır.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/aquaturksuaritma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:05464041375"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Telefon"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Hızlı Menü</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#anasayfa" className="text-slate-400 hover:text-sky-400 transition-colors">Ana Sayfa</a>
              </li>
              <li>
                <a href="#hakkimizda" className="text-slate-400 hover:text-sky-400 transition-colors">Hakkımızda</a>
              </li>
              <li>
                <a href="#urunler" className="text-slate-400 hover:text-sky-400 transition-colors">Su Arıtma Sistemleri</a>
              </li>
              <li>
                <a href="#hizmetler" className="text-slate-400 hover:text-sky-400 transition-colors">Hizmetlerimiz</a>
              </li>
              <li>
                <a href="#yorumlar" className="text-slate-400 hover:text-sky-400 transition-colors">Müşteri Yorumları</a>
              </li>
              <li>
                <a href="#iletisim" className="text-slate-400 hover:text-sky-400 transition-colors">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Evsel Su Arıtma Sistemleri</li>
              <li>Endüstriyel Arıtma Çözümleri</li>
              <li>Periyodik Filtre Değişimi</li>
              <li>Teknik Servis ve Bakım</li>
              <li>Profesyonel Montaj & Kurulum</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">İletişim Bilgileri</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>Halkalı Merkez Zeynebiye Cd. Karaağaç Sk. No:13/A, Küçükçekmece / İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="tel:05464041375" className="text-white font-bold hover:underline">0546 404 13 75</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-400 shrink-0" />
                <a href="https://www.instagram.com/aquaturksuaritma/" target="_blank" rel="noopener noreferrer" className="hover:underline">@aquaturksuaritma</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>© 2026 AQUATÜRK SU ARITMA SİSTEMLERİ. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1">
            <span>Profesyonel Kurumsal Web Sitesi</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
