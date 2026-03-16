"use client";

import { useRouter } from "next/navigation";
import {
  FaDatabase,
  FaSync,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaBackward,
  FaCheck,
  FaArrowRight,
  FaServer,
  FaRocket,
  FaCloud,
  FaLock,
  FaTools,
  FaHistory,
} from "react-icons/fa";

export default function DatabaseManagement() {
  const router = useRouter();

  const services = [
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Optimal database architecture for scalability",
      image: "🏗️",
    },
    {
      icon: FaSync,
      title: "Migration Services",
      description: "Seamless database migration between platforms",
      image: "🔄",
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Database security hardening and compliance",
      image: "🔒",
    },
    {
      icon: FaChartLine,
      title: "Performance Tuning",
      description: "Query optimization for maximum efficiency",
      image: "📊",
    },
    {
      icon: FaCogs,
      title: "Automated Maintenance",
      description: "Backups, indexing, and maintenance automation",
      image: "⚙️",
    },
    {
      icon: FaBackward,
      title: "Disaster Recovery",
      description: "Backup and recovery solutions",
      image: "🛡️",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/dbdevelopment.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            Database Management
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get secure, fast, and reliable data with expert database management.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Database Management Services
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
          Optimize Your Database Performance
        </h2>

        <button
          onClick={() => router.push("/contact-us")}
          className="bg-orange-500 px-10 py-4 rounded-xl flex items-center gap-2 mx-auto hover:scale-105 transition"
        >
          Get Database Audit
          <FaArrowRight />
        </button>
      </section>

    </div>
  );
}