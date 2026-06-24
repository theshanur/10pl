import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats/>
        <About />
        {/* <Features />
       
        <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
