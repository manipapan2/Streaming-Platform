import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('http://moviesapi.ir/images/**')],
  },
};

export default nextConfig;
