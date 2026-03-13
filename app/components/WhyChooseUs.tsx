"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  mode?: "digital-marketing" | "it-services" | "combined";
}

interface AdditionalStat {
  value: string;
  label: string;
}

interface StatsData {
  projectsCompleted: string;
  clientsServed: string;
  projectsDescription: string;
  clientsDescription: string;
  additionalStats: AdditionalStat[];
}

const WhyChooseUs: React.FC<Props> = ({ mode = "combined" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getThemeConfig = () => {
    if (mode === "digital-marketing") {
      return {
        gradient: "from-orange-600 to-red-600",
        lightGradient: "from-orange-500 to-red-500",
        badgeText: "text-orange-600",
      };
    } else if (mode === "it-services") {
      return {
        gradient: "from-blue-600 to-purple-600",
        lightGradient: "from-blue-500 to-purple-500",
        badgeText: "text-blue-600",
      };
    } else {
      return {
        gradient: "from-purple-600 to-blue-600",
        lightGradient: "from-purple-500 to-blue-500",
        badgeText: "text-purple-600",
      };
    }
  };

  const themeConfig = getThemeConfig();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const statsVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const getStatsData = (): StatsData => {
    if (mode === "digital-marketing") {
      return {
        projectsCompleted: "850+",
        clientsServed: "320+",
        projectsDescription: "Successful Campaigns",
        clientsDescription: "Satisfied Clients",
        additionalStats: [
          { value: "240%", label: "Average ROI Increase" },
          { value: "98%", label: "Client Retention Rate" },
        ],
      };
    } else if (mode === "it-services") {
      return {
        projectsCompleted: "1200+",
        clientsServed: "450+",
        projectsDescription: "IT Projects Delivered",
        clientsDescription: "Business Partners",
        additionalStats: [
          { value: "99.9%", label: "Uptime Guarantee" },
          { value: "24/7", label: "Support Available" },
        ],
      };
    } else {
      return {
        projectsCompleted: "2050+",
        clientsServed: "770+",
        projectsDescription: "Total Projects",
        clientsDescription: "Happy Clients",
        additionalStats: [
          { value: "99%", label: "Client Satisfaction" },
          { value: "10+", label: "Years Experience" },
        ],
      };
    }
  };

  const statsData = getStatsData();

  const imageUrls: Record<Props["mode"], string> = {
    "digital-marketing":
      "https://images.unsplash.com/photo-1551434678-e076c223a692",
    "it-services":
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    combined:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  };

  return (
    <section
      id="why-choose-us"
      className="bg-white pt-5 pb-5 text-gray-800 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* HEADER */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Why Choose{" "}
              <span
                className={`bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent`}
              >
                Amplinova?
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We deliver reliable, scalable and future-ready digital and IT
              solutions that accelerate your business growth.
            </motion.p>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* IMAGE */}
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl blur-lg opacity-30" />

                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={imageUrls[mode]}
                    alt="why choose amplinova"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div variants={itemVariants} className="lg:w-1/2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {mode === "digital-marketing"
                      ? "Transform Your Digital Presence"
                      : mode === "it-services"
                      ? "Build Future-Ready Technology Solutions"
                      : "Complete Digital Transformation"}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8">
                    {mode === "digital-marketing"
                      ? "Our digital marketing expertise helps your brand grow using data-driven strategies."
                      : mode === "it-services"
                      ? "We build secure, scalable, and high-performance IT solutions."
                      : "We combine technology infrastructure with digital marketing."}
                  </p>
                </div>

                {/* STATS */}
                <motion.div
                  variants={statsVariants}
                  className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200"
                >
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {statsData.projectsCompleted}
                    </div>
                    <div className="text-sm text-gray-600 uppercase">
                      {statsData.projectsDescription}
                    </div>
                  </div>

                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${themeConfig.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {statsData.clientsServed}
                    </div>
                    <div className="text-sm text-gray-600 uppercase">
                      {statsData.clientsDescription}
                    </div>
                  </div>
                </motion.div>

                {/* EXTRA STATS */}
                <motion.div
                  variants={statsVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  {statsData.additionalStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`text-2xl font-bold ${themeConfig.badgeText}`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/contact-us")}
                  className={`w-full px-8 py-4 bg-gradient-to-r ${themeConfig.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition`}
                >
                  Get Started Today
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;