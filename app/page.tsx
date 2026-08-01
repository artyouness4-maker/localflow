import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Businesses from "@/components/Businesses";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B14] text-[#F7F5FF]">
      <Navbar />
      <Hero />
      <Businesses />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
