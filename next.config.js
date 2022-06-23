/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-haiku']);
const nextConfig = withTM({
  images:{
    domains:["image.tmdb.org"],
  },
  reactStrictMode: true,
})

module.exports = nextConfig
