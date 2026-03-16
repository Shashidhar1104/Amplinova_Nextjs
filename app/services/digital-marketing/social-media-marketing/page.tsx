"use client";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaMobile,
  FaPalette,
  FaVideo,
} from "react-icons/fa";

type IconType = React.ElementType;

type Platform = {
  icon: IconType;
  name: string;
  color: string;
  description: string;
};

type Service = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export default function SocialMediaMarketingService() {

  const platforms: Platform[] = [
    {
      icon: FaFacebook,
      name: "Facebook",
      color: "from-blue-600 to-blue-800",
      description:
        "Targeted ads and engaging content for the world's largest social network",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      color: "from-pink-500 to-rose-600",
      description:
        "Visual storytelling and influencer partnerships for brand growth",
    },
    {
      icon: FaSnapchat,
      name: "Snapchat",
      color: "from-yellow-400 to-yellow-500",
      description:
        "Snapchat helps brands reach young audiences with quick, engaging content.",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      color: "from-blue-700 to-blue-900",
      description:
        "B2B lead generation and professional brand building",
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      color: "from-sky-500 to-cyan-600",
      description:
        "Real-time engagement and trend participation",
    },
    {
      icon: FaYoutube,
      name: "YouTube",
      color: "from-red-600 to-red-800",
      description:
        "Video content strategy and channel management",
    },
  ];

  const services: Service[] = [
    {
      icon: FaChartLine,
      title: "Social Media Strategy",
      description:
        "Customized social media roadmap aligned with your business objectives",
      features: [
        "Content Calendar",
        "Platform Selection",
        "Audience Analysis",
        "Competitor Research",
      ],
    },
    {
      icon: FaPalette,
      title: "Content Creation",
      description:
        "Eye-catching visuals and compelling copy that resonates with your audience",
      features: [
        "Graphic Design",
        "Video Production",
        "Copywriting",
        "Brand Guidelines",
      ],
    },
    {
      icon: FaUsers,
      title: "Community Management",
      description:
        "Build relationships and foster engagement with your audience",
      features: [
        "Comment Management",
        "Message Responses",
        "Engagement Growth",
        "Brand Advocacy",
      ],
    },
    {
      icon: FaRocket,
      title: "Paid Advertising",
      description:
        "Targeted social media ads that drive conversions and ROI",
      features: [
        "Ad Campaigns",
        "Audience Targeting",
        "A/B Testing",
        "ROI Tracking",
      ],
    },
    {
      icon: FaVideo,
      title: "Influencer Marketing",
      description:
        "Leverage trusted voices to amplify your brand message",
      features: [
        "Influencer Vetting",
        "Campaign Management",
        "Relationship Building",
        "Performance Tracking",
      ],
    },
    {
      icon: FaMobile,
      title: "Social Commerce",
      description:
        "Turn social engagement into direct sales and revenue",
      features: [
        "Shop Integration",
        "Product Tags",
        "Checkout Optimization",
        "Sales Tracking",
      ],
    },
  ];

  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "Deep dive into your brand, audience, and competitive landscape",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Custom social media strategy tailored to your business goals",
    },
    {
      step: "03",
      title: "Content Creation",
      description:
        "Production of engaging content across selected platforms",
    },
    {
      step: "04",
      title: "Implementation",
      description:
        "Strategic posting, community management, and engagement",
    },
    {
      step: "05",
      title: "Paid Amplification",
      description:
        "Targeted advertising to boost reach and drive conversions",
    },
    {
      step: "06",
      title: "Analysis & Optimization",
      description:
        "Performance tracking and continuous strategy improvement",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/bgsocial.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 relative text-center">
          <h1 className="text-6xl font-bold mb-6">
            Social Media Marketing
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Turn your social presence into real growth with content that engages and builds community.
          </p>
        </div>
      </div>

      {/* PLATFORMS */}
      <section className="pt-10 pb-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Platform Expertise
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We master every major social platform to connect with your audience wherever they are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">

                  <div
                    className={`bg-gradient-to-r ${platform.color} p-4 rounded-2xl text-white text-2xl`}
                  >
                    <platform.icon />
                  </div>

                  <div className="text-2xl font-bold">
                    {platform.name}
                  </div>

                </div>

                <p className="text-gray-300">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="pt-10 pb-20 bg-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Social Media Services
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end social media solutions designed to drive meaningful results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl p-4 rounded-2xl inline-flex mb-6">
                  <service.icon />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <FaCheck className="text-green-600 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="pt-10 pb-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Our 6-Step Process
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A strategic approach to social media success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl"
              >
                <div className="text-3xl font-bold text-orange-400 mb-4">
                  {step.step}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Ready to Dominate Social Media?
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Let's create a social media presence that captivates your audience,
            builds brand loyalty, and drives measurable business growth.
          </p>

          <button
            onClick={() => (window.location.href = "/contact-us")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 px-12 py-5 rounded-xl flex items-center gap-3 mx-auto"
          >
            Launch Your Campaign
            <FaArrowRight />
          </button>

        </div>

      </section>

    </div>
  );
}