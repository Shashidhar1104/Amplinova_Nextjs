"use client";

import { useRouter } from "next/navigation";
import {
  FaCodeBranch,
  FaDocker,
  FaGitAlt,
  FaServer,
  FaShieldAlt,
  FaRobot,
  FaCheck,
  FaArrowRight,
  FaSync,
  FaExclamationTriangle,
  FaCogs,
  FaCloud,
  FaCode,
  FaRocket
} from "react-icons/fa";

export default function DevOpsServices() {
  const router = useRouter();

  const services = [
    {
      icon: FaCodeBranch,
      title: "CI/CD Pipeline",
      description: "End-to-end continuous integration and delivery pipeline setup",
      image: "⚡"
    },
    {
      icon: FaDocker,
      title: "Containerization",
      description: "Docker and Kubernetes implementation for microservices",
      image: "🐳"
    },
    {
      icon: FaGitAlt,
      title: "Version Control",
      description: "Git workflow optimization and branching strategies",
      image: "📚"
    },
    {
      icon: FaServer,
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, and Ansible implementation",
      image: "🏗️"
    },
    {
      icon: FaShieldAlt,
      title: "DevSecOps",
      description: "Security integration throughout the development lifecycle",
      image: "🔒"
    },
    {
      icon: FaRobot,
      title: "Automation",
      description: "Complete automation of testing, deployment, and monitoring",
      image: "🤖"
    }
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center text-white py-24"
        style={{ backgroundImage: "url('/DevOps-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            DevOps Services
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Accelerate delivery, improve reliability, and enhance collaboration with our DevOps solutions.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Our DevOps Services
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
          Ready to Transform Your DevOps?
        </h2>

        <button
          onClick={() => router.push("/contact-us")}
          className="bg-orange-500 px-10 py-4 rounded-xl flex items-center gap-2 mx-auto hover:scale-105 transition"
        >
          Start DevOps Transformation
          <FaArrowRight />
        </button>
      </section>

    </div>
  );
}