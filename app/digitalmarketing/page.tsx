import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
//import Contact from "../components/Contact";
import Process from "../components/Process";
import Industries from "../components/Industries";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";
import DigitalMarketingServices from "../components/DigitalMarketingServices";
import DigitalMarketingWork from "../components/DigitalMarketingWork";

const DigitalMarketing = () => {
  return (
    <div>
      <Navbar />
      <Hero mode="marketing" />
      <DigitalMarketingServices />
      <Process mode="digital-marketing" />
      <Industries mode="digital-marketing" />
      <WhyChooseUs mode="digital-marketing" />
      <DigitalMarketingWork />
      <FAQ mode="digital-marketing"/>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
