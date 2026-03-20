"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaClock,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ================= TYPES ================= */

interface ITFormData {
  form_type: "it";
  fullname: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
  deadline: string;
  file: File | null;
}

interface DMFormData {
  form_type: "dm";
  fullname: string;
  brand: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  goals: string[];
  description: string;
  file: File | null;
}

/* ================= COMPONENT ================= */

const ContactUs = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [formType, setFormType] = useState<"it" | "dm">("it");

  const [itData, setItData] = useState<ITFormData>({
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

  const [dmData, setDmData] = useState<DMFormData>({
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

  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ================= ANIMATIONS ================= */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  /* ================= OPTIONS ================= */

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

  /* ================= HANDLERS ================= */

  const handleITChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setItData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleDMChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files, type, checked } =
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
    /* ================= SUBMIT ================= */

  const handleITSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();

      Object.keys(itData).forEach((key) => {
        const value = itData[key as keyof ITFormData];

        if (key === "file" && value) {
          formData.append(key, value);
        } else if (value !== null && value !== "") {
          formData.append(key, value as string);
        }
      });

      const res = await fetch(
        "https://amplinova.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setSubmitStatus("success");
        setItData({
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
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDMSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();

      Object.entries(dmData).forEach(([key, value]) => {
  if (key === "file" && value instanceof File) {
    formData.append(key, value);
  } 
  else if (key === "goals" && Array.isArray(value)) {
    value.forEach((g) => formData.append("goals", g));
  } 
  else if (typeof value === "string" && value !== "") {
    formData.append(key, value);
  }
});

      const res = await fetch(
        "https://amplinova.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setSubmitStatus("success");
        setDmData({
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
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ================= UI ================= */

  return (
    <>

      <section className="pt-10 pb-10 bg-gradient-to-br from-amber-50 via-white to-orange-50 text-gray-800">
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h1 variants={itemVariants} className="text-5xl font-bold text-gray-900">
              Contact Us
            </motion.h1>
          </motion.div>

          {/* LAYOUT */}
          <div className="grid lg:grid-cols-[25%_75%] gap-10">

            {/* LEFT SIDE */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow">
                <FaPhone /> +91 9976089089
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white p-8 rounded-2xl shadow">

              {/* TABS */}
              <div className="flex mb-6">
                <button
                  onClick={() => setFormType("it")}
                  className={`w-1/2 py-2 ${
                    formType === "it"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  IT Services
                </button>

                <button
                  onClick={() => setFormType("dm")}
                  className={`w-1/2 py-2 ${
                    formType === "dm"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Digital Marketing
                </button>
              </div>

              {/* STATUS */}
              {submitStatus === "success" && (
                <p className="text-green-600 mb-4">
                  Submitted successfully!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-600 mb-4">
                  Something went wrong.
                </p>
              )}

              {/* IT FORM */}
              {formType === "it" && (
                <form onSubmit={handleITSubmit} className="space-y-4">
                  <input
                    name="fullname"
                    value={itData.fullname}
                    onChange={handleITChange}
                    placeholder="Full Name"
                    className="w-full border p-2"
                    required
                  />

                  <textarea
                    name="description"
                    value={itData.description}
                    onChange={handleITChange}
                    placeholder="Project Description"
                    className="w-full border p-2"
                    required
                  />

                  <button className="bg-amber-600 text-white px-6 py-2 rounded">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}

              {/* DM FORM */}
              {formType === "dm" && (
                <form onSubmit={handleDMSubmit} className="space-y-4">
                  <input
                    name="fullname"
                    value={dmData.fullname}
                    onChange={handleDMChange}
                    placeholder="Full Name"
                    className="w-full border p-2"
                    required
                  />

                  <textarea
                    name="description"
                    value={dmData.description}
                    onChange={handleDMChange}
                    placeholder="Marketing Needs"
                    className="w-full border p-2"
                    required
                  />

                  <button className="bg-amber-600 text-white px-6 py-2 rounded">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ContactUs;