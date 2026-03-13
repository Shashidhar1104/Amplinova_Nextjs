"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaRocket,
  FaCity,
  FaUtensils,
  FaPlusCircle,
  FaHotel,
  FaPlaneDeparture,
  FaIndustry,
  FaBoxes,
  FaBuilding,
  FaHeartbeat,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface Industry {
  name: string;
  icon: React.ElementType;
  href?: string;
  color: string;
  iconColor: string;
  description: string;
}

interface IndustryCardProps {
  industry: Industry;
  index: number;
  mode: "digital-marketing" | "it-services";
}

const serviceIndustries = {
  industries: [
    {
      name: "Food & Beverages",
      icon: FaUtensils,
      href: "/industries/food-beverages",
      color: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-500",
      description:
        "Custom software solutions for restaurant management, inventory tracking, and delivery systems.",
    },
    {
      name: "Hospitality",
      icon: FaHotel,
      href: "/industries/hospitality",
      color: "from-green-500 to-teal-500",
      iconColor: "text-green-500",
      description:
        "Hotel management systems, booking platforms, and customer experience solutions.",
    },
    {
      name: "Tours & Travels",
      icon: FaPlaneDeparture,
      href: "/industries/tours-travels",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
      description:
        "Travel booking engines, itinerary planners, and tourism management software.",
    },
    {
      name: "Real Estate",
      icon: FaCity,
      href: "/industries/real-estate",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      description:
        "Property management systems, virtual tours, and real estate CRM solutions.",
    },
  ],
};

const productIndustries = {
  industries: [
    {
      name: "Health Care",
      icon: FaHeartbeat,
      href: "/industries/healthcare",
      color: "from-red-500 to-pink-500",
      iconColor: "text-red-500",
      description:
        "Healthcare marketing strategies, patient acquisition, and medical brand building.",
    },
    {
      name: "Education",
      icon: FaGraduationCap,
      href: "/industries/education",
      color: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-500",
      description:
        "Education marketing campaigns, student enrollment strategies, and institutional branding.",
    },
    {
      name: "Manufacturing",
      icon: FaIndustry,
      href: "/industries/manufacturing",
      color: "from-gray-500 to-blue-500",
      iconColor: "text-gray-500",
      description:
        "Industrial marketing, B2B lead generation, and manufacturing brand development.",
    },
    {
      name: "FMCG",
      icon: FaBoxes,
      href: "/industries/fmcg",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
      description:
        "Fast-moving consumer goods marketing, retail promotions, and brand awareness campaigns.",
    },
    {
      name: "Many more to come",
      icon: FaPlusCircle,
      color: "from-indigo-500 to-purple-500",
      iconColor: "text-indigo-500",
      description:
        "We're constantly expanding our industry solutions. Stay tuned for more specialized services.",
    },
  ],
};

const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  index,
  mode,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const IconComponent = industry.icon;

  const iconBg = mode === "digital-marketing" ? "bg-orange-500" : "bg-blue-600";
  const buttonBg =
    mode === "digital-marketing" ? "bg-orange-500" : "bg-blue-600";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer flex-shrink-0"
      style={{ width: "320px" }}
    >
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 h-full flex flex-col">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${iconBg} mb-6`}
        >
          <IconComponent className="text-white text-2xl" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-white">{industry.name}</h3>

        <p className="text-gray-300 leading-relaxed text-lg mb-6 flex-grow">
          {industry.description}
        </p>

        {industry.href && (
          <a
            href={industry.href}
            className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-semibold text-white ${buttonBg}`}
          >
            Explore Solutions <FaRocket className="ml-2 text-sm" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

interface IndustriesProps {
  mode?: "digital-marketing" | "it-services";
}

const Industries: React.FC<IndustriesProps> = ({
  mode = "digital-marketing",
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const industries =
    mode === "digital-marketing"
      ? productIndustries.industries
      : serviceIndustries.industries;

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 344;

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative pt-10 pb-10 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
        >
          Industry{" "}
          <span
            className={
              mode === "digital-marketing"
                ? "bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"
            }
          >
            Expertise
          </span>
        </motion.h2>

        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1 }}
            className={`h-1 ${
              mode === "digital-marketing"
                ? "bg-gradient-to-r from-orange-500 to-red-500"
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            } mx-auto rounded-full`}
          />
        </div>
        <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Specialized {mode === "digital-marketing" ? "digital marketing" : "IT"} solutions for{" "}
            <span className={`bg-gradient-to-r from-${mode === "digital-marketing" ? "orange-500 to-orange-500" : "blue-500 to-blue-300"} bg-clip-text text-transparent font-semibold`}>
              diverse industries
            </span>
          </motion.p>

        <div className="relative mt-10">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2"
          >
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.name}
                industry={industry}
                index={index}
                mode={mode}
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
