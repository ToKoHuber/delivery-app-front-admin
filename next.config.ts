import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "media.self.com",
      "res.cloudinary.com",
      "d3advquvzl4ojd.cloudfront.net",
      "pic.toktok.mn",
    ], // Allow images from this domain
  },
};

export default nextConfig;
