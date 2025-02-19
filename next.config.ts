import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.self.com", "res.cloudinary.com"], // Allow images from this domain
  },
};

export default nextConfig;
