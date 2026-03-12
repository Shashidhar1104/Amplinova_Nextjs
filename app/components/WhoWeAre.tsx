"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const WhoWeAre = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const values: any[] = [];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .stagger-item {
          opacity: 0;
          animation: slideInUp 0.6s ease-out forwards;
        }

        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      <section
        id="about"
        className="pt-10 pb-10 bg-white text-gray-800 overflow-hidden relative rounded-3xl mx-4 my-8"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div
            ref={ref}
            className={`max-w-7xl mx-auto ${
              isInView ? "stagger-animation" : ""
            }`}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative stagger-item">
                Who{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent relative inline-block">
                  We Are
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed stagger-item">
                A passionate team of digital innovators dedicated to transforming
                your business through cutting-edge marketing solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* LEFT CONTENT */}
              <div className="space-y-6 relative stagger-item">
                <div className="space-y-4 bg-white rounded-2xl p-8">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    ROI Driven{" "}
                    <span className="text-amber-600">Marketing</span>
                  </h2>

                  <h1 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                    Digital Growth Marketing Agency & IT Solutions!
                  </h1>

                  <p className="text-gray-600 text-base">
                    At Amplinova, we’re a next-gen digital agency built on
                    performance, automation and AI
                  </p>

                  <h2 className="text-3xl font-semibold tracking-wide">
                    Marketers Talk. Data Delivers.
                  </h2>

                  <p className="text-gray-600 text-base">
                    We focus on ROI from Day 1 — no fluff, just growth.
                  </p>

                  <button
                    onClick={() => (window.location.href = "/about")}
                    className="mt-4 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-md hover:bg-amber-700 hover:shadow-lg transition duration-300"
                  >
                    Know More
                  </button>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="relative stagger-item">
                <div className="relative bg-white rounded-3xl p-3 border border-amber-100 shadow-lg overflow-hidden">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/team.jpg"
                      alt="Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* VALUES */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 stagger-animation">
              {values.map((value: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;