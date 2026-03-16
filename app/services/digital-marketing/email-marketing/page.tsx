"use client";

import React from "react";
import {
  FaEnvelope,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaCog,
  FaSync,
  FaMagic,
  FaEye,
  FaList,
  FaFilter,
  FaPalette,
  FaMobile,
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

type EmailType = {
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

export default function EmailMarketingService() {

  const services: Service[] = [
    {
      icon: FaList,
      title: "Email Strategy",
      description: "Develop comprehensive email marketing strategies that align with your business goals",
      features: ["Audience Segmentation","Content Planning","Send Time Optimization","Goal Setting"],
    },
    {
      icon: FaPalette,
      title: "Template Design",
      description: "Create stunning, responsive email templates that convert across all devices",
      features: ["Mobile-Responsive","Brand-Aligned","A/B Testing","Custom Coding"],
    },
    {
      icon: FaEnvelope,
      title: "Campaign Management",
      description: "End-to-end management of your email campaigns from setup to analysis",
      features: ["Automation Setup","List Management","Performance Tracking","Spam Testing"],
    },
    {
      icon: FaUsers,
      title: "List Growth",
      description: "Strategies to grow your email list with qualified subscribers",
      features: ["Lead Magnets","Opt-in Forms","Landing Pages","Social Integration"],
    },
    {
      icon: FaFilter,
      title: "Automation & Sequences",
      description: "Set up automated email sequences that nurture leads and drive conversions",
      features: ["Welcome Series","Drip Campaigns","Behavioral Triggers","Cart Abandonment"],
    },
    {
      icon: FaChartLine,
      title: "Analytics & Optimization",
      description: "Comprehensive tracking and continuous improvement of email performance",
      features: ["Open Rate Tracking","Click Monitoring","Conversion Analysis","ROI Measurement"],
    },
  ];

  const process: Process[] = [
    { step:"01", title:"Audit & Analysis", description:"Review current email marketing performance", icon:FaChartLine },
    { step:"02", title:"Strategy Development", description:"Create customized email roadmap", icon:FaCog },
    { step:"03", title:"List Building", description:"Grow subscriber base with quality leads", icon:FaUsers },
    { step:"04", title:"Content Creation", description:"Design engaging email templates", icon:FaPalette },
    { step:"05", title:"Automation Setup", description:"Configure automated sequences", icon:FaSync },
    { step:"06", title:"Launch & Optimize", description:"Execute campaigns and improve using data", icon:FaMagic },
  ];

  const emailTypes: EmailType[] = [
    {
      category:"Promotional Emails",
      items:["Newsletters","Product Launches","Special Offers","Seasonal Campaigns","Flash Sales","Event Invitations"],
      icon:FaRocket
    },
    {
      category:"Automated Sequences",
      items:["Welcome Series","Onboarding Sequences","Cart Abandonment","Re-engagement Campaigns","Post-Purchase Follow-ups","Educational Drips"],
      icon:FaSync
    },
    {
      category:"Transactional Emails",
      items:["Order Confirmations","Shipping Notifications","Account Updates","Password Resets","Payment Receipts","Support Responses"],
      icon:FaEnvelope
    }
  ];

  const features: Feature[] = [
    { title:"Advanced Segmentation", description:"Target subscribers based on behavior and engagement", icon:FaFilter },
    { title:"A/B Testing", description:"Test subject lines, content and send times", icon:FaChartLine },
    { title:"Mobile Optimization", description:"Perfect rendering across all devices", icon:FaMobile },
    { title:"Analytics Dashboard", description:"Real-time tracking of opens and conversions", icon:FaEye },
  ];

  const platforms: Platform[] = [
    { name:"Mailchimp", description:"Great for small to medium businesses", strength:"Easy automation & templates" },
    { name:"Klaviyo", description:"E-commerce focused email platform", strength:"Advanced segmentation" },
    { name:"HubSpot", description:"Marketing platform with CRM integration", strength:"Seamless CRM integration" },
    { name:"ActiveCampaign", description:"Advanced automation platform", strength:"Machine learning automation" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/email.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-6xl font-bold mb-6">Email Marketing</h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Build lasting customer relationships and steady revenue with
            high-converting email campaigns.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="pt-10 pb-20 bg-black text-white">
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

      {/* EMAIL TYPES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {emailTypes.map((type,i)=>(
            <div key={i} className="p-8 border rounded-xl">
              <type.icon className="text-3xl text-orange-500 mb-4"/>
              <h3 className="text-2xl font-bold mb-4">{type.category}</h3>

              {type.items.map((item,idx)=>(
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-green-500"/>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          {features.map((feature,i)=>(
            <div key={i} className="bg-gray-900 p-8 rounded-xl">
              <feature.icon className="text-3xl text-orange-500 mb-4"/>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Transform Your Email Marketing?
        </h2>

        <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
          Let's create email campaigns that build relationships and drive
          conversions for your business.
        </p>

        <button
          onClick={()=>window.location.href="/contact-us"}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl flex items-center gap-3 mx-auto"
        >
          Launch Your Campaign <FaArrowRight/>
        </button>
      </section>

    </div>
  );
}