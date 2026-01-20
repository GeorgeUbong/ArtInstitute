import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.artic.edu",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
