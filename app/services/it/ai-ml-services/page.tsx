"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaEye,
  FaLanguage,
  FaCogs,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCode,
  FaCheck,
  FaArrowRight,
  FaExclamationTriangle,
} from "react-icons/fa";

//import Navbar from "@/components/Navbar";
//import Footer from "@/components/Footer";

const AIMLServices = () => {
  const router = useRouter();

  const services = [
    {
      icon: FaBrain,
      title: "Machine Learning",
      description:
        "Custom ML models for prediction, classification, and recommendation systems",
      image: "🤖",
    },
    {
      icon: FaChartLine,
      title: "Predictive Analytics",
      description:
        "Data-driven insights and forecasting for business decision making",
      image: "📈",
    },
    {
      icon: FaEye,
      title: "Computer Vision",
      description:
        "Image recognition, object detection, and video analysis solutions",
      image: "👁️",
    },
    {
      icon: FaLanguage,
      title: "NLP Solutions",
      description:
        "Chatbots, sentiment analysis, and language processing capabilities",
      image: "💬",
    },
    {
      icon: FaRobot,
      title: "AI Automation",
      description:
        "Intelligent process automation and workflow optimization",
      image: "⚙️",
    },
    {
      icon: FaCogs,
      title: "MLOps",
      description:
        "End-to-end machine learning lifecycle management and deployment",
      image: "🚀",
    },
  ];

  const challenges = [
    {
      name: "Data Quality & Preparation",
      description:
        "Cleaning, labeling, and structuring data for effective model training.",
      complexity: "High",
      icon: FaDatabase,
    },
    {
      name: "Model Deployment",
      description:
        "Moving from experimentation to scalable, reliable production systems.",
      complexity: "High",
      icon: FaServer,
    },
    {
      name: "Infrastructure Cost",
      description:
        "Managing the expense of computational resources for training and inference.",
      complexity: "Medium",
      icon: FaCloud,
    },
    {
      name: "Talent Gap",
      description:
        "Finding and retaining skilled data scientists and ML engineers.",
      complexity: "High",
      icon: FaBrain,
    },
    {
      name: "Ethical AI & Bias",
      description:
        "Ensuring models are fair, transparent, and free from unintended bias.",
      complexity: "Critical",
      icon: FaExclamationTriangle,
    },
    {
      name: "Integration with Legacy Systems",
      description:
        "Connecting modern AI solutions with existing business IT infrastructure.",
      complexity: "Medium",
      icon: FaCogs,
    },
  ];

  const solutions = [
    {
      area: "Model Development",
      icon: FaCode,
      measures: [
        "Custom Algorithm Design",
        "Hyperparameter Tuning",
        "Model Validation",
        "Experiment Tracking",
        "Feature Engineering",
        "A/B Testing",
      ],
    },
    {
      area: "Data Engineering",
      icon: FaDatabase,
      measures: [
        "Data Pipeline Creation",
        "Feature Store Management",
        "Data Versioning",
        "Quality Monitoring",
        "Automated Labeling",
        "Privacy Compliance",
      ],
    },
    {
      area: "MLOps & Deployment",
      icon: FaCogs,
      measures: [
        "CI/CD for ML",
        "Docker",
        "Kubernetes",
        "Model Serving",
        "Performance Monitoring",
        "Automated Retraining",
      ],
    },
    {
      area: "Cloud AI Platforms",
      icon: FaCloud,
      measures: [
        "AWS SageMaker",
        "Google Vertex AI",
        "Azure ML",
        "Managed Kubernetes",
        "Serverless Inference",
        "Cost Optimization",
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* <Navbar /> */}

      {/* HERO */}
      <div className="relative text-white py-24 overflow-hidden bg-[url('/ai-ml.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            AI & ML Services
          </h1>

          <p className="text-xl text-blue-100">
            Transform your business with intelligent AI solutions. From predictive
            analytics to automation.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our AI & ML Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 hover:shadow-2xl transition"
              >
                <div className="flex justify-between mb-6">
                  <div className="text-4xl bg-blue-600 p-4 rounded-2xl text-white">
                    {service.image}
                  </div>

                  <service.icon className="text-3xl text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Common AI/ML Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <c.icon className="text-xl text-blue-600 mr-4" />
                  <h3 className="text-xl font-bold">{c.name}</h3>
                </div>

                <p className="text-gray-600">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our AI/ML Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <s.icon className="text-2xl mr-3" />
                  <h3 className="text-2xl font-bold">{s.area}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {s.measures.map((m, idx) => (
                    <div key={idx} className="flex items-center text-blue-100">
                      <FaCheck className="text-green-300 mr-2" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-center text-white">
        <h2 className="text-5xl font-bold mb-6">Ready to Transform with AI?</h2>

        <button
          onClick={() => router.push("/contact-us")}
          className="bg-orange-500 px-10 py-4 rounded-xl flex items-center gap-2 mx-auto hover:scale-105 transition"
        >
          Start AI Transformation
          <FaArrowRight />
        </button>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default AIMLServices;