import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import Services from "@/components/Services";
import About from "@/components/About";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BrandCarousel />
      <Services />
      <About />
      <Industries />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
