"use client";

import React, { FC } from "react";
import Image from "next/image";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaFlask,
  FaShieldAlt,
  FaCheck,
  FaUsers,
  FaArrowRight,
  FaRocket,
  FaPaintBrush,
  FaCode,
  FaHeadset,
} from "react-icons/fa";

import { SiFlutter } from "react-icons/si";


interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MobileAppDevelopment: FC = () => {
  const services: Service[] = [
    {
      icon: FaApple,
      title: "iOS App Development",
      description:
        "Native iOS applications built with Swift and Objective-C for optimal performance",
      image: "📱",
    },
    {
      icon: FaAndroid,
      title: "Android App Development",
      description:
        "Native Android apps using Kotlin and Java for seamless user experience",
      image: "🤖",
    },
    {
      icon: FaReact,
      title: "React Native Apps",
      description: "Cross-platform solutions that work on both iOS and Android",
      image: "⚛️",
    },
    {
      icon: SiFlutter,
      title: "Flutter Development",
      description:
        "Beautiful, natively compiled applications from a single codebase",
      image: "🎯",
    },
    {
      icon: FaShieldAlt,
      title: "App Security",
      description:
        "Comprehensive security measures to protect user data and privacy",
      image: "🛡️",
    },
    {
      icon: FaUsers,
      title: "App Maintenance",
      description: "Ongoing support, updates, and feature enhancements",
      image: "🔧",
    },
  ];

  const platforms: Record<string, string[]> = {
    native: [
      "iOS (Swift)",
      "Android (Kotlin)",
      "Platform-specific Features",
      "Maximum Performance",
    ],
    cross: ["React Native", "Flutter", "Single Codebase", "Faster Development"],
    hybrid: ["Ionic", "PhoneGap", "Web Technologies", "Cost-Effective"],
  };

  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Strategy & Planning",
      description:
        "Define app objectives, target audience, and feature requirements",
      icon: FaRocket,
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user interfaces and experiences",
      icon: FaPaintBrush,
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and testing",
      icon: FaCode,
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive testing on multiple devices and platforms",
      icon: FaFlask,
    },
    {
      step: "05",
      title: "App Store Deployment",
      description: "Submission and approval process for app stores",
      icon: FaRocket,
    },
    {
      step: "06",
      title: "Post-Launch Support",
      description: "Monitoring, updates, and feature enhancements",
      icon: FaHeadset,
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/devmob.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent pb-3">
            Mobile App Development
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transform your ideas into high-performance mobile apps that users
            love and businesses trust.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-gray-200
                transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl text-white">
                    {service.image}
                  </div>

                  <service.icon className="text-3xl text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI TEMPLATES */}
      <section className="container mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900">
            Mobile App UI Templates
          </h2>

          <p className="text-xl text-gray-600 mt-4">
            Explore our custom-designed mobile UI mockups
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">

          {[
            { src: "/aduri3.png", title: "Real Estate – Aduri Group" },
            { src: "/arrowai.png", title: "Tours & Travels – ArrowAI" },
            { src: "/salford.png", title: "Fashion Brand – Salford & Co" },
            { src: "/chiropractic2.png", title: "Chiropractic Health Care" },
            { src: "/organic1.png", title: "Organic Fresh and Natural" },
            { src: "/larana1.png", title: "Larana Learning School" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center group hover:-translate-y-3 transition"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={380}
                height={380}
                className="rounded-xl shadow-xl bg-black"
              />

              <p className="mt-4 text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-20 text-center text-white">

        <h2 className="text-5xl font-bold mb-8">
          Ready to Build Your Mobile App?
        </h2>

        <p className="text-xl max-w-3xl mx-auto mb-10">
          Let's turn your app idea into reality with our expert mobile
          development team.
        </p>

        <button
          onClick={() => (window.location.href = "/contact-us")}
          className="bg-orange-500 hover:bg-orange-600 px-12 py-5 rounded-xl font-semibold flex items-center gap-3 mx-auto"
        >
          Start Your App Project
          <FaArrowRight />
        </button>
      </section>

    </div>
  );
};

export default MobileAppDevelopment;