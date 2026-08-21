import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Su arıtma cihazı alırken nelere dikkat etmeliyim?",
      answer: "Cihazın filtrasyon kalitesine, servis ve yedek parça desteğine, montaj titizliğine ve arkasındaki esnaf güvenilirliğine dikkat etmelisiniz. AQUATÜRK olarak doğru ürün seçimi ve satış sonrası desteğimizle her zaman yanınızdayız."
    },
    {
      question: "Evime hangi su arıtma cihazı uygun?",
      answer: "Evdeki kişi sayısı, mutfak tezgahının altındaki alan ve su kullanım alışkanlıklarınıza göre en uygun cihazı birlikte belirliyoruz. İhtiyacınıza uygun ürün seçimi için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Su arıtma cihazının filtreleri ne zaman değiştirilir?",
      answer: "Kullanım yoğunluğuna ve su kalitesine bağlı olarak evsel arıtma filtreleri genellikle 6 ay ile 12 ay arasında periyodik olarak değiştirilmelidir. Filtre değişim zamanı geldiğinde ekibimiz size hatırlatma ve destek sağlar."
    },
    {
      question: "Filtre değişimi yapıyor musunuz?",
      answer: "Evet, markası ne olursa olsun tüm su arıtma cihazlarınız için profesyonel filtre değişimi ve bakım hizmeti sunuyoruz."
    },
    {
      question: "Montaj hizmetiniz var mı?",
      answer: "Evet, satın aldığınız tüm yeni su arıtma cihazları için Küçükçekmece ve İstanbul genelinde profesyonel, temiz ve güvenli montaj hizmeti veriyoruz."
    },
    {
      question: "Endüstriyel su arıtma sistemleri yapıyor musunuz?",
      answer: "Evet, işletmeler, kafeler, restoranlar ve yüksek kapasiteli kullanım gerektiren yerler için profesyonel endüstriyel su arıtma sistemleri kuruyor ve bakımını üstleniyoruz."
    },
    {
      question: "Mevcut su arıtma cihazıma servis hizmeti veriyor musunuz?",
      answer: "Evet, daha önceden başka yerden almış olduğunuz su arıtma cihazları için de arıza tespiti, bakım ve teknik servis hizmeti sunmaktayız."
    },
    {
      question: "Fiyat bilgisi nasıl alabilirim?",
      answer: "İhtiyacınıza uygun ürün ve güncel fiyat bilgisi için telefonla arayabilir veya WhatsApp üzerinden hemen bizimle iletişime geçebilirsiniz."
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-sky-700 text-xs font-bold uppercase tracking-widest bg-sky-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Merak Edilenler
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Sık Sorulan Sorular
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Su arıtma sistemleri, montaj ve bakım süreçleri hakkında kafanıza takılan soruların yanıtları.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-sky-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform ${isOpen ? 'rotate-180 bg-sky-600 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
