import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/maison-barber",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
