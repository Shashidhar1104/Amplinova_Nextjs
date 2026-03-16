"use client";

import { useRouter } from "next/navigation";
import {
  FaNetworkWired,
  FaServer,
  FaDesktop,
  FaWifi,
  FaCogs,
  FaShieldAlt,
  FaCheck,
  FaArrowRight,
  FaSync,
  FaRocket,
  FaChartLine,
  FaCog,
  FaHeadset
} from "react-icons/fa";

export default function ITInfrastructure() {
  const router = useRouter();

  const services = [
    {
      icon: FaNetworkWired,
      title: "Network Design",
      description: "Scalable and secure network architecture",
      image: "🌐"
    },
    {
      icon: FaServer,
      title: "Server Management",
      description: "Cloud and on-premise server configuration",
      image: "🖥️"
    },
    {
      icon: FaDesktop,
      title: "Workstation Setup",
      description: "Employee workstation configuration and deployment",
      image: "💻"
    },
    {
      icon: FaWifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless networks",
      image: "📡"
    },
    {
      icon: FaCogs,
      title: "System Integration",
      description: "Integration of systems and applications",
      image: "⚙️"
    },
    {
      icon: FaShieldAlt,
      title: "Infrastructure Security",
      description: "Security across your IT infrastructure",
      image: "🛡️"
    }
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/ITinfrastructure.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            IT Infrastructure
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Build a secure, scalable IT infrastructure that supports your growth.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Infrastructure Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
          {services.map((service) => (
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

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          Optimize Your IT Infrastructure
        </h2>

        <button
          onClick={() => router.push("/contact-us")}
          className="bg-orange-500 px-10 py-4 rounded-xl flex items-center gap-2 mx-auto hover:scale-105 transition"
        >
          Get Infrastructure Audit
          <FaArrowRight />
        </button>
      </section>

    </div>
  );
}