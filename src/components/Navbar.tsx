import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Merhaba, AQUATÜRK su arıtma sistemleri hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905464041375?text=${text}`, '_blank');
  };

  const navLinks = [
    { name: 'Ana Sayfa', href: '#anasayfa' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Su Arıtma Sistemleri', href: '#urunler' },
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Neden Aquatürk?', href: '#neden-aquaturk' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-blue-100' : 'bg-white py-4 border-b border-blue-50 shadow-xs'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#anasayfa" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-[#1e3a8a] leading-none">
                AQUATÜRK
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#60a5fa] mt-0.5">
                Su Arıtma Sistemleri
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-[#1e3a8a] rounded-xl hover:bg-blue-50/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:05464041375"
              className="text-sm font-bold text-[#1e3a8a] hover:text-blue-700 transition-colors"
            >
              0546 404 13 75
            </a>
            
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:shadow-lg flex items-center gap-2 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white/25" />
              <span>WhatsApp'tan Bilgi Al</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="p-2.5 text-white bg-[#25D366] rounded-xl shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1e3a8a] bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-blue-100 shadow-xl animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-800 hover:bg-blue-50 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:05464041375"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 text-base font-semibold text-[#1e3a8a] bg-blue-50 rounded-xl"
              >
                <Phone className="w-5 h-5 text-[#1e3a8a]" />
                <span>0546 404 13 75 (Hemen Ara)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 text-base font-semibold text-white bg-[#25D366] rounded-xl shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp'tan Bilgi Al</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
