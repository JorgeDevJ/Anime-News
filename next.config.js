/** @type {import('next').NextConfig} */
const {parsed} = require("dotenv").config();
const {PHASE_DEVELOPMENT_SERVER} = require("next/constants")
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config
  },
  images: {
    domains: ["image.tmdb.org", "lh3.googleusercontent.com", "pbs.twimg.com", "s.gravatar.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
