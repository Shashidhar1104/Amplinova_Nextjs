"use client";

import React from "react";
import {
  FaUsers,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaChartLine,
  FaBullseye,
  FaCheck,
  FaArrowRight,
  FaStar,
  FaHandshake,
  FaSearch,
  FaHashtag,
  FaDollarSign,
  FaPalette,
  FaFilter,
  FaCog,
  FaRocket,
} from "react-icons/fa";

type IconType = React.ElementType;

type Service = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
};

type CampaignType = {
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

type InfluencerTier = {
  name: string;
  description: string;
  icon: IconType;
  metrics: string[];
};

export default function InfluencerMarketing() {

  const services: Service[] = [
    {
      icon: FaSearch,
      title: "Influencer Discovery & Vetting",
      description:
        "Identify and vet influencers for your brand niche with detailed analytics",
      features: [
        "Audience Analysis",
        "Engagement Validation",
        "Brand Fit Assessment",
        "Performance Tracking",
      ],
    },
    {
      icon: FaHandshake,
      title: "Campaign Strategy & Management",
      description:
        "End-to-end management of influencer partnerships and campaigns",
      features: [
        "Campaign Planning",
        "Contract Negotiation",
        "Content Briefing",
        "Performance Monitoring",
      ],
    },
    {
      icon: FaInstagram,
      title: "Content Strategy",
      description:
        "Creative direction and content planning for maximum engagement",
      features: [
        "Content Calendar",
        "Creative Direction",
        "Hashtag Strategy",
        "Post Optimization",
      ],
    },
    {
      icon: FaChartLine,
      title: "Performance Analytics",
      description:
        "Comprehensive tracking and ROI measurement for influencer campaigns",
      features: [
        "Engagement Tracking",
        "Conversion Monitoring",
        "ROI Calculation",
        "Brand Sentiment",
      ],
    },
    {
      icon: FaHashtag,
      title: "Hashtag Campaigns",
      description:
        "Branded hashtag campaigns and user-generated content strategies",
      features: [
        "Hashtag Creation",
        "UGC Collection",
        "Community Building",
        "Content Amplification",
      ],
    },
    {
      icon: FaUsers,
      title: "Community Building",
      description:
        "Long-term influencer relationships for authentic brand advocacy",
      features: [
        "Talent Database",
        "Relationship Management",
        "Nurture Campaigns",
        "Feedback Collection",
      ],
    },
  ];

  const campaignTypes: CampaignType[] = [
    {
      category: "Sponsored Content",
      items: [
        "Instagram Posts",
        "TikTok Videos",
        "YouTube Reviews",
        "Stories",
        "Reels",
      ],
      icon: FaInstagram,
    },
    {
      category: "Affiliate Campaigns",
      items: [
        "Discount Codes",
        "Tracked Links",
        "Product Gifting",
        "Exclusive Offers",
      ],
      icon: FaDollarSign,
    },
    {
      category: "Brand Partnerships",
      items: [
        "Brand Ambassadors",
        "Product Collaborations",
        "Content Series",
        "Long-term Deals",
      ],
      icon: FaStar,
    },
  ];

  const features: Feature[] = [
    {
      title: "Audience Targeting",
      description:
        "Target audiences by demographics, interests and engagement behavior",
      icon: FaBullseye,
    },
    {
      title: "Performance Analytics",
      description:
        "Track reach, engagement, conversions and influencer ROI",
      icon: FaChartLine,
    },
    {
      title: "Relationship Management",
      description:
        "Centralized system for managing influencer communications",
      icon: FaUsers,
    },
    {
      title: "Content Amplification",
      description:
        "Boost influencer content through ads and cross-platform promotion",
      icon: FaRocket,
    },
  ];

  const platforms: Platform[] = [
    {
      name: "Instagram",
      description: "Best for lifestyle and visual storytelling campaigns",
      strength: "Visual engagement",
    },
    {
      name: "TikTok",
      description: "Short-form viral content platform",
      strength: "High viral potential",
    },
    {
      name: "YouTube",
      description: "Long-form reviews and tutorials",
      strength: "Detailed storytelling",
    },
    {
      name: "LinkedIn",
      description: "Professional audience for B2B campaigns",
      strength: "Professional reach",
    },
  ];

  const influencerTiers: InfluencerTier[] = [
    {
      name: "Mega Influencers",
      description: "1M+ followers with massive reach",
      icon: FaStar,
      metrics: ["1M+ Followers", "Huge Reach", "High Awareness"],
    },
    {
      name: "Macro Influencers",
      description: "100K-1M followers with strong niche authority",
      icon: FaUsers,
      metrics: ["100K-1M Followers", "Good Engagement"],
    },
    {
      name: "Micro Influencers",
      description: "10K-100K followers with strong engagement",
      icon: FaBullseye,
      metrics: ["10K-100K Followers", "Authentic Audience"],
    },
    {
      name: "Nano Influencers",
      description: "1K-10K followers with local community trust",
      icon: FaHandshake,
      metrics: ["1K-10K Followers", "Community Influence"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/Influencer-Marketing.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 text-center relative">
          <h1 className="text-6xl font-bold mb-6">
            Influencer Marketing
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Connect with authentic voices to amplify your brand and drive real engagement.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <service.icon className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              <p className="text-gray-400 mb-4">{service.description}</p>

              {service.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-orange-500" />
                  {f}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CAMPAIGN TYPES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {campaignTypes.map((type, i) => (
            <div key={i} className="p-8 border rounded-xl">
              <type.icon className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">{type.category}</h3>

              {type.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <FaCheck className="text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INFLUENCER TIERS */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {influencerTiers.map((tier, i) => (
            <div key={i} className="bg-gray-900 p-8 rounded-xl text-center">
              <tier.icon className="text-3xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">{tier.name}</h3>
              <p className="text-gray-400 mb-4">{tier.description}</p>

              {tier.metrics.map((m, idx) => (
                <div key={idx} className="text-orange-400 text-sm">
                  {m}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Amplify Your Brand?
        </h2>

        <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
          Let us connect you with influencers who resonate with your audience.
        </p>

        <button
          onClick={() => (window.location.href = "/contact-us")}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl flex items-center gap-3 mx-auto"
        >
          Launch Influencer Campaign <FaArrowRight />
        </button>
      </section>

    </div>
  );
}