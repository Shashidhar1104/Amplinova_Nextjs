"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FaPlay,
  FaArrowRight,
  FaChartLine,
  FaCode,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaSearch,
  FaShoppingCart,
  FaServer,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";
import Lottie from "lottie-react";
import anime from "../anime/ass-marketing.json";

type HeroMode = "it" | "marketing" | "combined";

interface HeroProps {
  mode?: HeroMode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  mode = "combined",
  title = null,
  subtitle = null,
}) => {
  const router = useRouter();

  const combinedServices = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Custom websites & web applications",
    },
    {
      icon: FaMobile,
      title: "Digital Marketing",
      description: "SEO, Social Media & PPC campaigns",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure",
    },
    {
      icon: FaShieldAlt,
      title: "Cyber Security",
      description: "Complete digital protection",
    },
  ];

  const getMainTitle = () => {
    if (title) return title;

    return (
      <>
        Transform Your{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent block">
          Business
        </span>
      </>
    );
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle;

    return (
      <>
        Complete <span className="text-blue-400 font-semibold">IT solutions</span>{" "}
        and powerful{" "}
        <span className="text-orange-400 font-semibold">
          Digital Marketing
        </span>{" "}
        strategies that drive growth and innovation.
      </>
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT TEXT */}
          <div className="lg:w-1/2 text-center lg:text-left">

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {getMainTitle()}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {getSubtitle()}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">

              <button
                onClick={() => router.push("/contact-us")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Get Started
                <FaArrowRight />
              </button>

              <button
                onClick={() => router.push("/contact-us")}
                className="border border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:border-orange-500 hover:text-orange-400 transition"
              >
                <FaPlay />
                Watch Demo
              </button>

            </div>

            {/* SERVICES QUICK GRID */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-6">
                Our Expertise Includes:
              </h3>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">

                {combinedServices.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-800 px-4 py-3 rounded-xl border border-gray-700 hover:border-blue-500 transition"
                    >
                      <Icon className="text-blue-400 text-xl" />
                      <span className="text-sm font-medium">
                        {service.title}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>

          {/* RIGHT ANIMATION */}
          <div className="lg:w-1/2 flex justify-center">

            <div className="bg-gray-900 rounded-3xl p-6 border border-gray-700 shadow-xl max-w-lg w-full">

              <Lottie
                animationData={anime}
                loop
                autoplay
                style={{ height: 320 }}
              />

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-orange-900/30 border border-orange-700 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FaChartLine className="text-orange-400" />
                    <div>
                      <h4 className="text-sm font-semibold">
                        Digital Marketing
                      </h4>
                      <p className="text-xs text-orange-200">
                        Growth & Analytics
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FaLaptopCode className="text-blue-400" />
                    <div>
                      <h4 className="text-sm font-semibold">
                        Technology
                      </h4>
                      <p className="text-xs text-blue-200">
                        Innovation & Solutions
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;