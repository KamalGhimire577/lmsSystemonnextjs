import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /* google image config */ /** jaha bat image aauxa tyo sab lai ya config garna parxa */
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
