"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaLightbulb } from "react-icons/fa";

interface ContactProps {
  mode?: "combined" | "it" | "marketing";
  title?: string | null;
  subtitle?: string | null;
}

type ITForm = {
  form_type: string;
  fullname: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
  deadline: string;
  file: File | null;
};

type DMForm = {
  form_type: string;
  fullname: string;
  brand: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  goals: string[];
  description: string;
  file: File | null;
};

export default function Contact({
  mode = "combined",
  title = null,
  subtitle = null,
}: ContactProps) {

  const [formType, setFormType] = useState<"it" | "dm">("it");
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [itData, setItData] = useState<ITForm>({
    form_type: "it",
    fullname: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
    deadline: "",
    file: null,
  });

  const [dmData, setDmData] = useState<DMForm>({
    form_type: "dm",
    fullname: "",
    brand: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    goals: [],
    description: "",
    file: null,
  });

  /* ---------------- SERVICES ---------------- */

  const itServices = [
    { value: "web_development", label: "Web Development" },
    { value: "app_development", label: "App Development" },
    { value: "software_development", label: "Software Development" },
    { value: "cloud_solutions", label: "Cloud Solutions" },
    { value: "it_consulting", label: "IT Consulting" },
    { value: "automation_ai", label: "Automation/AI Integration" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "other_it", label: "Other" },
  ];

  const dmServices = [
    { value: "social_media_marketing", label: "Social Media Marketing" },
    { value: "performance_marketing", label: "Performance Marketing (Ads)" },
    { value: "seo", label: "SEO" },
    { value: "branding_design", label: "Branding & Creative Design" },
    { value: "content_marketing", label: "Content Marketing" },
    { value: "lead_generation", label: "Lead Generation" },
    { value: "website_marketing", label: "Website Marketing" },
    { value: "marketing_automation", label: "Marketing Automation" },
    { value: "all_in_one", label: "All-in-One Digital Marketing" },
    { value: "other_dm", label: "Other" },
  ];

  const itBudgets = [
    { value: "it_25_50k", label: "₹25,000 – ₹50,000" },
    { value: "it_50_100k", label: "₹50,000 – ₹1,00,000" },
    { value: "it_100_500k", label: "₹1,00,000 – ₹5,00,000" },
    { value: "it_500k_plus", label: "₹5,00,000+" },
  ];

  const dmBudgets = [
    { value: "dm_20_50k", label: "₹20,000 – ₹50,000" },
    { value: "dm_50_100k", label: "₹50,000 – ₹1,00,000" },
    { value: "dm_100_500k", label: "₹1,00,000 – ₹5,00,000" },
    { value: "dm_500k_plus", label: "₹5,00,000+" },
  ];

  const businessGoals = [
    { value: "increase_leads", label: "Increase Leads" },
    { value: "brand_awareness", label: "Improve Brand Awareness" },
    { value: "social_media_growth", label: "Grow Social Media" },
    { value: "website_traffic", label: "Increase Website Traffic" },
    { value: "scale_sales", label: "Scale Sales" },
  ];

  /* ---------------- FORM HANDLERS ---------------- */

  const handleITChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setItData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleDMChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {

    const { name, value, type, checked, files } =
      e.target as HTMLInputElement;

    if (type === "checkbox") {
      setDmData((prev) => ({
        ...prev,
        goals: checked
          ? [...prev.goals, value]
          : prev.goals.filter((g) => g !== value),
      }));
      return;
    }

    setDmData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  /* ---------------- ANIMATIONS ---------------- */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  /* ---------------- TEXT HELPERS ---------------- */

  const getMainTitle = () => {
    if (title) return title;
    return "Start Your Project Today";
  };

  const getSubtitle = () => {
    if (subtitle) return subtitle;
    return "Transform your vision into reality. Share your details and we'll get back to you within 24 hours.";
  };

  const benefits = [
    "Free project consultation",
    "Detailed proposal within 24h",
    "Dedicated project manager",
    "Flexible engagement models",
  ];

  /* ---------------- UI ---------------- */

  return (
    <section
      id="contact"
      className="relative bg-white text-gray-800 py-12 lg:py-16"
    >

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >

          <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-8 items-start">

            {/* LEFT PANEL */}

            <motion.div variants={itemVariants} className="space-y-6 mt-[100px]">

              <h2 className="text-3xl sm:text-4xl font-bold">
                {getMainTitle()}
              </h2>

              <p className="text-lg text-gray-600">{getSubtitle()}</p>

              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FaLightbulb className="text-yellow-500" /> What you'll get
              </h3>

              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <FaCheck className="text-green-500 mt-1" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-lg p-4 border">
                <p className="text-sm font-medium">
                  Join 500+ satisfied clients
                </p>
                <p className="text-xs text-gray-600">
                  Trusted by businesses worldwide
                </p>
              </div>

            </motion.div>

            {/* RIGHT PANEL */}

            <motion.div variants={itemVariants}>

              <div className="bg-white p-8 rounded-md border shadow-md">

                {/* TABS */}

                <div className="flex mb-8">

                  <button
                    onClick={() => setFormType("it")}
                    className={`w-1/2 py-3 font-semibold rounded-l-md border ${
                      formType === "it"
                        ? "bg-amber-500 text-white"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    IT Services
                  </button>

                  <button
                    onClick={() => setFormType("dm")}
                    className={`w-1/2 py-3 font-semibold rounded-r-md border ${
                      formType === "dm"
                        ? "bg-amber-500 text-white"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    Digital Marketing
                  </button>

                </div>

                {/* IT FORM */}

                {formType === "it" && (

                  <form className="space-y-6">

                    <h3 className="text-2xl font-bold">
                      IT Development & Tech Solutions
                    </h3>

                    {/* Name + Company */}

                    <div className="grid md:grid-cols-2 gap-6">

                      <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your Full Name"
                        value={itData.fullname}
                        onChange={handleITChange}
                        className="w-full px-4 py-3 border rounded-md"
                      />

                      <input
                        type="text"
                        name="company"
                        placeholder="Enter your Company Name"
                        value={itData.company}
                        onChange={handleITChange}
                        className="w-full px-4 py-3 border rounded-md"
                      />

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={itData.email}
                        onChange={handleITChange}
                        className="w-full px-4 py-3 border rounded-md"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your Phone Number"
                        value={itData.phone}
                        onChange={handleITChange}
                        className="w-full px-4 py-3 border rounded-md"
                      />

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                      <select
                        name="service"
                        value={itData.service}
                        onChange={handleITChange}
                        className="w-full px-4 py-3 border rounded-md"
                      >
                        <option>Select Service</option>
                        {itServices.map((s) => (
                          <option key={s.value}>{s.label}</option>
                        ))}
                      </select>

                      <select
                        name="budget"
                        value={itData.budget}
                        onChange={handleITChange}
                        className="w-full px-4 py-3 border rounded-md"
                      >
                        <option>Select Budget</option>
                        {itBudgets.map((b) => (
                          <option key={b.value}>{b.label}</option>
                        ))}
                      </select>

                    </div>

                    <textarea
                      name="description"
                      placeholder="Enter details about your project requirements..."
                      rows={3}
                      value={itData.description}
                      onChange={handleITChange}
                      className="w-full px-4 py-3 border rounded-md"
                    />

                    <button className="w-full py-3 bg-amber-600 text-white rounded-md">
                      Request Proposal
                    </button>

                  </form>

                )}

                

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}