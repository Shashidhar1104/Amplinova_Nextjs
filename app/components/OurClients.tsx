"use client";

import Image from "next/image";

const clients: string[] = [
  "/abhya-hasta.png",
  "/viv-infra.png",
  "/ootd.png",
  "/househunter.png",
  "/daya-interiors.png",
  "/larana.png",
  "/ganesh-traders.png",
  "/spine-reset.png",
  "/organic-fresh.png",
  "/reative-studio.png",
  "/salford-co.png",
  "/stylebliss.png",
  "/aduri-infra.png",
  "/chiropractic.png",
  "/muktha-photography.png",
  "/arowwai.png",
];

export default function OurClients() {
  return (
    <section className="w-full bg-black pt-10 pb-20 px-4 md:px-14">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-400 to-orange-400 bg-clip-text text-transparent">
            Clients
          </span>
        </h2>

        <p className="text-gray-300 text-sm md:text-lg mt-3">
          Trusted by industry leaders and innovative companies worldwide
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="overflow-hidden w-full">
        <div className="flex gap-4 items-center scroll-track w-max">

          {/* First set */}
          {clients.map((logo, i) => (
            <div
              key={`logo1-${i}`}
              className="bg-white rounded-xl shadow-lg p-6
              w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44
              flex items-center justify-center
              hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={logo}
                alt="Client Logo"
                width={200}
                height={100}
                className="object-contain max-h-20 md:max-h-24 lg:max-h-28"
              />
            </div>
          ))}

          {/* Duplicate set for infinite scroll */}
          {clients.map((logo, i) => (
            <div
              key={`logo2-${i}`}
              className="bg-white rounded-xl shadow-lg p-6
              w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-72 lg:h-44
              flex items-center justify-center
              hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={logo}
                alt="Client Logo"
                width={200}
                height={100}
                className="object-contain max-h-20 md:max-h-24 lg:max-h-28"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

