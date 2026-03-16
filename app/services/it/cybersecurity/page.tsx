"use client";

import { useRouter } from "next/navigation";
import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaEye,
  FaBug,
  FaNetworkWired,
  FaCheck,
  FaExclamationTriangle,
  FaArrowRight,
  FaGlobe,
  FaMobile,
  FaCloud,
  FaServer,
  FaCode,
} from "react-icons/fa";

export default function Cybersecurity() {
  const router = useRouter();

  const services = [
    {
      icon: FaUserShield,
      title: "Security Assessment",
      description: "Comprehensive vulnerability assessment and penetration testing",
      image: "🔍",
    },
    {
      icon: FaLock,
      title: "Data Protection",
      description: "Encryption and data loss prevention strategies",
      image: "🔒",
    },
    {
      icon: FaEye,
      title: "Network Security",
      description: "Firewall configuration and intrusion detection systems",
      image: "🌐",
    },
    {
      icon: FaBug,
      title: "Application Security",
      description: "Secure code review and vulnerability testing",
      image: "🐛",
    },
    {
      icon: FaNetworkWired,
      title: "Cloud Security",
      description: "Security configuration for cloud infrastructure",
      image: "☁️",
    },
    {
      icon: FaShieldAlt,
      title: "Compliance",
      description: "GDPR, HIPAA, PCI DSS compliance implementation",
      image: "📋",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/Cybersecurity.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">Cybersecurity</h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Protect your digital assets with strong cybersecurity that stops threats and ensures compliance.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Our Cybersecurity Services
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
          Secure Your Business Today
        </h2>

        <button
          onClick={() => router.push("/contact-us")}
          className="bg-orange-500 px-10 py-4 rounded-xl flex items-center gap-2 mx-auto hover:scale-105 transition"
        >
          Get Security Audit
          <FaArrowRight />
        </button>
      </section>

    </div>
  );
}