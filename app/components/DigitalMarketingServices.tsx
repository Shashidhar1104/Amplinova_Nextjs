"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FaArrowRight,
  FaGoogle,
  FaHashtag,
  FaAd,
  FaPenNib,
  FaEnvelopeOpenText,
  FaChartBar,
  FaChartLine,
} from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  slug: string;
}

interface CardProps extends Service {
  index: number;
  isVisible: boolean;
}

const DMServiceCard = ({
  title,
  description,
  icon,
  index,
  isVisible,
  slug,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-[290px] h-[335px] cursor-pointer flex justify-center"
    >
      <motion.div
        animate={{
          rotate: isHovered ? 4 : 0,
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.03 : 1,
          backgroundColor: isHovered ? "#F97316" : "#ffffff",
          boxShadow: isHovered
            ? "0 18px 28px rgba(249,115,22,0.30)"
            : "0 4px 10px rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.25 }}
        className="w-[280px] h-[320px] rounded-3xl p-5 flex flex-col items-center text-center relative"
      >
        {/* ICON */}
        <motion.div
          animate={{
            backgroundColor: isHovered ? "#ffffff" : "#F97316",
            color: isHovered ? "#F97316" : "#ffffff",
          }}
          className="w-[75px] h-[75px] rounded-2xl flex items-center justify-center mb-4 text-3xl"
        >
          <div className={isHovered ? "text-orange-600" : "text-white"}>
            {icon}
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h3
          animate={{ color: isHovered ? "#ffffff" : "#000000" }}
          className="text-[25px] font-bold leading-tight mb-3 w-[160px]"
        >
          {title}
        </motion.h3>

        {/* DESCRIPTION */}
        <motion.p
          animate={{ color: isHovered ? "#e5e5e5" : "#4b5563" }}
          className="text-[15px] font-semibold leading-snug mb-4 px-1 h-[60px]"
        >
          {description}
        </motion.p>

        {/* BUTTON */}
        <motion.button
          onClick={() => router.push(`/services/digital-marketing/${slug}`)}
          animate={{
            backgroundColor: isHovered ? "rgba(255,255,255,0.18)" : "#ffffff",
            color: isHovered ? "#ffffff" : "#000000",
            borderColor: isHovered ? "rgba(255,255,255,0.4)" : "#d1d5db",
          }}
          transition={{ duration: 0.25 }}
          className="border px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-2"
        >
          Learn More <FaArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const DigitalMarketingServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const servicesData: Service[] = [
    {
      title: "SEO Optimization",
      slug: "seo",
      description: "Improve rankings and grow organic traffic.",
      icon: <FaGoogle />,
    },
    {
      title: "Social Media Marketing",
      slug: "social-media",
      description: "Boost engagement and brand presence online.",
      icon: <FaHashtag />,
    },
    {
      title: "Content Marketing",
      slug: "content",
      description: "Create content that attracts and converts.",
      icon: <FaPenNib />,
    },
    {
      title: "PPC Advertising",
      slug: "ppc",
      description: "Get instant results with targeted ads.",
      icon: <FaAd />,
    },
    {
      title: "Email Marketing",
      slug: "email",
      description: "Send emails that engage and drive sales.",
      icon: <FaEnvelopeOpenText />,
    },
    {
      title: "Analytics & Reporting",
      slug: "analytics",
      description: "Track performance with clear insights.",
      icon: <FaChartBar />,
    },
    {
      title: "Conversion Optimization",
      slug: "conversion-optimization",
      description: "Turn visitors into customers effectively.",
      icon: <FaChartLine />,
    },
    {
      title: "Influencer Marketing",
      slug: "influencer-marketing",
      description: "Increase reach with trusted influencers.",
      icon: <FaHashtag />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="digital-marketing-services"
      className="relative pt-10 pb-20 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-orange-500/5" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-red-500/5" />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Digital{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Marketing
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: 120 } : { width: 0 }}
          transition={{ duration: 1 }}
          className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Boost your brand with high-performance marketing solutions that{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-semibold">
            deliver measurable growth
          </span>
          .
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto px-4"
      >
        <AnimatePresence>
          {servicesData.map((service, index) => (
            <DMServiceCard
              key={service.title}
              {...service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact-us")}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
        >
          Get Marketing Consultation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default DigitalMarketingServices;