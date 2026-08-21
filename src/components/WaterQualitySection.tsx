import React from 'react';
import { Droplet, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export const WaterQualitySection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20">
              <Droplet className="w-4 h-4 text-sky-400" />
              <span>Sağlıklı ve Lezzetli Su Deneyimi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Musluktan Akan Suyun Keyfini Çıkarın
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Doğru su arıtma sistemiyle günlük kullanımınızda daha kaliteli ve keyifli bir içme suyu deneyimine sahip olabilirsiniz. Çay ve kahvelerinizin lezzeti artar, mutfağınızda pratiklik kazanırsınız.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Yumuşak ve Lezzetli İçim</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Çay ve Yemeklerde Gerçek Lezzet</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Mutfakta Pratik ve Sınırsız Su</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <CheckCircle className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm font-semibold text-white">Güvenilir Periyodik Bakım</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-sky-600 to-blue-800 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6">
                <Droplet className="w-10 h-10 text-white fill-white/20" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Evleriniz İçin En İyisi</h3>
              <p className="text-sky-100 text-sm leading-relaxed mb-6">
                AQUATÜRK güvencesiyle evinizdeki su kalitesini yükseltin, aile sağlığınız ve bütçeniz için en doğru yatırımı yapın.
              </p>
              <a
                href="tel:05464041375"
                className="inline-block px-6 py-3.5 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all text-sm"
              >
                Hemen Bilgi Al: 0546 404 13 75
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
