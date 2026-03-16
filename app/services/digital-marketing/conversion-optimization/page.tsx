"use client";

import React from "react";
import {
  FaChartLine,
  FaMousePointer,
  FaSearch,
  FaUsers,
  FaCogs,
  FaLightbulb,
  FaCheck,
  FaArrowRight,
  FaMobileAlt,
  FaClipboardCheck,
  FaSync,
  FaMagic,
  FaPalette,
  FaFilter
} from "react-icons/fa";

type IconType = React.ElementType;

type Service = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  color: string;
};

type Process = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

type OptimizationArea = {
  category: string;
  items: string[];
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Platform = {
  name: string;
  description: string;
  strength: string;
};

export default function ConversionOptimization() {

  const services: Service[] = [
    {
      icon: FaSearch,
      title: "CRO Audit & Analysis",
      description:
        "Comprehensive analysis of your conversion funnel and user journey to identify optimization opportunities",
      features: [
        "Funnel Analysis",
        "Heatmap Tracking",
        "Session Recordings",
        "User Surveys",
        "Competitor Analysis",
        "Technical Audit"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaMousePointer,
      title: "A/B & Multivariate Testing",
      description:
        "Data-driven testing of design, copy, and layout variations to maximize conversions",
      features: [
        "Hypothesis Creation",
        "Test Implementation",
        "Statistical Analysis",
        "Results Interpretation",
        "Iterative Testing",
        "Personalization"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaUsers,
      title: "User Experience Optimization",
      description:
        "Enhance user experience to reduce friction and improve conversion rates",
      features: [
        "UX Analysis",
        "Usability Testing",
        "User Flow Mapping",
        "Interface Design",
        "Mobile Optimization",
        "Accessibility Review"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaClipboardCheck,
      title: "Landing Page Optimization",
      description:
        "Design and optimize high-converting landing pages that drive specific actions",
      features: [
        "Copy Optimization",
        "Visual Hierarchy",
        "Form Design",
        "Trust Elements",
        "Call-to-Action Testing",
        "Mobile Responsiveness"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaCogs,
      title: "Technical Optimization",
      description:
        "Improve technical performance to eliminate barriers to conversion",
      features: [
        "Page Speed Optimization",
        "Mobile Responsiveness",
        "Cross-Browser Testing",
        "Security Enhancements",
        "Schema Markup",
        "Core Web Vitals"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: FaChartLine,
      title: "Analytics & Reporting",
      description:
        "Comprehensive tracking and data-driven insights for continuous improvement",
      features: [
        "Conversion Tracking",
        "Funnel Visualization",
        "KPI Monitoring",
        "ROI Analysis",
        "Reporting Dashboards",
        "Predictive Analytics"
      ],
      color: "from-orange-500 to-amber-500"
    }
  ];

  const process: Process[] = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "Comprehensive review of current performance and identification of optimization opportunities",
      icon: FaSearch
    },
    {
      step: "02",
      title: "Hypothesis Creation",
      description:
        "Develop data-backed hypotheses for testing based on user behavior insights",
      icon: FaLightbulb
    },
    {
      step: "03",
      title: "Test Design & Setup",
      description:
        "Design and implement A/B or multivariate tests with proper tracking",
      icon: FaCogs
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "Roll out changes based on winning test variations and insights",
      icon: FaMagic
    },
    {
      step: "05",
      title: "Monitoring & Analysis",
      description:
        "Continuously monitor performance and analyze results for further optimization",
      icon: FaChartLine
    },
    {
      step: "06",
      title: "Iterative Optimization",
      description:
        "Apply learnings to develop new hypotheses and continue optimization cycles",
      icon: FaSync
    }
  ];

  const optimizationAreas: OptimizationArea[] = [
    {
      category: "Page Elements",
      items: [
        "Headlines & Copy",
        "Call-to-Actions",
        "Forms & Fields",
        "Images & Videos",
        "Trust Indicators",
        "Social Proof"
      ],
      icon: FaPalette
    },
    {
      category: "User Experience",
      items: [
        "Navigation & Flow",
        "Mobile Experience",
        "Page Speed",
        "Accessibility",
        "Error Handling",
        "Personalization"
      ],
      icon: FaUsers
    },
    {
      category: "Testing Methods",
      items: [
        "A/B Testing",
        "Multivariate Testing",
        "Split URL Testing",
        "Personalization Tests",
        "Seasonal Testing",
        "Personalized Experiences"
      ],
      icon: FaMousePointer
    }
  ];

  const features: Feature[] = [
    {
      title: "Advanced Analytics",
      description:
        "In-depth tracking of user behavior, conversion paths, and micro-conversions",
      icon: FaChartLine
    },
    {
      title: "Heatmap Analysis",
      description:
        "Visual representation of user clicks, scrolls, and attention patterns",
      icon: FaSearch
    },
    {
      title: "Mobile Optimization",
      description:
        "Ensure perfect performance and conversions across all mobile devices",
      icon: FaMobileAlt
    },
    {
      title: "Segmentation & Targeting",
      description:
        "Deliver personalized experiences based on user behavior and demographics",
      icon: FaFilter
    }
  ];

  const platforms: Platform[] = [
    {
      name: "Google Optimize",
      description:
        "Free A/B testing platform integrated with Google Analytics",
      strength: "Seamless Google Analytics integration"
    },
    {
      name: "Optimizely",
      description:
        "Enterprise-grade experimentation platform with advanced features",
      strength: "Advanced statistical engine"
    },
    {
      name: "VWO",
      description:
        "Comprehensive conversion optimization platform with heatmaps",
      strength: "All-in-one testing suite"
    },
    {
      name: "Hotjar",
      description:
        "Behavior analytics platform with heatmaps and recordings",
      strength: "User behavior insights"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/ConversionRate.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-6xl font-bold mb-6">
            Conversion Optimization
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transform visitors into customers. Data-driven optimization
            strategies to maximize your website's conversion potential.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="pt-10 pb-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <service.icon className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              <p className="text-gray-400 mb-4">{service.description}</p>

              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-orange-500" />
                  {feature}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Boost Your Conversions?
        </h2>

        <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
          Let us help you transform your website into a high-converting machine.
        </p>

        <button
          onClick={() => (window.location.href = "/contact-us")}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl flex items-center gap-3 mx-auto"
        >
          Start Free CRO Audit <FaArrowRight />
        </button>
      </section>

    </div>
  );
}