import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.self.com"], // Allow images from this domain
  },
};

export default nextConfig;
