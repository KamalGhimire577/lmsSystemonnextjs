import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /* google image config */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
