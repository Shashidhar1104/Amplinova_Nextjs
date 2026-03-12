"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaStar,
  FaHeart,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      url: "https://www.facebook.com/people/Amplinova-Solutions/61583932147457/",
      color: "hover:bg-blue-600 hover:border-blue-600",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/amplinova_solutions",
      color: "hover:bg-pink-600 hover:border-pink-600",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      url: "https://wa.me/919976089089",
      color: "hover:bg-cyan-500 hover:border-cyan-500",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/109608290/",
      color: "hover:bg-blue-500 hover:border-blue-500",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "IT Solutions", url: "/it" },
    { name: "Digital Marketing", url: "/marketing" },
    { name: "Blogs", url: "/blog" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact-us" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookie Policy", url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-gray-800 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  
                  {/* Logo */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Image
                      src="/AmpliNova  Logo-A LOGO.png"
                      alt="Amplinova Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-3xl font-bold">
                    <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      Amplinova
                    </span>
                  </h3>
                </div>

                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6"></div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-6">
                  Transforming businesses through innovative digital marketing
                  strategies that drive growth and measurable results.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-2 rounded-lg">
                    <FaShieldAlt className="text-green-400" />
                    <span className="text-sm text-gray-300">SSL Secured</span>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-2 rounded-lg">
                    <FaStar className="text-amber-400" />
                    <span className="text-sm text-gray-300">Trusted Partner</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 hover:scale-110 transition ${social.color}`}
                  >
                    <social.icon className="text-gray-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Contact Us
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaEnvelope className="text-orange-500 mt-1" />
                <span>info@amplinova.com</span>
              </div>

              <div className="flex gap-3">
                <FaPhone className="text-orange-500 mt-1" />
                <span>+91 99760 89089</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span>
                  Uppal, Hyderabad, Telangana 500039
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm flex items-center gap-2">
            © 2024 <span className="text-orange-400">Amplinova</span>. All rights reserved.
            <FaHeart className="text-red-400 text-xs" />
          </p>

          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-gray-400 hover:text-orange-400 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;