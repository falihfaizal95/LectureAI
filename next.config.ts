import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 Build will ignore ESLint errors (warnings still show in CI/IDE)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
