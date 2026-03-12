"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaLightbulb } from "react-icons/fa";

interface ContactProps {
  mode?: "combined" | "it" | "marketing";
  title?: string | null;
  subtitle?: string | null;
}

interface ITForm {
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
}

interface DMForm {
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
}

export default function Contact({
  mode = "combined",
  title = null,
  subtitle = null,
}: ContactProps) {

  const [formType, setFormType] = useState<"it" | "dm">("it");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
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
    const { name, value, files, type, checked } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setDmData((prev) => {
        const newGoals = checked
          ? [...prev.goals, value]
          : prev.goals.filter((g) => g !== value);

        return { ...prev, goals: newGoals };
      });
      return;
    }

    setDmData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleITSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {

      const formData = new FormData();

      Object.keys(itData).forEach((key) => {
        const value = itData[key as keyof ITForm];
        if (value !== null && value !== "") {
          formData.append(key, value as any);
        }
      });

      const response = await fetch(
        "https://amplinova.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
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
    }

    setIsSubmitting(false);
  };

  const handleDMSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const benefits = [
    "Free project consultation",
    "Detailed proposal within 24h",
    "Dedicated project manager",
    "Flexible engagement models",
  ];

  return (
    <section id="contact" className="relative bg-white text-gray-800 py-12 lg:py-16">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-8 items-start">

            {/* LEFT PANEL */}

            <div className="space-y-6 mt-[100px]">

              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Start Your Project Today
                </h2>

                <p className="text-lg text-gray-600">
                  Transform your vision into reality.
                  Share your details and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">

                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" />
                  What you'll get:
                </h3>

                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>

            {/* RIGHT PANEL FORM */}

            <div className="bg-white p-8 rounded-md border border-gray-300 shadow-md w-full">

              <div className="flex w-full mb-8">

                <button
                  onClick={() => setFormType("it")}
                  className={`w-1/2 py-3 font-semibold rounded-l-md border ${
                    formType === "it"
                      ? "bg-amber-500 text-white border-amber-600"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                >
                  IT Services
                </button>

                <button
                  onClick={() => setFormType("dm")}
                  className={`w-1/2 py-3 font-semibold rounded-r-md border ${
                    formType === "dm"
                      ? "bg-amber-500 text-white border-amber-600"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                >
                  Digital Marketing
                </button>

              </div>

              {formType === "it" && (

                <form onSubmit={handleITSubmit} className="space-y-6">

                  <h3 className="text-2xl font-bold mb-4">
                    IT Development & Tech Solutions
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">

                    <input
                      type="text"
                      name="fullname"
                      placeholder="Enter your Full Name"
                      value={itData.fullname}
                      onChange={handleITChange}
                      className="w-full px-4 py-3 border border-gray-400 rounded-md"
                    />

                    <input
                      type="text"
                      name="company"
                      placeholder="Enter your Company Name"
                      value={itData.company}
                      onChange={handleITChange}
                      className="w-full px-4 py-3 border border-gray-400 rounded-md"
                    />

                  </div>

                  <textarea
                    name="description"
                    placeholder="Enter details about your project requirements..."
                    rows={3}
                    value={itData.description}
                    onChange={handleITChange}
                    className="w-full px-4 py-3 border border-gray-400 rounded-md"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-semibold"
                  >
                    Request Proposal
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}