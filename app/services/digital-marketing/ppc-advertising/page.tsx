"use client";

import React from "react";
import {
  FaChartLine,
  FaMousePointer,
  FaSearch,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaCog,
  FaSync,
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaFilter,
  FaBullseye,
  FaFileAlt,
} from "react-icons/fa";

type IconType = React.ElementType;

type Service = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
};

type Process = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

type Platform = {
  name: string;
  description: string;
  metrics: string[];
  icon: IconType;
};

type Feature = {
  category: string;
  items: string[];
  icon: IconType;
};

export default function PPCAdvertisingService() {

  const services: Service[] = [
    {
      icon: FaGoogle,
      title: "Google Ads",
      description: "Maximize visibility on the world's largest search engine",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Ads"],
    },
    {
      icon: FaFacebook,
      title: "Facebook & Instagram Ads",
      description: "Reach your target audience with precision targeting",
      features: ["News Feed Ads", "Story Ads", "Carousel Ads", "Lead Generation"],
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn Ads",
      description: "Connect with professionals and decision-makers",
      features: ["Sponsored Content", "Message Ads", "Text Ads", "Dynamic Ads"],
    },
    {
      icon: FaTwitter,
      title: "Twitter Ads",
      description: "Amplify your message in real-time conversations",
      features: ["Promoted Tweets", "Follower Ads", "Trend Takeovers", "Video Ads"],
    },
    {
      icon: FaMousePointer,
      title: "Retargeting Campaigns",
      description: "Convert visitors who showed interest in your brand",
      features: ["Pixel Implementation", "Custom Audiences", "Dynamic Retargeting", "Cross-Platform"],
    },
    {
      icon: FaBullseye,
      title: "PPC Strategy & Management",
      description: "Comprehensive campaign management and optimization",
      features: ["Bid Management", "A/B Testing", "Conversion Tracking", "ROI Analysis"],
    },
  ];

  const process: Process[] = [
    { step:"01", title:"Account Audit", description:"Analyze current PPC performance", icon:FaSearch },
    { step:"02", title:"Strategy Development", description:"Create custom PPC roadmap", icon:FaCog },
    { step:"03", title:"Campaign Setup", description:"Technical setup and targeting", icon:FaRocket },
    { step:"04", title:"Launch & Monitor", description:"Activate campaigns with monitoring", icon:FaChartLine },
    { step:"05", title:"Optimization", description:"Continuous improvement", icon:FaSync },
    { step:"06", title:"Reporting & Analysis", description:"ROI insights and reports", icon:FaFileAlt },
  ];

  const platforms: Platform[] = [
    {
      name:"Google Ads",
      description:"Search, Display, Shopping and YouTube advertising",
      metrics:["95% of searches","3.5B daily searches","200M+ visitors"],
      icon:FaGoogle
    },
    {
      name:"Facebook & Instagram",
      description:"Advanced social media targeting",
      metrics:["2.9B users","Precise demographics","High engagement"],
      icon:FaFacebook
    },
    {
      name:"LinkedIn",
      description:"B2B professional advertising",
      metrics:["830M professionals","Decision makers","High-value leads"],
      icon:FaLinkedin
    }
  ];

  const features: Feature[] = [
    {
      category:"Advanced Targeting",
      items:["Demographics","Geographic Targeting","Behavioral Targeting","Custom Audiences"],
      icon:FaBullseye
    },
    {
      category:"Optimization Tools",
      items:["Bid Management","Keyword Optimization","Ad Copy Testing","Landing Page Optimization"],
      icon:FaFilter
    },
    {
      category:"Reporting & Analytics",
      items:["Real-time Dashboards","Custom Reports","Conversion Attribution","ROI Tracking"],
      icon:FaChartLine
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/ppcdev.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-6xl font-bold mb-6">
            PPC Advertising
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get instant results with data-driven PPC campaigns that reach ready-to-buy customers.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service,i)=>(
            <div key={i} className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <service.icon className="text-3xl text-orange-500 mb-4"/>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              <p className="text-gray-400 mb-4">{service.description}</p>

              {service.features.map((f,idx)=>(
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-orange-500"/>
                  {f}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {features.map((feature,i)=>(
            <div key={i} className="p-8 border rounded-xl">
              <feature.icon className="text-3xl text-orange-500 mb-4"/>
              <h3 className="text-2xl font-bold mb-4">{feature.category}</h3>

              {feature.items.map((item,idx)=>(
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-green-500"/>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {platforms.map((platform,i)=>(
            <div key={i} className="bg-gray-900 p-8 rounded-xl">
              <platform.icon className="text-3xl text-orange-500 mb-4"/>
              <h3 className="text-xl font-bold mb-3">{platform.name}</h3>

              <p className="text-gray-400 mb-4">{platform.description}</p>

              {platform.metrics.map((m,idx)=>(
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-orange-500"/>
                  {m}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step,i)=>(
            <div key={i} className="p-8 border rounded-xl">
              <step.icon className="text-3xl text-orange-500 mb-3"/>
              <h3 className="text-xl font-bold mb-2">
                {step.step} - {step.title}
              </h3>

              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Scale with PPC?
        </h2>

        <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
          Let’s create PPC campaigns that generate leads and deliver measurable ROI.
        </p>

        <button
          onClick={() => (window.location.href="/contact-us")}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl flex items-center gap-3 mx-auto"
        >
          Start Your Campaign <FaArrowRight/>
        </button>
      </section>

    </div>
  );
}