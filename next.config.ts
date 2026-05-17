import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.arcaroatan.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "arcaroatan.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
