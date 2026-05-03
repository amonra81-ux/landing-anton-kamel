import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "landing-anton-kamel";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
