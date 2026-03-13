import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import Contact from "../components/Contact";
// import Process from "../components/Process";
// import Industries from "../components/Industries";
// import FAQ from "../components/FAQ";
// import WhyChooseUs from "../components/WhyChooseUs";
// import ITServices from "../components/ITServices";
// import ITServicesWork from "../components/ITServicesWork";

const ITHomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero mode="it" />
      {/* <ITServices />
      <Process mode="it-services" />
      <Industries mode="it-services" />
      <WhyChooseUs mode="it-services" />

      <ITServicesWork/>
      <FAQ mode="it-services"/> */}
       {/* <Contact
        mode="it"
        title="Start Your IT Project"
        subtitle="Let's discuss your technology needs and build something amazing together."
      /> */}
      <Footer />
    </div>
  );
};

export default ITHomePage;
