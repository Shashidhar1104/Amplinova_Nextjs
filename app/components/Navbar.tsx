"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaHome,
  FaRocket,
  FaCode,
  FaBriefcase,
  FaAddressCard,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const activeStyle = "text-orange-400";
  const defaultStyle = "hover:text-orange-400";

  const services = [
    { name: "Web Development", href: "/services/it/web-development" },
    { name: "Mobile App Development", href: "/services/it/mobile-app-development" },
    { name: "Cloud Solutions", href: "/services/it/cloud-solutions" },
    { name: "Cybersecurity", href: "/services/it/cybersecurity" },
    { name: "SEO Services", href: "/services/digital-marketing/seo" },
    { name: "Social Media Marketing", href: "/services/digital-marketing/social-media" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              info@amplinova.com
            </div>

            <div className="flex items-center gap-2">
              <FaPhone />
              +91 99760 89089
            </div>
          </div>

          <div className="hidden lg:block text-yellow-300 font-semibold">
            🚀 Book a free consultation today and transform your digital presence!
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-blue-200">Follow us:</span>

            <FaFacebookF className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Image src="/AmpliNova  Logo-A LOGO.png" alt="logo" width={35} height={35} />
            </div>

            <span className="text-xl font-bold text-orange-500">
              Amplinova
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 font-semibold">

            <Link
              href="/"
              className={isActive("/") ? activeStyle : defaultStyle}
            >
              <div className="flex items-center gap-2">
                <FaHome /> Home
              </div>
            </Link>

            <Link
              href="/it"
              className={isActive("/it") ? activeStyle : defaultStyle}
            >
              <div className="flex items-center gap-2">
                <FaCode /> IT Solutions
              </div>
            </Link>

            <Link
              href="/marketing"
              className={isActive("/marketing") ? activeStyle : defaultStyle}
            >
              <div className="flex items-center gap-2">
                <FaRocket /> Digital Marketing
              </div>
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
              className="flex items-center gap-2 hover:text-orange-400">
                <FaRocket /> Services
                <FaChevronDown />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full left-0 mt-3 bg-gray-900 w-64 rounded-xl shadow-xl border border-gray-700"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 hover:bg-orange-500 hover:text-white"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/careers"
              className={isActive("/careers") ? activeStyle : defaultStyle}
            >
              <div className="flex items-center gap-2">
                <FaBriefcase /> Careers
              </div>
            </Link>

            <Link
              href="/contact-us"
              className={isActive("/contact-us") ? activeStyle : defaultStyle}
            >
              <div className="flex items-center gap-2">
                <FaAddressCard /> Contact
              </div>
            </Link>

            {/* BUTTON */}
            <button
              onClick={() => router.push("/contact-us")}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-xl font-bold"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="lg:hidden bg-gray-900 px-6 py-4 space-y-4"
            >
              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/it" onClick={() => setMobileOpen(false)}>IT Solutions</Link>
              <Link href="/marketing" onClick={() => setMobileOpen(false)}>Marketing</Link>
              <Link href="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
              <Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}