"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

type ITData = {
  fullname: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
};

type DMData = {
  fullname: string;
  brand: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  goals: string[];
  description: string;
};

export default function ContactUsPage() {
  const [formType, setFormType] = useState<"it" | "dm">("it");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const [itData, setItData] = useState<ITData>({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
  });

  const [dmData, setDmData] = useState<DMData>({
    fullname: "",
    brand: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    goals: [],
    description: "",
  });

  const itServices = ["Web Development", "App Development", "Software Development"];
  const itBudgets = ["₹25k – ₹50k", "₹50k – ₹1L", "₹1L – ₹5L", "₹5L+"];

  const dmServices = ["SEO", "Social Media", "Branding"];
  const dmBudgets = ["₹20k – ₹50k", "₹50k – ₹1L", "₹1L+"];

  const businessGoals = ["Increase Leads", "Brand Awareness", "Grow Social Media"];

  const handleITChange = (e: any) => {
    setItData({ ...itData, [e.target.name]: e.target.value });
  };

  const handleDMChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setDmData((prev) => ({
        ...prev,
        goals: checked
          ? [...prev.goals, value]
          : prev.goals.filter((g) => g !== value),
      }));
    } else {
      setDmData({ ...dmData, [name]: value });
    }
  };

  const handleSubmit = async (data: any, type: "it" | "dm") => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://amplinova.pythonanywhere.com/api/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, form_type: type }),
        }
      );

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-12 pb-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">
            Contact <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Choose your service type and fill the related form.
          </p>
        </div>

        <div className="grid lg:grid-cols-[25%_75%] gap-8">

          {/* LEFT */}
          <div className="space-y-4 text-gray-800">
  {[
    {
      icon: FaPhone,
      title: "Call Us",
      detail: "+91 9976089089",
      desc: "Mon–Sat, 11AM – 8PM",
      color: "bg-blue-500",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      detail: "info@amplinova.com",
      desc: "We reply within 24 hours",
      color: "bg-orange-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      detail: "Hyderabad, Telangana",
      desc: "India",
      color: "bg-green-500",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      detail: "Mon – Fri",
      desc: "11:00 AM – 8:00 PM IST",
      color: "bg-purple-500",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start gap-4">

        {/* ICON BOX (FIXED) */}
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl text-white shadow ${item.color}`}
        >
          <item.icon className="text-lg" />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="font-bold text-lg">{item.title}</h3>
          <p className="font-medium">{item.detail}</p>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      </div>
    </div>
  ))}

  {/* SOCIAL */}
  <div>
    <h3 className="font-bold mb-3">Follow Us</h3>
    <div className="flex gap-3">
      {[FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram].map(
        (Icon, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center border rounded-lg bg-white shadow-sm hover:bg-gray-50"
          >
            <Icon className="text-gray-600" />
          </div>
        )
      )}
    </div>
  </div>
</div>

          
          {/* RIGHT */}
<div className="bg-white p-8 rounded-2xl border border-amber-100 shadow-sm">

  {/* TABS */}
  <div className="flex w-full mb-8 rounded-xl overflow-hidden border border-gray-200">
    <button
      type="button"
      onClick={() => setFormType("it")}
      className={`w-1/2 py-3 font-semibold transition ${
        formType === "it"
          ? "bg-amber-500 text-white"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      IT Services
    </button>

    <button
      type="button"
      onClick={() => setFormType("dm")}
      className={`w-1/2 py-3 font-semibold transition ${
        formType === "dm"
          ? "bg-amber-500 text-white"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      Digital Marketing
    </button>
  </div>

  {/* STATUS */}
  {status === "success" && (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
      Thank you! We'll get back to you within 24 hours.
    </div>
  )}

  {/* IT FORM */}
  {formType === "it" && (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(itData, "it");
      }}
      className="space-y-6"
    >
      <h3 className="text-2xl text-gray-800 font-bold mb-2">
        IT Development & Tech Solutions
      </h3>

      {/* NAME + COMPANY */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            name="fullname"
            onChange={handleITChange}
            placeholder="Enter your Full Name"
            className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            name="company"
            onChange={handleITChange}
            placeholder="Enter your Company Name"
            className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      {/* EMAIL + PHONE */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            name="email"
            onChange={handleITChange}
            placeholder="Enter your Email"
            className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            name="phone"
            onChange={handleITChange}
            placeholder="Enter your Phone Number"
            className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      {/* SERVICE + BUDGET */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Required *
          </label>
          <select
            name="service"
            onChange={handleITChange}
            className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            required
          >
            <option value="">Select Service</option>
            {itServices.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Budget *
          </label>
          <select
            name="budget"
            onChange={handleITChange}
            className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            required
          >
            <option value="">Select Budget</option>
            {itBudgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Description *
        </label>
        <textarea
          name="description"
          onChange={handleITChange}
          rows={4}
          placeholder="Enter details about your project requirements..."
          className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          required
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition"
      >
        {isSubmitting ? "Submitting..." : "Request Proposal"}
      </button>
    </form>
  )}

  {/* DM FORM */}
  {formType === "dm" && (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(dmData, "dm");
      }}
      className="space-y-6"
    >
      <h3 className="text-2xl text-gray-800 font-bold mb-2">
        Digital Marketing Solutions
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="fullname"
          onChange={handleDMChange}
          placeholder="Full Name"
          className="input text-gray-800"
        />
        <input
          name="brand"
          onChange={handleDMChange}
          placeholder="Business Name"
          className="input text-gray-800"
        />
      </div>

      {/* GOALS */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business Goals
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {businessGoals.map((g) => (
            <label
              key={g}
              className="flex text-gray-800 items-center gap-2 p-3 border rounded-lg hover:bg-orange-50"
            >
              <input type="checkbox" value={g} onChange={handleDMChange} />
              {g}
            </label>
          ))}
        </div>
      </div>

      <textarea
        name="description"
        onChange={handleDMChange}
        className="w-full text-gray-800 px-4  py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
        placeholder="Describe your needs"
      />

      <button className="w-full py-3 bg-amber-600 text-white rounded-xl">
        Submit
      </button>
    </form>
  )}
</div>


        </div>
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-10 rounded-3xl text-center shadow-lg max-w-7xl mx-auto">
  
  <h4 className="text-2xl font-bold mb-4">
    Emergency Support
  </h4>

  <p className="text-amber-100 mb-4">
    Need immediate assistance?
  </p>

  <p className="text-3xl font-extrabold">
    +91 9976089089
  </p>

  <p className="text-sm text-amber-100">
    24/7 Technical Support
  </p>

</div>
      </div>
    </section>
  );
}