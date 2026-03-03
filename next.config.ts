import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly use Turbopack (default in Next.js 16)
  // This prevents conflicts with webpack configuration
};

export default nextConfig;
