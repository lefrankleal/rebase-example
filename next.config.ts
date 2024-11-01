import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  amp: {
    NextConfig: {},
    headers: [
      {
        name: "X-Frame-Options",
        value: "DENY",
      },
      {
        name: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        name: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
    ],
  }
};

export default nextConfig;
