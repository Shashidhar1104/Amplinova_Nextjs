"use client";

import React from "react";
import {
  FaPen,
  FaVideo,
  FaPalette,
  FaPhotoVideo,
  FaMicrophone,
  FaEdit,
  FaArrowRight,
  FaCheck,
  FaLightbulb,
  FaCog,
  FaSync,
  FaLayerGroup,
  FaMagic,
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

type ContentType = {
  category: string;
  items: string[];
  icon: IconType;
};

export default function ContentCreationService() {
  const services: Service[] = [
    {
      icon: FaPen,
      title: "Copywriting",
      description:
        "Compelling written content that converts readers into customers",
      features: [
        "Blog Posts",
        "Website Copy",
        "Product Descriptions",
        "Email Campaigns",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaVideo,
      title: "Video Production",
      description:
        "Professional video content that engages and tells your brand story",
      features: [
        "Commercial Videos",
        "Social Media Clips",
        "Product Demos",
        "Testimonials",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaPalette,
      title: "Graphic Design",
      description:
        "Stunning visuals that capture attention and communicate your message",
      features: [
        "Social Media Graphics",
        "Infographics",
        "Brand Assets",
        "Marketing Materials",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaPhotoVideo,
      title: "Photography",
      description:
        "High-quality imagery that showcases your products and brand",
      features: [
        "Product Photography",
        "Lifestyle Shots",
        "Brand Photography",
        "Event Coverage",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaMicrophone,
      title: "Audio Production",
      description:
        "Crystal-clear audio content for podcasts and voiceovers",
      features: [
        "Podcast Production",
        "Voiceovers",
        "Audio Ads",
        "Sound Design",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaEdit,
      title: "Content Strategy",
      description:
        "Strategic planning to ensure your content delivers maximum impact",
      features: [
        "Content Planning",
        "Audience Research",
        "SEO Strategy",
        "Performance Analysis",
      ],
      color: "from-orange-500 to-amber-500",
    },
  ];

  const process: Process[] = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep dive into your brand, audience, and content goals",
      icon: FaLightbulb,
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Create a customized content roadmap aligned with your objectives",
      icon: FaCog,
    },
    {
      step: "03",
      title: "Content Creation",
      description:
        "Production of high-quality, engaging content across all formats",
      icon: FaPen,
    },
    {
      step: "04",
      title: "Review & Revisions",
      description:
        "Collaborative feedback process to perfect every piece",
      icon: FaSync,
    },
    {
      step: "05",
      title: "Optimization",
      description:
        "SEO and performance optimization for maximum reach",
      icon: FaMagic,
    },
    {
      step: "06",
      title: "Distribution",
      description:
        "Strategic publishing and promotion across relevant channels",
      icon: FaLayerGroup,
    },
  ];

  const contentTypes: ContentType[] = [
    {
      category: "Written Content",
      items: [
        "Blog Articles",
        "Website Copy",
        "Social Media Posts",
        "Email Newsletters",
        "Whitepapers",
        "Case Studies",
        "Press Releases",
        "Product Descriptions",
      ],
      icon: FaPen,
    },
    {
      category: "Visual Content",
      items: [
        "Social Media Graphics",
        "Infographics",
        "Website Banners",
        "Presentation Decks",
        "E-book Designs",
        "Print Materials",
        "Brand Guidelines",
        "Icon Sets",
      ],
      icon: FaPalette,
    },
    {
      category: "Video & Audio",
      items: [
        "Explainer Videos",
        "Social Media Clips",
        "Product Demos",
        "Testimonial Videos",
        "Podcast Episodes",
        "Voiceovers",
        "Audio Ads",
        "Video Ads",
      ],
      icon: FaVideo,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/contentdev.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 relative text-center">
          <h1 className="text-6xl font-bold mb-6">Content Creation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transform your brand with compelling content that captivates
            audiences and drives impact.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="pt-10 pb-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 border border-gray-700"
            >
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

      {/* CONTENT TYPES */}
      <section className="pt-10 pb-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {contentTypes.map((type, index) => (
            <div key={index} className="p-8 border rounded-xl">
              <type.icon className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">{type.category}</h3>

              {type.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="pt-10 pb-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl">
              <step.icon className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                {step.step} - {step.title}
              </h3>

              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Content?
        </h2>

        <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
          Let's create content that resonates with your audience and drives
          real business results.
        </p>

        <button
          onClick={() => (window.location.href = "/contact-us")}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl flex items-center gap-3 mx-auto"
        >
          Start Creating <FaArrowRight />
        </button>
      </section>
    </div>
  );
}