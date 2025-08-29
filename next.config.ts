import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_ID: "Ov23lihvan64tbEqTmzh",
    GITHUB_SECRET: "629a35acb465ac29c85e2410cdbf937ff04baa21",
  },

  images: {
    domains: ["avatars.githubusercontent.com"]
  },
};

export default nextConfig;
