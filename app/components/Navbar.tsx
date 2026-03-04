"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaCode,
  FaRocket,
  FaBriefcase,
  FaAddressCard,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const activeClass = "text-orange-400";
  const normalClass = "hover:text-orange-400";

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Amplinova Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-orange-500">
            Amplinova
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-semibold">

          <Link
            href="/"
            className={`${isActive("/") ? activeClass : normalClass}`}
          >
            <div className="flex items-center gap-2">
              <FaHome />
              Home
            </div>
          </Link>

          <Link
            href="/it"
            className={`${isActive("/it") ? activeClass : normalClass}`}
          >
            <div className="flex items-center gap-2">
              <FaCode />
              IT Solutions
            </div>
          </Link>

          <Link
            href="/marketing"
            className={`${isActive("/marketing") ? activeClass : normalClass}`}
          >
            <div className="flex items-center gap-2">
              <FaRocket />
              Marketing
            </div>
          </Link>

          <Link
            href="/careers"
            className={`${isActive("/careers") ? activeClass : normalClass}`}
          >
            <div className="flex items-center gap-2">
              <FaBriefcase />
              Careers
            </div>
          </Link>

          <Link
            href="/contact-us"
            className={`${isActive("/contact-us") ? activeClass : normalClass}`}
          >
            <div className="flex items-center gap-2">
              <FaAddressCard />
              Contact
            </div>
          </Link>

          <button
            onClick={() => router.push("/contact-us")}
            className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 px-6 py-4 space-y-4"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/it" onClick={() => setIsMobileMenuOpen(false)}>IT</Link>
            <Link href="/marketing" onClick={() => setIsMobileMenuOpen(false)}>Marketing</Link>
            <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}