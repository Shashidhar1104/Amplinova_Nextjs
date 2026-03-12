"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Collagegrid from "../components/Collagegrid";

interface Stat {
  number: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    number: "250%",
    label: "Average Revenue Growth",
    color: "from-amber-400 to-orange-400",
  },
  {
    number: "180%",
    label: "Organic Traffic Increase",
    color: "from-amber-400 to-orange-400",
  },
  {
    number: "320%",
    label: "Social Engagement Boost",
    color: "from-amber-400 to-orange-400",
  },
  {
    number: "100%",
    label: "Performance",
    color: "from-amber-400 to-orange-400",
  },
];

const DigitalMarketingWork: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="digital-marketing-work"
      className="min-h-screen pt-10 pb-20 bg-white text-black overflow-hidden relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent">
                Work
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-black max-w-3xl mx-auto leading-relaxed"
            >
              Transforming businesses through data-driven digital marketing
              strategies that deliver measurable results and sustainable growth
              across all channels.
            </motion.p>
          </div>

          {/* Collage Grid */}
          <motion.div variants={itemVariants} className="w-full">
            <Collagegrid
              className="w-full"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 bg-gray-100 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
              >
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                >
                  {stat.number}
                </div>

                <div className="text-black text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketingWork;