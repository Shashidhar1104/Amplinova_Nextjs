"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FaArrowRight,
  FaCloud,
  FaMobile,
  FaServer,
  FaCogs,
  FaDatabase,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isVisible: boolean;
  slug: string;
}

const ITServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
  isVisible,
  slug,
}) => {
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
          backgroundColor: isHovered ? "#3b82f6" : "#ffffff",
          boxShadow: isHovered
            ? "0 18px 28px rgba(0,0,0,0.20)"
            : "0 4px 10px rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.25 }}
        className="w-[280px] h-[320px] rounded-3xl p-5 flex flex-col items-center text-center relative"
      >
        {/* ICON */}
        <motion.div
          animate={{
            backgroundColor: isHovered ? "#ffffff" : "#3b82f6",
            color: isHovered ? "#3b82f6" : "#ffffff",
          }}
          className="w-[75px] h-[75px] rounded-2xl flex items-center justify-center mb-4 text-3xl"
        >
          {icon}
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
          onClick={() => router.push(`/services/it/${slug}`)}
          animate={{
            backgroundColor: isHovered ? "rgba(255,255,255,0.18)" : "#ffffff",
            color: isHovered ? "#ffffff" : "#000000",
            borderColor: isHovered ? "rgba(255,255,255,0.4)" : "#d1d5db",
          }}
          className="border px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-2"
        >
          Learn More <FaArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const ITServices: React.FC = () => {
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

  const servicesData = [
    {
      title: "Web Development",
      slug: "web-development",
      description: "Build responsive, fast and scalable web apps.",
      icon: <FaCode />,
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description: "Create modern apps for iOS & Android.",
      icon: <FaMobile />,
    },
    {
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description: "Deploy secure and scalable cloud systems.",
      icon: <FaCloud />,
    },
    {
      title: "Cyber Security",
      slug: "cybersecurity",
      description: "Protect your digital infrastructure.",
      icon: <FaShieldAlt />,
    },
    {
      title: "IT Infrastructure",
      slug: "infrastructure",
      description: "Set up robust IT architecture.",
      icon: <FaServer />,
    },
    {
      title: "Database Management",
      slug: "database",
      description: "Optimize and secure your data systems.",
      icon: <FaDatabase />,
    },
    {
      title: "DevOps Services",
      slug: "devops",
      description: "Automate workflows for faster delivery.",
      icon: <FaCogs />,
    },
    {
      title: "AI & ML",
      slug: "ai-ml",
      description: "Build smart AI-driven applications.",
      icon: <FaServer />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="it-services"
      className="relative pt-5 pb-20 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            IT{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Accelerate your business with next-gen technology solutions that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              scale with your ambition
            </span>
            .
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
        >
          <AnimatePresence>
            {servicesData.map((service, index) => (
              <ITServiceCard
                key={service.title}
                {...service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact-us")}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg"
          >
            Get IT Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;