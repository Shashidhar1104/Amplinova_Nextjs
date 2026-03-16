import Hero from "./components/Hero";
import Services from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";
import OurClients from "./components/OurClients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import DigitalMarketingWork from "./components/DigitalMarketingWork";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">    
      <Hero mode="combined" />
      <WhoWeAre />
      <Services />
      <OurClients />
      <DigitalMarketingWork />
      <Testimonials />
      <Contact />   
    </div>
  );
}