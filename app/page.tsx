import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import About from "./components/About";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import MobileCallButton from "./components/MobileCallButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <About />
        <ServiceArea />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
