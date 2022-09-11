/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  optimizeFonts: true,
  swcMinify: true,
}

module.exports = nextConfig
