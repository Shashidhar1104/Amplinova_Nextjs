import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["vyntradigital.com"],
     remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
