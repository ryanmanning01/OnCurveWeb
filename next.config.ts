import type { NextConfig } from "next";
import { ONCURVE_BASE_PATH } from "./src/config/site";

const nextConfig: NextConfig = {
  output: "export",
  basePath: ONCURVE_BASE_PATH,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
