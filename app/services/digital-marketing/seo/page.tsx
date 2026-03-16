"use client";

import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaMobile,
  FaShoppingCart,
  FaArrowRight,
  FaStar,
  FaGlobe,
  FaRocket,
  FaLink,
  FaFileAlt,
  FaGratipay
} from "react-icons/fa";

type IconType = React.ElementType;

type Feature = {
  icon: IconType;
  title: string;
  description: string;
  image: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

export default function SEOServices() {

  const features: Feature[] = [
    {
      icon: FaSearch,
      title: "Keyword Research",
      description:
        "Comprehensive keyword analysis to target the right audience with high-intent search terms",
      image: "🔍",
    },
    {
      icon: FaChartLine,
      title: "Technical SEO",
      description:
        "Website optimization for search engine crawling, indexing, and performance",
      image: "⚙️",
    },
    {
      icon: FaMobile,
      title: "Mobile Optimization",
      description:
        "Ensure your website provides excellent user experience across all devices",
      image: "📱",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce SEO",
      description:
        "Product page optimization and category structure for online stores",
      image: "🛒",
    },
    {
      icon: FaStar,
      title: "Local SEO",
      description:
        "Dominate local search results and Google My Business listings",
      image: "📍",
    },
    {
      icon: FaGlobe,
      title: "International SEO",
      description:
        "Global search optimization for multi-language and multi-region targeting",
      image: "🌎",
    },
  ];

  const process: ProcessStep[] = [
    {
      step: "01",
      title: "SEO Audit",
      description:
        "Comprehensive analysis of your current SEO performance and opportunities",
      icon: FaSearch,
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Custom SEO roadmap tailored to your business goals and target audience",
      icon: FaChartLine,
    },
    {
      step: "03",
      title: "On-Page Optimization",
      description:
        "Technical and content optimization across all website pages",
      icon: FaFileAlt,
    },
    {
      step: "04",
      title: "Content Creation",
      description:
        "SEO-optimized content that ranks well and engages your audience",
      icon: FaRocket,
    },
    {
      step: "05",
      title: "Link Building",
      description:
        "Strategic acquisition of high-quality backlinks from authoritative sites",
      icon: FaLink,
    },
    {
      step: "06",
      title: "Monitoring & Reporting",
      description:
        "Continuous tracking and optimization based on performance data",
      icon: FaGratipay,
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/SEOoptimization.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 relative text-center">
          <h1 className="text-6xl font-bold mb-6">
            SEO Services
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Boost rankings and drive lasting organic growth with our ROI-focused SEO strategies.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <section className="pt-10 pb-20 bg-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our SEO Services
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Improve search visibility and attract converting organic traffic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{feature.image}</div>

                  <feature.icon className="text-3xl text-blue-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="pt-10 pb-20 bg-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our SEO Process
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven framework to achieve consistent ranking improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold">
                    {step.step}
                  </div>

                  <step.icon className="text-3xl text-blue-300" />
                </div>

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 pb-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Ready to Dominate Search Rankings?
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Let’s build a long-term SEO strategy that grows your organic traffic and brings customers who are ready to convert.
          </p>

          <button
            onClick={() => (window.location.href = "/contact-us")}
            className="bg-gradient-to-r from-blue-500 to-blue-600 px-12 py-5 rounded-xl flex items-center gap-3 mx-auto"
          >
            Get Free SEO Audit
            <FaArrowRight />
          </button>

        </div>

      </section>

    </div>
  );
}