import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mero-turismo-website",
  assetPrefix: "/mero-turismo-website/",
  trailingSlash: true,
};

export default nextConfig;