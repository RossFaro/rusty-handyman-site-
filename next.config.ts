import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.thumbtackstatic.com",
      },
    ],
  },
};

export default nextConfig;
