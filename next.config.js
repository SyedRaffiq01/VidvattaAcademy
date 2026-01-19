/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['maps.googleapis.com'],
    unoptimized: true, // Required for static export
  },
  // Uncomment below for static export (will disable API routes)
  // output: 'export',
  // trailingSlash: true,
};

module.exports = nextConfig;

