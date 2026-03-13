"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaServer,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface ResultMetric {
  metric: string;
  value: string;
  change: string;
  icon: IconType;
}

interface PortfolioItem {
  title: string;
  client: string;
  description: string;
  category: string;
  results: ResultMetric[];
  timeline: string;
  technologies: string[];
  status: string;
  image: string;
  liveUrl: string;
  icon: IconType;
}

const ITServicesWork: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const portfolioData: PortfolioItem[] = [
    {
      title: "Enterprise Cloud Migration",
      client: "Global Finance Corp",
      description:
        "Large-scale migration of legacy financial systems to secure cloud infrastructure.",
      category: "Cloud Infrastructure",
      results: [
        { metric: "Infrastructure Cost", value: "40%", change: "-", icon: FaChartLine },
        { metric: "System Performance", value: "300%", change: "+", icon: FaRocket },
        { metric: "Uptime SLA", value: "99.9%", change: "+", icon: FaUsers },
      ],
      timeline: "8 Months",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      liveUrl: "https://example.com",
      icon: FaCloud,
    },
    {
      title: "Custom CRM Development",
      client: "SalesForce Pro",
      description:
        "Enterprise-grade CRM with automation workflows and advanced analytics.",
      category: "Web Application",
      results: [
        { metric: "Sales Efficiency", value: "60%", change: "+", icon: FaRocket },
        { metric: "Data Accuracy", value: "95%", change: "+", icon: FaChartLine },
        { metric: "Reporting Time", value: "80%", change: "-", icon: FaUsers },
      ],
      timeline: "5 Months",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      liveUrl: "https://example.com",
      icon: FaServer,
    },
    {
      title: "Mobile Banking Application",
      client: "SecureBank Financial",
      description:
        "Secure mobile banking platform with biometric authentication.",
      category: "Mobile Development",
      results: [
        { metric: "User Adoption", value: "85%", change: "+", icon: FaUsers },
        { metric: "Security Score", value: "9.8/10", change: "+", icon: FaChartLine },
        { metric: "Customer Rating", value: "4.9★", change: "+", icon: FaRocket },
      ],
      timeline: "6 Months",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      status: "Live",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      liveUrl: "https://example.com",
      icon: FaMobileAlt,
    },
  ];

  return (
    <section
      id="it-services-work"
      className="min-h-screen pt-10 pb-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
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
              IT Services{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Building robust technology solutions that solve complex business
              challenges and drive digital transformation.
            </motion.p>
          </div>

          {/* CARDS */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {portfolioData.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group bg-gray-800/50 rounded-2xl border border-blue-500/20 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                        <Icon className="text-blue-400" />
                      </div>
                    </div>

                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center border border-white/20"
                    >
                      <FaExternalLinkAlt className="text-white text-sm" />
                    </motion.a>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-400 text-sm">{project.client}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {project.results.map((result, i) => {
                        const ResultIcon = result.icon;
                        return (
                          <div key={i} className="text-center text-sm">
                            <ResultIcon className="mx-auto text-blue-400 mb-1" />
                            <div className="font-bold text-blue-400">
                              {result.value}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {result.metric}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between text-sm border-t pt-4 border-gray-700">
                      <span className="text-gray-400">{project.timeline}</span>

                      <button className="flex items-center gap-2 text-blue-400">
                        View Details
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact-us")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl font-bold"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITServicesWork;