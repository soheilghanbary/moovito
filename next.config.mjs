/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
