import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: '/Portfolio-Fady', 
  assetPrefix: '/Portfolio-Fady/',
};

export default nextConfig;