/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
  output: 'export',

  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig
