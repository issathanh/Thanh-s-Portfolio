import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/Thanh-s-Portfolio",
    assetPrefix: "/Thanh-s-Portfolio",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
