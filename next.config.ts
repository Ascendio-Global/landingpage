import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/landingpage',
  output: "export",
  // assetPrefix: './',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
