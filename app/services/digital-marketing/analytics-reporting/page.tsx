"use client";

import React from "react";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaCheck,
  FaCog,
  FaSync,
  FaEye,
  FaHeart,
  FaAward,
  FaFilter,
  FaDownload,
  FaCogs,
  FaGlobe,
  FaSearch,
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

type ReportType = {
  category: string;
  items: string[];
  icon: IconType;
};

type Tool = {
  name: string;
  description: string;
  features: string[];
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Metric = {
  category: string;
  items: string[];
};

export default function AnalyticsReportingService() {
  const services: Service[] = [
    {
      icon: FaChartLine,
      title: "Performance Analytics",
      description:
        "Comprehensive tracking and analysis of your key business metrics",
      features: [
        "KPI Tracking",
        "Conversion Analysis",
        "Trend Identification",
        "Performance Benchmarks",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaDatabase,
      title: "Data Integration",
      description:
        "Seamlessly connect and unify data from all your marketing platforms",
      features: [
        "API Integrations",
        "Data Warehousing",
        "Cross-Platform Tracking",
        "Real-time Sync",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaChartBar,
      title: "Custom Dashboards",
      description:
        "Tailored reporting dashboards that provide actionable insights",
      features: [
        "Real-time Dashboards",
        "Custom Metrics",
        "Interactive Visualizations",
        "Role-based Access",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaFilter,
      title: "Advanced Segmentation",
      description:
        "Deep dive into specific audience segments and behaviors",
      features: [
        "Audience Segmentation",
        "Behavioral Analysis",
        "Cohort Analysis",
        "Funnel Visualization",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaChartPie,
      title: "ROI Attribution",
      description:
        "Accurate measurement of marketing ROI across all channels",
      features: [
        "Multi-touch Attribution",
        "Channel Performance",
        "LTV Calculation",
        "Campaign ROI",
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: FaCogs,
      title: "Automated Reporting",
      description:
        "Scheduled, automated reports delivered to your team",
      features: [
        "Custom Reports",
        "Scheduled Delivery",
        "PDF Exports",
        "Stakeholder Updates",
      ],
      color: "from-orange-500 to-amber-500",
    },
  ];

  const process: Process[] = [
    {
      step: "01",
      title: "Data Audit",
      description:
        "Comprehensive review of your current data sources and tracking",
      icon: FaDatabase,
    },
    {
      step: "02",
      title: "Goal Setting",
      description:
        "Define key metrics and business objectives for measurement",
      icon: FaChartLine,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Set up tracking, integrations, and data collection systems",
      icon: FaCog,
    },
    {
      step: "04",
      title: "Dashboard Development",
      description:
        "Create custom dashboards and visualization frameworks",
      icon: FaChartBar,
    },
    {
      step: "05",
      title: "Analysis & Insights",
      description:
        "Deep dive into data to uncover actionable insights",
      icon: FaSearch,
    },
    {
      step: "06",
      title: "Ongoing Optimization",
      description:
        "Continuous monitoring and improvement of reporting systems",
      icon: FaSync,
    },
  ];

  const reportTypes: ReportType[] = [
    {
      category: "Marketing Analytics",
      items: [
        "Campaign Performance",
        "Channel Attribution",
        "Customer Acquisition",
        "Conversion Funnels",
        "ROI Analysis",
        "Budget Optimization",
      ],
      icon: FaChartLine,
    },
    {
      category: "Website Analytics",
      items: [
        "Traffic Analysis",
        "User Behavior",
        "Page Performance",
        "Conversion Tracking",
        "Technical Metrics",
        "SEO Performance",
      ],
      icon: FaGlobe,
    },
    {
      category: "Business Intelligence",
      items: [
        "Sales Performance",
        "Customer Insights",
        "Operational Metrics",
        "Financial Reporting",
        "Market Trends",
        "Competitive Analysis",
      ],
      icon: FaChartBar,
    },
  ];

  const tools: Tool[] = [
    {
      name: "Google Analytics",
      description: "Comprehensive web and app analytics platform",
      features: [
        "Event Tracking",
        "E-commerce Analytics",
        "User Flow Analysis",
        "Custom Dimensions",
      ],
      icon: FaChartLine,
    },
    {
      name: "Google Data Studio",
      description: "Interactive dashboard and reporting platform",
      features: [
        "Custom Visualizations",
        "Data Blending",
        "Automated Reports",
        "Team Collaboration",
      ],
      icon: FaChartBar,
    },
    {
      name: "Custom Solutions",
      description:
        "Tailored analytics platforms for unique business needs",
      features: [
        "API Integrations",
        "Custom Metrics",
        "White-label Reports",
        "Advanced Segmentation",
      ],
      icon: FaCogs,
    },
  ];

  const features: Feature[] = [
    {
      title: "Real-time Dashboards",
      description:
        "Live data visualization with interactive charts and metrics",
      icon: FaEye,
    },
    {
      title: "Custom Metrics",
      description:
        "Track business-specific KPIs that matter to your organization",
      icon: FaChartLine,
    },
    {
      title: "Automated Alerts",
      description:
        "Get notified of significant changes and performance anomalies",
      icon: FaHeart,
    },
    {
      title: "Multi-channel Attribution",
      description:
        "Understand how different channels contribute to conversions",
      icon: FaFilter,
    },
    {
      title: "Competitive Benchmarking",
      description:
        "Compare your performance against industry standards",
      icon: FaAward,
    },
    {
      title: "Export & Share",
      description:
        "Easy export capabilities and collaborative sharing features",
      icon: FaDownload,
    },
  ];

  const metrics: Metric[] = [
    {
      category: "Marketing Metrics",
      items: [
        "CTR (Click-Through Rate)",
        "CPC (Cost Per Click)",
        "ROAS (Return on Ad Spend)",
        "LTV (Lifetime Value)",
        "CAC (Customer Acquisition Cost)",
        "Conversion Rate",
      ],
    },
    {
      category: "Website Metrics",
      items: [
        "Bounce Rate",
        "Session Duration",
        "Pages per Session",
        "Traffic Sources",
        "Device Breakdown",
        "Geography Analysis",
      ],
    },
    {
      category: "Business Metrics",
      items: [
        "Revenue Growth",
        "Customer Retention",
        "Churn Rate",
        "Average Order Value",
        "Sales Velocity",
        "Profit Margins",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/analytical.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Analytics & Reporting
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Turn raw data into insights with analytics and real-time
            reporting for smarter decisions.
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

              <ul className="space-y-2">
                {service.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-orange-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* REPORT TYPES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {reportTypes.map((type, i) => (
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

      {/* TOOLS */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="bg-gray-900 p-8 rounded-xl">
              <tool.icon className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
              <p className="text-gray-400 mb-4">{tool.description}</p>

              {tool.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheck className="text-orange-500" />
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
          {features.map((feature, i) => (
            <div key={i} className="text-center p-8 border rounded-xl">
              <feature.icon className="text-3xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">{metric.category}</h3>

              {metric.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaChartLine className="text-orange-500" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {process.map((step, i) => (
            <div key={i} className="p-8 border rounded-xl">
              <step.icon className="text-3xl text-orange-500 mb-3" />
              <h3 className="text-xl font-bold mb-2">
                {step.step} - {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}