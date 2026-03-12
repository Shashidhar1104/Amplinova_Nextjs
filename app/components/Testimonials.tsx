"use client";

import { useRef, useState, useEffect } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  location: string;
  content: string;
  rating: number;
  image: string;
}

export default function Testimonials() {

  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "V.S.V.Lakshmi Narayana",
      company: "Rajasree Townships",
      position: "Managing Director – Rajasree Townships",
      location: "Nagole, Hyderabad",
      content:
        "Amplinova completely transformed our online presence. Our property inquiries have gone up by nearly 60% after they redesigned our website and took over our digital marketing. Their automation tools have made lead follow-ups effortless and fast. Truly a partner who understands modern real estate marketing.",
      rating: 5,
      image: "LN",
    },
    {
      id: 2,
      name: "Dr. Kavya Menon",
      company: "MedNova Health Systems",
      position: "Managing Director - MedNova Health Systems",
      location: "Banjara Hills, Hyderabad",
      content:
        "Amplinova has been instrumental in strengthening our digital presence. Their team developed a secure, user-friendly website and implemented an efficient appointment automation system. Their SEO strategy increased our visibility among local and international patients. We appreciate their timely delivery and attention to detail.",
      rating: 5,
      image: "KM",
    },
    {
      id: 3,
      name: "Arjun Rao",
      company: "SpiceVilla Restaurant",
      position: "Owner - SpiceVilla Restaurant",
      location: "Vijayawada, Andhra Pradesh",
      content:
        "From branding to a complete reservation-friendly website, Amplinova helped modernize our digital presence beautifully. Their social media strategy boosted our footfall and online reviews. They understood our brand better than we did.",
      rating: 4,
      image: "AR",
    },
    {
      id: 4,
      name: "Vishal Deshpande",
      company: "LearnMax Academy",
      position: "CEO - LearnMax Academy",
      location: "HITEC City, Hyderabad",
      content:
        "Amplinova provided us with a comprehensive digital transformation solution that included LMS development, a modern website, and performance-driven marketing.",
      rating: 5,
      image: "VD",
    },
    {
      id: 5,
      name: "Rohan S",
      company: "TravelOrbit Pvt. Ltd.",
      position: "Director - TravelOrbit Pvt. Ltd.",
      location: "Madhapur, Hyderabad",
      content:
        "Amplinova developed a fully automated booking platform for our travel agency, which significantly enhanced our customer experience and operational efficiency.",
      rating: 5,
      image: "RS",
    },
    {
      id: 6,
      name: "Sudarshan Rao",
      company: "Apex Metal Industries",
      position: "Operations Head - Apex Metal Industries",
      location: "Secunderabad, Hyderabad",
      content:
        "Amplinova helped modernize our manufacturing operations by implementing a customized ERP module and automation workflows.",
      rating: 4,
      image: "SR",
    },
    {
      id: 7,
      name: "Manish Verma",
      company: "SpiceCraft Foods Pvt. Ltd.",
      position: "Founder - SpiceCraft Foods Pvt. Ltd.",
      location: "Khammam, Telangana",
      content:
        "Amplinova helped us rebuild our digital identity from the ground up with a premium modern brand.",
      rating: 5,
      image: "MV",
    },
    {
      id: 8,
      name: "Rohit Khanna",
      company: "NutriGood Snacks",
      position: "Founder - NutriGood Snacks",
      location: "Mahabubnagar, Telangana",
      content:
        "Amplinova redesigned everything from colors to typography to messaging. Our product finally has the identity it deserves.",
      rating: 5,
      image: "RK",
    },
  ];

  return (
    <section
      id="testimonials"
      className="pt-8 pb-20 bg-black text-white relative overflow-hidden"
      ref={ref}
    >

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/15 to-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Voices of{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-400 to-orange-400 bg-clip-text text-transparent">
              Success
            </span>
          </h2>

          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Real results from leading businesses who trusted us with their digital growth journey.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "60px" }}
        >

          {testimonials.map((testimonial) => (

            <SwiperSlide key={testimonial.id}>

              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-amber-400/20 transition-all duration-500">

                <p
                  className={`italic text-gray-200 text-lg leading-relaxed ${
                    expanded === testimonial.id ? "" : "line-clamp-4"
                  }`}
                >
                  "{testimonial.content}"
                </p>

                <button
                  onClick={() =>
                    setExpanded(expanded === testimonial.id ? null : testimonial.id)
                  }
                  className="text-amber-400 text-sm mt-3 hover:underline"
                >
                  {expanded === testimonial.id ? "See Less" : "See More"}
                </button>

                <div className="flex items-center gap-4 pt-6 mt-4 border-t border-white/10">

                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {testimonial.image}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg">
                      {testimonial.name}
                    </h4>

                    <p className="text-amber-300 text-sm font-semibold">
                      {testimonial.position}
                    </p>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>

                </div>

                <div className="flex gap-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}