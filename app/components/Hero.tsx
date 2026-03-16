"use client";

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
import anime from "@/app/anime/ass-marketing.json";

export default function Hero({
  mode = "combined",
  title = null,
  subtitle = null,
}: {
  mode?: "it" | "marketing" | "combined";
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  const router = useRouter();

  const itServices = [
    { icon: FaCode, title: "Web Development" },
    { icon: FaServer, title: "Cloud Solutions" },
    { icon: FaShieldAlt, title: "Cyber Security" },
    { icon: FaDatabase, title: "Data Solutions" },
  ];

  const marketingServices = [
    { icon: FaSearch, title: "SEO Optimization" },
    { icon: FaCloud, title: "Social Media Marketing" },
    { icon: FaShoppingCart, title: "E-commerce Solutions" },
    { icon: FaChartLine, title: "Analytics & ROI" },
  ];

  const combinedServices = [
    { icon: FaCode, title: "Web Development" },
    { icon: FaMobile, title: "Digital Marketing" },
    { icon: FaCloud, title: "Cloud Solutions" },
    { icon: FaShieldAlt, title: "Cyber Security" },
  ];

  const getServices = () => {
    if (mode === "it") return itServices;
    if (mode === "marketing") return marketingServices;
    return combinedServices;
  };

  const getMainTitle = () => {
    if (title) return title;

    if (mode === "it")
      return (
        <>
          Transform Your
          <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent block">
            Technology
          </span>
        </>
      );

    if (mode === "marketing")
      return (
        <>
          Amplify Your
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent block">
            Digital Presence
          </span>
        </>
      );

    return (
      <>
        Transform Your
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent block">
          Business
        </span>
      </>
    );
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle;

    if (mode === "it")
      return (
        <>
          Complete <span className="text-blue-400">IT Solutions</span> and
          cutting-edge <span className="text-cyan-400">technology services</span>
        </>
      );

    if (mode === "marketing")
      return (
        <>
          Powerful{" "}
          <span className="text-orange-400">Digital Marketing strategies</span>{" "}
          that maximize your growth.
        </>
      );

    return (
      <>
        Complete <span className="text-blue-400">IT solutions</span> and powerful{" "}
        <span className="text-orange-400">Digital Marketing</span> strategies.
      </>
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden py-20">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {getMainTitle()}
            </h1>

            <p className="text-xl text-gray-300 mb-8">{getSubtitle()}</p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start mb-10">

              <button
                onClick={() => router.push("/contact-us")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Get Started <FaArrowRight />
              </button>

              <button
                onClick={() => router.push("/contact-us")}
                className="border border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FaPlay /> Watch Demo
              </button>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {getServices().map((service) => (
                <div
                  key={service.title}
                  className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700"
                >
                  <service.icon className="text-blue-400 text-xl" />
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:w-1/2 flex justify-center">

            <div className="bg-gray-900 p-6 rounded-3xl border border-gray-700">

              <Lottie
                animationData={anime}
                loop
                style={{ height: 300 }}
              />

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-orange-900/40 p-4 rounded-xl flex items-center gap-3">
                  <FaChartLine className="text-orange-400 text-xl" />
                  <span>{mode === "it" ? "IT Solutions" : "Marketing"}</span>
                </div>

                <div className="bg-blue-900/40 p-4 rounded-xl flex items-center gap-3">
                  <FaLaptopCode className="text-blue-400 text-xl" />
                  <span>Technology</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}