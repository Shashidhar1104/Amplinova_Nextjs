"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FaChartLine,
  FaCloud,
  FaMobile,
  FaArrowRight,
  FaGoogle,
  FaHashtag,
  FaAd,
  FaCogs,
  FaServer,
  FaDatabase,
  FaPenNib,
  FaEnvelopeOpenText,
  FaChartBar,
  FaCode,
  FaShieldAlt
} from "react-icons/fa";

interface Service {
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCardProps extends Service {
  index: number;
  isVisible: boolean;
  category: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  index,
  isVisible,
  category,
  slug,
}: ServiceCardProps) => {

  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const isDM = category === "digital-marketing";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-[290px] h-[335px] flex justify-center cursor-pointer"
    >
      <motion.div
        animate={{
          rotate: isHovered ? 4 : 0,
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.03 : 1,
          backgroundColor: isHovered
            ? isDM
              ? "#F97316"
              : "#3b82f6"
            : "#ffffff",
          boxShadow: isHovered
            ? "0 18px 28px rgba(0,0,0,0.20)"
            : "0 4px 10px rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.25 }}
        className="w-[280px] h-[320px] rounded-3xl p-5 flex flex-col items-center text-center"
      >

        {/* Icon */}
        <motion.div
          animate={{
            backgroundColor: isHovered
              ? "#ffffff"
              : isDM
              ? "#F97316"
              : "#3b82f6",
            color: isHovered
              ? isDM
                ? "#F97316"
                : "#3b82f6"
              : "#ffffff",
          }}
          className="w-[75px] h-[75px] rounded-2xl flex items-center justify-center mb-4 text-3xl"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ color: isHovered ? "#ffffff" : "#000000" }}
          className="text-[25px] font-bold mb-3 w-[160px]"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          animate={{ color: isHovered ? "#fdfdfd" : "#4b5563" }}
          className="text-[15px] font-semibold mb-4 px-1 h-[60px]"
        >
          {description}
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={() => {
            const base =
              category === "digital-marketing"
                ? "/services/digital-marketing/"
                : "/services/it/";
            router.push(base + slug);
          }}
          animate={{
            backgroundColor: isHovered ? "rgba(255,255,255,0.18)" : "#ffffff",
            color: isHovered ? "#ffffff" : "#000000",
            borderColor: isHovered ? "rgba(255,255,255,0.4)" : "#d1d5db",
          }}
          className="border px-4 py-2 rounded-full text-[14px] flex items-center gap-2"
        >
          Learn More <FaArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {

  type ServiceCategory = "marketing" | "it";

const [category, setCategory] = useState<ServiceCategory>("marketing");

  
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);

  const servicesData: Record<string, Service[]> = {

    "digital-marketing": [
      { title:"SEO Optimization", slug:"seo", description:"Improve rankings and grow organic traffic.", icon:<FaGoogle/> },
      { title:"Social Media Marketing", slug:"social-media", description:"Boost engagement and brand presence online.", icon:<FaHashtag/> },
      { title:"Content Marketing", slug:"content", description:"Create content that attracts and converts.", icon:<FaPenNib/> },
      { title:"PPC Advertising", slug:"ppc", description:"Get instant results with targeted ads.", icon:<FaAd/> },
      { title:"Email Marketing", slug:"email", description:"Send emails that engage and drive sales.", icon:<FaEnvelopeOpenText/> },
      { title:"Analytics & Reporting", slug:"analytics", description:"Track performance with clear insights.", icon:<FaChartBar/> },
      { title:"Conversion Optimization", slug:"conversion-optimization", description:"Turn visitors into customers effectively.", icon:<FaChartLine/> },
      { title:"Influencer Marketing", slug:"influencer-marketing", description:"Increase reach with trusted influencers.", icon:<FaHashtag/> },
    ],

    "it-services": [
      { title:"Web Development", slug:"web-development", description:"Build fast modern websites.", icon:<FaCode/> },
      { title:"Mobile App Development", slug:"mobile-app-development", description:"Create apps for iOS and Android.", icon:<FaMobile/> },
      { title:"Cloud Solutions", slug:"cloud-solutions", description:"Deploy scalable cloud systems.", icon:<FaCloud/> },
      { title:"Cyber Security", slug:"cybersecurity", description:"Protect systems from digital threats.", icon:<FaShieldAlt/> },
      { title:"IT Infrastructure", slug:"infrastructure", description:"Set up strong IT systems.", icon:<FaServer/> },
      { title:"Database Management", slug:"database", description:"Manage and optimize databases.", icon:<FaDatabase/> },
      { title:"DevOps Services", slug:"devops", description:"Automate workflows.", icon:<FaCogs/> },
      { title:"AI & ML", slug:"ai-ml", description:"Build smart AI apps.", icon:<FaServer/> },
    ],

  };

  const currentServices =
  category === "marketing"
    ? servicesData["digital-marketing"]
    : servicesData["it-services"];

  return (

    <section
      ref={sectionRef}
      className="pt-10 pb-20 bg-black text-white"
    >

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
  
  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-bold text-white">
    Our <span className="text-orange-500">Services</span>
  </h2>

  {/* Orange underline */}
  <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

  {/* Description text */}
  <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
    Transform your digital presence with data-driven marketing strategies that 
    <span className="text-orange-500"> drive measurable growth.</span>
  </p>

</div>

        {/* Toggle */}
        <div className="flex justify-center mt-8 mb-16">
  <div className="flex bg-[#0f172a] border border-gray-700 rounded-full p-1">

    <button
      onClick={() => setCategory("marketing")}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
        category === "marketing"
          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
          : "text-gray-300 hover:text-white"
      }`}
    >
      📈 Digital Marketing
    </button>

    <button
      onClick={() => setCategory("it")}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
        category === "it"
          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
          : "text-gray-300 hover:text-white"
      }`}
    >
      ⚙️ IT Services
    </button>

  </div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

          <AnimatePresence mode="wait">

            {currentServices.map((service,index)=>(
              <ServiceCard
                key={service.title}
                {...service}
                index={index}
                isVisible={isVisible}
                category={category === "marketing" ? "digital-marketing" : "it-services"}
              />
            ))}

          </AnimatePresence>

        </div>
        {/* Bottom CTA Button */}
<div className="flex justify-center mt-16">
  <button
    className="bg-gradient-to-r from-orange-500 to-red-500 
    text-white font-semibold text-lg 
    px-10 py-4 rounded-xl 
    shadow-lg hover:shadow-xl 
    hover:scale-105 transition-all duration-300 
    flex items-center gap-3"
  >
    Get Marketing Consultation
    <FaArrowRight />
  </button>
</div>

      </div>

    </section>
  );
}