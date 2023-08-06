/** @type {import("next").NextConfig} */
const nextConfig = {
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
}
export default nextConfig
