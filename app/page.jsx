import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandCarousel from '@/components/BrandCarousel';
import About from '@/components/About';
import ServicesSection from '@/components/ServicesSection';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BrandCarousel />
      <About />
      <ServicesSection />
      <Industries />
      <Process />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
  );
}
