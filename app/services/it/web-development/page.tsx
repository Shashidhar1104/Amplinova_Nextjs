"use client";

import React from "react";
import {
  FaCode,
  FaMobile,
  FaDesktop,
  FaShoppingCart,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaWordpress,
  FaShopify,
  FaMagento,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiRubyonrails,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,  
} from "react-icons/si";


const WebDevelopment: React.FC = () => {
  const features = [
    {
      icon: FaDesktop,
      title: "Responsive Design",
      description:
        "Websites that look perfect on all devices - desktop, tablet, and mobile",
      image: "🖥️",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online store development with secure payment integration",
      image: "🛒",
    },
    {
      icon: FaDatabase,
      title: "CMS Development",
      description: "Custom content management systems for easy content updates",
      image: "📊",
    },
    {
      icon: FaShieldAlt,
      title: "Security First",
      description:
        "Built-in security measures to protect against vulnerabilities",
      image: "🛡️",
    },
    {
      icon: FaRocket,
      title: "Performance Optimized",
      description:
        "Lightning-fast loading times for better user experience and SEO",
      image: "🚀",
    },
    {
      icon: FaMobile,
      title: "Progressive Web Apps",
      description: "Web applications that feel like native mobile apps",
      image: "📱",
    },
  ];

  const technologies = {
    frontend: [
      { name: "React", icon: FaReact, color: "text-blue-500" },
      { name: "Vue.js", icon: FaVuejs, color: "text-green-500" },
      { name: "Angular", icon: FaAngular, color: "text-red-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "SASS", icon: SiSass, color: "text-pink-500" },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
      { name: "Python", icon: FaPython, color: "text-blue-400" },
      { name: "PHP", icon: FaPhp, color: "text-purple-500" },
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "Ruby on Rails", icon: SiRubyonrails, color: "text-red-600" },
      { name: ".NET", icon: SiDotnet, color: "text-purple-600" },
    ],
    database: [
      { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
    ],
    cms: [
      { name: "WordPress", icon: FaWordpress, color: "text-blue-800" },
      { name: "Shopify", icon: FaShopify, color: "text-green-600" },
      { name: "Magento", icon: FaMagento, color: "text-orange-600" },
      { name: "Custom CMS", icon: FaCode, color: "text-gray-600" },
    ],
  };

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your requirements and creating a detailed project plan",
      image: "🎯",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Creating wireframes and designs for optimal user experience",
      image: "🎨",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with clean, maintainable code",
      image: "💻",
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Rigorous testing across all devices and browsers",
      image: "🧪",
    },
    {
      step: "05",
      title: "Deployment",
      description:
        "Launching your website and ensuring everything works perfectly",
      image: "🚀",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description:
        "Ongoing support and updates to keep your site running smoothly",
      image: "🔧",
    },
  ];

  return (
    <div className="bg-gray-50">
   

      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden"
        style={{ backgroundImage: "url('/Web-development.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent pb-3">
              Web Development
            </h1>

            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Custom, responsive, and high-performance websites that drive
              results.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div className="pt-10 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl text-white">
                    {feature.image}
                  </div>

                  <feature.icon className="text-3xl text-blue-600 opacity-80" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PORTFOLIO WEBSITES */}
      <div className="pt-10 pb-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-gray-900 mb-10">
            Portfolio Websites
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore fully working live demo websites embedded directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {[
              { url: "https://rajasreetownships.in/", name: "Rajasree Townships" },
              { url: "https://adurigroup.com/", name: "Aduri Group" },
              { url: "https://spineresetchiropractic.com/", name: "Spine Reset Chiropractic" },
              { url: "https://vivinfra.com/", name: "Viv Infra" },
              { url: "https://arrowai.com/", name: "Arrow AI" },
              { url: "https://vyntradigital.com/", name: "Vyntra Digital" },
            ].map((site, i) => (
              <div key={i} className="bg-white rounded-3xl border shadow-lg p-4">
                <iframe
                  src={site.url}
                  className="w-full h-96 rounded-2xl"
                  loading="lazy"
                ></iframe>

                <h3 className="text-xl font-semibold mt-4">
                  {site.name}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative pt-10 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Build Your Website?
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's discuss your project and build a high-performing website.
          </p>

          <button
            onClick={() => (window.location.href = "/contact-us")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto"
          >
            Get Free Consultation
            <FaArrowRight />
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default WebDevelopment;