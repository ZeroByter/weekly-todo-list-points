import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/weekly-todo-list-points" : "",
  assetPrefix: isProd ? "/weekly-todo-list-points/" : "",
  trailingSlash: true, // required for GitHub Pages
};

export default nextConfig;
