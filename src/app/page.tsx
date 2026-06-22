import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PortfolioGrid />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
