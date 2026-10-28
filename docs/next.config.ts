import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  outputFileTracingRoot: path.resolve(__dirname, ".."),
  transpilePackages: ["mad-ui-components"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "mad-ui-components$": path.resolve(__dirname, "../src/index.ts"),
      "mad-ui-components": path.resolve(__dirname, "../src/individual"),
    };
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)

