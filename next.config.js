/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bobofishbo.github.io'], // Add your GitHub Pages domain
    unoptimized: true, // Disable image optimization if necessary
  },
};

module.exports = nextConfig;
