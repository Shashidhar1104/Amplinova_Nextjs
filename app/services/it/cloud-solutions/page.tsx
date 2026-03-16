"use client";

import {
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaSync,
  FaChartLine,
  FaCheck,
  FaCogs,
  FaArrowRight,
  FaRocket,
  FaDollarSign,
  FaGlobe,
  FaCog,
  FaUsers,
} from "react-icons/fa";

export default function CloudSolutions() {
  const services = [
    {
      icon: FaServer,
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure to cloud platforms",
      image: "🚀",
    },
    {
      icon: FaDatabase,
      title: "Cloud Architecture",
      description: "Design and implementation of scalable cloud infrastructure",
      image: "🏗️",
    },
    {
      icon: FaShieldAlt,
      title: "Cloud Security",
      description: "Comprehensive security measures for your cloud environment",
      image: "🛡️",
    },
    {
      icon: FaSync,
      title: "DevOps & Automation",
      description: "CI/CD pipelines and infrastructure as code implementation",
      image: "⚙️",
    },
    {
      icon: FaChartLine,
      title: "Cloud Optimization",
      description: "Cost optimization and performance tuning for cloud resources",
      image: "📊",
    },
    {
      icon: FaCogs,
      title: "Managed Services",
      description: "24/7 monitoring and maintenance of cloud infrastructure",
      image: "🔧",
    },
  ];

  const platforms = {
    aws: ["EC2 & Lambda", "S3 & RDS", "CloudFront", "VPC & Security", "IAM", "CloudWatch"],
    azure: ["Virtual Machines", "Blob Storage", "SQL Database", "Active Directory", "Functions", "Monitor"],
    google: ["Compute Engine", "Cloud Storage", "BigQuery", "Kubernetes Engine", "Cloud Functions", "Operations"],
  };

  const benefits = [
    {
      title: "Scalability on Demand",
      description: "Instantly scale resources based on your needs",
      icon: FaRocket,
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs with pay-as-you-go pricing",
      icon: FaDollarSign,
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security with built-in compliance",
      icon: FaShieldAlt,
    },
    {
      title: "Global Availability",
      description: "Deploy applications closer to users worldwide",
      icon: FaGlobe,
    },
    {
      title: "Automated Maintenance",
      description: "Automatic updates, backups, and disaster recovery",
      icon: FaCog,
    },
    {
      title: "Expert Support",
      description: "24/7 access to cloud architects and engineers",
      icon: FaUsers,
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/cloud-computing.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">Cloud Solutions</h1>
          <p className="text-xl text-blue-100">
            Scale smarter and boost efficiency with our expert cloud services.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Cloud Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive cloud solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-between mb-6">
                <div className="text-4xl bg-blue-600 p-4 rounded-xl text-white">
                  {service.image}
                </div>

                <service.icon className="text-3xl text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOUD PLATFORMS */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Cloud Platforms
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 container mx-auto px-6">
          {Object.entries(platforms).map(([platform, items]) => (
            <div key={platform} className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-6 capitalize">
                {platform}
              </h3>

              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item} className="flex items-center">
                    <FaCheck className="text-green-600 mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Benefits of Cloud
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-blue-600 text-white p-8 rounded-xl">
              <benefit.icon className="text-3xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Move to the Cloud?
        </h2>

        <button
          onClick={() => (window.location.href = "/contact-us")}
          className="bg-orange-500 px-10 py-4 rounded-xl flex items-center gap-2 mx-auto hover:scale-105 transition"
        >
          Schedule Consultation
          <FaArrowRight />
        </button>
      </section>

    </div>
  );
}