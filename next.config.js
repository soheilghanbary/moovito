/** @type {import("next").NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
  disable: true,
})

module.exports = withPWA({
  reactStrictMode: true,
  optimizeFonts: true,
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    MOVIE_API_KEY: process.env.MOVIE_API_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "uploadthing.com",
      "avatars.githubusercontent.com",
      "blog.logrocket.com",
      "image.tmdb.org",
    ],
  },
  experimental: {
    serverActions: true,
  },
})
