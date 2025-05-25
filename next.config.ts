import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: ["randomuser.me", "flagcdn.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "styles/variables" as *; @use "styles/mixins" as mixins;`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            additionalData: `@use "styles/variables" as *;`,
            sassOptions: {
              includePaths: [path.join(__dirname, "styles")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "styles/global.scss"),
    });
    return config;
  },
};

export default nextConfig;
