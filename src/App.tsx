import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { TechnicianSection } from './components/TechnicianSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { WaterQualitySection } from './components/WaterQualitySection';
import { ServiceAreas } from './components/ServiceAreas';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Genel Bilgi ve Danışma');

  const handleOpenInquiry = (service: string = 'Genel Bilgi ve Danışma') => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white antialiased">
      <Navbar onOpenInquiry={handleOpenInquiry} />
      
      <main>
        <Hero onOpenInquiry={handleOpenInquiry} />
        <TrustBar />
        <AboutSection onOpenInquiry={handleOpenInquiry} />
        <TechnicianSection onOpenInquiry={handleOpenInquiry} />
        <ProductsSection onOpenInquiry={handleOpenInquiry} />
        <WhyUsSection />
        <TestimonialsSection />
        <ProcessSection />
        <WaterQualitySection />
        <ServiceAreas />
        <FaqSection />
        <ContactSection onOpenInquiry={handleOpenInquiry} />
      </main>

      <Footer />
      <MobileBottomBar />

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={selectedService}
      />
    </div>
  );
}
