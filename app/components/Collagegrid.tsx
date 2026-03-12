"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  className?: string;
}

type FilterType = "allwork" | "websites" | "reels" | "seo" | "design";

const CollageGrid: React.FC<Props> = ({ className = "" }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("allwork");
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const IMAGES = {
    allwork: [
      "https://vyntradigital.com/wp-content/uploads/2025/08/Vibefit-.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/3.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/Untitled-1920-x-900-px-1536x720.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/Untitled-design-2-1536x720.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/2.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/4.png",
    ],

    websites: [
  "/01.png",
  "/02.png",
  "/03.png",
  "/04.png",
  "/05.png",
  "/06.png",
  "/07.png",
  "/08.png",
  "/09.png",
  "/10.png",
  "/11.png",
  "/12.png",
],
  };

  const otherCategories = {
  reels: [
    "/reel1.mp4",
    "/reel2.mp4",
    "/reel3.mp4",
    "/reel4.mp4",
    "/reel5.mp4",
  ],

  seo: [
    "/SEO1.png",
    "/SEO2.png",
    "/SEO3.png",
    "/SEO4.png",
    "/SEO5.png",
    "/SEO6.png",
    "/SEO7.png",
    "/SEO10.png",
  ],
    design: [
      "https://vyntradigital.com/wp-content/uploads/2025/08/Vibefit-.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/3.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/2.png",
      "https://vyntradigital.com/wp-content/uploads/2025/08/4.png",
    ],
  };

  const currentImages =
    activeFilter === "websites"
      ? IMAGES.websites
      : activeFilter === "allwork"
      ? IMAGES.allwork
      : otherCategories[activeFilter];

  return (
    <div className={`w-full ${className}`}>
      
      {/* FILTER BAR */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          { id: "allwork", label: "All Work", icon: "🔄" },
          { id: "websites", label: "Websites", icon: "🌐" },
          { id: "reels", label: "Reels", icon: "🎬" },
          { id: "seo", label: "SEO", icon: "📈" },
          { id: "design", label: "Design", icon: "🎨" },
        ].map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveFilter(cat.id as FilterType)}
            className={`px-6 py-2 flex items-center gap-2 rounded-full font-semibold text-sm ${
              activeFilter === cat.id
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {cat.icon} {cat.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* ALL WORK */}
          {activeFilter === "allwork" && (
            <div>
              <div className="flex gap-5 mb-5 justify-center">
                {currentImages.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden ${
                      i === 2 ? "w-[560px]" : "w-[280px]"
                    } h-[225px] relative`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>

              <div className="flex gap-5 justify-center">
                {currentImages.slice(3).map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden ${
                      i === 0 ? "w-[560px]" : "w-[280px]"
                    } h-[230px] relative`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WEBSITES */}
          {activeFilter === "websites" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentImages.map((img, index) => (
                <div key={index} className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                  <Image src={img} alt="" fill className="object-contain" />
                </div>
              ))}
            </div>
          )}

          {/* SEO */}
          {activeFilter === "seo" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentImages.map((img, index) => (
                <div key={index} className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* DESIGN */}
          {activeFilter === "design" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {currentImages.map((img, index) => (
                <div key={index} className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* REELS */}
          {activeFilter === "reels" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {currentImages.map((videoSrc, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden bg-black cursor-pointer"
                    onClick={() => setOpenVideo(videoSrc as string)}
                  >
                    <video
                      src={videoSrc as string}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {openVideo && (
                  <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpenVideo(null)}
                  >
                    <motion.div
                      className="w-[300px] h-[520px] bg-black rounded-[28px] overflow-hidden"
                      initial={{ scale: 0.7 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.7 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <video
                        src={openVideo}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CollageGrid;