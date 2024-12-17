import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{ignoreDuringBuilds:true,},
  output: 'standalone',
  distDir: 'build',
};

export default nextConfig;
