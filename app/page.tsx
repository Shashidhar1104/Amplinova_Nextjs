import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import WhoWeAre from "./components/WhoWeAre";
import OurClients from "./components/OurClients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import DigitalMarketingWork from "./components/DigitalMarketingWork";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
       <Hero mode="combined" />
      <WhoWeAre />
      <Services />
      <OurClients />
      <DigitalMarketingWork />
      <Testimonials />
      <Contact />   
      <Footer />
    </div>
  );
}